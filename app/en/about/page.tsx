import Link from 'next/link';

export default function AboutEN() {
  return (
    <main className="relative flex min-h-screen flex-col items-center py-32 px-6 bg-white font-sans overflow-x-hidden">
      
      {/* Sabit Soft Arka Plan Işıkları */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 -z-10"></div>

      {/* İngilizce Menü */}
      <nav className="fixed top-8 z-50 flex items-center justify-center w-full px-6">
  <div className="flex items-center gap-6 px-8 py-4 bg-white/70 backdrop-blur-md border border-slate-100 rounded-full shadow-sm text-sm font-medium text-slate-500">
    <div className="flex gap-8">
      <Link href="/en" className="hover:text-rose-500 transition-colors">Home</Link>
      <Link href="/en/about" className="text-rose-500 font-semibold">About Me</Link>
      <Link href="/en/projects" className="hover:text-rose-500 transition-colors">Projects</Link>
      <Link href="/en/contact" className="hover:text-rose-500 transition-colors">Contact</Link>
    </div>
    <div className="w-px h-5 bg-slate-300 ml-2"></div>
    <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
      <Link href="/hakkimda" className="text-slate-400 hover:text-rose-500 transition-colors">TR</Link>
      <span className="text-slate-300">|</span>
      <span className="text-rose-500 cursor-default">EN</span>
    </div>
  </div>
</nav>

      <h1 className="text-5xl font-bold mb-12 text-slate-800 tracking-tight">About Me</h1>

      {/* Professional Summary */}
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-10 mb-10 z-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Hello, I'm Ebrar Sultan Kaya</h2>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          I am a 4th-year Management Information Systems student at Bursa Uludag University. I have internship experiences in frontend and backend development processes [13]. I develop user-oriented interfaces using React, Next.js, and C# technologies; aiming to add value to projects with my teamwork and problem-solving skills [13, 14].
        </p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 z-10">
        {/* Work Experience */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-8">
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Experience</h3>
          <div className="mb-6 relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">Intern | ALTTANTIRE</h4>
            <span className="text-sm text-rose-500 font-medium">Oct 2025 – Feb 2026</span>
            <p className="text-slate-600 mt-2 text-sm font-light">Received training on ERP systems and warehouse processes [15].</p>
          </div>
          <div className="mb-6 relative pl-4 border-l-2 border-rose-300">
            <h4 className="font-semibold text-slate-700">Software Developer Intern | IONTEGRA</h4>
            <span className="text-sm text-rose-500 font-medium">Jun 2025 – Oct 2025</span>
            <p className="text-slate-600 mt-2 text-sm font-light">Developed user interfaces using React, Next.js, and JavaScript [14].</p>
          </div>
          <div className="relative pl-4 border-l-2 border-slate-200">
            <h4 className="font-semibold text-slate-700">Communication Consultant | Turkcell</h4>
            <span className="text-sm text-slate-500 font-medium">Feb 2021 – Mar 2024</span>
            <p className="text-slate-600 mt-2 text-sm font-light">Managed consulting and sales-oriented communication processes [14].</p>
          </div>
        </div>

        {/* Education & Skills */}
        <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Education</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-slate-700">Bursa Uludag University</h4>
            <p className="text-slate-500 text-sm mt-1">MIS (2022 – 2026) [15]</p>
          </div>
          <div className="mb-10">
            <h4 className="font-semibold text-slate-700">Fenerbahce University</h4>
            <p className="text-slate-500 text-sm mt-1">English Preparatory (2021 – 2022) [15]</p>
          </div>
          <h3 className="text-xl font-bold mb-6 text-slate-800 border-b border-rose-50 pb-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'C#', 'React.js', 'Next.js', 'SQL', 'Entity Framework'].map(skill => (
              <span key={skill} className="bg-rose-50 text-rose-700 border border-rose-100 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Now Page */}
      <div className="max-w-4xl w-full bg-rose-50/50 border border-rose-100 rounded-3xl shadow-sm p-10 z-10 relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-4 text-rose-800 relative z-10">✨ What I'm doing now?</h3>
        <p className="text-rose-900/80 leading-relaxed relative z-10 font-light">
          Currently, I am developing my personal digital portfolio using modern web technologies. While continuing my senior year at the university, I am also strengthening my Full Stack skills.
        </p>
      </div>
    </main>
  );
}