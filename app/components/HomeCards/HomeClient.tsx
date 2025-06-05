'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import AnimatedIntroBanner from './AnimatedIntroBanner';
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';
import SkillSectionMobile from './Mobile/SkillSectionMobile';



const HomeClient = () => {
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
        {isProjectsInView && <ProjectSection  />}
      </div>
    </div>
  );
};

export default HomeClient;
