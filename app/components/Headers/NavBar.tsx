'use client';
import { useState, useEffect } from 'react';
import Chip from '../tools/Animation/Chip';
import Link from 'next/link';
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
  { text: 'Home', href: '/' },
  { text: 'Search', href: '/search' },
  { text: 'About', href: '/about' },
  { text: 'FAQ', href: '/faq' },
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

  return (
    <nav className={`fixed top-0 w-full px-6 py-4 transition-all duration-300 z-50 
      ${scrolled ? 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}

        <Image src="/icon1.png" alt="Logo" width={40} height={40} />
        {/* Navigation chips */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.text}>
              <Chip text={item.text} selected={selected === item.text} onClick={() => setSelected(item.text)} />
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
