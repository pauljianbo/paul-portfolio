'use client';
import IntroText from '../tools/Animation/IntroText';
import dynamic from 'next/dynamic'
// Move AnimatedCharacter to dynamic import
const AnimatedCharacter = dynamic(
  () => import('../tools/Animation/3D/AnimatedCharacter'),
  {
    ssr: false, // Disable server-side rendering
    loading: () => <div>Loading...</div> // Add loading placeholder
  }
)
import IntroTextMobile from './Mobile/IntroTextMobile';
const AnimatedIntroBanner = () => {
  return (
    <div className="mx-auto mt-20 flex max-w-7xl md:mt-0 md:h-screen">
      <div className="hidden aspect-square w-full md:w-1/2 md:block">
        <IntroText />
      </div>
      <div className="block aspect-square w-full md:w-1/2 md:hidden">
        <IntroTextMobile />
      </div>
      <div className="hidden aspect-square w-1/2 translate-y-[40px] items-center md:flex">
        <AnimatedCharacter />
      </div>
    
    </div>
  );
};

export default AnimatedIntroBanner;
