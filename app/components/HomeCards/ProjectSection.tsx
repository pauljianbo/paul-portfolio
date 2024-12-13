import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the structure for project data
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies?: string[]; // Optional array of technology strings
}

// Array of project data
const projects: Project[] = [
  {
    title: "Ace Coding Academy",
    description: "An interactive educational platform designed to help students master coding skills. Features comprehensive learning paths for multiple programming languages, interactive coding challenges, detailed programming notes, and curated tech news. The platform includes progress tracking, hands-on exercises, and stays up-to-date with the latest developments in technology and programming trends. Perfect for both beginners and intermediate learners looking to enhance their coding expertise.",
    imageUrl: "/images/acecoding.png", // Add your image path
    projectUrl: "https://acecodingacademy.com",
    technologies: [
      // Frontend
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      
      // Backend
      "Node.js",
      "Prisma",
      "MongoDB",
      "S3",
      
      // Services & Tools
      "Vercel"
    ],
  },
  {
    title: "Pickagoo Delivery Platform",
    description: "A comprehensive delivery management platform featuring multi-role access (customers, drivers, admins). Includes complete order lifecycle management, SingPass integration for verification, and enterprise-level features. Key functionalities: authentication, real-time order tracking, notifications, driver-customer matching, reviews & ratings, credibility scoring system, bulk order processing via Excel, and specialized company contract management for corporate clients.",
    imageUrl: "/images/pickagoo.png",
    projectUrl: "https://pickagoo.com",
    technologies: [
      // Frontend
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      
      // Backend
      "Node.js",
      "Prisma",
      "MongoDB",
      "Redis",
      "S3",
      
      // Services & Tools
      "Twilio",
      "Firebase Cloud Messaging",
      "SingPass",
      "Vercel"
    ],
  },
 
];

const ProjectSection = () => {
  // State to track which cards are expanded to show full description
  // Stores an array of indices corresponding to expanded cards
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  // Toggle the expansion state of a card
  // If card is expanded, remove it from array; if collapsed, add it
  // adding the index for those cards that are expanded
  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-[50px] px-4 gradient-text">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-[40px] font-bold text-center mb-[40px]">Projects</h1>
        
        {/* Grid layout for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden hover-glow"
            >
              {/* Project card with link wrapper */}
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                {/* Image container with fixed height */}
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                
                {/* Project details section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  {/* Description with conditional line clamping based on expanded state */}
                  <p className={`mb-4 text-[16px] leading-[24px] ${!expandedCards.includes(index) ? 'line-clamp-3' : ''}`}>
                    {project.description}
                  </p>
                  {/* Toggle button for expanding/collapsing description */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation when clicking button
                      toggleCard(index);
                    }}
                    className="text-light-primary hover:text-sky-600 mb-4"
                  >
                    {expandedCards.includes(index) ? 'Show less' : 'Read more'}
                  </button>
                  
                  {/* Technologies tags section */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;