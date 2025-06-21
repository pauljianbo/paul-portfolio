'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../tools/ThemeToggle';

const navItems = [
  { href: '#home', label: 'Home', icon: '🏠' },
  { href: '#skills', label: 'Skills', icon: '💻' },
  { href: '#projects', label: 'Projects', icon: '🚀' },
  { href: '#experience', label: 'Experience', icon: '💼' },
  { href: '#contact', label: 'Contact', icon: '📧' },
];

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle navbar background styling based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic section detection using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const navItem = navItems.find((item) => item.href === `#${sectionId}`);
          if (navItem) {
            setSelected(navItem.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (item: { href: string; label: string }) => {
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSelected(item.label);
    }
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-nav-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="mobile-nav-container relative z-50 md:hidden">
      {/* Header with Logo and Hamburger */}
      <nav
        className={`fixed top-0 w-full px-4 py-5 transition-all duration-300 ${
          scrolled ? 'bg-white/50 shadow-md backdrop-blur-sm dark:bg-slate-900/50' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <button onClick={() => handleLinkClick({ href: '#home', label: 'Home' })} className="flex items-center">
            <div className="h-[32px] w-[32px] overflow-hidden rounded-full bg-white">
              <Image src="/apple-icon.png" alt="Logo" width={32} height={32} />
            </div>
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`h-0.5 w-6 origin-center transform transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-y-1.5 rotate-45' : ''
              } ${theme === 'light' ? 'bg-slate-800' : 'bg-white'}`}
            />
            <span
              className={`h-0.5 w-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'} ${
                theme === 'light' ? 'bg-slate-800' : 'bg-white'
              }`}
            />
            <span
              className={`h-0.5 w-6 origin-center transform transition-all duration-300 ease-in-out ${
                isOpen ? '-translate-y-1.5 -rotate-45' : ''
              } ${theme === 'light' ? 'bg-slate-800' : 'bg-white'}`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          theme === 'light'
            ? 'bg-gradient-to-br from-blue-50 via-white to-pink-50'
            : 'bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950'
        }`}
      >
        {/* Close Button Inside Menu */}
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
            theme === 'light'
              ? 'bg-blue-100/80 text-slate-700 hover:bg-blue-200/80'
              : 'bg-blue-800/30 text-white hover:bg-blue-700/50'
          }`}
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Header */}
        <div className={`border-b px-6 pb-4 pt-6 ${theme === 'light' ? 'border-blue-200/50' : 'border-blue-800/30'}`}>
          <div className="flex items-center space-x-3">
            <div className="h-[48px] w-[48px] overflow-hidden rounded-full bg-white shadow-md ring-2 ring-blue-400">
              <Image src="/apple-icon.png" alt="Logo" width={48} height={48} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Portfolio</h3>
              <p className={`text-sm ${theme === 'light' ? 'text-blue-600' : 'text-blue-200'}`}>
                Welcome to my portfolio
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2 px-6 py-4">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleLinkClick(item)}
              className={`group flex w-full transform items-center space-x-4 rounded-xl p-4 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                selected === item.label
                  ? theme === 'light'
                    ? 'bg-blue-100/80 text-blue-700 shadow-md'
                    : 'bg-blue-600/40 text-blue-200 shadow-md'
                  : theme === 'light'
                    ? 'text-slate-700 hover:bg-blue-50/80 hover:text-blue-600'
                    : 'text-gray-200 hover:bg-blue-800/30 hover:text-blue-300'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none',
              }}
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              <div className="ml-auto">
                <svg
                  className={`h-5 w-5 transition-colors ${
                    theme === 'light'
                      ? 'text-gray-400 group-hover:text-blue-500'
                      : 'text-gray-400 group-hover:text-blue-300'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Theme Toggle Section */}
        <div className={`mt-4 border-t px-6 py-4 ${theme === 'light' ? 'border-blue-200/50' : 'border-blue-800/30'}`}>
          <div
            className={`flex items-center justify-between rounded-xl p-4 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-purple-50/50 to-pink-50/50'
                : 'bg-gradient-to-r from-purple-900/30 to-pink-900/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎨</span>
              <span className={`font-medium ${theme === 'light' ? 'text-slate-700' : 'text-gray-200'}`}>Theme</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <p className={`text-xs ${theme === 'light' ? 'text-blue-500/70' : 'text-blue-300/70'}`}>
            © 2024 Paul Portfolio
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MobileNavBar;
