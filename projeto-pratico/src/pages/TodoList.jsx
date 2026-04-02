import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function TodoList() {
  // Inicializa buscando do LocalStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('fatec-tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  // Salva no LocalStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('fatec-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      const newTask = { id: Date.now(), text: input, completed: false };
      setTasks([newTask, ...tasks]);
      setInput('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <NeoCard title="Tasks / Lista de Tarefas">
      {/* INPUT SECTION */}
      <div className="flex gap-3 mb-8">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className="flex-1 border-4 border-black p-4 font-black text-lg outline-none focus:bg-neo-blue/10 placeholder:text-black/30 transition-all"
          placeholder="O que vamos fazer hoje? / New task..."
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addTask} 
          className="bg-neo-blue border-4 border-black px-6 font-black text-xl shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
        >
          ADD +
        </motion.button>
      </div>

      {/* LIST SECTION COM DRAG & DROP */}
      <Reorder.Group axis="y" values={tasks} onReorder={setTasks} className="space-y-4">
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <Reorder.Item
              key={task.id}
              value={task}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              layout
              className={`flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-grab active:cursor-grabbing group ${task.completed ? 'opacity-70 bg-gray-50' : ''}`}
            >
              {/* CHECKBOX ESTILIZADA */}
              <button 
                onClick={() => toggleTask(task.id)}
                className={`w-8 h-8 border-4 border-black flex items-center justify-center transition-colors ${task.completed ? 'bg-neo-green' : 'bg-white'}`}
              >
                {task.completed && <span className="font-black text-black">✓</span>}
              </button>

              <span className={`flex-1 font-black text-xl transition-all uppercase italic ${task.completed ? 'line-through text-black/40' : 'text-black'}`}>
                {task.text}
              </span>

              {/* BOTÃO REMOVER */}
              <motion.button 
                whileHover={{ rotate: 12, scale: 1.2 }}
                onClick={() => removeTask(task.id)}
                className="bg-red-500 text-white border-2 border-black w-10 h-10 font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black transition-colors"
              >
                X
              </motion.button>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>

      {/* EMPTY STATE */}
      {tasks.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 border-4 border-dashed border-black/20"
        >
          <p className="font-black text-2xl uppercase italic text-black/20">Nada para fazer? / All done!</p>
        </motion.div>
      )}

      {/* FOOTER INFO */}
      <div className="mt-8 pt-4 border-t-4 border-black/10 flex justify-between items-center">
        <span className="font-black text-xs uppercase opacity-40">
          {tasks.filter(t => !t.completed).length} Tarefas restantes / Tasks left
        </span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-neo-yellow border-2 border-black" />
          <div className="w-3 h-3 bg-neo-blue border-2 border-black" />
          <div className="w-3 h-3 bg-neo-green border-2 border-black" />
        </div>
      </div>
    </NeoCard>
  );
}