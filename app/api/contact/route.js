import { NextResponse } from 'next/server';

function validatePayload(payload) {
  const errors = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push('Gecerli bir ad soyad giriniz.');
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push('Gecerli bir e-posta adresi giriniz.');
  }

  if (!payload.phone || payload.phone.trim().length < 10) {
    errors.push('Gecerli bir telefon numarasi giriniz.');
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.push('Mesaj alani en az 10 karakter olmalidir.');
  }

  return errors;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const errors = validatePayload(payload);

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const contactRecord = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      services: Array.isArray(payload.services) ? payload.services : [],
      createdAt: new Date().toISOString(),
      source: 'website-contact-form'
    };

    if (process.env.CONTACT_WEBHOOK_URL) {
      const webhookResponse = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactRecord)
      });

      if (!webhookResponse.ok) {
        return NextResponse.json({ success: false, message: 'Mesaj alindi ancak yonlendirme sirasinda bir sorun olustu.' }, { status: 502 });
      }
    } else {
      console.info('Contact form submission:', contactRecord);
    }

    return NextResponse.json({ success: true, message: 'Mesajiniz basariyla alindi.' }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ success: false, message: 'Sistemsel bir hata olustu.' }, { status: 500 });
  }
}
