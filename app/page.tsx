'use client';

import dynamic from 'next/dynamic';
import AnimatedBorderButton from './components/tools/Animation/AnimatedBorderButton';
// Dynamically import the Banner component with no SSR
const Banner = dynamic(() => import('./components/HomeCards/AnimatedCubeCard'), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="flex h-screen items-center justify-center">
        <AnimatedBorderButton className='shadow-glow cursor-pointer hover:shadow-glow-lg'>
          <div className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-[20px] font-semibold text-transparent dark:from-dark-primary dark:to-dark-secondary text-center leading-[40px]">
            Let's Connect
          </div>
        </AnimatedBorderButton>
      </div>
    </div>
  );
}
