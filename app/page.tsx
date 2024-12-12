'use client';
import dynamic from 'next/dynamic';
// Dynamically import the Banner component with no SSR
const Banner = dynamic(() => import('./components/HomeCards/AnimatedCubeCard'), { ssr: false });
import SkillSection from './components/HomeCards/SkillSection';

const Home = () => {
  return (
    <div className="">
      <Banner />
      <SkillSection />
    </div>
  );
}

export default Home;
