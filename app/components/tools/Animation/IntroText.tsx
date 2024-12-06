'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Custom hook to create typewriter effect
// Parameters:
// - texts: array of strings to type out
// - typingSpeed: milliseconds between each character
// - delayBetweenTexts: milliseconds to wait before starting next text
function useTypewriter(texts: string[], typingSpeed = 100, delayBetweenTexts = 1000) {
  // Track which text from the array we're currently showing
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // Track how much of the current text has been typed
  const [currentText, setCurrentText] = useState('');
  // Flag to control if we're in typing state
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Instead of stopping, loop back to beginning
    if (currentTextIndex >= texts.length) {
      setCurrentTextIndex(0); // Reset to first text
      setCurrentText(''); // Clear current text
      return;
    }

    if (isTyping) {
      // Get the full text we're currently typing
      const currentFullText = texts[currentTextIndex];

      // If we haven't finished typing the current text
      if (currentText.length < currentFullText.length) {
        // Set a timeout to add the next character
        const timeoutId = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, typingSpeed);
        // Cleanup timeout if component unmounts
        return () => clearTimeout(timeoutId);
      } else {
        // If we finished typing the current text, wait for delay then move to next text
        const timeoutId = setTimeout(() => {
          setCurrentTextIndex((prev) => prev + 1);
          setCurrentText(''); // Reset current text for next word
        }, delayBetweenTexts);
        // Cleanup timeout if component unmounts
        return () => clearTimeout(timeoutId);
      }
    }
  }, [currentText, currentTextIndex, texts, isTyping, typingSpeed, delayBetweenTexts]);

  // Return current state for component to use
  return { currentText, currentTextIndex };
}

export default function IntroText() {
  // Array of roles to display
  const roles = ['Full Stack Developer', 'React & Next.js Expert', 'TypeScript Enthusiast'];

  // Use our typewriter hook
  // 50ms between each character
  // 1500ms delay between each role
  const { currentText, currentTextIndex } = useTypewriter(roles, 50, 1500);

  return (
    <div className="flex h-full  flex-col justify-center p-6">
      {/* Animated container for the name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start invisible and 20px down
        animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
        transition={{ duration: 0.5 }} // Animation takes 0.5 seconds
      >
        <motion.h1 className="mb-4 bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-[100px] font-bold text-transparent dark:from-dark-primary dark:to-dark-secondary">
          Hi, ..........
        </motion.h1>
      </motion.div>

      {/* Animated container for the roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }} // Start after name animation
        className="space-y-2"
      >
        {/* Container for the current role being typed */}
        <div className="flex items-center space-x-2 bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-[40px] font-bold text-transparent dark:from-dark-primary dark:to-dark-secondary">
          <span>▹</span>
          <span>{currentText}</span>
        </div>
      </motion.div>
    </div>
  );
}
