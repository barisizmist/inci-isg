import Hero from './components/sections/Hero';
import FeaturedCerts from './components/sections/FeaturedCerts';
import EgitimlerSection from './components/sections/EgitimlerSection';
import SertifikalarSection from './components/sections/SertifikalarSection';
import Cta from './components/sections/Cta';
import Team from './components/sections/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCerts />
      <EgitimlerSection />
      <SertifikalarSection />
      <Cta />
      <Team />
    </>
  );
}
