import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap, ChevronRight } from 'lucide-react';

// Define the structure for project data
interface Project {
  title: string;
  description: string;
  projectUrl: string;
  technologies?: string[];
  category: string;
  status: 'Live' | 'In Development' | 'Completed';
  gradient: string;
}

// Array of project data
const projects: Project[] = [
  {
    title: 'Ace Coding Academy',
    description:
      'An interactive educational platform designed to help students master coding skills. Features comprehensive learning paths for multiple programming languages, interactive coding challenges, detailed programming notes, and curated tech news. The platform includes progress tracking, hands-on exercises, and stays up-to-date with the latest developments in technology and programming trends. Perfect for both beginners and intermediate learners looking to enhance their coding expertise.',
    projectUrl: 'https://acecodingacademy.com',
    category: 'Education Platform',
    status: 'Live',
    gradient: 'from-sky-400 via-blue-500 to-cyan-500',
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Node.js',
      'Prisma',
      'MongoDB',
      'S3',
      'Vercel',
    ],
  },
  {
    title: 'Pickagoo Delivery Platform',
    description:
      'A comprehensive delivery management platform featuring multi-role access (customers, drivers, admins). Includes complete order lifecycle management, SingPass integration for verification, and enterprise-level features. Key functionalities: authentication, real-time order tracking, notifications, driver-customer matching, reviews & ratings, credibility scoring system, bulk order processing via Excel, and specialized company contract management for corporate clients.',
    projectUrl: 'https://pickagoo.com',
    category: 'Delivery Platform',
    status: 'Live',
    gradient: 'from-blue-400 via-sky-500 to-indigo-500',
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Node.js',
      'Prisma',
      'MongoDB',
      'Redis',
      'S3',
      'Twilio',
      'Firebase Cloud Messaging',
      'SingPass',
      'Vercel',
    ],
  },
];

const ProjectSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'In Development':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 px-4 py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cyan-100/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-100/80 px-4 py-2 backdrop-blur-sm">
            <Code className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Featured Projects</span>
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            My Digital Creations
          </h1>

          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-blue-700/80">
            Explore my latest projects that blend innovation with functionality, creating impactful digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-full"
            >
              {/* Main Card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-200/50 bg-white/70 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-blue-300/60 hover:shadow-2xl">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 transition-opacity duration-500 group-hover:opacity-10`}
                ></div>

                {/* Live Preview Section - Increased Height */}
                <div className="relative h-80 flex-shrink-0 overflow-hidden md:h-[600px]">
                  <iframe
                    src={project.projectUrl}
                    className="h-full w-full border-0"
                    title={project.title}
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-1 flex-col p-8">
                  {/* Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-blue-900">{project.title}</h3>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-blue-600">{project.category}</p>
                    </div>

                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link rounded-full border border-blue-200/60 bg-blue-100/80 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-blue-200/60"
                    >
                      <ExternalLink className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover/link:scale-110" />
                    </a>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex-1">
                    <p
                      className={`leading-relaxed text-blue-800/80 ${!expandedCards.includes(index) ? 'line-clamp-3' : ''}`}
                    >
                      {project.description}
                    </p>

                    <button
                      onClick={() => toggleCard(index)}
                      className="group/read mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700"
                    >
                      {expandedCards.includes(index) ? 'Show less' : 'Read more'}
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${expandedCards.includes(index) ? 'rotate-90' : 'group-hover/read:translate-x-1'}`}
                      />
                    </button>
                  </div>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="mt-auto space-y-3">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-700">Tech Stack</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="rounded-full border border-blue-200/60 bg-blue-100/80 px-3 py-1.5 text-xs font-medium text-blue-700 backdrop-blur-sm transition-colors duration-300 hover:bg-blue-200/60"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-100/80 px-6 py-3 backdrop-blur-sm">
            <span className="text-blue-800">Want to see more projects?</span>
            <a href="#contact" className="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700">
              Get in touch →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
