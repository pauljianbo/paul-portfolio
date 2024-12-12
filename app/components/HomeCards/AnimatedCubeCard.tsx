'use client';
import AnimatedCube from '../tools/Animation/3D/AnimatedCube';
import IntroText from '../tools/Animation/IntroText';
import AnimatedCharacter from '../tools/Animation/3D/AnimatedCharacter';
const AnimatedCubeCard = () => {
  return (
    <div className="flex max-w-7xl  mx-auto h-screen">
      <div className="w-1/2 aspect-square ">
        <IntroText />
      </div>
      <div className="aspect-square w-1/2 flex items-center">
        <AnimatedCharacter />
      </div>
      {/* <div className="aspect-square w-1/2">
        <AnimatedCube />
      </div> */}
    </div>
  );
};

export default AnimatedCubeCard;