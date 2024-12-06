'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '@/app/context/ThemeContext';

function CubeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const gradientShader = useMemo(
    () => ({
      uniforms: {
        isDark: { value: isDarkMode ? 1.0 : 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float isDark;
        
        void main() {
          // Light mode: from-light-primary to-light-secondary
          vec3 lightStart = vec3(0.055, 0.647, 0.914);  // #0ea5e9 (light-primary)
          vec3 lightEnd = vec3(0.078, 0.722, 0.651);    // #14b8a6 (light-secondary)
          
          // Dark mode: from-dark-primary to-dark-secondary
          vec3 darkStart = vec3(0.655, 0.545, 0.980);   // #a78bfa (dark-primary)
          vec3 darkEnd = vec3(0.910, 0.475, 0.976);     // #e879f9 (dark-secondary)

          vec3 startColor = mix(lightStart, darkStart, isDark);
          vec3 endColor = mix(lightEnd, darkEnd, isDark);
          
          vec3 color = mix(startColor, endColor, vUv.x);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    }),
    []
  );

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.isDark.value = isDarkMode ? 1.0 : 0.0;
        material.needsUpdate = true;
      }
    }
  }, [theme, isDarkMode]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <shaderMaterial attach="material" {...gradientShader} transparent={true} />
    </mesh>
  );
}

export default function AnimatedCube() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }} className="h-full w-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CubeMesh />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}