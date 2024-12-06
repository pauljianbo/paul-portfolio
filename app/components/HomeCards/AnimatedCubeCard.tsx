'use client';

import AnimatedCube from '../tools/Animation/AnimatedCube';
import IntroText from '../tools/Animation/IntroText';

export default function AnimatedCubeCard() {
  return (
    <div className="flex w-full min-h-[600px] bg-background">
      <div className="w-1/2 aspect-square ">
        <IntroText />
      </div>
      <div className="aspect-square w-1/2">
        <AnimatedCube />
      </div>
    </div>
  );
}