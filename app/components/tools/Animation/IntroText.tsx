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

  // Handler for smooth scroll to #contact
  const handleConnectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8">
      {/* Glass morphism card container - centered for better 3D model integration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-black/20 lg:p-12"
      >
        {/* Modern greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-lg font-medium tracking-wide text-gray-600 dark:text-gray-300 lg:text-xl">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Dramatic name typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6 text-6xl font-black tracking-tight lg:text-8xl xl:text-9xl"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Paul
          </span>
        </motion.h1>

        {/* Role with typewriter effect and modern styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-2 flex items-center justify-center space-x-3 text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-100 lg:text-3xl">
            <span className="text-blue-500">▹</span>
            <span className="min-h-[1.2em]">{currentText}</span>
            <span className="animate-pulse text-purple-500">|</span>
          </div>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>

        {/* Streamlined description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl"
        >
          Crafting seamless digital experiences with cutting-edge technologies and innovative solutions.
        </motion.p>

        {/* Enhanced CTA button */}
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          href="#contact"
          onClick={handleConnectClick}
          className="inline-block"
        >
          <div className="group relative">
            <div className="animate-tilt absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <button className="relative flex items-center divide-x divide-gray-600 rounded-xl bg-blue-400 px-8 py-4 leading-none dark:bg-white">
              <span className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-white dark:text-black">Let&apos;s Connect</span>
              </span>
              <span className="pl-4 text-white transition duration-200 group-hover:text-white dark:text-blue-600 dark:group-hover:text-black">
                →
              </span>
            </button>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default IntroText;
