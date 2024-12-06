'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  delay?: number;
}

export default function AnimatedButton({ text, href, onClick, className = '', delay = 0 }: AnimatedButtonProps) {
  const buttonContent = (
    <>
      <div className="shadow-glow-sm dark:shadow-dark-glow-sm hover:shadow-glow-lg dark:hover:shadow-dark-glow-lg inline-flex rounded-md bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text px-4 py-2 text-[20px] font-semibold text-transparent transition-shadow duration-300 dark:from-white dark:to-dark-secondary">
        {text}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative ${className}`}
    >
      {href ? <Link href={href}>{buttonContent}</Link> : <button onClick={onClick}>{buttonContent}</button>}
    </motion.div>
  );
}
