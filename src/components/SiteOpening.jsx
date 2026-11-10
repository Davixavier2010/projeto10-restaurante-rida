import React, { useEffect, useState } from 'react';

export default function SiteOpening({ onComplete }) {
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    // Transição suave e limpa após 3.8 segundos para dar tempo de apreciar o giro suave
    const timer = setTimeout(() => {
      handleExit();
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    if (hasExited) return;
    setHasExited(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 550);
  };

  return (
    <div
      onClick={handleExit}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hasExited
          ? 'opacity-0 filter blur-sm pointer-events-none scale-102'
          : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: '#FAF8F5',
        backgroundImage: 'radial-gradient(circle at 50% 45%, #FFFFFF 0%, #FAF8F5 65%, #F2EDE4 100%)'
      }}
    >
      {/* Luz ambiente dourada muito suave */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none blur-[100px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(233,168,37,0.2) 0%, rgba(29,53,87,0.05) 60%, transparent 80%)' }}
      />

      {/* BLOCO CENTRAL MINIMALISTA: IMAGEM REAL DO CAFÉ + FUMAÇA + NOME */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* PALCO DA XÍCARA REAL COM VAPOR ORGÂNICO */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* =================================================================
              SISTEMA DE VAPOR / FUMAÇA SUAVE E REALISTA SUBINDO DA XÍCARA
              ================================================================= */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-32 pointer-events-none overflow-visible flex items-center justify-center z-30">
            {/* Pluma 1 */}
            <svg 
              className="absolute bottom-2 left-6 w-12 h-32 animate-steam-1 opacity-75"
              viewBox="0 0 50 120" 
              fill="none"
              style={{ filter: 'blur(3.5px)' }}
            >
              <path
                d="M 22 120 Q 8 85, 26 55 T 16 10"
                stroke="url(#steam-real-amber)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 2 (Centro) */}
            <svg 
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-36 animate-steam-2 opacity-80"
              viewBox="0 0 60 140" 
              fill="none"
              style={{ filter: 'blur(4px)' }}
            >
              <path
                d="M 30 140 C 20 105, 42 75, 24 45 C 16 25, 34 12, 28 0"
                stroke="url(#steam-real-warm)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 3 */}
            <svg 
              className="absolute bottom-2 right-6 w-12 h-32 animate-steam-3 opacity-70"
              viewBox="0 0 50 120" 
              fill="none"
              style={{ filter: 'blur(3.5px)' }}
            >
              <path
                d="M 24 120 Q 38 85, 20 55 T 30 10"
                stroke="url(#steam-real-amber)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="steam-real-amber" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#C49B66" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#D4A774" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="steam-real-warm" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#A87948" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#C49B66" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* =================================================================
              FOTOGRAFIA REAL ARTESANAL DO CAFÉ COM GIRO LENTO NO PRÓPRIO EIXO
              ================================================================= */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-b from-[#E9A825]/40 via-[#FAF8F5] to-[#E9A825]/20 shadow-[0_12px_30px_rgba(29,53,87,0.12)]">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border border-[#E8E2D5] bg-[#F2EDE4] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop"
                alt="Café & Bistrô Le Petit Bleu"
                className="w-full h-full object-cover animate-spin-slow will-change-transform"
                style={{ transformOrigin: 'center center' }}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* =====================================================================
            NOME DO LUGAR: FONTE SORA UNIFORME (AMBOS COM O MESMO PESO: FONT-NORMAL 400)
            ===================================================================== */}
        <div className="mt-6 space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-sora font-normal tracking-[0.22em] text-[#1D3557] uppercase pl-[0.22em]">
            LE PETIT BLEU
          </h1>

          <p className="text-[11px] sm:text-xs font-sora font-normal tracking-[0.26em] text-[#8C7E75] uppercase pl-[0.26em]">
            Café & Bistrô Francês
          </p>
        </div>

      </div>
    </div>
  );
}
