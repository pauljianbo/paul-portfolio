import AnimatedMaskButton from '../tools/Animation/AnimatedMaskButton';
const SkillSection = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-[20px] px-[40px] py-[60px] shadow-glow-sm transition-shadow duration-300 hover:shadow-glow-lg dark:shadow-dark-glow-sm dark:hover:shadow-dark-glow-lg">
      <div className="bg-gradient-to-r from-light-primary to-light-secondary bg-clip-text text-transparent dark:from-white dark:to-dark-secondary">
        <h1 className="text-center text-[40px] font-bold">Skills</h1>
        <p className="mx-auto mt-[20px] w-3/4 text-center text-[20px] leading-[30px]">
          I am a software engineer with a passion for creating beautiful and functional web applications. I have a
          strong background in front-end development, but I am also comfortable with back-end development. I am a quick
          learner and I am always looking to expand my skills.
        </p>
      </div>
      <div className="mt-[40px] flex flex-wrap justify-center gap-[20px]">
        <AnimatedMaskButton text="Typescript" />
        <AnimatedMaskButton text="Typescript" />
        <AnimatedMaskButton text="Typescript" />
        <AnimatedMaskButton text="Typescript" />
        <AnimatedMaskButton text="Typescript" />
      </div>
    </div>
  );
};

export default SkillSection;
