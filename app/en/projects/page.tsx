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
      <Link href="/en/about" className="hover:text-rose-500 transition-colors">About Me</Link>
      <Link href="/en/projects" className="text-rose-500 font-semibold">Projects</Link>
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
        {/* Machine Learning Project Card */}
<div className="flex flex-col lg:flex-row gap-12 items-stretch bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl p-8 lg:p-12 shadow-sm z-10 w-full max-w-5xl">
  
  {/* Left Column: Visual Asset & Action Buttons */}
  <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
    <div className="aspect-video w-full rounded-2xl bg-gradient-to-tr from-rose-100 to-orange-50 border border-rose-50 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/40 rounded-full blur-2xl"></div>
      
      <span className="text-5xl mb-4 animate-bounce">📊</span>
      <h4 className="text-xl font-bold text-slate-800 mb-2">Cost-Sensitive Churn Prediction</h4>
      <p className="text-xs text-slate-500 max-w-xs font-light">Python, NLP, SHAP Analysis, ROI Optimization & Decision Support System</p>
    </div>
    
    {/* Dual Call to Action Buttons */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* GitHub Link */}
      <a 
        href="https://github.com/ebrarsultan/Telekom-Churn-Tahmini-YBS-Final.git" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-semibold shadow-sm transition-all duration-300"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Code on GitHub
      </a>

      {/* Report Button */}
      <a 
        href="/telekom-churn-raporu.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center gap-2 px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl text-xs font-semibold shadow-sm transition-all duration-300"
      >
        <span className="text-sm">📄</span>
        Read Project Report (PDF)
      </a>
    </div>
  </div>

  {/* Right Column: Text & Financial Simulation Table */}
  <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
    <div>
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-4">Telecom Churn Prediction & Financial Optimization</h3>
      
      <div className="space-y-4 text-sm leading-relaxed text-slate-600 font-light">
        <p>
          <strong className="font-semibold text-slate-800">Problem: </strong> 
          Preventing churn in the competitive telecom market [5]. Traditional models ignore business-specific retention costs, leading to poor ROI and resource misallocation [1, 2].
        </p>
        <p>
          <strong className="font-semibold text-slate-800">Process: </strong> 
          Blended operational customer metrics with Twitter NLP Sentiment Scores [6, 7]. Implemented SHAP analysis to make model decisions transparent [8, 9]. Developed a custom cost-sensitive threshold optimization algorithm to maximize the company's net profitability [1, 10].
        </p>
        <p>
          <strong className="font-semibold text-slate-800">Result: </strong> 
          Designed a multi-tier CRM retention strategy (direct agent calls for high-value customers, automated SMS promotions for lower-value cohorts) [11, 12]. Model-driven optimization proved a substantial increase in net profits [4, 13].
        </p>
      </div>
    </div>

    {/* Elegant Financial Simulation Table */}
    <div className="mt-4 border border-rose-100 rounded-2xl overflow-hidden bg-rose-50/20 text-xs">
      <div className="bg-rose-50 px-4 py-2 border-b border-rose-100 font-semibold text-rose-800">
        💰 Financial Simulation Scenario Comparison Matrix
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white border-b border-rose-50 text-slate-500 font-medium">
            <th className="p-3">Scenario Approach</th>
            <th className="p-3">Loss Cost (FN)</th>
            <th className="p-3">Intervention Cost (FP)</th>
            <th className="p-3">Net Financial Outcome</th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          <tr className="border-b border-rose-50">
            <td className="p-3 font-medium">Without Model</td>
            <td className="p-3">Maximum (90% Value Loss)</td>
            <td className="p-3">0 TL</td>
            <td className="p-3 text-red-500 font-medium">High Loss</td>
          </tr>
          <tr className="border-b border-rose-50">
            <td className="p-3 font-medium">Standard Prediction</td>
            <td className="p-3">Medium Loss</td>
            <td className="p-3">Fixed Ad Expenses</td>
            <td className="p-3 text-orange-500 font-medium">Low ROI</td>
          </tr>
          <tr className="bg-rose-50/30">
            <td className="p-3 font-semibold text-rose-700">Cost Optimization</td>
            <td className="p-3 font-semibold text-rose-700">Minimum (Targeted)</td>
            <td className="p-3 font-semibold text-rose-700">Optimized 100 TL</td>
            <td className="p-3 text-green-600 font-bold">Maximum Profitability</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

      </div>
    </main>
  );
}