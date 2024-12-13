'use client';
// import AnimatedCube from '../tools/Animation/3D/AnimatedCube';
import IntroText from '../tools/Animation/IntroText';
import AnimatedCharacter from '../tools/Animation/3D/AnimatedCharacter';
const AnimatedIntroBanner = () => {
  return (
    <div className="mx-auto mt-20 flex max-w-7xl md:mt-0 md:h-screen">
      <div className="aspect-square w-full md:w-1/2">
        <IntroText />
      </div>
      <div className="hidden aspect-square w-1/2 translate-y-[40px] items-center md:flex">
        <AnimatedCharacter />
      </div>
      {/* <div className="aspect-square w-1/2">
        <AnimatedCube />
      </div> */}
    </div>
  );
};

export default AnimatedIntroBanner;
