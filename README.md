# 🌸 Aluana AI - Teman Digital untuk Kesehatan Mental

![Aluana AI Banner](https://img.shields.io/badge/Aluana%20AI-Mental%20Health%20Assistant-blueviolet?style=for-the-badge&logo=heart)

Aluana AI adalah aplikasi AI yang dirancang khusus untuk membantu masalah kesehatan mental dan psikologi. Dengan pendekatan yang empati dan profesional, Aluana AI hadir sebagai teman digital yang siap mendengarkan, memahami, dan memberikan dukungan emosional.

## ✨ Fitur Utama

- 🤖 **Chat AI Cerdas** - Percakapan natural dengan AI yang memahami konteks psikologi
- 🎯 **Dukungan Emosional** - Mendengarkan tanpa menghakimi dan memberikan validasi
- 🧠 **Strategi Coping** - Teknik praktis untuk mengelola stres dan kecemasan
- 🌱 **Pertumbuhan Diri** - Membantu pengembangan mental yang positif
- 🔒 **Privasi Terjamin** - Percakapan tidak disimpan secara permanen
- 📱 **Responsive Design** - Dapat diakses dari berbagai perangkat
- 🌙 **Dark/Light Mode** - Mendukung tema gelap dan terang

## 🚀 Quick Start

### Prasyarat

- Node.js 18+ 
- npm atau yarn
- API Key dari OpenRouter

### Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd aluana-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` dan tambahkan API key Anda:
   ```env
   OPENROUTER_API_KEY=your-api-key-here
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   ```

5. **Buka aplikasi**
   ```
   http://localhost:8000
   ```

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15 (App Router)
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **AI Provider**: OpenRouter (GPT-4)
- **Fonts**: Inter & Poppins (Google Fonts)

## 📁 Struktur Folder

```
aluana-ai/
├── .vscode/                 # VS Code configuration
│   ├── launch.json         # Debug configuration
│   ├── settings.json       # Editor settings
│   └── tasks.json          # Build tasks
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── api/chat/       # Chat API endpoint
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── AluanaChat.tsx  # Main chat component
│   │   ├── ChatMessage.tsx # Message display component
│   │   └── LoadingSpinner.tsx # Loading states
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── .env.example            # Environment variables template
├── .gitignore
├── components.json         # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── package.json
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🔧 VS Code Integration

Aplikasi ini sudah dikonfigurasi untuk bekerja optimal dengan VS Code:

### Debug Configuration
- **Next.js: Debug Server-Side** - Debug server-side code
- **Next.js: Debug Client-Side** - Debug client-side code  
- **Next.js: Debug Full Stack** - Debug both server and client

### Tasks Available
- `🚀 Start Aluana AI Dev Server` - Menjalankan development server
- `📦 Install Dependencies` - Install npm packages
- `🔨 Build Production` - Build untuk production
- `🧹 Lint Code` - Menjalankan ESLint
- `🔄 Restart Dev Server` - Restart development server

### Cara Menggunakan
1. Buka folder project di VS Code
2. Tekan `Ctrl+Shift+P` (Windows/Linux) atau `Cmd+Shift+P` (Mac)
3. Ketik "Tasks: Run Task" dan pilih task yang diinginkan
4. Atau gunakan `F5` untuk mulai debugging

## 🎨 Customization

### Mengubah Tema
Edit file `src/app/globals.css` untuk mengubah color scheme:

```css
:root {
  --primary: your-color-here;
  --secondary: your-color-here;
  /* ... */
}
```

### Mengubah System Prompt
Edit file `src/app/api/chat/route.ts` pada bagian `systemPrompt`:

```typescript
const systemPrompt = `Your custom system prompt here...`;
```

### Menambah Komponen UI
Gunakan shadcn/ui CLI untuk menambah komponen:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🔐 Keamanan & Privasi

- ✅ API key disimpan di environment variables
- ✅ Tidak ada data percakapan yang disimpan di database
- ✅ Request ke AI provider menggunakan HTTPS
- ✅ Input validation untuk mencegah injection attacks
- ✅ Error handling yang proper

## ⚠️ Disclaimer Penting

- Aluana AI adalah alat bantu dan **BUKAN** pengganti konsultasi dengan psikolog atau psikiater profesional
- Untuk masalah serius, segera hubungi tenaga kesehatan mental profesional
- Jika ada pikiran untuk menyakiti diri sendiri, segera cari bantuan darurat
- Hotline Krisis Indonesia: **119** (24 jam)

## 🆘 Hotline Darurat

| Layanan | Nomor | Waktu |
|---------|-------|-------|
| Hotline Nasional | 119 | 24 jam |
| Into The Light | 021-788-42-334 | 24 jam |
| Yayasan Pulih | 021-788-42-334 | Senin-Jumat 09:00-17:00 |

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch untuk fitur baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak & Dukungan

- **Email**: support@aluana-ai.com
- **Website**: https://aluana-ai.com
- **Issues**: [GitHub Issues](https://github.com/your-username/aluana-ai/issues)

---

<div align="center">

**Dibuat dengan ❤️ untuk kesehatan mental yang lebih baik**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>
