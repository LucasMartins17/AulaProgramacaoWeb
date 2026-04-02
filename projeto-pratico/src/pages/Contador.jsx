import { useState } from 'react';
import NeoCard from '../components/NeoCard';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <NeoCard title="Contador de Cliques">
      <div className="flex flex-col items-center gap-6">
        <span className="text-6xl font-black bg-neo-yellow px-8 py-4 border-4 border-black shadow-neo">
          {count}
        </span>
        <div className="flex gap-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-neo-green border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-[5px] active:translate-y-[5px]"
          >
            Incrementar / Increase
          </button>
          <button 
            onClick={() => setCount(0)}
            className="bg-red-400 border-4 border-black p-4 font-black uppercase shadow-neo active:shadow-none active:translate-x-[5px] active:translate-y-[5px]"
          >
            Zerar / Reset
          </button>
        </div>
      </div>
    </NeoCard>
  );
}