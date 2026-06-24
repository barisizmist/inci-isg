import { galeriResimleri } from '../../data/mockData';

export default function GaleriPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Fotoğraf Galerisi</h1>
          <p className="mt-4 text-gray-600">Saha denetimleri, tatbikatlar, ilk yardım eğitimleri ve çalışma ortamlarından kareler.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {galeriResimleri.map(img => (
            <div key={img.id} className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm" data-aos="fade-up">
              <img src={img.url} alt={img.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              {/* Resmin üzerine gelince beliren şık karartma efekti */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-lg">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
