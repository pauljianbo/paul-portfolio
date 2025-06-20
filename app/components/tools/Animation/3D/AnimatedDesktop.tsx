import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Environment } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/app/context/ThemeContext';

// Animation constants for desktop
const ROTATION_SPEED = 0.1; // Reduced speed for pendulum motion
const FLOAT_SPEED = 1.2; // Speed of floating motion
const FLOAT_HEIGHT = 0.2; // Height of floating animation
const BASE_SCALE = 0.7; // Base scale of the desktop

const DesktopModel = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Load the desktop 3D model
  const { scene } = useGLTF('/desktop-3D-assets/scene.gltf', true);

  // Create references for animation
  const desktopRef = useRef<THREE.Group>(null);

  // Animation loop for desktop effects
  useFrame((state) => {
    if (desktopRef.current) {
      // Pendulum motion: swings between -45° and +45° degrees
      desktopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * ROTATION_SPEED) * (Math.PI / 4);

      // Subtle floating motion
      desktopRef.current.position.y = Math.sin(state.clock.elapsedTime * FLOAT_SPEED) * FLOAT_HEIGHT;

      // Optional: Add subtle scaling pulse for modern effect
      const scaleMultiplier = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      desktopRef.current.scale.setScalar(BASE_SCALE * scaleMultiplier);
    }
  });

  // Cleanup function
  useEffect(() => {
    return () => {
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [scene]);

  return (
    <primitive
      ref={desktopRef}
      object={scene}
      scale={BASE_SCALE}
      position={[0, 0, 0]} // Position the desktop appropriately
    />
  );
};

const AnimatedDesktop = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [3, 2, 5], fov: 100 }} performance={{ min: 0.5 }} dpr={[1, 2]} shadows>
        <Suspense fallback={null}>
          {/* Enhanced lighting setup for desktop */}
          <Environment preset={isDarkMode ? 'night' : 'studio'} />
          <ambientLight intensity={isDarkMode ? 0.3 : 0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={isDarkMode ? 0.8 : 1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />

          {/* Add some colored lights for RGB effect */}
          <pointLight position={[2, 1, 2]} intensity={0.5} color="#3b82f6" />
          <pointLight position={[-2, 1, 2]} intensity={0.5} color="#ef4444" />

          <Stage adjustCamera={false} intensity={0.3} shadows="contact">
            <DesktopModel />
          </Stage>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  );
};

// Preload the desktop model
useGLTF.preload('/desktop-3D-assets/scene.gltf');

export default AnimatedDesktop;
