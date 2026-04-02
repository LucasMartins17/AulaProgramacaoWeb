import { useState } from 'react';
import NeoCard from '../components/NeoCard';

export default function Calculadora() {
  const [display, setDisplay] = useState('');

  const btnClass = "bg-white border-2 border-black p-4 font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all";

  return (
    <NeoCard title="Calculadora">
      <div className="bg-black p-4 mb-4 text-right text-neo-green font-mono text-3xl border-4 border-black shadow-inner">
        {display || '0'}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(btn => (
          <button 
            key={btn}
            onClick={() => btn === '=' ? setDisplay(eval(display).toString()) : setDisplay(display + btn)}
            className={btn === '=' ? `${btnClass} bg-neo-green` : btnClass}
          >
            {btn}
          </button>
        ))}
        <button onClick={() => setDisplay('')} className="col-span-4 bg-red-400 border-2 border-black p-2 font-black mt-2 shadow-neo active:shadow-none">
          LIMPAR / CLEAR
        </button>
      </div>
    </NeoCard>
  );
}