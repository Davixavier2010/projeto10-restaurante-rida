import React, { useEffect, useState } from 'react';

export default function SiteOpening({ onComplete }) {
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    // Transição automática, suave e rápida após 2.4 segundos
    const timer = setTimeout(() => {
      handleExit();
    }, 2400);

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
        backgroundImage: 'radial-gradient(circle at 50% 45%, #FFFFFF 0%, #FAF8F5 60%, #F3EFEA 100%)'
      }}
    >
      {/* Halo de luz quente suave no centro */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full pointer-events-none blur-[90px] opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(233,168,37,0.18) 0%, rgba(29,53,87,0.06) 60%, transparent 80%)' }}
      />

      {/* BLOCO CENTRAL: APENAS A IMAGEM COM FUMAÇA E O NOME */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* PALCO DA XÍCARA E VAPOR */}
        <div className="relative w-72 h-60 flex flex-col items-center justify-center animate-float-cup">
          
          {/* =================================================================
              FUMAÇA / VAPOR ORGÂNICO VISÍVEL EM FUNDO CLARO
              ================================================================= */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-40 pointer-events-none overflow-visible flex items-center justify-center z-30">
            
            {/* Pluma 1: Esquerda fluida */}
            <svg 
              className="absolute bottom-4 left-10 w-16 h-36 animate-steam-1 opacity-85"
              viewBox="0 0 50 120" 
              fill="none"
              style={{ filter: 'blur(3px)' }}
            >
              <path
                d="M 22 120 Q 8 85, 26 55 T 16 10"
                stroke="url(#steam-amber-light)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 2: Centro espessa */}
            <svg 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-44 animate-steam-2 opacity-90"
              viewBox="0 0 60 140" 
              fill="none"
              style={{ filter: 'blur(3.5px)' }}
            >
              <path
                d="M 30 140 C 18 105, 42 75, 24 45 C 15 25, 34 12, 28 0"
                stroke="url(#steam-coffee-light)"
                strokeWidth="8.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 3: Direita ondulada */}
            <svg 
              className="absolute bottom-4 right-10 w-16 h-36 animate-steam-3 opacity-80"
              viewBox="0 0 50 120" 
              fill="none"
              style={{ filter: 'blur(3px)' }}
            >
              <path
                d="M 24 120 Q 38 85, 20 55 T 32 10"
                stroke="url(#steam-amber-light)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 4: Névoa sutil */}
            <svg 
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-32 animate-steam-4 opacity-60"
              viewBox="0 0 80 100" 
              fill="none"
              style={{ filter: 'blur(4px)' }}
            >
              <path
                d="M 40 100 Q 25 65, 48 35 T 38 0"
                stroke="url(#steam-coffee-light)"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* =================================================================
              XÍCARA DE PORCELANA BLEU DE FRANCE COM OURO
              ================================================================= */}
          <svg className="w-56 h-40 drop-shadow-[0_15px_25px_rgba(29,53,87,0.18)] z-20" viewBox="0 0 220 150" fill="none">
            <defs>
              {/* Porcelana Azul Francês */}
              <linearGradient id="cup-porcelain-light" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2A6F97" />
                <stop offset="45%" stopColor="#1D3557" />
                <stop offset="100%" stopColor="#0D2040" />
              </linearGradient>

              {/* Ouro Francês Real */}
              <linearGradient id="gold-filigree-light" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B9770E" />
                <stop offset="35%" stopColor="#E9A825" />
                <stop offset="70%" stopColor="#FFF2B2" />
                <stop offset="100%" stopColor="#D48B1C" />
              </linearGradient>

              {/* Crema do Café Espresso */}
              <radialGradient id="espresso-crema-light" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E9A825" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#B9770E" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#5E3013" />
                <stop offset="100%" stopColor="#331A08" />
              </radialGradient>

              {/* Fumaça com tons quentes de café visíveis no claro */}
              <linearGradient id="steam-coffee-light" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#9C6B38" stopOpacity="0.7" />
                <stop offset="45%" stopColor="#B88A58" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="steam-amber-light" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#D48B1C" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#C49B66" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Sombra de Contato do Pires na Mesa Clara */}
            <ellipse cx="110" cy="138" rx="85" ry="9" fill="#1D3557" opacity="0.14" filter="blur(6px)" />

            {/* Pires (Saucer) */}
            <ellipse cx="110" cy="130" rx="90" ry="14" fill="url(#cup-porcelain-light)" stroke="url(#gold-filigree-light)" strokeWidth="1.8" />
            <ellipse cx="110" cy="129" rx="60" ry="7" fill="#0D2040" opacity="0.4" />

            {/* Colher Dourada */}
            <path
              d="M 18 132 C 35 128, 55 125, 75 124 C 80 123.8, 85 125, 90 126"
              stroke="url(#gold-filigree-light)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <ellipse cx="18" cy="132" rx="7" ry="3.5" fill="url(#gold-filigree-light)" transform="rotate(-15 18 132)" />

            {/* Asa da Xícara */}
            <path
              d="M 152 72 C 182 72, 185 104, 148 108"
              fill="none"
              stroke="url(#cup-porcelain-light)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 152 72 C 182 72, 185 104, 148 108"
              fill="none"
              stroke="url(#gold-filigree-light)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            {/* Corpo da Xícara */}
            <path
              d="M 62 62 C 64 105, 78 122, 110 122 C 142 122, 156 105, 158 62 Z"
              fill="url(#cup-porcelain-light)"
            />

            {/* Filete Dourado Decorativo */}
            <path
              d="M 68 88 C 82 100, 138 100, 152 88"
              fill="none"
              stroke="url(#gold-filigree-light)"
              strokeWidth="1.2"
              opacity="0.8"
            />

            {/* Borda Superior Oval */}
            <ellipse cx="110" cy="62" rx="48" ry="12" fill="url(#cup-porcelain-light)" stroke="url(#gold-filigree-light)" strokeWidth="2" />

            {/* Café Espresso com Crema */}
            <ellipse cx="110" cy="62" rx="42" ry="9.5" fill="url(#espresso-crema-light)" />

            {/* Círculo Concêntrico de Aroma */}
            <ellipse cx="108" cy="62" rx="28" ry="5.5" fill="none" stroke="#E9A825" strokeWidth="0.8" opacity="0.65" />
            <ellipse cx="107" cy="61.5" rx="14" ry="3" fill="none" stroke="#FFF2B2" strokeWidth="0.6" opacity="0.5" />
            
            {/* Brilho na Borda */}
            <ellipse cx="88" cy="56" rx="6" ry="1.5" fill="#FFF" opacity="0.6" transform="rotate(-10 88 56)" />
          </svg>
        </div>

        {/* =====================================================================
            APENAS O NOME DO LUGAR (Puro, Elegante e Minimalista)
            ===================================================================== */}
        <div className="mt-3 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#1D3557]">
            LE PETIT BLEU
          </h1>

          <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8C7E75]">
            Café & Bistrô Francês
          </p>
        </div>

      </div>
    </div>
  );
}
