import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AnimatedMaskButton from '../tools/Animation/Buttons/AnimatedMaskButton';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SkillSection = () => {
  const skills = [
    // Languages
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'HTML5', category: 'Language' },
    { name: 'CSS3', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'C++', category: 'Language' },
    { name: 'SQL', category: 'Language' },
    { name: 'PHP', category: 'Language' },
    { name: 'Ruby', category: 'Language' },

    // Frontend
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Redux', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'SASS/SCSS', category: 'Frontend' },
    { name: 'Material-UI', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'jQuery', category: 'Frontend' },

    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Ruby on Rails', category: 'Backend' },

    // Databases
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'SQLite', category: 'Database' },
    { name: 'Oracle', category: 'Database' },
    { name: 'Microsoft SQL Server', category: 'Database' },
    { name: 'Firebase', category: 'Database' },

    // Tools
    { name: 'Git', category: 'Tool' },
    { name: 'Docker', category: 'Tool' },
    { name: 'AWS', category: 'Tool' },
    { name: 'Jest', category: 'Tool' },
    { name: 'Webpack', category: 'Tool' },
    { name: 'Jenkins', category: 'Tool' },
    { name: 'Kubernetes', category: 'Tool' },
    { name: 'Terraform', category: 'Tool' },
    { name: 'Postman', category: 'Tool' },

    // Practices
    { name: 'Agile', category: 'Practice' },
    { name: 'CI/CD', category: 'Practice' },
    { name: 'TDD', category: 'Practice' },
    { name: 'Responsive Design', category: 'Practice' },
    { name: 'Performance Optimization', category: 'Practice' },
    { name: 'Microservices', category: 'Practice' },
    { name: 'DevOps', category: 'Practice' },
    { name: 'Clean Code', category: 'Practice' },
    { name: 'Design Patterns', category: 'Practice' },
  ];

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center rounded-[20px] px-[40px] py-[60px] shadow-glow-sm transition-shadow duration-300 hover:shadow-glow-lg dark:shadow-dark-glow-sm dark:hover:shadow-dark-glow-lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-transparent dark:from-white dark:to-dark-secondary"
      >
        <h1 className="text-center text-[40px] font-bold">Skills</h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-[20px] w-3/4 text-center text-[20px] leading-[30px]"
        >
          I am a software engineer with a passion for creating beautiful and functional web applications. I have a
          strong background in front-end development, but I am also comfortable with back-end development. I am a quick
          learner and I am always looking to expand my skills.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-[40px] flex w-[80%] flex-col items-center justify-center gap-8 px-[20px]"
      >
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            spaceBetween={35}
            grabCursor={true}
            className="!ml-0 !mr-0"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <AnimatedMaskButton text={skill.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillSection;
