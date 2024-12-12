'use client';
import dynamic from 'next/dynamic';
import AnimatedCharacter from './components/tools/Animation/3D/AnimatedCharacter';
// Dynamically import the Banner component with no SSR
const Banner = dynamic(() => import('./components/HomeCards/AnimatedCubeCard'), { ssr: false });
import SkillSection from './components/HomeCards/SkillSection';

const Home = () => {
  return (
    <div className="">
      <Banner />
      <SkillSection />
      {/* <AnimatedCharacter /> */}
    </div>
  );
}

export default Home;
