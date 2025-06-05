
import HomeClient from '@/app/components/HomeCards/HomeClient';

// Assume some metadata/state generation here


const Home = () => {
  // Only render the client component, passing server-generated props
  return <HomeClient />;
};

export default Home;
