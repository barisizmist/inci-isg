import Hero from './components/sections/Hero';
import Cta from './components/sections/Cta';
import Team from './components/sections/Team';
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <div>
      <Hero />
      <Cta />
      <Team />
    </div>
  );
}
