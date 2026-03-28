interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 cyber-grid-bg">
      <div className="text-center max-w-sm w-full">

        {/* System init label */}
        <div
          className="text-xs tracking-[0.4em] text-cyber-cyan mb-3 font-display uppercase animate-fade-in-up"
          aria-hidden="true"
        >
          ◈ SYS.INIT ◈
        </div>

        {/* Title with glitch effect */}
        <div className="relative mb-2 animate-fade-in-up">
          <h1 className="text-5xl font-black font-display neon-cyan tracking-widest leading-none">
            SOC OPS
          </h1>
          <span className="glitch-layer text-5xl font-black font-display tracking-widest leading-none" aria-hidden="true">
            SOC OPS
          </span>
        </div>

        <p className="text-sm font-display font-bold tracking-[0.4em] neon-pink uppercase mb-8 animate-fade-in-up-delay">
          Social Bingo
        </p>

        {/* Mission briefing card */}
        <div className="neon-border-cyan bg-cyber-panel p-5 mb-6 text-left animate-fade-in-up-delay">
          <h2 className="text-cyber-cyan font-display text-xs tracking-widest mb-4 uppercase">
            ▸ Mission Briefing
          </h2>
          <ul className="text-cyber-text text-sm space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-cyber-pink font-bold mt-0 shrink-0">01.</span>
              <span>Locate targets who match the intel on each square</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyber-pink font-bold shrink-0">02.</span>
              <span>Tap to confirm each identified target</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyber-pink font-bold shrink-0">03.</span>
              <span>Complete 5 in a row to win the mission</span>
            </li>
          </ul>
        </div>

        {/* Execute button */}
        <button
          onClick={onStart}
          className="cyber-btn-glow animate-fade-in-up-delay2 w-full font-display font-bold py-4 px-8 text-sm tracking-[0.3em] uppercase
                     bg-transparent border-2 border-cyber-cyan text-cyber-cyan
                     transition-all duration-150
                     active:bg-cyber-cyan active:text-cyber-bg"
        >
          ⚡ EXECUTE MISSION
        </button>

        {/* Footer */}
        <p className="mt-6 text-cyber-muted text-xs tracking-widest font-display animate-fade-in-up-delay2">
          ◈ ────────── v1.0 ────────── ◈
        </p>
      </div>
    </div>
  );
}
