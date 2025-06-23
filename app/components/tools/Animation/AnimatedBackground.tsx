'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

/**
 * AnimatedBackground Component
 *
 * This component creates a sophisticated multi-layered animated background with:
 * 1. Theme-aware gradient backgrounds that shift colors
 * 2. Floating geometric shapes with complex motion patterns
 * 3. Dynamic particle system with continuous movement
 * 4. Interactive mouse-following glow effect
 * 5. Seamless theme transitions
 */
const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  // EFFECT 1: DYNAMIC PARTICLE SYSTEM
  // Generates 30 animated particles that move continuously across the screen
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];

      // Theme-aware color palettes for visual harmony
      // Light theme: Darker colors for contrast against light background
      // Dark theme: Brighter colors that glow against dark background
      const colors =
        theme === 'light'
          ? ['#1d4ed8', '#7c3aed', '#db2777', '#0891b2', '#059669'] // Deeper blues, purples, pinks
          : ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981']; // Vibrant colors with glow

      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth, // Random starting position
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2, // Particle size: 2-6px
          speedX: (Math.random() - 0.5) * 0.5, // Horizontal movement: -0.25 to +0.25px/frame
          speedY: (Math.random() - 0.5) * 0.5, // Vertical movement: -0.25 to +0.25px/frame
          opacity: theme === 'light' ? Math.random() * 0.4 + 0.2 : Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    // Regenerate particles when theme changes for smooth color transitions
    generateParticles();
  }, [theme]);

  // EFFECT 2: MOUSE INTERACTION TRACKING
  // Captures mouse position for the interactive glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // EFFECT 3: PARTICLE ANIMATION LOOP
  // Updates particle positions at 20 FPS (every 50ms) for smooth movement
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          // Calculate new positions based on velocity
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Screen wrapping: particles reappear on opposite side when they exit
          // This creates an infinite, seamless particle field
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    // 20 FPS animation loop - smooth enough for particles, efficient for performance
    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* LAYER 1: PRIMARY ANIMATED GRADIENT BACKGROUND */}
      {/* 
        Creates the main background color that shifts subtly over time
        Uses CSS animation classes (animate-gradient-shift) for smooth color transitions
        Different gradients for light/dark themes maintain visual harmony
      */}
      <div
        className={`animate-gradient-shift absolute inset-0 ${
          theme === 'light'
            ? 'bg-gradient-to-br from-blue-100 via-blue-50 to-pink-50'
            : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-blue-950 dark:via-purple-950/50 dark:to-black'
        }`}
      ></div>

      {/* LAYER 2: SECONDARY PULSING GRADIENT OVERLAY */}
      {/* 
        Adds depth with a second gradient layer that pulses at different intervals
        Creates subtle color variations that change the overall mood
        Lower opacity ensures it blends naturally with the primary background
      */}
      {/* <div
        className={`animate-gradient-pulse absolute inset-0 ${
          theme === 'light'
            ? 'bg-gradient-to-tr from-blue-200/30 via-transparent to-pink-200/30'
            : 'bg-gradient-to-tr from-blue-600/20 via-transparent to-pink-600/20'
        }`}
      ></div> */}

      {/* LAYER 3: FLOATING GEOMETRIC SHAPES */}
      {/* 
        Large blurred shapes that move in complex patterns
        Each shape has different timing (15s, 20s, 25s) to avoid synchronization
        This creates natural, organic movement that never repeats exactly
      */}
      <div className="absolute inset-0">
        {/* Large primary floating circle - 20 second loop */}
        <motion.div
          className={`absolute h-96 w-96 rounded-full blur-3xl ${
            theme === 'light'
              ? 'bg-gradient-to-r from-blue-300/20 to-purple-300/20'
              : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
          }`}
          animate={{
            x: [0, 100, 0], // Horizontal figure-8 movement
            y: [0, 50, 0], // Vertical bobbing motion
            scale: [1, 1.1, 1], // Gentle size pulsing
          }}
          transition={{
            duration: 20, // 20-second complete cycle
            repeat: Infinity, // Continuous loop
            ease: 'easeInOut', // Smooth acceleration/deceleration
          }}
          style={{ top: '10%', left: '10%' }}
        />

        {/* Secondary floating circle - 25 second loop with 5 second delay */}
        <motion.div
          className={`absolute h-80 w-80 rounded-full blur-3xl ${
            theme === 'light'
              ? 'bg-gradient-to-r from-pink-300/20 to-blue-300/20'
              : 'bg-gradient-to-r from-pink-500/10 to-blue-500/10'
          }`}
          animate={{
            x: [0, -80, 0], // Opposite horizontal movement
            y: [0, 80, 0], // Larger vertical movement
            scale: [1, 0.9, 1], // Inverse scaling for variety
          }}
          transition={{
            duration: 25, // Different timing prevents synchronization
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5, // 5-second offset creates complex interactions
          }}
          style={{ top: '50%', right: '10%' }}
        />

        {/* Rotating square shape - 15 second continuous rotation */}
        <motion.div
          className={`absolute h-32 w-32 rotate-45 transform blur-2xl ${
            theme === 'light'
              ? 'bg-gradient-to-r from-cyan-300/30 to-blue-300/30'
              : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20'
          }`}
          animate={{
            rotate: [45, 405], // Full 360° rotation plus initial 45°
            scale: [1, 1.2, 1], // Size pulsing while rotating
          }}
          transition={{
            duration: 15, // Faster rotation for dynamic feel
            repeat: Infinity,
            ease: 'linear', // Constant rotation speed
          }}
          style={{ top: '20%', right: '20%' }}
        />

        {/* Small floating orb - 12 second gentle movement */}
        <motion.div
          className={`absolute h-24 w-24 rounded-full blur-xl ${
            theme === 'light'
              ? 'bg-gradient-to-r from-purple-300/30 to-pink-300/30'
              : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
          }`}
          animate={{
            y: [0, -30, 0], // Gentle floating motion
            x: [0, 20, 0], // Slight horizontal drift
          }}
          transition={{
            duration: 12, // Fastest cycle for active feel
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3, // Another offset for complexity
          }}
          style={{ bottom: '20%', left: '15%' }}
        />
      </div>

      {/* LAYER 4: DYNAMIC PARTICLE SYSTEM */}
      {/* 
        Individual particles that move independently across the screen
        Each particle has its own pulsing animation with random timing
        Creates a "living" background effect with constant subtle movement
      */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              filter: 'blur(1px)', // Soft glow effect
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`, // Color-matched glow
            }}
            animate={{
              scale: [1, 1.5, 1], // Each particle pulses independently
            }}
            transition={{
              duration: Math.random() * 3 + 2, // Random duration: 2-5 seconds
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2, // Random start delay prevents synchronization
            }}
          />
        ))}
      </div>

      {/* LAYER 5: INTERACTIVE MOUSE-FOLLOWING GLOW */}
      {/* 
        Large blurred circle that smoothly follows the mouse cursor
        Uses spring physics for natural, responsive movement
        Adds interactivity and draws attention to mouse position
      */}
      <motion.div
        className={`pointer-events-none absolute h-96 w-96 rounded-full blur-3xl ${
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-300/10 to-purple-300/10'
            : 'bg-gradient-to-r from-blue-400/5 to-purple-400/5'
        }`}
        animate={{
          x: mousePosition.x - 192, // Center the 384px (w-96) circle on cursor
          y: mousePosition.y - 192,
        }}
        transition={{
          type: 'spring', // Spring physics for natural movement
          damping: 50, // Resistance - prevents overshooting
          stiffness: 200, // Spring strength - responsiveness
          mass: 0.5, // Virtual mass - affects inertia
        }}
      />

      {/* LAYER 6: FINAL RADIAL GRADIENT OVERLAY */}
      {/* 
        Subtle vignette effect that adds depth and focus
        Different for each theme to maintain appropriate contrast
        Helps blend all layers together seamlessly
      */}
      <div
        className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]'
        }`}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
