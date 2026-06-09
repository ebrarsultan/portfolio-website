import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white font-sans">
      
      {/* Çok Daha Soft ve Pudra Tonlarında Arka Plan Işıkları */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

      {/* Menü (Dil Seçeneği Eklendi) */}
      <nav className="fixed top-8 z-50 flex items-center justify-center w-full px-6">
        <div className="flex items-center gap-6 px-8 py-4 bg-white/70 backdrop-blur-md border border-slate-100 rounded-full shadow-sm text-sm font-medium text-slate-500">
          
          {/* Sayfa Linkleri */}
          <div className="flex gap-8">
            <Link href="/" className="text-rose-500 font-semibold">Ana Sayfa</Link>
            <Link href="/hakkimda" className="hover:text-rose-500 transition-colors">Hakkımda</Link>
            <Link href="/projeler" className="hover:text-rose-500 transition-colors">Projeler</Link>
            <Link href="/iletisim" className="hover:text-rose-500 transition-colors">İletişim</Link>
          </div>

          {/* Dikey Ayraç ve TR | EN Geçiş Alanı */}
          <div className="w-px h-5 bg-slate-300 ml-2"></div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
            <span className="text-rose-500 cursor-default">TR</span>
            <span className="text-slate-300">|</span>
            <Link href="/en" className="text-slate-400 hover:text-rose-500 transition-colors">EN</Link>
          </div>
          
        </div>
      </nav>

      {/* Ana İçerik */}
      <div className="z-10 flex flex-col items-center text-center max-w-3xl px-6 mt-16">
        
        {/* BOYUTU BÜYÜTÜLEN ZARİF PROFİL FOTOĞRAFI ALANI */}
        <div className="relative w-48 h-48 md:w-52 md:h-52 mb-8 rounded-full p-1.5 bg-gradient-to-tr from-rose-200 to-orange-100 shadow-md hover:scale-105 transition-transform duration-500">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-rose-50">
            <Image 
              src="/ben.jpeg" 
              alt="Ebrar Sultan Kaya" 
              fill 
              className="object-cover object-center"
              sizes="(max-width: 208px) 100vw, 208px"
            />
          </div>
        </div>

        {/* Şık ve Soft Ünvan Rozeti */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-400"></span>
          </span>
          Full Stack Developer
        </div>

        {/* Başlık */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-slate-800">
          Ebrar Sultan <br />
          Kaya
        </h1>
        
        {/* Alt Metin */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-light">
          Yönetim Bilişim Sistemleri öğrencisiyim. <strong className="font-medium text-slate-700">React, Next.js ve C#</strong> ile modern, enerjik ve kullanıcı odaklı dijital deneyimler tasarlıyorum.
        </p>

        {/* Soft Pastel Pembe (Rose) Buton */}
        <a 
          href="/EbrarSultan_CV.pdf" 
          download 
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-rose-50 text-rose-700 border border-rose-200 rounded-full font-medium text-lg shadow-sm hover:bg-rose-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:-translate-y-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Özgeçmişimi İndir
        </a>
      </div>
    </main>
  );
}