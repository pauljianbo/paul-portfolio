import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedMaskButton from '../tools/Animation/Buttons/AnimatedMaskButton';
import AnimatedBorderButton from '../tools/Animation/Buttons/AnimatedBorderButton';
const SkillSectionMobile = () => {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    // Languages
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Python', category: 'Language' },

    // Frontend
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'jQuery', category: 'Frontend' },

    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },

    // Databases
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'SQL', category: 'Database' },
    { name: 'Firebase', category: 'Database' },

    // Tools
    { name: 'Git', category: 'Tool' },
    { name: 'Docker', category: 'Tool' },
    { name: 'AWS', category: 'Tool' },
    { name: 'Webpack', category: 'Tool' },
    { name: 'Postman', category: 'Tool' },

    // Practices
    { name: 'Agile', category: 'Practice' },
    { name: 'CI/CD', category: 'Practice' },
  ];

  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <div className="hover-glow mx-auto flex max-w-7xl flex-col items-center rounded-[20px] px-[20px] py-[30px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="gradient-text"
      >
        <h1 className="text-center text-[28px] font-bold">Skills</h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-[15px] w-full text-center text-[16px] leading-[24px]"
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
        className="mt-[20px] w-full"
      >
        <div className="grid grid-cols-2 gap-4">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedMaskButton text={skill.name} className="h-[140px] w-[140px] shrink-0" />
            </motion.div>
          ))}
        </div>

        {skills.length > 6 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setShowAll(!showAll)}
            className='mt-6 w-full flex justify-center'
          >
            <AnimatedBorderButton>{showAll ? 'Show Less' : 'Show More'}</AnimatedBorderButton>
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default SkillSectionMobile;
