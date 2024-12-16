import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/app/context/ThemeContext';

// Animation constants
const ANIMATION_SPEED = 1;      // Controls how fast the model moves up and down
const FLOAT_HEIGHT = 0.4;      // Controls the maximum height of the floating animation

const Model = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Lazy load models
  const modelPath = isDarkMode ? '/darkModel.glb' : '/lightModel.glb';
  const { scene } = useGLTF(modelPath, true); // Add true for preload=false
  
  // Create a reference to manipulate the 3D model in the animation loop
  const modelRef = useRef<THREE.Group>();
  
  // Animation loop - runs on every frame
  useFrame((state) => {
    if (modelRef.current) {
      // Create floating animation using sine wave
      // Math.sin creates smooth up/down motion
      // state.clock.elapsedTime is the total time passed
      // ANIMATION_SPEED affects frequency of up/down motion
      // FLOAT_HEIGHT affects how high the model floats
      modelRef.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * ANIMATION_SPEED)) * FLOAT_HEIGHT;
    }
  });

  useEffect(() => {
    return () => {
      // Cleanup when component unmounts
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, [scene]);

  // Return the 3D model with reference and scaling
  return <primitive 
    ref={modelRef}           // Attach our reference for animations
    object={scene}          // The actual 3D model to render
    scale={1.8}              // Size multiplier for the model
  />;
}

const AnimatedCharacter = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.5}
            adjustCamera={false}
            preset="rembrandt"
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

// Preload models when needed
useGLTF.preload('/darkModel.glb');
useGLTF.preload('/lightModel.glb');

export default AnimatedCharacter;
