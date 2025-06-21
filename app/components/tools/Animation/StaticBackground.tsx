'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { colorThemes, type SectionTheme } from '../../../constants/colorThemes';

/**
 * StaticBackground Component - Mobile Performance Optimized
 *
 * PURPOSE:
 * A lightweight background component specifically designed for mobile devices
 * to prevent CPU overload, device heating, and battery drain that occurs with
 * the full GlobalAnimatedBackground component.
 *
 * PERFORMANCE OPTIMIZATIONS:
 * ❌ No animated particles (eliminates 30 moving elements)
 * ❌ No mouse tracking (eliminates continuous event handling)
 * ❌ No Framer Motion animations (eliminates GPU-intensive transforms)
 * ❌ No continuous intervals (eliminates 50ms particle updates)
 * ✅ Static CSS gradients only
 * ✅ Minimal scroll detection (throttled, not continuous)
 * ✅ Same visual themes as desktop version
 *
 * VISUAL CONSISTENCY:
 * - Uses the same colorThemes as GlobalAnimatedBackground
 * - Maintains theme switching based on scroll position
 * - Provides identical color schemes for each section
 * - Includes decorative elements (static only)
 *
 * USAGE:
 * Automatically rendered on devices with screen width < 768px
 * through the BackgroundRenderer component's conditional logic.
 */
const StaticBackground = () => {
  const [currentSection, setCurrentSection] = useState<SectionTheme>('home');
  const { theme } = useTheme();

  // Lightweight section detection - optimized for mobile performance
  useEffect(() => {
    /**
     * Detects which section is currently in view to apply appropriate theme
     * Uses the same logic as GlobalAnimatedBackground but without heavy processing
     */
    const detectCurrentSection = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check each section to see which one is currently most visible
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;

          // Apply theme when section is 30% visible (same as desktop version)
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

    // Perform initial section detection on component mount
    detectCurrentSection();

    /**
     * Throttled scroll listener - much lighter than the animated version
     * Uses requestAnimationFrame for smooth performance while minimizing CPU usage
     */
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

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary static gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.primary} transition-all duration-700 ease-in-out`}
        key={`${currentSection}-${theme}`}
      />

      {/* Simple static decorative elements */}
      <div className="absolute inset-0">
        {/* Large decorative circle */}
        <div
          className={`absolute h-96 w-96 rounded-full bg-gradient-to-r opacity-30 blur-3xl ${colors.accent1}`}
          style={{ top: '10%', left: '10%' }}
        />

        {/* Medium decorative circle */}
        <div
          className={`absolute h-80 w-80 rounded-full bg-gradient-to-r opacity-25 blur-3xl ${colors.accent2}`}
          style={{ top: '50%', right: '10%' }}
        />

        {/* Small decorative square */}
        <div
          className={`absolute h-32 w-32 rotate-45 transform bg-gradient-to-r opacity-20 blur-2xl ${colors.accent1}`}
          style={{ top: '20%', right: '20%' }}
        />

        {/* Bottom decorative element */}
        <div
          className={`absolute h-24 w-24 rounded-full bg-gradient-to-r opacity-30 blur-xl ${colors.accent2}`}
          style={{ bottom: '20%', left: '15%' }}
        />
      </div>

      {/* Subtle vignette overlay */}
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

export default StaticBackground;
