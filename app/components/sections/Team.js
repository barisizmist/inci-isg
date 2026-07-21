

const Team = () => {
  const expertise = [
    {
      icon: '🛡️',
      title: 'İş Güvenliği Uzmanı',
      description: 'A, B, C sınıfı uzmanlar tarafından işyeri denetimleri ve riskler değerlendirmesi'
    },
    {
      icon: '🩺',
      title: 'İşyeri Hekimi',
      description: 'Çalışan sağlığının takibi, periyodik muayeneler ve mesleki hastalık önlenmesi'
    },
    {
      icon: '🎓',
      title: 'İSG Eğitmeni',
      description: 'Mevzuata uygun profesyonel İSG, yangın ve acil durum eğitimleri'
    }
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold sm:text-4xl">Deneyimli Uzman Kadromuz</h3>
          <p className="text-foreground/80 leading-relaxed mt-3">10+ yıllık deneyim, mevzuat bilgisi ve proaktif yaklaşımla işyerlerinizin güvenliğini sağlamlaştırıyoruz.</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {expertise.map((item, idx) => (
              <li key={idx}>
                <div className="text-5xl mx-auto mb-4">{item.icon}</div>
                <div className="mt-2">
                  <h4 className="font-semibold sm:text-lg">{item.title}</h4>
                  <p className="text-foreground/80 leading-relaxed mt-2">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
