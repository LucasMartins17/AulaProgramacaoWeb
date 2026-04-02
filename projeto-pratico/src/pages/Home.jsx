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
    <div className="py-10 overflow-hidden">
      {/* 1. LETREIRO INFINITO (MARQUEE) */}
      <div className="bg-black text-white py-4 -rotate-2 w-[120%] -ml-[10%] mb-20 border-y-4 border-black flex whitespace-nowrap overflow-hidden font-black uppercase italic text-2xl">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-10"
        >
          <span>FATEC ITAPETININGA • REACT PROJECT • VITE • TAILWIND CSS • FULL STACK • LUCAS ADS • </span>
          <span>FATEC ITAPETININGA • REACT PROJECT • VITE • TAILWIND CSS • FULL STACK • LUCAS ADS • </span>
        </motion.div>
      </div>

      <header className="text-center mb-16 relative">
        <motion.div
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter border-8 border-black inline-block px-8 py-4 bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] mb-8 hover:bg-neo-yellow transition-colors cursor-default">
            Dev Toolkit
          </h1>
        </motion.div>
        <p className="text-2xl font-bold uppercase mt-4 bg-black text-white inline-block px-4 py-1">
          Systems Development & Analysis / ADS
        </p>
      </header>

      {/* 2. GRID DE CARDS COM ANIMAÇÃO DE ENTRADA */}
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
          >
            <Link to={tool.path}>
              <div className={`h-full border-4 border-black p-6 ${tool.color} shadow-neo hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all group relative overflow-hidden`}>
                
                {/* Badge/Tag flutuante */}
                <span className="absolute top-2 right-2 bg-white border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase">
                  {tool.tag}
                </span>

                <h2 className="text-3xl font-black uppercase mb-2 group-hover:italic transition-all">
                  {tool.name}
                </h2>
                <p className="font-bold text-black/80 leading-tight">
                  {tool.desc}
                </p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="inline-block border-2 border-black bg-white px-4 py-1 font-black text-sm uppercase group-hover:bg-black group-hover:text-white transition-colors">
                    Explorar / Explore →
                  </div>
                  {/* Skill name em inglês/português sutil */}
                  <span className="text-[10px] font-mono opacity-50 uppercase">Tool #{tools.indexOf(tool) + 1}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <footer className="mt-32 flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="bg-black text-white p-8 border-4 border-white shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] text-center"
        >
          <p className="font-mono text-neo-yellow">FATEC ITAPETININGA - 2026</p>
          <p className="font-black text-3xl uppercase tracking-widest">Lucas - ADS</p>
          <div className="mt-4 flex gap-4 justify-center">
             <span className="border border-white/30 px-2 py-1 text-xs">React</span>
             <span className="border border-white/30 px-2 py-1 text-xs">Tailwind v4</span>
             <span className="border border-white/30 px-2 py-1 text-xs">Full Stack</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}