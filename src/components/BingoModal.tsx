interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-cyber-bg/80 flex items-center justify-center p-4 z-50">
      <div
        className="bg-cyber-panel border border-cyber-yellow max-w-xs w-full text-center p-6 animate-bingo-celebrate"
        style={{
          boxShadow: '0 0 40px rgba(255,238,0,0.5), 0 0 80px rgba(255,238,0,0.2), inset 0 0 40px rgba(255,238,0,0.05)',
        }}
      >
        {/* Icon */}
        <div
          className="text-5xl mb-4 font-display font-black text-cyber-yellow"
          style={{ textShadow: '0 0 20px #ffee00, 0 0 40px #ffee00' }}
        >
          ◈
        </div>

        {/* BINGO text */}
        <div className="relative mb-2">
          <h2
            className="text-4xl font-black font-display tracking-widest text-cyber-yellow"
            style={{ textShadow: '0 0 12px #ffee00, 0 0 30px #ffee00' }}
          >
            BINGO
          </h2>
        </div>

        <p className="text-cyber-cyan text-xs font-display tracking-[0.3em] uppercase mb-6">
          Line complete — mission success
        </p>

        <div className="w-full h-px bg-cyber-yellow/30 mb-6" />

        <button
          onClick={onDismiss}
          className="w-full font-display font-bold py-3 px-6 text-xs tracking-[0.3em] uppercase
                     bg-transparent border border-cyber-cyan text-cyber-cyan
                     active:bg-cyber-cyan/10 transition-colors"
          style={{ boxShadow: '0 0 12px rgba(0,245,255,0.3)' }}
        >
          ▸ CONTINUE MISSION
        </button>
      </div>
    </div>
  );
}
