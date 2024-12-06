'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Interface defining the props for the AnimatedButton component
interface AnimatedButtonProps {
  text: string;      // The text to display in the button
  href?: string;     // Optional URL for the button to link to
  onClick?: () => void;  // Optional click handler function
  className?: string;    // Optional additional CSS classes
  delay?: number;        // Optional delay before animation starts (in seconds)
}

export default function AnimatedButton({ 
  text, 
  href, 
  onClick, 
  className = '',  // Default to empty string if not provided
  delay = 0        // Default to 0 if not provided
}: AnimatedButtonProps) {
  // Button content wrapped in a fragment to maintain consistent styling
  // whether it's used as a button or link
  const buttonContent = (
    <>
      <div className="shadow-glow-sm dark:shadow-dark-glow-sm hover:shadow-glow-lg dark:hover:shadow-dark-glow-lg 
                      inline-flex rounded-md bg-gradient-to-r from-light-primary to-light-secondary 
                      bg-clip-text px-4 py-2 text-[20px] font-semibold text-transparent 
                      transition-shadow duration-300 dark:from-white dark:to-dark-secondary">
        {text}
      </div>
    </>
  );

  return (
    // Framer Motion div wrapper for fade-in animation
    <motion.div
      initial={{ opacity: 0 }}     // Start fully transparent
      animate={{ opacity: 1 }}     // Animate to fully visible
      transition={{ 
        delay,                     // Wait for specified delay
        duration: 0.5              // Animation takes 0.5 seconds
      }}
      className={`relative ${className}`}  // Combine provided classes with relative positioning
    >
      {/* Conditionally render either a Link or button based on whether href is provided */}
      {href ? (
        <Link href={href}>{buttonContent}</Link>
      ) : (
        <button onClick={onClick}>{buttonContent}</button>
      )}
    </motion.div>
  );
}
