import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function BuscadorCep() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  const buscar = async () => {
    // Reset de estados
    setErro(false);
    setLoading(true);
    
    try {
      // Limpeza de caracteres não numéricos
      const cepLimpo = cep.replace(/\D/g, '');
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
  };

  return (
    <NeoCard title="Buscador de CEP">
      <div className="flex flex-col gap-5">
        
        {/* INPUT COM ANIMAÇÃO DE ERRO (SHAKE) */}
        <motion.div
          animate={erro ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <input 
            placeholder="00000-000"
            maxLength={9}
            className={`w-full border-4 border-black p-4 font-black text-2xl outline-none transition-colors ${erro ? 'bg-red-100 border-red-600' : 'focus:bg-neo-yellow/20'}`}
            onChange={(e) => setCep(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && buscar()}
          />
          {erro && <p className="text-red-600 font-black text-xs mt-2 uppercase italic">CEP inválido ou não encontrado!</p>}
        </motion.div>

        {/* BOTÃO COM EFEITO DE ESCALA E CARREGAMENTO */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={buscar} 
          disabled={loading}
          className={`relative border-4 border-black p-4 font-black text-xl shadow-neo transition-all uppercase
            ${loading ? 'bg-gray-400 cursor-wait' : 'bg-neo-yellow active:shadow-none active:translate-x-1 active:translate-y-1'}
          `}
        >
          {loading ? 'Buscando... / Fetching...' : 'Buscar / Search →'}
        </motion.button>
        
        <AnimatePresence>
          {dados && (
            <motion.div 
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mt-4 p-6 bg-neo-green border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            >
              {/* Badge decorativa estilo "sticker" */}
              <div className="absolute -right-2 -top-2 bg-black text-white px-3 py-1 text-[10px] font-black rotate-12">
                FOUND!
              </div>

              <div className="space-y-4">
                <div className="group">
                  <span className="text-[10px] font-black uppercase opacity-50 block leading-none">Rua / Street</span>
                  <p className="text-2xl font-black uppercase leading-tight">{dados.logradouro || 'Bairro s/ nome'}</p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase opacity-50 block leading-none text-black">Bairro / Neighborhood</span>
                    <p className="text-lg font-black uppercase">{dados.bairro || 'N/A'}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase opacity-50 block leading-none">Estado / UF</span>
                    <p className="text-lg font-black uppercase">{dados.uf}</p>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-black/20">
                  <span className="text-[10px] font-black uppercase opacity-50 block leading-none">Cidade / City</span>
                  <p className="text-2xl font-black uppercase">{dados.localidade}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </NeoCard>
  );
}