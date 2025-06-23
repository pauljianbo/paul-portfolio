'use client';
import IntroText from '../tools/Animation/IntroText';
import IntroTextMobile from './Mobile/IntroTextMobile';

const AnimatedIntroBanner = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Content container - centered for optimal composition */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 md:px-12 lg:px-16">
        {/* Desktop content */}
        <div className="hidden w-full max-w-5xl md:block">
          <IntroText />
        </div>

        {/* Mobile content */}
        <div className="flex w-full items-center justify-center md:hidden">
          <IntroTextMobile />
        </div>
      </div>
    </div>
  );
};

export default AnimatedIntroBanner;
