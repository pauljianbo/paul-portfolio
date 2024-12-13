'use client'; // Marks this as a Client Component in Next.js, enabling client-side interactivity

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion'; // Hook to detect when element enters viewport
import AnimatedIntroBanner from './components/HomeCards/AnimatedIntroBanner';
import SkillSection from './components/HomeCards/SkillSection';
import ProjectSection from './components/HomeCards/ProjectSection';

const Home = () => {
  // Create references to track both skills and projects sections
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  
  // Track if each referenced element is in viewport
  const isSkillsInView = useInView(skillsRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Handle URL hash cleanup
    if (window.location.hash) {
      // window.location.hash would be something like '#skills' or '#projects'
      // This code removes the hash from the URL without triggering a page reload
      // Example: Changes 'website.com/#skills' to 'website.com/'
      window.history.replaceState('', document.title, window.location.pathname);
    }
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="">
      {/* Home section with animated intro banner */}
      <div id="home">
        <AnimatedIntroBanner />
      </div>

      {/* Skills section that lazy loads when in view */}
      <div id="skills" ref={skillsRef}>
        {/* Only render SkillSection when it comes into view */}
        {isSkillsInView && <SkillSection />}
      </div>

      {/* Projects section */}
      <div id="projects" ref={projectsRef}>
        {isProjectsInView && <ProjectSection />}
      </div>
    </div>
  );
};

export default Home;
