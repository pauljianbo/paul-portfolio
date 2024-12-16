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
      <h1 className="gradient-text text-center text-[28px] font-bold">Skills</h1>

      <div className="grid grid-cols-2 gap-8">
        {displayedSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AnimatedMaskButton text={skill.name} className="h-[140px] w-[140px] shrink-0" />
          </motion.div>
        ))}
      </div>

      {skills.length > 6 && (
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => setShowAll(!showAll)}
          className="mt-6 flex w-full justify-center"
        >
          <AnimatedBorderButton>{showAll ? 'Show Less' : 'Show More'}</AnimatedBorderButton>
        </motion.button>
      )}
    </div>
  );
};

export default SkillSectionMobile;
