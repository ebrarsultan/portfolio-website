import Link from 'next/link';

export default function ProjectsEN() {
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
            <Link href="/en/projects" className="text-rose-500 font-semibold">Projects</Link>
            <Link href="/en/about" className="hover:text-rose-500 transition-colors">About Me</Link>
            <Link href="/en/contact" className="hover:text-rose-500 transition-colors">Contact</Link>
          </div>
          <div className="w-px h-5 bg-slate-300 ml-2"></div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
            <Link href="/projeler" className="text-slate-400 hover:text-rose-500 transition-colors">TR</Link>
            <span className="text-slate-300">|</span>
            <span className="text-rose-500 cursor-default">EN</span>
          </div>
        </div>
      </nav>

      <h1 className="text-5xl font-bold mb-16 text-slate-800 tracking-tight">My Projects</h1>
      
      <div className="flex flex-col gap-16 max-w-6xl w-full z-10">
        
        {/* 1. Atet Project */}
        <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="md:w-1/2 bg-rose-50 relative min-h-[350px] flex items-center justify-center overflow-hidden">
            <iframe className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://www.youtube.com/embed/wnbh3hW_Wcs?autoplay=1&mute=1&loop=1&playlist=wnbh3hW_Wcs" title="Atet Projesi" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Academic Community Event Calendar</h2>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Problem: </strong> Students needed a unified platform to view, filter, and apply for academic community events [3].
            </div>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Process: </strong> Built a role-based architecture using Next.js for the frontend, Node.js for the backend, and SQLite/PostgreSQL for the database [4].
            </div>
            <div className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Result: </strong> Developed a simple, responsive UI where users can view events in list or calendar formats [4, 5].
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
              <strong className="text-slate-800">Problem: </strong> Creating a structure to test players' calculation, attention, and memory skills with random math operations under a strict 120-second limit [6, 7].
            </div>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Process: </strong> Coded an algorithm with 6 difficulty levels, dynamically updating the score and difficulty based on correct/incorrect answers [6, 8].
            </div>
            <div className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Result: </strong> Published a competitive logic game on GitHub that dynamically calculates the score at the end of the round [6].
            </div>
          </div>
        </div>

        {/* 3. UniSys */}
        <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="md:w-1/2 bg-rose-50 relative min-h-[350px] flex items-center justify-center overflow-hidden">
            <iframe className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://www.youtube.com/embed/LSgIKmVeegM?autoplay=1&mute=1&loop=1&playlist=LSgIKmVeegM" title="UniSys Projesi" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">UniSys - Student Information System</h2>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Problem: </strong> The need to digitize university academic processes and combine them in a common platform for clerks, academics, and students [9].
            </div>
            <div className="mb-4 text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Process: </strong> Developed using C# and ASP.NET Core MVC. Integrated Entity Framework (Code First) and Role-Based Authorization [10].
            </div>
            <div className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Result: </strong> Delivered a modern student automation system designed with Bootstrap 5 in a "Soft UI" aesthetic [10, 11].
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}