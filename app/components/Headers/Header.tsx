'use client';

import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';

/**
 * Responsive Header Component
 *
 * Renders different navigation components based on screen size:
 * - Desktop: Shows the existing NavBar component (md:block)
 * - Mobile: Shows the new MobileNavBar component (md:hidden)
 *
 * Both components share the same navigation logic and section detection,
 * ensuring a consistent user experience across all devices.
 */
const Header = (): JSX.Element => {
  return (
    <>
      {/* Desktop Navigation - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:block">
        <NavBar />
      </div>

      {/* Mobile Navigation - Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
    </>
  );
};

export default Header;
