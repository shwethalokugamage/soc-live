import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full cyber-grid-bg">
      {/* Header */}
      <header className="flex items-center justify-between px-3 py-2 bg-cyber-panel border-b border-cyber-cyan/30">
        <button
          onClick={onReset}
          className="text-cyber-cyan text-xs font-display tracking-widest px-3 py-1.5 border border-cyber-cyan/40 active:bg-cyber-cyan/10 transition-colors"
        >
          ← ABORT
        </button>
        <h1 className="font-display font-bold text-sm tracking-widest neon-cyan">SOC OPS</h1>
        <div className="w-20" />
      </header>

      {/* Instructions */}
      <p className="text-center text-cyber-muted text-xs py-2 px-4 tracking-wide font-display">
        TAP A SQUARE WHEN YOU FIND A MATCH
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-2 font-display text-xs tracking-[0.3em] font-bold text-cyber-yellow"
          style={{ textShadow: `0 0 10px var(--color-cyber-yellow), 0 0 24px var(--color-cyber-yellow)` }}
        >
          ⚡ BINGO — LINE COMPLETE ⚡
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
