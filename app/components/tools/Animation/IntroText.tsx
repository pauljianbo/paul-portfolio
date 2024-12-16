'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedBorderButton from './Buttons/AnimatedBorderButton';
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
    <div className="gradient-text flex h-full flex-col justify-center space-y-6 p-6">
      {/* Name heading - responsive text sizes */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <motion.h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-[90px]">Hi, I&apos;m Paul</motion.h1>
      </motion.div>

      {/* Roles - responsive text sizes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="space-y-2"
      >
        <div className="flex items-center space-x-2 text-xl font-bold sm:text-2xl md:text-3xl lg:text-[40px]">
          <span>▹</span>
          <span>{currentText}</span>
        </div>
      </motion.div>

      {/* Description - responsive text sizes */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="space-y-2"
      >
        <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-[20px]">
          As a Full Stack Developer, I craft seamless digital experiences by bridging elegant front-end designs with
          robust back-end solutions. With a passion for clean code and innovative technologies, I transform complex
          problems into user-friendly applications that make a real impact.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="space-y-2"
      >
        <AnimatedBorderButton>Let&apos;s Connect</AnimatedBorderButton>
      </motion.div>
    </div>
  );
};

export default IntroText;
