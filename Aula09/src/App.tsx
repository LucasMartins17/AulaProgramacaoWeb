import { useEffect, useState } from 'react';
import { Clock, Calendar, Globe, Cpu, Activity } from 'lucide-react';

interface HorarioData {
  data: string;
  hora: string;
}

const App = () => {
  const [dados, setDados] = useState<HorarioData | null>(null);
  const [erro, setErro] = useState(false);

  const buscarHorario = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/horario');
      if (!response.ok) throw new Error();
      const data = await response.json();
      setDados(data);
      setErro(false);
    } catch (err) {
      setErro(true);
    }
  };

  useEffect(() => {
    buscarHorario();
    const timer = setInterval(buscarHorario, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND MESH GRADIENT (UX VISUAL) --- */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        
        {/* --- HEADER: TECH STACK INDICATOR --- */}
        <div className="flex justify-between items-end mb-12 px-4">
          <div className="space-y-1">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/60">System Status</h3>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><Cpu size={10}/></div>
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><Globe size={10}/></div>
              </div>
              <span className="text-xs font-medium text-slate-400">NodeJS Express API <span className="mx-1 text-slate-700">•</span> v1.0.0</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-md border ${erro ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
              <Activity size={12} className={erro ? "" : "animate-pulse"} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{erro ? 'Offline' : 'Connected'}</span>
            </div>
          </div>
        </div>

        {/* --- MAIN DISPLAY: THE LIQUID GLASS OBJECT --- */}
        <div className="relative group perspective-1000">
          {/* Efeito de Glow Profundo */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          
          <div className="relative bg-[#0f172a]/40 border border-white/10 backdrop-blur-[40px] rounded-[3.5rem] p-16 shadow-2xl transition-all duration-700 hover:scale-[1.01] hover:border-white/20">
            
            {/* Glossy Reflection (O detalhe da "Gota") */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/5 rounded-full blur-xl"></div>

            <div className="flex flex-col items-center">
              {/* Relógio Digital */}
              <div className="relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] whitespace-nowrap">Atomic TimeSync</span>
                <h1 className="text-[100px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 leading-none tabular-nums drop-shadow-2xl">
                  {dados?.hora || "00:00:00"}
                </h1>
              </div>

              {/* Data e Divider */}
              <div className="mt-10 flex items-center gap-6 w-full">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
                <div className="flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/5">
                  <Calendar size={16} className="text-emerald-500" />
                  <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
                    {dados?.data || "Fetching..."}
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
              </div>
            </div>
          </div>

          {/* Efeito de Reflexo Inferior */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-emerald-500/10 blur-3xl rounded-full -z-10"></div>
        </div>

        {/* --- FOOTER: UX FEEDBACK --- */}
        <div className="mt-20 grid grid-cols-2 gap-8 px-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-500">
              <Clock size={12} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Update Rate</span>
            </div>
            <p className="text-xs text-slate-400">Dados sincronizados em tempo real via Polling HTTP (1000ms).</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-blue-500">
              <Activity size={12} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Protocol</span>
            </div>
            <p className="text-xs text-slate-400">REST API com suporte a CORS e cabeçalhos de segurança ativos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;