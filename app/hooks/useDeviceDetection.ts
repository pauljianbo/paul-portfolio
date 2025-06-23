'use client';

import { useState, useEffect } from 'react';

/**
 * Interface defining device information returned by the hook
 */
interface DeviceInfo {
  isMobile: boolean; // Screen width < 768px (below Tailwind md breakpoint)
  isTablet: boolean; // Screen width 768px - 1023px (md to lg breakpoint)
  isDesktop: boolean; // Screen width >= 1024px (above lg breakpoint)
  screenWidth: number; // Current screen width in pixels
}

/**
 * Custom Hook: useDeviceDetection
 *
 * PURPOSE:
 * Detects device type based on screen width to enable conditional rendering
 * of performance-intensive components. This is crucial for mobile performance
 * optimization where heavy animations can cause CPU overload and device heating.
 *
 * FEATURES:
 * - SSR-safe: Provides sensible defaults for server-side rendering
 * - Responsive: Updates automatically on window resize
 * - Debounced: Prevents excessive re-renders during resize events
 * - Tailwind-aligned: Uses Tailwind CSS breakpoints for consistency
 *
 * BREAKPOINTS:
 * - Mobile: < 768px (below md)
 * - Tablet: 768px - 1023px (md to lg)
 * - Desktop: >= 1024px (lg and above)
 *
 * USAGE:
 * const { isMobile, isTablet, isDesktop, screenWidth } = useDeviceDetection();
 *
 * @returns {DeviceInfo} Object containing device detection flags and screen width
 */
export const useDeviceDetection = (): DeviceInfo => {
  // Initialize with desktop-first approach for SSR
  // This prevents hydration mismatches and ensures heavy components
  // don't accidentally render on mobile during initial load
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Safe default for SSR
    screenWidth: 1024, // Assume desktop width for SSR
  });

  useEffect(() => {
    /**
     * Updates device information based on current window width
     * Uses Tailwind CSS breakpoints for consistency across the app
     */
    const updateDeviceInfo = () => {
      const width = window.innerWidth;

      setDeviceInfo({
        isMobile: width < 768, // Below md breakpoint
        isTablet: width >= 768 && width < 1024, // md to lg breakpoint
        isDesktop: width >= 1024, // Above lg breakpoint
        screenWidth: width,
      });
    };

    // Perform initial detection once component mounts
    // This corrects any SSR assumptions with actual browser dimensions
    updateDeviceInfo();

    /**
     * Debounced resize handler to prevent excessive state updates
     * 150ms delay provides good responsiveness while avoiding performance issues
     */
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDeviceInfo, 150);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return deviceInfo;
};
