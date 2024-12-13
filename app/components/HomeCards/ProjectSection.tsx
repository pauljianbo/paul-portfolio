import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies?: string[];
}

const projects: Project[] = [
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
  // Add more projects as needed
];

const ProjectSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`text-gray-600 mb-4 ${!expandedCards.includes(index) ? 'line-clamp-3' : ''}`}>
                    {project.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCard(index);
                    }}
                    className="text-blue-600 hover:text-blue-800 text-sm mb-4"
                  >
                    {expandedCards.includes(index) ? 'Show less' : 'Read more'}
                  </button>
                  
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;