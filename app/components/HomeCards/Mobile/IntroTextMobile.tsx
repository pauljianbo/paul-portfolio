'use client';

import { useState, useEffect } from 'react';
import AnimatedBorderButton from '../../tools/Animation/Buttons/AnimatedBorderButton';

// Custom hook to create typewriter effect
const useTypewriter = (texts: string[], typingSpeed = 100, delayBetweenTexts = 1000) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const currentFullText = texts[currentTextIndex % texts.length];

    if (currentText.length < currentFullText.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }

    const timeoutId = setTimeout(() => {
      setCurrentTextIndex((prev) => prev + 1);
      setCurrentText('');
    }, delayBetweenTexts);

    return () => clearTimeout(timeoutId);
  }, [currentText, currentTextIndex, texts, typingSpeed, delayBetweenTexts]);

  return { currentText };
};

const IntroTextMobile = () => {
  const roles = ['Full Stack Developer', 'React & Next.js Expert', 'TypeScript Enthusiast'];
  const { currentText } = useTypewriter(roles, 50, 1500);

  return (
    <div className="gradient-text flex h-full flex-col justify-center space-y-6 p-6 ">
      {/* Name heading */}
      <div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-[90px]">Hi, I&apos;m Paul</h1>
      </div>

      {/* Roles */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xl font-bold sm:text-2xl md:text-3xl lg:text-[40px]">
          <span>▹</span>
          <span>{currentText}</span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-[20px]">
          As a Full Stack Developer, I craft seamless digital experiences by bridging elegant front-end designs with
          robust back-end solutions. With a passion for clean code and innovative technologies, I transform complex
          problems into user-friendly applications that make a real impact.
        </p>
      </div>

      <div className="space-y-2">
        <AnimatedBorderButton>Let&apos;s Connect</AnimatedBorderButton>
      </div>
    </div>
  );
};

export default IntroTextMobile;
