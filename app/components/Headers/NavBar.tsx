'use client';
import { useState, useEffect } from 'react';
import Chip from '../tools/Animation/Chip';
import ThemeToggle from '../tools/ThemeToggle';
import Image from 'next/image';
/**
 * @module Navbar
 */

/**
 * Navigation items configuration
 * @type {Array<{text: string, href: string}>}
 */
const navItems = [
  { text: 'Home', href: '#home' },
  { text: 'Skills', href: '#skills' },
  { text: 'Projects', href: '#projects' },
];

/**
 * Navbar Component - Main navigation bar for the application
 * @component
 * @description
 * Renders a responsive navigation bar that includes:
 * - A logo
 * - Navigation links displayed as interactive chips
 * - A theme toggle button
 * The component maintains a selected state for the navigation items and
 * supports both light and dark themes.
 *
 * @example
 * ```jsx
 * <Navbar />
 * ```
 *
 * @returns {JSX.Element} A navigation bar component with logo, navigation links, and theme toggle
 */
const Navbar = (): JSX.Element => {
  /**
   * useState hook for selected nav item
   * @type {Array<string|Function>}
   */
  const [selected, setSelected] = useState(navItems[0].text);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { text: string; href: string }) => {
    e.preventDefault();
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSelected(item.text);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-white/50 shadow-md backdrop-blur-sm dark:bg-dark-border/50' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="h-[40px] w-[40px] bg-white rounded-full overflow-hidden hidden md:block">
          <Image src="/apple-icon.png" alt="Logo" width={40} height={40} />
        </div>
        {/* Navigation chips */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <a href={item.href} key={item.text} onClick={(e) => handleNavClick(e, item)}>
              <Chip text={item.text} selected={selected === item.text} onClick={() => setSelected(item.text)} />
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
