import Link from 'next/link';

export default function Hakkimda() {
  return (
    <main className="relative flex min-h-screen flex-col items-center py-32 px-6 bg-white font-sans overflow-x-hidden">
      
      {/* Sabit Soft Arka Plan Işıkları */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 -z-10"></div>

      {/* Menü - Sadece Hakkımda Aktif */}
      <nav className="fixed top-8 z-50 flex items-center justify-center w-full px-6">
        <div className="flex items-center gap-6 px-8 py-4 bg-white/70 backdrop-blur-md border border-slate-100 rounded-full shadow-sm text-sm font-medium text-slate-500">
          <div className="flex gap-8">
            <Link href="/" className="hover:text-rose-500 transition-colors">Ana Sayfa</Link>
            <Link href="/hakkimda" className="text-rose-500 font-semibold">Hakkımda</Link>
            <Link href="/projeler" className="hover:text-rose-500 transition-colors">Projeler</Link>
            <Link href="/iletisim" className="hover:text-rose-500 transition-colors">İletişim</Link>
          </div>
          <div className="w-px h-5 bg-slate-300 ml-2"></div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
            <span className="text-rose-500 cursor-default">TR</span>
            <span className="text-slate-300">|</span>
            <Link href="/en/about" className="text-slate-400 hover:text-rose-500 transition-colors">EN</Link>
          </div>
        </div>
      </nav>

      <h1 className="text-5xl font-bold mb-12 text-slate-800 tracking-tight">Hakkımda</h1>

      {/* Profesyonel Özet */}
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-10 mb-10 z-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Merhaba, ben Ebrar Sultan Kaya</h2>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Yönetim Bilişim Sistemleri mezunuyum. Frontend ve backend geliştirme süreçlerinde ayrıca ERP ve SQL süreçlerinde staj deneyimine sahibim. React, Next.js, JavaScript teknolojileri ile kullanıcı odaklı arayüzler geliştirdim. Problem çözme, takım çalışması ve hızlı öğrenme konularında güçlüyüm. Teknoloji odaklı projelerde yer alarak kendimi geliştirmeyi ve şirkete değer katmayı hedefliyorum.
        </p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 z-10">
        {/* İş Deneyimi */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-8">
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Deneyim</h3>
          <div className="mb-6 relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">Stajyer | ALTTANTİRE</h4>
            <span className="text-sm text-rose-500 font-medium">Ekim 2025 – Şubat 2026</span>
            <p className="text-slate-600 mt-2 text-sm font-light">Proje geliştirme yaşam döngüsünü deneyimledim. React, Next.js ve JavaScript kullanarak kullanıcı arayüzleri geliştirdim.</p>
          </div>
          <div className="mb-6 relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">Stajyer Yazılım Geliştirici | IONTEGRA</h4>
            <span className="text-sm text-rose-500 font-medium">Haziran 2025 – Ekim 2025</span>
            <p className="text-slate-600 mt-2 text-sm font-light">ERP sistemleri ve depo süreçleri hakkında eğitim aldım. Veritabanı yönetimi konusunda temel deneyim kazandım.</p>
          </div>
          <div className="relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">İletişim Danışmanı | Turkcell</h4>
            <span className="text-sm text-rose-500 font-medium">Şubat 2021 – Mart 2024</span>
            <p className="text-slate-600 mt-2 text-sm font-light">Müşteri ihtiyaçlarını analiz edip uygun çözümler sundum. Danışmanlık ve satış odaklı iletişim süreçlerini yönettikten sonra memnuniyeti artırdım.</p>
          </div>
        </div>

        {/* Eğitim ve Beceriler */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Eğitim</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-slate-700">Bursa Uludağ Üniversitesi</h4>
            <p className="text-slate-500 text-sm mt-1">Yönetim Bilişim Sistemleri (2022 – 2026)</p>
          </div>
          <div className="mb-10">
            <h4 className="font-semibold text-slate-700">Fenerbahçe Üniversitesi</h4>
            <p className="text-slate-500 text-sm mt-1">İngilizce Hazırlık (2021 – 2022)</p>
          </div>
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Teknik Beceriler</h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'C#', 'React.js', 'Next.js', 'SQL', 'Entity Framework', 'Figma', 'Unity'].map(skill => (
              <span key={skill} className="bg-rose-50 text-rose-700 border border-rose-100 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Now Page */}
      <div className="max-w-4xl w-full bg-rose-50/50 border border-rose-100 rounded-3xl shadow-sm p-10 z-10 relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-4 text-rose-800 relative z-10"> Şu an ne yapıyorum?</h3>
        <p className="text-rose-900/80 leading-relaxed relative z-10 font-light">
          Şu an Bursa Uludağ Üniversitesi YBS mezunuyum, İstanbul'da yaşıyorum. Kişisel dijital portfolyomu geliştirebileceğim ve Front-end / Back-end teknolojileri üzerindeki yetkinliğimi artırabileceğim uzun dönemli iş arayışındayım.
        </p>
      </div>
    </main>
  );
}