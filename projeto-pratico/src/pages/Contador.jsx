import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function Contador() {
  const [count, setCount] = useState(0);

  // Função para determinar a cor baseada no valor
  const getNumberColor = () => {
    if (count > 10) return 'bg-red-500 text-white';
    if (count < 0) return 'bg-blue-400 text-black';
    return 'bg-neo-yellow text-black';
  };

  return (
    <NeoCard title="Counter / Contador Pro">
      <div className="flex flex-col items-center gap-10 py-6">
        
        {/* NÚMERO COM ANIMAÇÃO DE IMPACTO */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`text-8xl font-black px-12 py-6 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${getNumberColor()} transition-colors duration-300`}
            >
              {count}
            </motion.div>
          </AnimatePresence>
          
          {/* Badge de Status */}
          <div className="absolute -top-4 -right-4 bg-black text-white px-3 py-1 font-black text-xs uppercase italic rotate-12 border-2 border-white">
            {count === 0 ? 'Start' : count > 10 ? 'High!' : 'Active'}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {/* BOTÃO DECREMENTAR */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(count - 1)}
            className="bg-white border-4 border-black p-4 font-black uppercase shadow-neo hover:bg-gray-100 active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            - Diminuir / Less
          </motion.button>

          {/* BOTÃO ZERAR */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(0)}
            className="bg-red-500 text-white border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            Zerar / Reset
          </motion.button>

          {/* BOTÃO INCREMENTAR */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(count + 1)}
            className="bg-neo-green border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            + Aumentar / More
          </motion.button>
        </div>

        {/* FEEDBACK DE TEXTO */}
        <p className="font-black uppercase italic text-sm opacity-60">
          Interaction logic: useState + Framer Motion
        </p>
      </div>
    </NeoCard>
  );
}