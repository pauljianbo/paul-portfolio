'use client';

interface AnimatedBorderButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBorderButton: React.FC<AnimatedBorderButtonProps> = ({ children, className = '' }) => {
  return (
    <>
      <style jsx>{`
        @property --gradient-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        /* :root {
          --clr-1: #052b2f;
          --clr-2: #073438;
          --clr-3: #0e4b50;
          --clr-4: #2d8f85;
          --clr-5: #637c54;
        } */

        .card {
          height: 40px;
          aspect-ratio: 4/1;
          background: white;
          border-radius: 0.5rem;
          position: relative;
        }

        .card::before,
        .card::after {
          content: '';
          position: absolute;
          inset: -0.1rem;
          z-index: -1;
          background: conic-gradient(from var(--gradient-angle), #e0f2fe, #bae6fd, #0ea5e9, #bae6fd, #e0f2fe);
          /* opacity:0.1; */
          border-radius: inherit;
          animation: rotation 2s linear infinite;
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
      <div className={`card ${className}`}>{children}</div>
    </>
  );
};

export default AnimatedBorderButton;
