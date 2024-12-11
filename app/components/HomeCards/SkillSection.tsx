import AnimatedMaskButton from '../tools/Animation/AnimatedMaskButton';
const SkillSection = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-[20px] p-[40px] shadow-glow-sm transition-shadow duration-300 hover:shadow-glow-lg dark:shadow-dark-glow-sm dark:hover:shadow-dark-glow-lg">
      <h1 className="text-center text-2xl font-bold">Skills</h1>
      <p className="mx-auto mt-[20px] w-3/4 text-center text-[16px] leading-[24px] text-light-text-secondary">
        I am a software engineer with a passion for creating beautiful and functional web applications. I have a strong
        background in front-end development, but I am also comfortable with back-end development. I am a quick learner
        and I am always looking to expand my skills.
      </p>
      <div className="flex flex-wrap justify-center gap-[20px] mt-[40px]">
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
