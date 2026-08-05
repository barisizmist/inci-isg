import { sertifikaCards } from '@/data/sertifikaCards';
import Carousel from './Carousel';
import SertifikaCard from '../sertifika/SertifikaCard';
import SectionHeader from './SectionHeader';

const FeaturedCerts = () => {
  const items = sertifikaCards.filter(cert => cert.category === 'one-cikanlar').slice(0, 6);

  if (!items.length) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <SectionHeader
          overline="✨ Öne Çıkanlar"
          title="En Popüler"
          highlight="Sertifikalarımız"
          description="Kullanıcılarımızın en çok tercih ettiği sertifika programları. Kariyerinize değer katacak seçenekleri keşfedin."
          href="/sertifikalar"
        />

        <Carousel ariaLabel="Öne çıkan sertifikalar">
          {items.map(cert => (
            <div key={cert.id} data-carousel-item className="w-[270px] sm:w-[320px] shrink-0 snap-start">
              <SertifikaCard cert={cert} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCerts;
