import { useEffect, useState } from 'react';
import { Clock, Calendar, RefreshCw, Server } from 'lucide-react'; // Instale: npm install lucide-react

interface HorarioData {
  data: string;
  hora: string;
}

const App = () => {
  const [dados, setDados] = useState<HorarioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const buscarHorario = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/horario');
      const data = await response.json();
      setDados(data);
      setErro(false);
    } catch (err) {
      setErro(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarHorario();
    const intervalo = setInterval(buscarHorario, 5000); // Atualiza a cada 5s para não sobrecarregar
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* Efeito de Fundo - Luzes Neon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-6">
        
        {/* Header de Status */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${erro ? 'bg-red-500' : 'bg-emerald-500 shadow-[0_0_8px_#10b981]'}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {erro ? 'System Offline' : 'System Online'}
            </span>
          </div>
          <Server size={14} className="text-slate-600" />
        </div>

        {/* Card Principal */}
        <div className="bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
          
          {/* Linha de brilho no topo do card */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {erro ? (
            <div className="py-10 flex flex-col items-center">
              <div className="bg-red-500/10 p-4 rounded-full mb-4">
                <RefreshCw size={32} className="text-red-500 animate-spin" />
              </div>
              <p className="text-red-400 font-medium text-center">Falha na conexão com o servidor Express</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Seção da Hora */}
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-slate-500 mb-2">
                  <Clock size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Current Server Time</span>
                </div>
                <h2 className="text-7xl font-black tracking-tighter text-white tabular-nums">
                  {dados?.hora.split(':')[0]}<span className="text-emerald-500 animate-pulse">:</span>{dados?.hora.split(':')[1]}
                  <span className="text-2xl text-slate-500 ml-2 font-light">{dados?.hora.split(':')[2]}</span>
                </h2>
              </div>

              {/* Seção da Data */}
              <div className="flex items-center justify-center gap-3 bg-white/5 py-3 px-6 rounded-2xl border border-white/5">
                <Calendar size={18} className="text-emerald-400" />
                <span className="text-lg font-medium text-slate-300">
                  {dados?.data || "---"}
                </span>
              </div>
            </div>
          )}

          {/* Botão de Refresh */}
          <button 
            onClick={buscarHorario}
            disabled={loading}
            className="w-full mt-10 group/btn flex items-center justify-center gap-2 py-4 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50"
          >
            <RefreshCw size={18} className={`${loading ? 'animate-spin' : 'group-hover/btn:rotate-180 transition-transform duration-500'}`} />
            SYNC WITH SERVER
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-[9px] font-bold uppercase tracking-[0.4em] leading-loose">
            Full Stack Deployment Protocol <br />
            <span className="text-slate-400">Vercel (Front) ↔ Render (API)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;