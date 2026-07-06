'use client';
import { useState } from 'react';

const Contact = () => {
  const servicesItems = ['Yüksekte Çalışma Eğitimi', 'İşaretçi & Sapancı Eğitimi', 'Acil Durum Tatbikatı & Eğitimleri', 'Makina Periyodik Muayeneleri'];

  // Bildirim durumunu ve formun gönderilme durumunu yöneten state'ler (Aynen korundu)
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form gönderildiğinde çalışacak fonksiyon (İşlevsellik birebir aynı bırakıldı)
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+905383286995';
  const whatsappMessage = encodeURIComponent(
    'Merhaba, İnci İSG web sitenizden ulaşıyorum. Kurumsal İSG eğitimleri ve danışmanlık hizmetleriniz hakkında detaylı bilgi ve fiyat teklifi alabilir miyim?'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10 space-y-3">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block">İLETİŞİM Paneli</span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Bizimle İletişime Geçin</h1>
          <p className="leading-relaxed text-foreground/80">
            Hizmetlerimiz hakkında detaylı bilgi almak, uzman kadromuzla görüşmek veya kurumsal teklif talebinde bulunmak için bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 w-full">
            <div className="border border-gray-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h4 className="font-bold text-lg border-b border-gray-200/60 pb-3">İletişim Bilgilerimiz</h4>

              <div className="space-y-4">
                <a href="tel:+905383286995" className="flex items-start gap-4 p-3 rounded-2xl transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Telefon</span>
                    <span className=" font-semibold text-sm">+90 538 328 69 95</span>
                  </div>
                </a>

                <a href="mailto:info@inciisg.com" className="flex items-start gap-4 p-3 rounded-2xl transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">E-Posta</span>
                    <span className=" font-semibold text-sm">info@inciisg.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Merkez Ofis</span>
                    <p className="leading-relaxed text-foreground/80">Megapol Tower, Adalet Mah. Anadolu Cad. No:41 Bayraklı / İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-2xl transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Çalışma Saatleri</span>
                    <p className="leading-relaxed text-foreground/80">Pazartesi - Cumartesi</p>
                    <p className="leading-relaxed text-foreground/80">09:00 - 18:00</p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-green-700 font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-md text-foreground font-semibold  backdrop-blur-sm transition-all duration-150 rounded-xl border border-foreground/10"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp ile Hızlı Teklif Al
                </a>
              </div>
            </div>

            <div className="h-86  rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.646876176378!2d27.16543417655073!3d38.45520287182205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9991ca6399677%3A0x6e8e833446927dfa!2sMegapol%20Tower!5e0!3m2!1str!2str!4v1710000000000"
                className="w-full h-full border-0 absolute inset-0 m-0 p-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="İnci İSG Ofis Konumu"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-gray-200/60 rounded-3xl p-6 sm:p-10 shadow-sm w-full">
              <h3 className=" font-bold text-xl mb-6 border-b border-gray-100 pb-4">Mesaj Gönderin</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="c5a57ea1-814f-4dbf-a046-57b09dc30ab3" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider">Adınız Soyadınız</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ahmet Yılmaz"
                      className="w-full px-4 py-3  outline-none border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm rounded-xl transition-all duration-200 placeholder-gray-400 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold  uppercase tracking-wider">E-Posta Adresiniz</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ornek@firma.com"
                      className="w-full px-4 py-3  outline-none border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm rounded-xl transition-all duration-200 placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold  uppercase tracking-wider">Telefon Numaranız</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-gray-200 pr-2">
                      <select className="text-xs font-semibold text-gray-600 bg-transparent outline-none rounded-lg h-full cursor-pointer">
                        <option>+90</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      name="phone"
                      placeholder="5xx xxx xxxx"
                      required
                      className="w-full pl-[4.8rem] pr-4 py-3 outline-none border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm rounded-xl transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold  uppercase tracking-wider block">İlgilendiğiniz Hizmetler</label>
                  <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 pt-1">
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-x-3 text-xs border border-slate-100 px-3 py-3 rounded-xl hover:bg-slate-100/70 transition-colors">
                        <div className="relative flex items-center">
                          <input id={`service-${idx}`} type="checkbox" name={`Servis - ${item}`} className="checkbox-item peer hidden" />
                          <label
                            htmlFor={`service-${idx}`}
                            className="relative flex w-5 h-5  peer-checked:bg-blue-600 rounded-md border border-gray-300 ring-offset-2 ring-blue-500 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                          ></label>
                        </div>
                        <label htmlFor={`service-${idx}`} className="cursor-pointer select-none  font-medium">
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider">Mesajınız</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Talebinizi veya sorularınızı buraya detaylıca yazabilirsiniz..."
                    className="w-full h-36 px-4 py-3 resize-none outline-none border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm rounded-xl transition-all duration-200 placeholder-gray-400 text-sm"
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-4 text-white font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-blue-500/10 active:scale-[0.99] disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Mesajınız İletiliyor...
                    </>
                  ) : (
                    'Mesaj Gönder 🚀'
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 text-sm text-green-800 bg-green-50 border border-green-200 rounded-xl flex items-start gap-x-3">
                    <span className="text-base">✓</span>
                    <div>
                      <span className="font-bold">Başarılı!</span> Mesajınız güvenle ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-xl flex items-start gap-x-3">
                    <span className="text-base">✕</span>
                    <div>
                      <span className="font-bold">Hata!</span> Sistem kaynaklı bir sorun oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
