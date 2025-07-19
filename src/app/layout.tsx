import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Aluana AI - Teman Digital untuk Kesehatan Mental',
  description: 'Aluana AI adalah asisten AI yang khusus membantu masalah kesehatan mental dan psikologi dengan pendekatan yang empati dan profesional.',
  keywords: 'kesehatan mental, psikologi, AI, chatbot, dukungan emosional, terapi, konseling',
  authors: [{ name: 'Aluana AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Aluana AI - Teman Digital untuk Kesehatan Mental',
    description: 'Pendamping AI yang siap mendengarkan dan membantu mengatasi tantangan psikologis Anda',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluana AI - Teman Digital untuk Kesehatan Mental',
    description: 'Pendamping AI yang siap mendengarkan dan membantu mengatasi tantangan psikologis Anda',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          </div>
          
          {children}
        </div>
      </body>
    </html>
  );
}
