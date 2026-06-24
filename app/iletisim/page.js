'use client';
import React, { useState } from 'react';

const Contact = () => {
  const servicesItems = ['Yüksekte Çalışma Eğitimi', 'İşaretçi & Sapancı Eğitimi', 'Acil Durum Tatbikatı & Eğitimleri', 'Makina Periyodik Muayeneleri'];
  // Bildirim durumunu ve formun gönderilme durumunu yöneten state'ler
  const [status, setStatus] = useState(null); // "success", "error" veya null
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async e => {
    e.preventDefault(); // Sayfanın yenilenmesini engelliyoruz
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
        e.target.reset(); // Formun içindeki tüm inputları temizler
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex overflow-hidden pt-28">
      <div className="flex-1 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Get in touch</h3>
            <p className="mt-3">We’d love to hear from you! Please fill out the form bellow.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 lg:pb-12">
            <input type="hidden" name="access_key" value="c5a57ea1-814f-4dbf-a046-57b09dc30ab3" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  name="phone"
                  placeholder="+90(xxx)xxxxxxx"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Services</label>
              <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                {servicesItems.map((item, idx) => (
                  <li key={idx} className="flex gap-x-3 text-sm">
                    <div>
                      <input id={`service-${idx}`} type="checkbox" name={`Servis - ${item}`} className="checkbox-item peer hidden" />
                      <label
                        htmlFor={`service-${idx}`}
                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                      ></label>
                    </div>
                    <label htmlFor={`service-${idx}`} className="cursor-pointer select-none">
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full mt-2 h-24 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              {isSubmitting ? (
                <>
                  {/* Basit bir Tailwind Loading Spinner'ı */}
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Gönderiliyor...
                </>
              ) : (
                'Mesaj Gönder'
              )}
            </button>
            {/* Şık Bildirim (Notification) Alanı */}
            {status === 'success' && (
              <div className="mb-6 p-4 text-sm text-green-700 bg-green-50 rounded-lg border border-green-200" data-aos="fade-down">
                <span className="font-semibold">Başarılı!</span> Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200" data-aos="fade-down">
                <span className="font-semibold">Hata!</span> Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
