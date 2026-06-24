export default function ReferanslarPage() {
  // Gerçek logolar gelene kadar Placeholder logolar kullanıyoruz
  const referanslar = [
    { id: 1, name: 'Firma 1', logo: '/references/reference_logo_1.png' },
    { id: 2, name: 'Firma 2', logo: '/references/reference_logo_2.png' },
    { id: 3, name: 'Firma 3', logo: '/references/reference_logo_3.png' },
    { id: 4, name: 'Firma 4', logo: '/references/reference_logo_4.png' },
    { id: 5, name: 'Firma 5', logo: '/references/reference_logo_5.png' },
    { id: 5, name: 'Firma 5', logo: '/references/reference_logo_6.png' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Bize Güvenen Markalar</h1>
          <p className="mt-4 text-gray-600">Türkiye genelinde farklı sektörlerden yüzlerce firmaya iş sağlığı ve güvenliği süreçlerinde yol arkadaşlığı yapıyoruz.</p>
        </div>

        <div
          className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-3 bg-white p-12 rounded-2xl shadow-sm"
          data-aos="fade-up"
        >
          {referanslar.map(ref => (
            <div key={ref.id} className="flex justify-center bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <img
                className="max-h-12 w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                src={ref.logo}
                alt={ref.name}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
