import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/app/context/ThemeContext';

// Animation constants
const ANIMATION_SPEED = 1;      // Controls how fast the model moves up and down
const FLOAT_HEIGHT = 0.4;      // Controls the maximum height of the floating animation

function Model() {
  // Create a reference to manipulate the 3D model in the animation loop
  const modelRef = useRef<THREE.Group>();
  // Get current theme from context
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Load the appropriate 3D model based on theme
  // useGLTF loads and parses GLB/GLTF format 3D models
  const { scene } = useGLTF(`${isDarkMode ? '/darkModel.glb' : '/lightModel.glb'}`);
  
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

  // Return the 3D model with reference and scaling
  return <primitive 
    ref={modelRef}           // Attach our reference for animations
    object={scene}          // The actual 3D model to render
    scale={1.8}              // Size multiplier for the model
  />;
}

const AnimatedCharacter = () => {
  return (
    // Container div that takes full width and height of parent
    <div style={{ width: '100%', height: '100%' }}>
      {/* Canvas is where Three.js renders everything */}
      <Canvas 
        camera={{ 
          position: [0, 0, 5],  // Initial camera position (x, y, z)
          fov: 45               // Field of view in degrees
        }}
      >
        {/* Suspense handles loading state */}
        <Suspense fallback={null}>
          {/* Stage provides preset lighting and environment */}
          <Stage 
            environment="city"    // Type of lighting environment
            intensity={0.5}       // Strength of the lighting
            adjustCamera={false}  // Prevents auto-adjustment of camera
            preset="rembrandt"    // Lighting preset style
          >
            <Model />            {/* Our 3D model component */}
          </Stage>
        </Suspense>
        
        {/* OrbitControls enable user interaction with the scene */}
        <OrbitControls
          enableZoom={false}     // Disables zooming in/out
          minPolarAngle={Math.PI / 2}  // Locks vertical rotation at horizontal level
          maxPolarAngle={Math.PI / 2}  // Locks vertical rotation at horizontal level
          enablePan={false}      // Disables camera panning
        />
      </Canvas>
    </div>
  );
};

export default AnimatedCharacter;
