'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimatedCubeCard from './components/HomeCards/AnimatedCubeCard';
import SkillSection from './components/HomeCards/SkillSection';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <AnimatedCubeCard />
      <div ref={ref}>
        {isInView && <SkillSection />}
      </div>
    </div>
  );
}

export default Home;
