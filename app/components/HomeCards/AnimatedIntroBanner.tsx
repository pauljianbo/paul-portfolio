'use client';
import IntroText from '../tools/Animation/IntroText';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../tools/Animation/Loading/Loading';
// Move AnimatedCharacter to dynamic import
const AnimatedCharacter = dynamic(() => import('../tools/Animation/3D/AnimatedCharacter'), {
  ssr: false, // Disable server-side rendering
  loading: () => <LoadingSpinner></LoadingSpinner>, // Add loading placeholder
});
import IntroTextMobile from './Mobile/IntroTextMobile';
const AnimatedIntroBanner = () => {
  return (
    <div className="container mx-auto mt-[40px] flex md:mt-0 md:h-screen">
      <div className="hidden aspect-square w-full md:block md:w-1/2">
        <IntroText />
      </div>
      <div className="block aspect-square w-full md:hidden md:w-1/2">
        <IntroTextMobile />
      </div>
      <div className="hidden aspect-square w-1/2 translate-y-[40px] items-center md:flex">
        <AnimatedCharacter />
      </div>
    </div>
  );
};

export default AnimatedIntroBanner;
