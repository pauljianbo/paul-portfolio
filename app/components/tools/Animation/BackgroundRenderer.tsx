'use client';

import { useDeviceDetection } from '../../../hooks/useDeviceDetection';
import GlobalAnimatedBackground from './GlobalAnimatedBackground';
import StaticBackground from './StaticBackground';

/**
 * BackgroundRenderer Component - Intelligent Background Selection
 *
 * PURPOSE:
 * Acts as a smart router that selects the appropriate background component
 * based on device capabilities to optimize performance across all devices.
 *
 * THE PROBLEM:
 * The original GlobalAnimatedBackground caused severe performance issues on mobile:
 * - 30 animated particles running at 50ms intervals
 * - Continuous mouse tracking with real-time updates
 * - Multiple Framer Motion animations using GPU
 * - Scroll-based animations triggering frequently
 * - Result: CPU overload, device heating, battery drain, UI lag
 *
 * THE SOLUTION:
 * Conditional rendering based on screen size detection:
 * - Mobile (< 768px): StaticBackground (no animations)
 * - Desktop/Tablet (≥ 768px): GlobalAnimatedBackground (full experience)
 *
 * WHY NOT CSS HIDING?
 * CSS hiding (display: none) would still execute all JavaScript:
 * ❌ Components still mount and run useEffect hooks
 * ❌ Event listeners still attach and fire
 * ❌ Animations still consume CPU/GPU resources
 * ❌ Intervals still run in background
 *
 * CONDITIONAL RENDERING BENEFITS:
 * ✅ Heavy component never mounts on mobile
 * ✅ Zero JavaScript execution for animations
 * ✅ No event listeners or intervals
 * ✅ Dramatic performance improvement
 * ✅ Same visual quality maintained
 *
 * USAGE:
 * Simply import and use in layout.tsx - automatically handles device detection
 * and renders the appropriate background without any additional configuration.
 */
const BackgroundRenderer = () => {
  const { isMobile } = useDeviceDetection();

  // Mobile devices get the lightweight static background
  // This completely prevents the heavy animated component from mounting
  if (isMobile) {
    return <StaticBackground />;
  }

  // Desktop and tablet devices get the full animated experience
  // These devices have sufficient power to handle the animations smoothly
  return <GlobalAnimatedBackground />;
};

export default BackgroundRenderer;
