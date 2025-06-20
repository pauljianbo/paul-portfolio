'use client';
import IntroText from '../tools/Animation/IntroText';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../tools/Animation/Loading/Loading';
// Move AnimatedDesktop to dynamic import
const AnimatedDesktop = dynamic(() => import('../tools/Animation/3D/AnimatedDesktop'), {
  ssr: false, // Disable server-side rendering
  loading: () => <LoadingSpinner></LoadingSpinner>, // Add loading placeholder
});
import IntroTextMobile from './Mobile/IntroTextMobile';

const AnimatedIntroBanner = () => {
  return (
    <div className="relative">
      {/* Animated Desktop as full viewport background - no boundaries */}
      <div className="absolute inset-0 z-10 hidden md:block top-0">
        <AnimatedDesktop rotation={-Math.PI/3} enableAnimation={true} />
      </div>

      {/* Content container - maintains centering with pointer events passthrough */}
      <div className="container pointer-events-none relative mx-auto mt-[40px] flex md:mt-0 md:h-screen">
        {/* Intro text with higher z-index and restored pointer events for interactions */}
        <div className="pointer-events-auto relative z-20 hidden aspect-square w-full md:block ">
          <IntroText />
        </div>
        <div className="pointer-events-auto relative z-20 block aspect-square w-full md:hidden ">
          <IntroTextMobile />
        </div>
      </div>
    </div>
  );
};

export default AnimatedIntroBanner;
