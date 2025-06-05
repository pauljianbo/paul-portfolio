'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import AnimatedIntroBanner from './AnimatedIntroBanner';
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
const HomeClient = () => {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isSkillsInView = useInView(skillsRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });

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
      <div id="skills" ref={skillsRef}>
        {/* skills section for desktop version */}
        {isSkillsInView && <SkillSection />}
      </div>
      <div id="projects" ref={projectsRef}>
        {isProjectsInView && <ProjectSection />}
      </div>
      <div id="contact" ref={contactRef}>
        {isContactInView && <ContactSection />}
      </div>
    </div>
  );
};

export default HomeClient;
