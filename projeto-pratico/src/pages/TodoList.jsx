import { useState } from 'react';
import NeoCard from '../components/NeoCard';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  return (
    <NeoCard title="Lista de Tarefas">
      <div className="flex gap-2 mb-6">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border-4 border-black p-2 font-bold outline-none"
          placeholder="Nova tarefa..."
        />
        <button onClick={addTask} className="bg-neo-blue border-4 border-black p-2 font-black shadow-neo active:shadow-none">
          ADD
        </button>
      </div>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center gap-3 bg-white border-2 border-black p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <input 
              type="checkbox" 
              className="w-6 h-6 border-4 border-black accent-neo-green"
              onChange={() => {
                const newTasks = [...tasks];
                newTasks[index].completed = !newTasks[index].completed;
                setTasks(newTasks);
              }}
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
          </li>
        ))}
      </ul>
    </NeoCard>
  );
}