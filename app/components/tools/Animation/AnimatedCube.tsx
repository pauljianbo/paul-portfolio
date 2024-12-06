'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '@/app/context/ThemeContext';

function CubeMesh() {
  // Reference to the 3D mesh object for manipulation
  const meshRef = useRef<THREE.Mesh>(null);
  // Get current theme from context
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Define shader properties - recreated when isDarkMode changes
  const gradientShader = useMemo(
    () => ({
      // Uniform variables that can be accessed in shaders
      uniforms: {
        isDark: { value: isDarkMode ? 1.0 : 0.0 }, // Control dark/light mode in shader
      },
      // Vertex shader: Handles vertex positions and passes UV coordinates to fragment shader
      vertexShader: `
        varying vec2 vUv;  // UV coordinates that will be passed to fragment shader
        void main() {
          vUv = uv;  // Pass UV coordinates
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  // Calculate final vertex position
        }
      `,
      // Fragment shader: Handles the color of each pixel
      fragmentShader: `
        varying vec2 vUv;  // Received from vertex shader
        uniform float isDark;  // Received from uniforms
        
        void main() {
          // Define color pairs for both themes
          vec3 lightStart = vec3(0.055, 0.647, 0.914);  // Sky blue
          vec3 lightEnd = vec3(0.078, 0.722, 0.651);    // Teal
          
          vec3 darkStart = vec3(0.655, 0.545, 0.980);   // Purple
          vec3 darkEnd = vec3(0.910, 0.475, 0.976);     // Pink

          // Choose color pair based on theme
          vec3 startColor = mix(lightStart, darkStart, isDark);
          vec3 endColor = mix(lightEnd, darkEnd, isDark);
          
          // Create gradient effect based on x coordinate
          vec3 color = mix(startColor, endColor, vUv.x);
          gl_FragColor = vec4(color, 1.0);  // Set final pixel color
        }
      `,
    }),
    [] // Recreate shader when theme changes
  );

  // Update shader uniforms when theme changes
  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.isDark.value = isDarkMode ? 1.0 : 0.0;
        material.needsUpdate = true;
      }
    }
  }, [theme, isDarkMode]);

  // Animation loop - runs on every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate cube continuously
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
      // Add floating motion using sine wave
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} /> {/* Create cube with 3x3x3 dimensions */}
      <shaderMaterial attach="material" {...gradientShader} transparent={true} />
    </mesh>
  );
}

export default function AnimatedCube() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }} className="h-full w-full">
        <ambientLight intensity={0.5} /> {/* Add overall lighting */}
        <pointLight position={[10, 10, 10]} /> {/* Add directional lighting */}
        <CubeMesh />
        <OrbitControls enableZoom={false} /> {/* Add mouse control for rotation */}
      </Canvas>
    </div>
  );
}
