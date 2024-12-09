'use client';
import { useTheme } from '@/app/context/ThemeContext';
interface AnimatedBorderButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBorderButton: React.FC<AnimatedBorderButtonProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <>
      <style jsx>{`
        @property --gradient-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .card {
          height: 40px;
          aspect-ratio: 4/1;
          border-radius: 0.5rem;
          position: relative;
        }

        .card::before,
        .card::after {
          content: '';
          position: absolute;
          inset: -0.1rem;
          z-index: -1;
          border-radius: inherit;
          animation: rotation 2s linear infinite;
        }
        .card::before {
          background: ${isDarkMode
            ? 'conic-gradient(from var(--gradient-angle), #e0f2fe, #6b21a8, #e879f9, #6b21a8, #e0f2fe)'
            : 'conic-gradient(from var(--gradient-angle), #e0f2fe, #bae6fd, #0ea5e9, #bae6fd, #e0f2fe)'};
        }

        .card::after {
          background: ${isDarkMode
            ? 'conic-gradient(from var(--gradient-angle), #e0f2fe, #6b21a8, #e879f9, #6b21a8, #e0f2fe)'
            : 'conic-gradient(from var(--gradient-angle), #e0f2fe, #bae6fd, #0ea5e9, #bae6fd, #e0f2fe)'};
        }
        .card::after {
          filter: blur(5rem);
        }

        @keyframes rotation {
          0% {
            --gradient-angle: 0deg;
          }
          100% {
            --gradient-angle: 360deg;
          }
        }
      `}</style>
      <div
        className={`card ${className} w-fit cursor-pointer bg-gradient-to-br from-light-background-gradient-start via-light-background-gradient-via to-light-background-gradient-start shadow-glow hover:shadow-glow-lg dark:from-dark-background-gradient-start dark:via-dark-background-gradient-via dark:to-dark-background-gradient-end`}
      >
        <div className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-center text-[20px] font-semibold leading-[40px] text-transparent dark:from-white dark:to-dark-secondary">
          {children}
        </div>
      </div>
    </>
  );
};

export default AnimatedBorderButton;
