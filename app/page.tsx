'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports for components
const AnimatedIntroBanner = dynamic(() => import('./components/HomeCards/AnimatedIntroBanner'), { ssr: true });

const SkillSection = dynamic(() => import('./components/HomeCards/SkillSection'), { ssr: false });

const ProjectSection = dynamic(() => import('./components/HomeCards/ProjectSection'), { ssr: false });
const SkillSectionMobile = dynamic(() => import('./components/HomeCards/Mobile/SkillSectionMobile'), { ssr: false });
const Home = () => {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const isSkillsInView = useInView(skillsRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="">
      <div id="home">
        <AnimatedIntroBanner />
      </div>

      <div id="skills" ref={skillsRef} className="max1280:px-[20px]">
        {/* skills section for desktop version */}
        <div className="hidden md:block">{isSkillsInView && <SkillSection />}</div>
        <div className="block md:hidden">{isSkillsInView && <SkillSectionMobile />}</div>
      </div>

      <div id="projects" ref={projectsRef}>
        {isProjectsInView && <ProjectSection />}
      </div>
    </div>
  );
};

export default Home;
