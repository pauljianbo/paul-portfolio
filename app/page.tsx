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
        <AnimatedBorderButton className="cursor-pointer bg-gradient-to-br from-light-background-gradient-start via-light-background-gradient-via to-light-background-gradient-start shadow-glow hover:shadow-glow-lg dark:from-dark-background-gradient-start dark:via-dark-background-gradient-via dark:to-dark-background-gradient-end">
          <div className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-center text-[20px] font-semibold leading-[40px] text-transparent dark:from-white dark:to-dark-secondary">
            Let's Connect
          </div>
        </AnimatedBorderButton>
      </div>
    </div>
  );
}
