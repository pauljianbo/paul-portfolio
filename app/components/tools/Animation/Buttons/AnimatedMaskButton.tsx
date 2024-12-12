import { useTheme } from '@/app/context/ThemeContext';
interface AnimatedMaskButtonProps {
  text: string;
  className?: string;
}
// refer to stacking context and mask-image notes in apple notes app for css
const AnimatedMaskButton = ({ text, className = '' }: AnimatedMaskButtonProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <>
      <style jsx>
        {`
          @property --rotation {
            syntax: '<angle>';
            inherits: false;
            initial-value: 0deg;
          }
          .fancy-glow {
            position: relative;
            min-width: 200px;
            min-height: 200px;
            z-index: 0;
            border-radius: 50%;
            overflow: hidden;

            &::before {
              content: '';
              position: absolute;
              z-index: -1;
              border-radius: 5px;
              inset: 0;
              background-image: conic-gradient(
                from var(--rotation, 0turn),
                ${isDarkMode
                  ? `#a78bfa, /* violet-400 */
                     #e879f9, /* pink-400 */
                     #9333ea, /* purple-600 */
                     #c084fc, /* purple-400 */
                     #f0abfc, /* pink-300 */
                     #6b21a8, /* purple-800 */
                     #d946ef, /* pink-500 */
                     #c026d3, /* fuchsia-600 */
                     #a21caf, /* fuchsia-700 */
                     #8b5cf6 /* violet-500 */
                    `
                  : `#0ea5e9, /* sky-500 */
                     #14b8a6, /* teal-500 */
                     #38bdf8, /* sky-400 */
                     #22d3ee, /* cyan-400 */
                     #2dd4bf, /* teal-400 */
                     #0284c7, /* sky-600 */
                     #0891b2, /* cyan-600 */
                     #0d9488, /* teal-600 */
                     #0369a1,  /* sky-700 */
                     #06b6d4 /* cyan-500 */
                    `}
              );
              animation: hue-rotation 5s linear infinite;
              mask-image: radial-gradient(closest-side, transparent 80%, black);
            }
          }

          @keyframes hue-rotation {
            from {
              --rotation: 0deg;
            }
            to {
              --rotation: 360deg;
            }
          }
        `}
      </style>

      <div className={`flex items-center justify-center`}>
        <div
          className={`fancy-glow text-[20px] ${className} flex items-center justify-center bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-transparent dark:from-white dark:to-dark-secondary hover:scale-105 transition-all duration-300`}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default AnimatedMaskButton;
