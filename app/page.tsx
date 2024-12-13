'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimatedCubeCard from './components/HomeCards/AnimatedCubeCard';
import SkillSection from './components/HomeCards/SkillSection';
import ProjectSection from './components/HomeCards/ProjectSection';
const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <div id="home">
        <AnimatedCubeCard />
      </div>
      <div id="skills" ref={ref} >
        {isInView && <SkillSection />}
      </div>
      <div id="projects" >
        <ProjectSection />
      </div>
    </div>
  );
}

export default Home;
