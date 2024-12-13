'use client'; // Marks this as a Client Component in Next.js, enabling client-side interactivity

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion'; // Hook to detect when element enters viewport
import AnimatedIntroBanner from './components/HomeCards/AnimatedIntroBanner';
import SkillSection from './components/HomeCards/SkillSection';
import ProjectSection from './components/HomeCards/ProjectSection';

const Home = () => {
  // Create a reference to track the skills section element
  const ref = useRef(null);
  // Track if the referenced element is in viewport, 'once: true' means it only triggers once
  const isInView = useInView(ref, { once: true });

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
      <div id="skills" ref={ref}>
        {/* Only render SkillSection when it comes into view */}
        {isInView && <SkillSection />}
      </div>

      {/* Projects section */}
      <div id="projects">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
