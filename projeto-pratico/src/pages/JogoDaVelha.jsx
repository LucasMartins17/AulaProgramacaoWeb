import { useState } from 'react';
import NeoCard from '../components/NeoCard';

export default function JogoDaVelha() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
      [0, 4, 8], [2, 4, 6],           // Diagonais
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);
  const status = winner 
    ? `Vencedor / Winner: ${winner}` 
    : isDraw 
      ? 'Empate / Draw!' 
      : `Próximo / Next: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (winner || board[i]) return;
    const nextSquares = board.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setBoard(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <NeoCard title="Jogo da Velha">
      <div className="flex flex-col items-center">
        <div className={`mb-6 text-xl font-black uppercase p-2 border-4 border-black shadow-neo ${winner ? 'bg-neo-green' : 'bg-neo-yellow'}`}>
          {status}
        </div>
        
        <div className="grid grid-cols-3 gap-3 bg-black p-3 border-4 border-black shadow-neo">
          {board.map((square, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="w-20 h-20 bg-white border-4 border-black text-4xl font-black flex items-center justify-center hover:bg-gray-100 active:shadow-none transition-all"
            >
              <span className={square === 'X' ? 'text-neo-blue' : 'text-red-500'}>
                {square}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => setBoard(Array(9).fill(null))}
          className="mt-8 bg-white border-4 border-black px-6 py-2 font-black uppercase shadow-neo active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
        >
          Reiniciar / Restart
        </button>
      </div>
    </NeoCard>
  );
}