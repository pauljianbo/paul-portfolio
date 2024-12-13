import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AnimatedMaskButton from '../tools/Animation/Buttons/AnimatedMaskButton';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { div } from 'framer-motion/client';

const SkillSection = () => {
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

  return (
    <div className="hover-glow mx-auto flex max-w-7xl flex-col items-center rounded-[20px] px-[40px] py-[60px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="gradient-text"
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
        className="relative mt-[40px] flex w-[80%] flex-col items-center justify-center gap-8"
      >
        <div className="w-full">
          <button className="swiper-button-prev absolute translate-x-[-100px] translate-y-[-20px]"></button>

          <button className="swiper-button-next absolute translate-x-[120px] translate-y-[-20px]"></button>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            spaceBetween={35}
            grabCursor={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="!ml-0 !mr-0 !py-[20px] !pl-[20px]"
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
