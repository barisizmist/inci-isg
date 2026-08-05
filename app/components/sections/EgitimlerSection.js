import { egitimlerData } from '@/data/egitimlerData';
import Carousel from './Carousel';
import SertifikaCard from '../sertifika/SertifikaCard';
import SectionHeader from './SectionHeader';

const EgitimlerSection = () => {
  const items = egitimlerData.slice(0, 6);

  if (!items.length) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <SectionHeader
          overline="🎓 Eğitimler"
          title="Uygulamalı İSG"
          highlight="Eğitim Programları"
          description="Yangın, yüksekte çalışma ve acil durum gibi kritik konularda mevzuata uygun, uygulamalı eğitimlerimizle ekibinizi güçlendirin."
          href="/egitimler"
        />

        <Carousel ariaLabel="İSG eğitimleri">
          {items.map(item => (
            <div key={item.id} data-carousel-item className="w-[270px] sm:w-[320px] shrink-0 snap-start">
              <SertifikaCard
                cert={item}
                href={`/egitimler/${item.slug}`}
                categoryLabel={item.category}
                showWhatsApp={false}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default EgitimlerSection;
