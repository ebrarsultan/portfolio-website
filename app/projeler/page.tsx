import Link from 'next/link';

export default function Projeler() {
  return (
    <main className="relative flex min-h-screen flex-col items-center py-32 px-6 bg-white font-sans overflow-x-hidden">
      
      {/* Sabit Soft Arka Plan Işıkları */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 -z-10"></div>

      {/* Sabit Cam Efektli Menü */}
      <nav className="fixed top-8 z-50 flex items-center justify-center w-full px-6">
        <div className="flex gap-8 px-8 py-4 bg-white/70 backdrop-blur-md border border-slate-100 rounded-full shadow-sm text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-rose-500 transition-colors">Ana Sayfa</Link>
          <Link href="/projeler" className="text-rose-500 font-semibold">Projeler</Link>
          <Link href="/hakkimda" className="hover:text-rose-500 transition-colors">Hakkımda</Link>
          <Link href="/iletisim" className="hover:text-rose-500 transition-colors">İletişim</Link>
        </div>
      </nav>

      <h1 className="text-5xl font-bold mb-16 text-slate-800 tracking-tight">Projelerim</h1>
      
      <div className="flex flex-col gap-16 max-w-6xl w-full z-10">
        
        {/* 1. Atet Projesi */}
        <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="md:w-1/2 bg-rose-50 relative min-h-[350px] flex items-center justify-center overflow-hidden">
            <iframe className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://www.youtube.com/embed/wnbh3hW_Wcs?autoplay=1&mute=1&loop=1&playlist=wnbh3hW_Wcs" title="Atet Projesi" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Akademik Topluluk Etkinlik Takvimi</h2>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Problem: </strong> Öğrencilerin akademik toplulukların etkinliklerini tek bir yerden görüntüleyebileceği bir platforma ihtiyaç duyulması.
            </div>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Süreç: </strong> Frontend'de Next.js, Backend'de Node.js ve veritabanında SQLite kullanarak rol bazlı bir mimari kurdum.
            </div>
            <div className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Sonuç: </strong> Etkinlikleri takvim görünümünde listeleyen, sade ve mobil uyumlu bir arayüz ortaya çıkardım.
            </div>
          </div>
        </div>

        {/* 2. Comparison Game */}
        <div className="flex flex-col md:flex-row-reverse bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="md:w-1/2 bg-black relative min-h-[350px] flex items-center justify-center overflow-hidden">
            <iframe className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://www.youtube.com/embed/eFsOPRQD8co?autoplay=1&mute=1&loop=1&playlist=eFsOPRQD8co" title="Comparison Game" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Comparison Game</h2>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Problem: </strong> Matematik işlemleriyle oyuncunun hesap, dikkat ve hafıza yeteneğini kısıtlı sürede (120 sn) ölçecek bir yapı kurmak.
            </div>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Süreç: </strong> 6 zorluk seviyesi barındıran, her doğru ve yanlışta puanı/seviyeyi dinamik güncelleyen bir algoritma kodladım.
            </div>
            <div className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Sonuç: </strong> Doğru, yanlış ve skoru dinamik hesaplayan rekabetçi bir mantık oyunu geliştirip GitHub'da yayınladım.
            </div>
          </div>
        </div>

        {/* 3. UniSys */}
        <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="md:w-1/2 bg-rose-50 relative min-h-[350px] flex items-center justify-center overflow-hidden">
            <iframe className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://www.youtube.com/embed/LSgIKmVeegM?autoplay=1&mute=1&loop=1&playlist=LSgIKmVeegM" title="UniSys Projesi" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">UniSys - Öğrenci Bilgi Sistemi</h2>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Problem: </strong> Üniversite süreçlerinin dijitalleştirilerek 3 farklı kullanıcı (memur, akademisyen, öğrenci) için ortak bir platformda birleştirilmesi.
            </div>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Süreç: </strong> C# ve ASP.NET Core MVC ile geliştirdim. Entity Framework (Code First) ve Rol Tabanlı Yetkilendirme kurguladım.
            </div>
            <div className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Sonuç: </strong> Bootstrap 5 ile "Soft UI" estetiğinde tasarlanmış, modern bir öğrenci otomasyonu ortaya çıkardım.
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}