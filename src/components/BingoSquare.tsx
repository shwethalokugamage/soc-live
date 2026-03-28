import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const base =
    'relative flex items-center justify-center p-1 text-center border transition-all duration-150 select-none min-h-[60px] text-xs leading-tight font-body';

  let stateClasses: string;
  let style: React.CSSProperties | undefined;

  if (square.isFreeSpace) {
    stateClasses = 'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan font-bold text-sm';
    style = { boxShadow: '0 0 8px rgba(0,245,255,0.4), inset 0 0 8px rgba(0,245,255,0.08)' };
  } else if (square.isMarked && isWinning) {
    stateClasses = 'bg-cyber-yellow/10 border-cyber-yellow text-cyber-yellow font-semibold';
    style = { boxShadow: '0 0 10px rgba(255,238,0,0.6), inset 0 0 10px rgba(255,238,0,0.1)' };
  } else if (square.isMarked) {
    stateClasses = 'bg-marked border-marked-border text-cyber-green';
    style = { boxShadow: '0 0 8px rgba(0,255,65,0.4), inset 0 0 8px rgba(0,255,65,0.06)' };
  } else {
    stateClasses = 'bg-cyber-panel border-cyber-border text-cyber-text active:bg-cyber-cyan/10 active:border-cyber-cyan/60';
    style = undefined;
  }

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${base} ${stateClasses}`}
      style={style}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span
          className="absolute top-0.5 right-0.5 text-xs"
          style={{ color: isWinning ? '#ffee00' : '#00ff41' }}
        >
          ✓
        </span>
      )}
    </button>
  );
}
