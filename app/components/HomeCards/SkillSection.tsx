import AnimatedMaskButton from "../tools/Animation/AnimatedMaskButton";
const SkillSection = () => {
  return (
    <div className="max-w-7xl mx-auto  rounded-md p-4 h-screen">
      <h1 className="text-2xl font-bold text-center">Skills</h1>
      <p className="text-center text-[16px] text-light-text-secondary w-3/4 mx-auto leading-[24px] mt-[20px]">
        I am a software engineer with a passion for creating beautiful and functional web applications. I have a strong background in front-end development, but I am also comfortable with back-end development. I am a quick learner and I am always looking to expand my skills.
      </p>
          
      <AnimatedMaskButton text="Typescript"/>
    </div>
  );
};

export default SkillSection;