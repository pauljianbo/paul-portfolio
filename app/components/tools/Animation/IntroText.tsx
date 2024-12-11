'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';
import AnimatedBorderButton from './AnimatedBorderButton';
// Custom hook to create typewriter effect
// Parameters:
// - texts: array of strings to type out sequentially
// - typingSpeed: milliseconds between each character typed
// - delayBetweenTexts: milliseconds to wait before starting next text
const useTypewriter = (texts: string[], typingSpeed = 100, delayBetweenTexts = 1000) => {
  // Track which text from the array we're currently typing
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // Track how much of the current text has been typed
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    // Get the full text we're currently typing (use modulo to loop through texts array)
    const currentFullText = texts[currentTextIndex % texts.length];

    // If we haven't finished typing the current text
    if (currentText.length < currentFullText.length) {
      // Set a timeout to add the next character
      const timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }

    // If we've finished typing the current text, wait and then move to next text
    const timeoutId = setTimeout(() => {
      setCurrentTextIndex((prev) => prev + 1);
      setCurrentText(''); // Reset current text to start typing next string
    }, delayBetweenTexts);

    return () => clearTimeout(timeoutId);
  }, [currentText, currentTextIndex, texts, typingSpeed, delayBetweenTexts]);

  return { currentText };
};

const IntroText = () => {
  // Array of roles to display in the typewriter effect
  const roles = ['Full Stack Developer', 'React & Next.js Expert', 'TypeScript Enthusiast'];
  // Use typewriter hook with custom timing (50ms per character, 1500ms between texts)
  const { currentText } = useTypewriter(roles, 50, 1500);

  return (
    <div className="flex h-full flex-col justify-center space-y-4 p-6">
      {/* Animated container for the name - Slides up and fades in */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Start invisible and 20px top to original position
        animate={{ opacity: 1, y: 0 }} // Animate to fully visible at original position
        transition={{ duration: 0.5 }} // Animation takes 0.5 seconds
      >
        <motion.h1 className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-[90px] font-bold text-transparent dark:from-white dark:to-dark-secondary">
          Hi, I'm Paul
        </motion.h1>
      </motion.div>

      {/* Animated container for the roles - Fades in after name animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }} // Starts 0.5s after component mount
        className="space-y-2"
      >
        {/* Container for the typewriter text with arrow prefix */}
        <div className="flex items-center space-x-2 bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-[40px] font-bold text-transparent dark:from-white dark:to-dark-secondary">
          <span>▹</span>
          <span>{currentText}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }} // Start invisible and 20px left to original position
        animate={{ opacity: 1, x: 0 }} // Animate to fully visible at original position
        transition={{ delay: 0.7, duration: 0.5 }} // Starts 0.5s after component mount
        className="space-y-2"
      >
        {/* Description paragraph with gradient text */}
        <p className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-[20px] leading-[30px] text-transparent dark:from-white dark:to-dark-secondary">
          As a Full Stack Developer, I craft seamless digital experiences by bridging elegant front-end designs with
          robust back-end solutions. With a passion for clean code and innovative technologies, I transform complex
          problems into user-friendly applications that make a real impact.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start invisible and 20px below
        animate={{ opacity: 1, y: 0 }} // Animate to fully visible at original position
        transition={{ delay: 0.9, duration: 0.5 }} // Starts 0.5s after component mount
        className="space-y-2"
      >
        {/* Animated "Let's Connect" button with 1 second delay */}
        {/* <AnimatedButton text="Let's Connect" href="/about" delay={1} className="mt-8" /> */}
        <AnimatedBorderButton>Let's Connect</AnimatedBorderButton>
      </motion.div>
    </div>
  );
};

export default IntroText;
