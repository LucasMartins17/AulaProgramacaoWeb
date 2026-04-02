import { useState } from 'react';
import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function Calculadora() {
  const [display, setDisplay] = useState('');

  const btnClass = "bg-white border-4 border-black p-4 font-black text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all";

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display); 
      setDisplay(String(result));
    } catch (e) {
      setDisplay("Erro");
      setTimeout(() => setDisplay(''), 1500);
    }
  };

  const handleBackspace = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <NeoCard title="Calculadora / Calc">
      {/* DISPLAY COM ESTÉTICA RETRÔ */}
      <div className="bg-black p-6 mb-6 text-right border-4 border-black shadow-[inset_0_4px_0_rgba(255,255,255,0.2)]">
        <span className="text-neo-green font-mono text-4xl tracking-tighter break-all">
          {display || '0'}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {/* BOTÃO DE LIMPAR TUDO */}
        <button 
          onClick={() => setDisplay('')} 
          className="col-span-2 bg-red-500 border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          C / Clear
        </button>

        {/* BOTÃO DE APAGAR ÚLTIMO (BACKSPACE) */}
        <button 
          onClick={handleBackspace} 
          className="col-span-2 bg-neo-yellow border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Del
        </button>

        {/* MAPEAMENTO DOS BOTÕES */}
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+'].map(btn => (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={btn}
            onClick={() => setDisplay(display + btn)}
            className={btnClass}
          >
            {btn}
          </motion.button>
        ))}

        {/* BOTÃO DE IGUAL (DESTAQUE) */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCalculate}
          className={`${btnClass} bg-neo-green`}
        >
          =
        </motion.button>
      </div>
    </NeoCard>
  );
}