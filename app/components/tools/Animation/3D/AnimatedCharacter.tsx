import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/app/context/ThemeContext';

// At the top of your file, define constants for easier adjustment
const ANIMATION_SPEED = 2;      // Controls how fast it moves
const FLOAT_HEIGHT = 0.3;      // Controls how high it jumps

function Model() {
  // Reference to the 3D model group for animations and transformations
  const modelRef = useRef<THREE.Group>();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Load the 3D model (GLB format) based on theme
  // IMPROVEMENT: Consider preloading both models to prevent loading delay on theme switch
  const { scene } = useGLTF(`${isDarkMode ? '/darkModel.glb' : '/lightModel.glb'}`);
  
  // Animation loop using useFrame hook
  // This runs on every frame render (typically 60fps)
  useFrame((state) => {
    if (modelRef.current) {
      // Using Math.abs() ensures the value stays positive
      // This makes the model only move up from its original position
      modelRef.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * ANIMATION_SPEED)) * FLOAT_HEIGHT;
    }
  });

  // Render the 3D model
  // scale={0.4} reduces the model size to 40% of original
  return <primitive ref={modelRef} object={scene} scale={2} />;
}

const AnimatedCharacter = () => {
  return (
    // Container div with responsive dimensions
    <div style={{ width: '100%', height: '100%' }}>
      {/* Canvas is the main Three.js rendering container */}
      {/* Camera position [x, y, z] and field of view (fov) set the initial view */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Stage component provides preset lighting and environment */}
          {/* IMPROVEMENT: Consider adding custom loading component as fallback */}
          <Stage 
            environment="city" 
            intensity={0.5} 
            adjustCamera={false} 
            preset="rembrandt"
          >
            <Model />
          </Stage>
        </Suspense>
        {/* OrbitControls allow user interaction with the 3D scene */}
        {/* Current setup only allows horizontal rotation at fixed height */}
        {/* <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
          enablePan={false}
        /> */}
      </Canvas>
    </div>
  );
};

export default AnimatedCharacter;
