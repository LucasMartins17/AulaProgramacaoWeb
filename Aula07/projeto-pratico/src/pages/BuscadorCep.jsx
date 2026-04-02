import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function BuscadorCep() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  // 1. Função de busca memorizada com useCallback
  const buscar = useCallback(async () => {
    if (!cep) return;
    setErro(false);
    setLoading(true);
    const cepLimpo = cep.replace(/\D/g, '');
    
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if (res.data.erro) {
        setErro(true);
        setDados(null);
      } else {
        setDados(res.data);
      }
    } catch (err) {
      setErro(true);
      setDados(null);
    } finally {
      setLoading(false);
    }
  }, [cep]);

  // 2. Máscara de CEP
  const handleInputChange = (e) => {
    let val = e.target.value.replace(/\D/g, ''); 
    if (val.length > 5) {
      val = `${val.slice(0, 5)}-${val.slice(5, 8)}`;
    }
    setCep(val);
  };

  // 3. Auto-busca monitorando o comprimento do CEP
  useEffect(() => {
    const cepNumerico = cep.replace(/\D/g, '');
    if (cepNumerico.length === 8) {
      buscar();
    }
  }, [cep, buscar]); // Agora 'buscar' é uma dependência estável

  const copiarEndereco = () => {
    const texto = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}-${dados.uf}`;
    navigator.clipboard.writeText(texto);
    alert("Endereço copiado! / Address copied!");
  };

  return (
    <NeoCard title="Address Finder / Buscador">
      <div className="flex flex-col gap-6">
        <div className="relative group">
          <motion.div
            animate={erro ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="absolute -top-3 left-4 bg-neo-yellow border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase z-10">
              Digite o CEP / Enter ZIP
            </span>
            <input 
              value={cep}
              placeholder="00000-000"
              maxLength={9}
              className={`w-full border-4 border-black p-5 pt-7 font-black text-3xl outline-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 ${erro ? 'bg-red-100' : 'bg-white'}`}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && buscar()}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {loading && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2 font-black italic text-neo-blue"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-4 border-neo-blue border-t-transparent" />
              SEARCHING...
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {dados && (
            <motion.div 
              initial={{ scale: 0.8, y: 20, rotate: 2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              className="bg-neo-blue border-4 border-black p-6 shadow-neo relative"
            >
              <div className="absolute top-2 right-2 flex gap-2">
                 <button onClick={copiarEndereco} className="bg-white border-2 border-black p-1 hover:bg-neo-yellow transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-black">COPY</span>
                 </button>
              </div>

              <div className="space-y-4">
                <div className="border-b-4 border-black/10 pb-2">
                  <p className="text-[10px] font-black uppercase opacity-60 italic">Street / Logradouro</p>
                  <p className="text-2xl font-black uppercase leading-tight">{dados.logradouro || 'N/A'}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase opacity-60 italic">Bairro</p>
                    <p className="text-lg font-black uppercase">{dados.bairro || 'Centro'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase opacity-60 italic">Estado</p>
                    <p className="text-lg font-black uppercase">{dados.uf}</p>
                  </div>
                </div>
                <div className="bg-black text-white p-3 -mx-6 -mb-6 flex justify-between items-center">
                   <span className="font-mono text-sm tracking-widest px-2">{dados.localidade}</span>
                   <div className="bg-neo-green text-black px-2 py-0.5 font-black text-[10px]">MAP READY</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {erro && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500 border-4 border-black p-3 text-white font-black text-center italic uppercase">
            Ops! CEP inexistente. / Not Found.
          </motion.div>
        )}
      </div>
    </NeoCard>
  );
}