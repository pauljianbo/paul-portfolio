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



interface ThemedAnimatedBackgroundProps {
  colorTheme: keyof typeof colorThemes;
}

const colorThemes = {
  skills: {
    name: 'Skills',
    light: {
      primary: 'from-blue-50 via-sky-50 to-cyan-50',
      secondary: 'from-blue-200/30 via-transparent to-cyan-200/30',
      accent1: 'from-blue-300/20 to-sky-300/20',
      accent2: 'from-cyan-300/20 to-blue-300/20',
      particles: ['#3b82f6', '#0ea5e9', '#06b6d4', '#0891b2', '#059669'],
    },
    dark: {
      primary: 'from-slate-900 via-blue-900/50 to-slate-900',
      secondary: 'from-blue-600/20 via-transparent to-cyan-600/20',
      accent1: 'from-blue-500/10 to-sky-500/10',
      accent2: 'from-cyan-500/10 to-blue-500/10',
      particles: ['#60a5fa', '#38bdf8', '#22d3ee', '#06b6d4', '#10b981'],
    },
  },
  projects: {
    name: 'Projects',
    light: {
      primary: 'from-slate-50 via-blue-50 to-purple-50',
      secondary: 'from-blue-200/30 via-transparent to-purple-200/30',
      accent1: 'from-blue-300/20 to-purple-300/20',
      accent2: 'from-purple-300/20 to-blue-300/20',
      particles: ['#3b82f6', '#8b5cf6', '#a855f7', '#0891b2', '#6366f1'],
    },
    dark: {
      primary: 'from-slate-900 via-blue-900/40 to-purple-900/40',
      secondary: 'from-blue-600/20 via-transparent to-purple-600/20',
      accent1: 'from-blue-500/10 to-purple-500/10',
      accent2: 'from-purple-500/10 to-blue-500/10',
      particles: ['#60a5fa', '#a78bfa', '#c084fc', '#06b6d4', '#818cf8'],
    },
  },
  experience: {
    name: 'Experience',
    light: {
      primary: 'from-slate-50 via-blue-50/50 to-gray-50',
      secondary: 'from-slate-200/30 via-transparent to-blue-200/30',
      accent1: 'from-slate-300/20 to-blue-300/20',
      accent2: 'from-blue-300/20 to-slate-300/20',
      particles: ['#475569', '#3b82f6', '#64748b', '#0891b2', '#374151'],
    },
    dark: {
      primary: 'from-slate-900 via-slate-800 to-blue-900/30',
      secondary: 'from-slate-600/20 via-transparent to-blue-600/20',
      accent1: 'from-slate-500/10 to-blue-500/10',
      accent2: 'from-blue-500/10 to-slate-500/10',
      particles: ['#94a3b8', '#60a5fa', '#e2e8f0', '#06b6d4', '#f1f5f9'],
    },
  },
  contact: {
    name: 'Contact',
    light: {
      primary: 'from-green-50 via-blue-50 to-cyan-50',
      secondary: 'from-green-200/30 via-transparent to-blue-200/30',
      accent1: 'from-green-300/20 to-blue-300/20',
      accent2: 'from-blue-300/20 to-cyan-300/20',
      particles: ['#10b981', '#3b82f6', '#06b6d4', '#059669', '#0ea5e9'],
    },
    dark: {
      primary: 'from-gray-900 via-green-900/30 to-blue-900/30',
      secondary: 'from-green-600/20 via-transparent to-blue-600/20',
      accent1: 'from-green-500/10 to-blue-500/10',
      accent2: 'from-blue-500/10 to-cyan-500/10',
      particles: ['#34d399', '#60a5fa', '#22d3ee', '#10b981', '#38bdf8'],
    },
  },
} as const;

/**
 * ThemedAnimatedBackground Component
 *
 * A configurable animated background that adapts to different section themes
 * while maintaining consistent animation behavior and smooth theme transitions.
 */
const ThemedAnimatedBackground: React.FC<ThemedAnimatedBackgroundProps> = ({ colorTheme }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const currentTheme = colorThemes[colorTheme];
  const colors = theme === 'light' ? currentTheme.light : currentTheme.dark;

  // Generate themed particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];

      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 2,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: theme === 'light' ? Math.random() * 0.3 + 0.2 : Math.random() * 0.4 + 0.3,
          color: colors.particles[Math.floor(Math.random() * colors.particles.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [theme, colorTheme, colors.particles]);

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
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary}`}></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large primary floating circle */}
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

        {/* Secondary floating circle */}
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

        {/* Rotating square */}
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

        {/* Small floating orb */}
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

      {/* Particle System */}
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

      {/* Interactive Mouse Glow */}
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

      {/* Final Overlay */}
      <div
        className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.05)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]'
        }`}
      ></div>
    </div>
  );
};

export default ThemedAnimatedBackground;
