import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoCard from '../components/NeoCard';

export default function JogoDaVelha() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const result = calculateWinner(board);
  const winner = result?.winner;
  const isDraw = !winner && board.every(square => square !== null);

  const handleClick = (i) => {
    if (winner || board[i]) return;
    
    const nextSquares = board.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setBoard(nextSquares);
    setXIsNext(!xIsNext);

    const checkWin = calculateWinner(nextSquares);
    if (checkWin) setWinningLine(checkWin.line);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine(null);
  };

  return (
    <NeoCard title="Tic-Tac-Toe / Jogo da Velha">
      <div className="flex flex-col items-center py-4">
        
        {/* STATUS BAR DINÂMICA */}
        <motion.div 
          initial={false}
          animate={{ 
            backgroundColor: winner ? '#22c55e' : isDraw ? '#60a5fa' : '#facc15',
            scale: winner || isDraw ? 1.1 : 1
          }}
          className="mb-8 text-2xl font-black uppercase p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] italic"
        >
          {winner ? `🏆 Winner: ${winner}` : isDraw ? '🤝 Draw! / Empate' : `Next: ${xIsNext ? 'X' : 'O'}`}
        </motion.div>

        {/* TABULEIRO */}
        <div className="relative bg-black p-4 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-3 gap-4">
            {board.map((square, i) => {
              const isWinningSquare = winningLine?.includes(i);
              return (
                <motion.button
                  key={i}
                  whileHover={!square && !winner ? { scale: 0.95, backgroundColor: '#f0f0f0' } : {}}
                  onClick={() => handleClick(i)}
                  className={`w-24 h-24 border-4 border-black text-5xl font-black flex items-center justify-center transition-all relative
                    ${isWinningSquare ? 'bg-neo-green' : 'bg-white'}
                    ${!square && !winner ? 'cursor-pointer' : 'cursor-default'}
                  `}
                >
                  <AnimatePresence>
                    {square && (
                      <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className={square === 'X' ? 'text-neo-blue' : 'text-red-500'}
                      >
                        {square}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  
                  {/* Overlay para quadrados não vencedores no final */}
                  {winner && !isWinningSquare && <div className="absolute inset-0 bg-black/10" />}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* CONTROLES */}
        <div className="flex gap-4 mt-10">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="bg-white border-4 border-black px-8 py-3 font-black uppercase shadow-neo hover:bg-neo-yellow transition-colors"
          >
            Restart / Reiniciar
          </motion.button>
        </div>

        {/* SKILLS FOOTER */}
        <div className="mt-8 flex gap-3">
          <span className="text-[10px] font-black border-2 border-black px-2 py-1 uppercase italic">Array Logic / Lógica de Array</span>
          <span className="text-[10px] font-black border-2 border-black px-2 py-1 uppercase italic">Win Algorithm / Algoritmo</span>
        </div>
      </div>
    </NeoCard>
  );
}