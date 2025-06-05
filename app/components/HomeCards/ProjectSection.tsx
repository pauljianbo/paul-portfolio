import { useState } from 'react';
import { Zap, ChevronRight, Eye, ArrowUpRight, Sparkles } from 'lucide-react';

// Define the structure for project data
interface Project {
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string;
  technologies?: string[];
  category: string;
  status: 'Live' | 'In Development' | 'Completed';
  gradient: string;
  accentColor: string;
}

// Array of project data with placeholder images
const projects: Project[] = [
  {
    title: 'Ace Coding Academy',
    description:
      'An interactive educational platform designed to help students master coding skills. Features comprehensive learning paths for multiple programming languages, interactive coding challenges, detailed programming notes, and curated tech news. The platform includes progress tracking, hands-on exercises, and stays up-to-date with the latest developments in technology and programming trends. Perfect for both beginners and intermediate learners looking to enhance their coding expertise.',
    projectUrl: 'https://acecodingacademy.com',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center',
    category: 'Education Platform',
    status: 'Live',
    gradient: 'from-blue-400 via-sky-400 to-cyan-400',
    accentColor: 'blue',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Three.js',
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
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    category: 'Delivery Platform',
    status: 'Live',
    gradient: 'from-cyan-400 via-blue-400 to-indigo-400',
    accentColor: 'cyan',
    technologies: [
      'Next.js',
      'React',
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
  {
    title: '最爱小说网',
    description:
      'A free online novel reading website allowing users to read a wide range of novels. Built with Next.js, React, and TypeScript, it leverages the Cheerio JavaScript library for web scraping to aggregate and serve novel content. Hosted on Vercel, the platform provides a seamless and fast reading experience for users seeking Chinese web novels.',
    projectUrl: 'https://novel-xiaoshuo.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&crop=center',
    category: 'Novel Website',
    status: 'Live',
    gradient: 'from-cyan-400 via-blue-400 to-indigo-400',
    accentColor: 'cyan',
    technologies: ['Next.js', 'React', 'TypeScript', 'Cheerio', 'Vercel', 'TailwindCSS', 'Framer Motion', 'Node.js'],
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
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/60';
      case 'In Development':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/60';
      case 'Completed':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/60';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/30 dark:text-slate-300 dark:border-slate-700/60';
    }
  };

  const getAccentColors = (color: string) => {
    const colors = {
      blue: {
        text: 'text-blue-600 dark:text-blue-300',
        bg: 'bg-blue-50 dark:bg-blue-900/40',
        border: 'border-blue-200 dark:border-blue-700/60',
        hover: 'hover:bg-blue-100 dark:hover:bg-blue-800/60',
      },
      cyan: {
        text: 'text-cyan-600 dark:text-cyan-300',
        bg: 'bg-cyan-50 dark:bg-cyan-900/40',
        border: 'border-cyan-200 dark:border-cyan-700/60',
        hover: 'hover:bg-cyan-100 dark:hover:bg-cyan-800/60',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/30"></div>
        <div className="absolute right-1/3 top-1/3 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30"></div>
        <div className="absolute bottom-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-sky-200/20 blur-3xl dark:bg-sky-900/20"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(30,41,59,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.15)_1px,transparent_1px)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32">
        {/* Header */}
        <div className="animate-fade-in mb-20 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-xl dark:border-blue-700/60 dark:bg-slate-800/80">
            <Sparkles className="h-5 w-5 text-blue-500 dark:text-cyan-300" />
            <span className="text-sm font-medium text-blue-700 dark:text-slate-200">Featured Projects</span>
            <div className="h-2 w-2 rounded-full bg-blue-400 dark:bg-cyan-400"></div>
          </div>

          <h1 className="mb-8 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-5xl font-bold text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400 md:text-7xl lg:text-8xl">
            Personal
            <span className="block bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 bg-clip-text dark:from-cyan-400 dark:via-blue-400 dark:to-sky-400">
              Masterpieces
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-700/80 dark:text-slate-300/80 md:text-2xl">
            Crafting exceptional digital experiences that push the boundaries of innovation and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => {
            const accentColors = getAccentColors(project.accentColor);

            return (
              <div
                key={index}
                className="animate-slide-up group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Subtle Glow */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-200 via-sky-200 to-cyan-200 opacity-0 transition-opacity duration-500 group-hover:opacity-50 dark:from-blue-900 dark:via-sky-900 dark:to-cyan-900"></div>

                {/* Main Card */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-200/50 bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-300/60 group-hover:bg-white/90 group-hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-900/80 dark:group-hover:border-cyan-400/60 dark:group-hover:bg-slate-900/90">
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden lg:h-96">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>

                    {/* Floating Action Button */}
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute right-6 top-6 rounded-full border ${accentColors.border} ${accentColors.bg} p-3 shadow-lg backdrop-blur-xl transition-all duration-300 ${accentColors.hover} group/btn hover:scale-110`}
                    >
                      <ArrowUpRight
                        className={`h-5 w-5 ${accentColors.text} transition-transform duration-300 group-hover/btn:rotate-12`}
                      />
                    </a>

                    {/* Status Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className={`rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-xl ${getStatusColor(project.status)}`}
                      >
                        <div className="mr-2 inline-block h-2 w-2 rounded-full bg-current"></div>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative flex-1 p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-cyan-200 lg:text-3xl">
                          {project.title}
                        </h3>
                        <Eye
                          className={`h-5 w-5 ${accentColors.text} opacity-0 transition-all duration-300 group-hover:opacity-100`}
                        />
                      </div>
                      <p className={`text-sm font-medium ${accentColors.text}`}>{project.category}</p>
                    </div>

                    {/* Description */}
                    <div className="mb-8 flex-1">
                      <p
                        className={`leading-relaxed text-slate-600 dark:text-slate-300 ${!expandedCards.includes(index) ? 'line-clamp-3' : ''}`}
                      >
                        {project.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className={`group/read mt-4 inline-flex items-center gap-2 text-sm font-medium ${accentColors.text} transition-all duration-300 hover:translate-x-1 hover:text-slate-800 dark:hover:text-cyan-100`}
                      >
                        {expandedCards.includes(index) ? 'Show less' : 'Read more'}
                        <ChevronRight
                          className={`h-4 w-4 transition-transform duration-300 ${expandedCards.includes(index) ? 'rotate-90' : 'group-hover/read:translate-x-1'}`}
                        />
                      </button>
                    </div>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="space-y-4">
                        <div className={`flex items-center gap-2 ${accentColors.text}`}>
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">Tech Arsenal</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-2 text-xs font-medium text-blue-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-300/60 hover:bg-blue-100/80 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-cyan-200 dark:hover:border-cyan-400/60 dark:hover:bg-slate-900/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="animate-fade-in mt-20 text-center" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-4 rounded-full border border-blue-200/60 bg-white/70 px-8 py-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-blue-300/60 hover:bg-white/80 hover:shadow-xl dark:border-blue-700/60 dark:bg-slate-800/80 dark:hover:border-cyan-400/60 dark:hover:bg-slate-900/80">
            <span className="text-slate-700 dark:text-cyan-200">Ready to create something extraordinary?</span>
            <a
              href="#contact"
              className="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-cyan-300 dark:hover:text-cyan-100"
            >
              Let&apos;s collaborate →
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;
