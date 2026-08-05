import { sertifikaCards } from '@/data/sertifikaCards';
import SertifikaCard from '../sertifika/SertifikaCard';
import SectionHeader from './SectionHeader';

const SertifikalarSection = () => {
  const items = sertifikaCards.slice(0, 8);

  if (!items.length) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <SectionHeader
          overline="📜 Sertifikalar"
          title="Tüm"
          highlight="Sertifika Programları"
          description="E-Devlet onaylı ve mesleki yeterlilik sertifikalarımızla mesleki kariyerinizi bir adım öne taşıyın."
          href="/sertifikalar"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(cert => (
            <SertifikaCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SertifikalarSection;
