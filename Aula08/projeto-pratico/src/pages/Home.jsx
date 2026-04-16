import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Contador', desc: 'Gestão de estado em tempo real.', color: 'bg-neo-yellow', path: '/contador', tag: 'STATE' },
  { name: 'Todo List', desc: 'Persistência e manipulação de arrays.', color: 'bg-neo-blue', path: '/todo', tag: 'LOGIC' },
  { name: 'Buscador CEP', desc: 'Consumo de API REST externa (Axios).', color: 'bg-neo-green', path: '/cep', tag: 'API' },
  { name: 'Calculadora', desc: 'Lógica matemática e Eval.', color: 'bg-purple-400', path: '/calculadora', tag: 'MATH' },
  { name: 'Jogo da Velha', desc: 'Algoritmo de verificação de vitória.', color: 'bg-red-400', path: '/velha', tag: 'GAME' },
];

export default function Home() {
  return (
    <div className="py-10">
      
      {/* 1. LETREIRO INFINITO */}
      <div className="bg-black text-white py-4 -rotate-2 w-[120%] -ml-[10%] mb-24 border-y-4 border-black flex whitespace-nowrap overflow-hidden font-black uppercase italic text-2xl">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-10"
        >
          <span>FATEC ITAPETININGA • REACT PROJECT • VITE • TAILWIND CSS • FULL STACK • LUCAS ADS • </span>
          <span>FATEC ITAPETININGA • REACT PROJECT • VITE • TAILWIND CSS • FULL STACK • LUCAS ADS • </span>
        </motion.div>
      </div>

      <header className="text-center mb-20 relative px-4">
        <motion.div
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <h1 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter border-8 border-black inline-block px-8 py-4 bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] mb-8 hover:bg-neo-yellow transition-colors cursor-default">
            Dev Toolkit
          </h1>
        </motion.div>
        <p className="text-xl md:text-2xl font-bold uppercase mt-4 bg-black text-white inline-block px-4 py-1">
          Systems Development & Analysis / ADS
        </p>
      </header>

      {/* 2. GRID DE CARDS AJUSTADO */}
      {/* Mudamos para grid-cols-1, md:grid-cols-2 e xl:grid-cols-3 para dar mais espaço no desktop */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-8 max-w-7xl mx-auto"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            className="group"
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
          >
            <Link to={tool.path} className="block h-full">
              <div className={`h-full border-4 border-black p-6 ${tool.color} shadow-neo hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all relative flex flex-col justify-between`}>
                
                <span className="absolute -top-3 -right-3 bg-white border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                  {tool.tag}
                </span>

                <div>
                  <h2 className="text-3xl font-black uppercase mb-3 break-words group-hover:italic transition-all">
                    {tool.name}
                  </h2>
                  <p className="font-bold text-black/80 leading-tight mb-6">
                    {tool.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="inline-block border-2 border-black bg-white px-4 py-1 font-black text-sm uppercase group-hover:bg-black group-hover:text-white transition-colors">
                    Abrir / Open →
                  </div>
                  <span className="text-[10px] font-mono opacity-50 uppercase font-bold">
                    #{tools.indexOf(tool) + 1}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <footer className="mt-32 pb-20 flex flex-col items-center px-4">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="bg-black text-white p-8 border-4 border-white shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] text-center w-full max-w-md"
        >
          <p className="font-mono text-neo-yellow mb-2 text-sm">FATEC ITAPETININGA - 2026</p>
          <p className="font-black text-3xl uppercase tracking-tighter">Lucas - ADS</p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
             <span className="bg-white text-black px-2 py-1 text-[10px] font-black uppercase border-2 border-black">React</span>
             <span className="bg-white text-black px-2 py-1 text-[10px] font-black uppercase border-2 border-black">Tailwind</span>
             <span className="bg-white text-black px-2 py-1 text-[10px] font-black uppercase border-2 border-black">Full Stack</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}