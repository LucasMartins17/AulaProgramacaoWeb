import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Contador from './pages/Contador';
import TodoList from './pages/TodoList';
import BuscadorCep from './pages/BuscadorCep';
import Calculadora from './pages/Calculadora';
import JogoDaVelha from './pages/JogoDaVelha';
import Home from './pages/Home'; // Importando a Landing Page que criamos

// Componente para o botão de voltar que só aparece quando não estamos na Home
function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="flex flex-col items-center mb-10">
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Link para a Home sempre visível */}
        <Link 
          to="/" 
          className="bg-neo-blue text-white border-4 border-black px-6 py-2 font-black uppercase shadow-neo hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
        >
          Início / Home
        </Link>

        {['Contador', 'Todo', 'CEP', 'Calculadora', 'Velha'].map(item => (
          <Link 
            key={item} 
            to={`/${item.toLowerCase()}`}
            className="bg-white border-4 border-black px-6 py-2 font-black uppercase shadow-neo hover:bg-neo-yellow transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
      
      {location.pathname !== '/' && (
        <p className="mt-4 font-black uppercase text-sm bg-black text-white px-2 italic">
          Modo: {location.pathname.replace('/', '')}
        </p>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      {/* O container principal agora usa as fontes e estilos que definimos no index.css */}
      <div className="min-h-screen p-4 md:p-8">
        
        {/* Menu de Navegação */}
        <Navigation />

        {/* Área de Conteúdo */}
        <main className="max-w-4xl mx-auto">
          <Routes>
            {/* Rota da Landing Page (Home) */}
            <Route path="/" element={<Home />} />
            
            {/* Rotas das Ferramentas */}
            <Route path="/contador" element={<Contador />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/cep" element={<BuscadorCep />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/velha" element={<JogoDaVelha/>}/>
            
            {/* Rota de segurança (404) caso digitem algo errado */}
            <Route path="*" element={
              <div className="text-center p-10 border-8 border-black bg-red-500 shadow-neo">
                <h1 className="text-4xl font-black text-white uppercase">Erro 404 / Not Found</h1>
                <Link to="/" className="mt-4 inline-block bg-white border-4 border-black p-2 font-black underline">VOLTAR AO INÍCIO</Link>
              </div>
            } />
          </Routes>
        </main>

        {/* Rodapé fixo ou final de página para dar o toque de classe */}
        <footer className="text-center mt-20 opacity-50 font-black uppercase text-xs tracking-widest">
          Build with React + Tailwind v4 + Lucide
        </footer>
      </div>
    </Router>
  );
}

export default App;