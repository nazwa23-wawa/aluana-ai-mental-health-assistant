import AluanaChat from '@/components/AluanaChat';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header Section */}
      <header className="pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Aluana AI
            </h1>
            <div className="text-2xl md:text-3xl font-light text-muted-foreground mb-2">
              🌸 Teman Digital untuk Kesehatan Mental Anda 🌸
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Aluana AI hadir sebagai pendamping yang siap mendengarkan, memahami, dan membantu Anda 
            mengatasi berbagai tantangan psikologis dengan pendekatan yang empati dan profesional.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold mb-1">Dukungan Emosional</h3>
              <p className="text-sm text-muted-foreground">Mendengarkan tanpa menghakimi</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-semibold mb-1">Strategi Coping</h3>
              <p className="text-sm text-muted-foreground">Teknik praktis untuk mengelola stres</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-semibold mb-1">Pertumbuhan Diri</h3>
              <p className="text-sm text-muted-foreground">Membantu pengembangan mental positif</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Section */}
      <main className="px-4 pb-12">
        <AluanaChat />
      </main>

      {/* Footer Section */}
      <footer className="bg-muted/30 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center">
              ⚠️ Penting untuk Diketahui
            </h3>
            <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
              <li>• Aluana AI adalah alat bantu dan bukan pengganti konsultasi profesional</li>
              <li>• Untuk masalah serius, segera hubungi psikolog, psikiater, atau hotline krisis</li>
              <li>• Jika ada pikiran untuk menyakiti diri sendiri, segera cari bantuan darurat</li>
              <li>• Semua percakapan bersifat rahasia dan tidak disimpan secara permanen</li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold mb-3">🆘 Hotline Darurat Indonesia</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-card p-4 rounded-lg border">
                <strong>Hotline Nasional:</strong><br />
                📞 119 (24 jam)
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <strong>Into The Light:</strong><br />
                📞 021-788-42-334
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Aluana AI - Dibuat dengan ❤️ untuk kesehatan mental yang lebih baik
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
