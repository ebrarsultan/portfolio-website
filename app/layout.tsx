import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Burası Google ve LinkedIn gibi platformlarda görünecek SEO (Meta) bilgilerinizdir.
export const metadata: Metadata = {
  title: 'Ebrar Sultan Kaya | Full Stack Developer',
  description: 'Yönetim Bilişim Sistemleri öğrencisi. React, Next.js ve C# ile modern, yüksek performanslı ve kullanıcı odaklı web projeleri geliştiriyorum.',
  keywords: ['Ebrar Sultan Kaya', 'Full Stack Developer', 'Yazılım', 'Next.js', 'React', 'C#', 'Portfolyo'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}