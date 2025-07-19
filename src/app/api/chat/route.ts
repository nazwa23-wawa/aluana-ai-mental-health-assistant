import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt tidak valid.' }, { status: 400 });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ 
        error: 'Konfigurasi server error: API key tidak ditemukan.' 
      }, { status: 500 });
    }

    // System prompt khusus untuk kesehatan mental dan psikologi
    const systemPrompt = `Anda adalah Aluana AI, asisten AI yang khusus membantu masalah kesehatan mental dan psikologi. 
    Tugas Anda:
    1. Memberikan dukungan emosional yang empati dan tidak menghakimi
    2. Menyediakan strategi coping yang praktis dan sehat
    3. Membantu mengidentifikasi pola pikir negatif
    4. Memberikan teknik relaksasi dan mindfulness
    5. Mendorong untuk mencari bantuan profesional jika diperlukan
    
    PENTING: Selalu ingatkan bahwa Anda bukan pengganti terapis profesional. Jawab dalam bahasa Indonesia dengan nada yang hangat dan mendukung.`;

    const payload = {
      model: "openai/gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000
    };

    const aiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:8000',
        'X-Title': 'Aluana AI'
      },
      body: JSON.stringify(payload)
    });

    if (!aiResponse.ok) {
      const errorData = await aiResponse.text();
      console.error('AI API Error:', errorData);
      return NextResponse.json({ 
        error: 'Terjadi kesalahan saat menghubungi layanan AI.' 
      }, { status: 500 });
    }

    const data = await aiResponse.json();
    const aiMessage = data.choices?.[0]?.message?.content || 'Maaf, saya tidak dapat memberikan respons saat ini.';

    return NextResponse.json({ 
      result: aiMessage,
      usage: data.usage 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Terjadi kesalahan internal server.' 
    }, { status: 500 });
  }
}
