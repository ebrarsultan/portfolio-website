import Link from 'next/link';

export default function Hakkimda() {
  return (
    <main className="relative flex min-h-screen flex-col items-center py-32 px-6 bg-white font-sans overflow-x-hidden">
      
      {/* Sabit Soft Arka Plan Işıkları */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 -z-10"></div>

      {/* Sabit Cam Efektli Menü */}
      <nav className="fixed top-8 z-50 flex items-center justify-center w-full px-6">
        <div className="flex gap-8 px-8 py-4 bg-white/70 backdrop-blur-md border border-slate-100 rounded-full shadow-sm text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-rose-500 transition-colors">Ana Sayfa</Link>
          <Link href="/projeler" className="hover:text-rose-500 transition-colors">Projeler</Link>
          <Link href="/hakkimda" className="text-rose-500 font-semibold">Hakkımda</Link>
          <Link href="/iletisim" className="hover:text-rose-500 transition-colors">İletişim</Link>
        </div>
      </nav>

      <h1 className="text-5xl font-bold mb-12 text-slate-800 tracking-tight">Hakkımda</h1>

      {/* Profil Özeti */}
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-10 mb-10 z-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Merhaba, Ben Ebrar Sultan Kaya</h2>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Bursa Uludağ Üniversitesi'nde Yönetim Bilişim Sistemleri 4. sınıf öğrencisiyim. Frontend ve backend geliştirme süreçlerinde aktif staj deneyimlerine sahibim. React, Next.js ve C# teknolojileri ile kullanıcı odaklı arayüzler geliştiriyor; takım çalışması ve problem çözme yeteneklerimle projelere değer katmayı hedefliyorum.
        </p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 z-10">
        {/* İş Deneyimi */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-8">
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">İş Deneyimi</h3>
          <div className="mb-6 relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">Stajyer | ALTTANTİRE</h4>
            <span className="text-sm text-rose-500 font-medium">Ekim 2025 – Şubat 2026</span>
            <p className="text-slate-600 mt-2 text-sm font-light">React ve Next.js ile arayüz geliştirme süreçleri.</p>
          </div>
          <div className="mb-6 relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">Stajyer Yazılım Geliştirici | IONTEGRA</h4>
            <span className="text-sm text-rose-500 font-medium">Haziran 2025 – Ekim 2025</span>
            <p className="text-slate-600 mt-2 text-sm font-light">ERP sistemleri ve veritabanı yönetimi eğitimi.</p>
          </div>
          <div className="relative pl-4 border-l-2 border-slate-200">
            <h4 className="font-semibold text-slate-700">İletişim Danışmanı | Turkcell</h4>
            <span className="text-sm text-slate-500 font-medium">Şubat 2021 – Mart 2024</span>
            <p className="text-slate-600 mt-2 text-sm font-light">Müşteri ihtiyaç analizi ve danışmanlık.</p>
          </div>
        </div>

        {/* Eğitim & Yetenekler */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Eğitim</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-slate-700">Bursa Uludağ Üniversitesi</h4>
            <p className="text-slate-500 text-sm mt-1">YBS (2022 – 2026)</p>
          </div>
          <div className="mb-10">
            <h4 className="font-semibold text-slate-700">Fenerbahçe Üniversitesi</h4>
            <p className="text-slate-500 text-sm mt-1">İngilizce Hazırlık (2021 – 2022)</p>
          </div>
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Teknik Beceriler</h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'C#', 'React.js', 'Next.js', 'SQL', 'Entity Framework'].map(skill => (
              <span key={skill} className="bg-rose-50 text-rose-700 border border-rose-100 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Şu An Ne Yapıyorum? (Now Page) */}
      <div className="max-w-4xl w-full bg-rose-50/50 border border-rose-100 rounded-3xl shadow-sm p-10 z-10 relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-4 text-rose-800 relative z-10">✨ Şu An Ne Yapıyorum?</h3>
        <p className="text-rose-900/80 leading-relaxed relative z-10 font-light">
          Şu anda kişisel dijital portfolyomu modern web teknolojileri ile geliştiriyorum. Bir yandan üniversite son sınıf eğitimime devam ederken, diğer yandan Full Stack becerilerimi güçlendiriyorum.
        </p>
      </div>
    </main>
  );
}