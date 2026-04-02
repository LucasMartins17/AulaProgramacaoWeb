import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function Calculadora() {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState('');
  const [isResult, setIsResult] = useState(false);

  const btnClass = "bg-white border-4 border-black p-4 font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center justify-center";

  // Lógica de cálculo refinada
  const handleCalculate = () => {
    if (!display) return;
    try {
      setHistory(display + ' =');
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(String(Number(result.toFixed(4)))); // Evita dízimas gigantes
      setIsResult(true);
    } catch (e) {
      setDisplay("Error");
      setTimeout(() => setDisplay(''), 1000);
    }
  };

  const handleClick = (val) => {
    if (isResult) {
      // Se já houver um resultado e clicar em número, começa conta nova
      // Se clicar em operador, continua do resultado
      if (['+', '-', '*', '/'].includes(val)) {
        setIsResult(false);
        setDisplay(display + val);
      } else {
        setIsResult(false);
        setDisplay(val);
      }
    } else {
      setDisplay(display + val);
    }
  };

  // Suporte a teclado (Diferencial de ADS)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (/[0-9]/.test(e.key)) handleClick(e.key);
      if (['+', '-', '*', '/'].includes(e.key)) handleClick(e.key);
      if (e.key === 'Enter' || e.key === '=') handleCalculate();
      if (e.key === 'Backspace') setDisplay(d => d.slice(0, -1));
      if (e.key === 'Escape') setDisplay('');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, isResult]);

  return (
    <NeoCard title="Neo-Calc / Pro">
      <div className="flex flex-col gap-4">
        
        {/* DISPLAY COM HISTÓRICO */}
        <div className="bg-black p-6 border-4 border-black shadow-[inset_0_4px_0_rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="text-neo-green/40 font-mono text-xs uppercase mb-1 h-4 tracking-widest">
            {history}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={display}
              initial={isResult ? { opacity: 0, scale: 0.95 } : false}
              animate={{ opacity: 1, scale: 1 }}
              className="text-neo-green font-mono text-5xl tracking-tighter break-all text-right h-12 flex items-center justify-end"
            >
              {display || '0'}
            </motion.div>
          </AnimatePresence>
          {/* Efeito de Scanline (Linhas de monitor antigo) */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
        </div>

        {/* GRID DE BOTÕES */}
        <div className="grid grid-cols-4 gap-3">
          <button 
            onClick={() => { setDisplay(''); setHistory(''); }}
            className="col-span-2 bg-red-500 text-white border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            C / CLEAR
          </button>
          
          <button 
            onClick={() => setDisplay(display.slice(0, -1))}
            className="col-span-2 bg-neo-yellow border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            DEL / BKSP
          </button>

          {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+'].map(btn => (
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
              key={btn}
              onClick={() => handleClick(btn)}
              className={btnClass}
            >
              {btn}
            </motion.button>
          ))}

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCalculate}
            className={`${btnClass} bg-neo-green text-black`}
          >
            =
          </motion.button>
        </div>

        {/* FOOTER LABEL */}
        <div className="flex justify-between items-center mt-2 px-1">
          <span className="text-[10px] font-black uppercase opacity-40 italic">Fatec Project v2.0</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase opacity-40">System Ready</span>
          </div>
        </div>
      </div>
    </NeoCard>
  );
}