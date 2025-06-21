'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { colorThemes, type SectionTheme } from '../../../constants/colorThemes';

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
 * GlobalAnimatedBackground Component - Desktop/Tablet Optimized
 *
 * A performance-intensive global background with full animations, particles, and interactions.
 * This component is automatically served to desktop and tablet devices (≥768px) only.
 *
 * PERFORMANCE FEATURES:
 * - 30 animated particles with continuous movement
 * - Real-time mouse tracking with interactive glow effects
 * - Multiple Framer Motion animations using GPU acceleration
 * - Scroll-based section detection and theme switching
 * - Floating geometric shapes with complex transformations
 *
 * MOBILE OPTIMIZATION:
 * This component is NOT rendered on mobile devices (< 768px) to prevent:
 * - CPU overload from particle calculations
 * - Device heating from GPU-intensive animations
 * - Battery drain from continuous intervals
 * - UI lag from background processing
 *
 * Instead, mobile devices receive StaticBackground through BackgroundRenderer.
 *
 * THEME SYSTEM:
 * Uses shared colorThemes from constants/colorThemes.ts to ensure visual
 * consistency with the mobile StaticBackground component.
 */
const GlobalAnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState<SectionTheme>('home');
  const { theme } = useTheme();

  // Detect current section based on scroll position
  useEffect(() => {
    const detectCurrentSection = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which section is currently most visible
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;

          // Check if current scroll position is within this section
          if (
            scrollPosition >= elementTop - windowHeight * 0.3 &&
            scrollPosition < elementBottom - windowHeight * 0.3
          ) {
            setCurrentSection(sectionId as SectionTheme);
            break;
          }
        }
      }
    };

    // Initial detection
    detectCurrentSection();

    // Listen for scroll events with throttling for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectCurrentSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = colorThemes[currentSection];
  const colors = theme === 'light' ? currentTheme.light : currentTheme.dark;

  // Generate particles based on current theme
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];

      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: theme === 'light' ? Math.random() * 0.4 + 0.2 : Math.random() * 0.5 + 0.3,
          color: colors.particles[Math.floor(Math.random() * colors.particles.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [theme, currentSection, colors.particles]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

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

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary animated background with smooth theme transitions */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.primary}`}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        key={`${currentSection}-${theme}`}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute h-96 w-96 rounded-full bg-gradient-to-r blur-3xl ${colors.accent1}`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />

        <motion.div
          className={`absolute h-80 w-80 rounded-full bg-gradient-to-r blur-3xl ${colors.accent2}`}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
          style={{ top: '50%', right: '10%' }}
        />

        <motion.div
          className={`absolute h-32 w-32 rotate-45 transform bg-gradient-to-r blur-2xl ${colors.accent1}`}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ top: '20%', right: '20%' }}
        />

        <motion.div
          className={`absolute h-24 w-24 rounded-full bg-gradient-to-r blur-xl ${colors.accent2}`}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          style={{ bottom: '20%', left: '15%' }}
        />
      </div>

      {/* Dynamic particle system */}
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
              filter: 'blur(1px)',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Interactive mouse glow */}
      <motion.div
        className={`pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-r blur-3xl ${colors.accent1} opacity-30`}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Final vignette overlay */}
      <div
        className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]'
        }`}
      />
    </div>
  );
};

export default GlobalAnimatedBackground;
