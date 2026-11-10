import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';

export default function SiteOpening({ onComplete }) {
  const [hasExited, setHasExited] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Barra de progresso suave de 0 a 100% em ~3.4s
    const startTime = Date.now();
    const duration = 3400;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleExit();
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleExit = () => {
    if (hasExited) return;
    setHasExited(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div
      onClick={handleExit}
      className={`fixed inset-0 z-[99999] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hasExited
          ? 'opacity-0 scale-105 filter blur-lg pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at 50% 45%, #13243B 0%, #0A1424 55%, #050B14 100%)'
      }}
    >
      {/* =====================================================================
          1. EFEITOS VOLUMÉTRICOS DE ILUMINAÇÃO (Bleu de France + Ouro Âmbar)
          ===================================================================== */}
      {/* Brilho âmbar quente central sob a xícara */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[340px] rounded-full pointer-events-none blur-[100px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(233,168,37,0.35) 0%, rgba(29,53,87,0.2) 60%, transparent 80%)' }}
      />
      {/* Halo azul francês sutil superior */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full pointer-events-none blur-[120px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(42,111,151,0.4) 0%, transparent 70%)' }}
      />
      {/* Textura sutil de linho escuro parisiense */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* =====================================================================
          2. TOPO: IDENTIDADE EDITORIAL DE PARIS
          ===================================================================== */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest text-[#E8F1F5]/60 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E9A825] animate-pulse" />
          <span className="uppercase text-[11px] font-semibold tracking-[0.25em] text-[#E8F1F5]/80">
            Jardins • São Paulo
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D48B1C] bg-[#1D3557]/40 px-3 py-1 rounded-full border border-[#E9A825]/30 backdrop-blur-sm">
          <span>Édition 2026</span>
        </div>
      </div>

      {/* =====================================================================
          3. CENTRO: A XÍCARA DE CAFÉ ARTESANAL COM A FUMAÇA REALISTA
          ===================================================================== */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center w-full max-w-lg mx-auto py-4">
        
        {/* PALCO DA XÍCARA E VAPOR */}
        <div className="relative w-72 h-64 flex flex-col items-center justify-center animate-float-cup">
          
          {/* =================================================================
              SISTEMA DE FUMAÇA / VAPOR ORGÂNICO (Fumaça Fluida em SVG)
              ================================================================= */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-40 pointer-events-none overflow-visible flex items-center justify-center z-30">
            
            {/* Pluma 1: Esquerda fluida */}
            <svg 
              className="absolute bottom-4 left-10 w-16 h-36 animate-steam-1 opacity-70"
              viewBox="0 0 50 120" 
              fill="none"
              style={{ filter: 'blur(3px)' }}
            >
              <path
                d="M 22 120 Q 8 85, 26 55 T 16 10"
                stroke="url(#steam-grad-amber)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 2: Centro espessa com topo sinuoso */}
            <svg 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-44 animate-steam-2 opacity-80"
              viewBox="0 0 60 140" 
              fill="none"
              style={{ filter: 'blur(3.5px)' }}
            >
              <path
                d="M 30 140 C 18 105, 42 75, 24 45 C 15 25, 34 12, 28 0"
                stroke="url(#steam-grad-warm)"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 3: Direita ondulada */}
            <svg 
              className="absolute bottom-4 right-10 w-16 h-36 animate-steam-3 opacity-65"
              viewBox="0 0 50 120" 
              fill="none"
              style={{ filter: 'blur(3px)' }}
            >
              <path
                d="M 24 120 Q 38 85, 20 55 T 32 10"
                stroke="url(#steam-grad-white)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            {/* Pluma 4: Névoa de base suave */}
            <svg 
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-32 animate-steam-4 opacity-50"
              viewBox="0 0 80 100" 
              fill="none"
              style={{ filter: 'blur(4.5px)' }}
            >
              <path
                d="M 40 100 Q 25 65, 48 35 T 38 0"
                stroke="url(#steam-grad-amber)"
                strokeWidth="11"
                strokeLinecap="round"
              />
            </svg>

            {/* Partículas de Aroma Cintilantes Subindo */}
            <div className="absolute bottom-8 left-14 w-1.5 h-1.5 rounded-full bg-[#E9A825] animate-steam-2 blur-[0.5px]" style={{ '--drift-x': '-18px' }} />
            <div className="absolute bottom-10 left-1/2 w-1.5 h-1.5 rounded-full bg-[#FDFBF7] animate-steam-1 blur-[0.5px]" style={{ '--drift-x': '12px' }} />
            <div className="absolute bottom-9 right-14 w-1.5 h-1.5 rounded-full bg-[#E9A825] animate-steam-3 blur-[0.5px]" style={{ '--drift-x': '20px' }} />
          </div>

          {/* =================================================================
              ILUSTRAÇÃO DA XÍCARA DE PORCELANA FRANCESA LE PETIT BLEU
              ================================================================= */}
          <svg className="w-56 h-40 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] z-20" viewBox="0 0 220 150" fill="none">
            {/* Definições de Gradientes e Filtros */}
            <defs>
              {/* Gradiente da Porcelana Bleu de France */}
              <linearGradient id="cup-porcelain" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2A6F97" />
                <stop offset="45%" stopColor="#1D3557" />
                <stop offset="100%" stopColor="#0D2040" />
              </linearGradient>

              {/* Ouro Francês Real */}
              <linearGradient id="gold-filigree" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B9770E" />
                <stop offset="35%" stopColor="#E9A825" />
                <stop offset="70%" stopColor="#FFF2B2" />
                <stop offset="100%" stopColor="#D48B1C" />
              </linearGradient>

              {/* Crema do Café Espresso Artesanal */}
              <radialGradient id="espresso-crema" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E9A825" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#B9770E" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#5E3013" />
                <stop offset="100%" stopColor="#331A08" />
              </radialGradient>

              {/* Gradientes da Fumaça */}
              <linearGradient id="steam-grad-amber" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#E9A825" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#F9F7F2" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="steam-grad-warm" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#D48B1C" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#E8F1F5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="steam-grad-white" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#FFF" stopOpacity="0.55" />
                <stop offset="60%" stopColor="#E8F1F5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Sombra de Contato do Pires na Mesa */}
            <ellipse cx="110" cy="138" rx="85" ry="10" fill="#02050B" opacity="0.8" filter="blur(5px)" />

            {/* Pires (Saucer) */}
            <ellipse cx="110" cy="130" rx="90" ry="14" fill="url(#cup-porcelain)" stroke="url(#gold-filigree)" strokeWidth="1.8" />
            <ellipse cx="110" cy="129" rx="60" ry="7" fill="#0D2040" opacity="0.7" />

            {/* Colher Dourada de Bistrô */}
            <path
              d="M 18 132 C 35 128, 55 125, 75 124 C 80 123.8, 85 125, 90 126"
              stroke="url(#gold-filigree)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <ellipse cx="18" cy="132" rx="7" ry="3.5" fill="url(#gold-filigree)" transform="rotate(-15 18 132)" />

            {/* Asa da Xícara (Handle) */}
            <path
              d="M 152 72 C 182 72, 185 104, 148 108"
              fill="none"
              stroke="url(#cup-porcelain)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 152 72 C 182 72, 185 104, 148 108"
              fill="none"
              stroke="url(#gold-filigree)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            {/* Corpo da Xícara de Porcelana */}
            <path
              d="M 62 62 C 64 105, 78 122, 110 122 C 142 122, 156 105, 158 62 Z"
              fill="url(#cup-porcelain)"
            />

            {/* Filete Dourado Vertical de Brilho */}
            <path
              d="M 72 70 C 74 100, 84 114, 105 116"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
              opacity="0.18"
              strokeLinecap="round"
            />

            {/* Filete Dourado Decorativo Francês na Barriga da Xícara */}
            <path
              d="M 68 88 C 82 100, 138 100, 152 88"
              fill="none"
              stroke="url(#gold-filigree)"
              strokeWidth="1.2"
              opacity="0.8"
            />

            {/* Boca da Xícara (Borda Oval Superior) */}
            <ellipse cx="110" cy="62" rx="48" ry="12" fill="url(#cup-porcelain)" stroke="url(#gold-filigree)" strokeWidth="2" />

            {/* Superfície do Café Espresso com Crema Cremosa */}
            <ellipse cx="110" cy="62" rx="42" ry="9.5" fill="url(#espresso-crema)" />

            {/* Círculos Concéntricos de Aroma / Ondulação da Crema */}
            <ellipse cx="108" cy="62" rx="28" ry="5.5" fill="none" stroke="#E9A825" strokeWidth="0.8" opacity="0.65" />
            <ellipse cx="107" cy="61.5" rx="14" ry="3" fill="none" stroke="#FFF2B2" strokeWidth="0.6" opacity="0.5" />
            
            {/* Brilho Especular na Borda de Ouro */}
            <ellipse cx="88" cy="56" rx="6" ry="1.5" fill="#FFF" opacity="0.6" transform="rotate(-10 88 56)" />
          </svg>

          {/* Selo Monograma Le Petit Bleu */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#0D2040]/90 border border-[#E9A825]/40 text-[#E9A825] text-[9px] font-mono tracking-widest uppercase shadow-md backdrop-blur-xs flex items-center gap-1">
            <Coffee className="w-2.5 h-2.5 text-[#E9A825]" />
            <span>Café Pur Arabica</span>
          </div>
        </div>

        {/* =====================================================================
            4. TÍTULOS E MARCA EDITORIAL FRANCESA
            ===================================================================== */}
        <div className="mt-4 space-y-2 max-w-md">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#D48B1C]">
            <Sparkles className="w-3 h-3 text-[#E9A825]" />
            <span>Gastronomie & Torréfaction</span>
            <Sparkles className="w-3 h-3 text-[#E9A825]" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#FDFBF7] drop-shadow-md">
            LE PETIT BLEU
          </h1>

          <p className="text-xs sm:text-sm font-sans text-[#E8F1F5]/80 font-light tracking-wide italic">
            Café de Especialidade • Viennoiserie • Bistrô Parisien
          </p>
        </div>

        {/* =====================================================================
            5. BOTÃO DE AÇÃO & BARRA DE PROGRESSO
            ===================================================================== */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-xs">
          
          {/* Botão Entrar */}
          <button
            onClick={handleExit}
            className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#1D3557] via-[#2A6F97] to-[#1D3557] hover:from-[#E9A825] hover:via-[#D48B1C] hover:to-[#B9770E] text-white text-xs font-mono font-semibold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(29,53,87,0.5)] hover:shadow-[0_6px_25px_rgba(233,168,37,0.4)] flex items-center justify-center gap-2 border border-[#E9A825]/40 group"
          >
            <span>Entrar no Bistrô</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E9A825] group-hover:text-white transition-colors group-hover:translate-x-1 duration-200" />
          </button>

          {/* Barra de Progresso Fina Dourada */}
          <div className="w-full bg-[#1D3557]/60 h-1 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-[#D48B1C] to-[#E9A825] rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-[10px] font-mono text-[#E8F1F5]/40 tracking-wider">
            {progress < 100 ? `Preparando seu café... ${progress}%` : 'Bienvenue!'}
          </span>
        </div>

      </div>

      {/* =====================================================================
          6. RODAPÉ COM SELO PARIS // BRASIL
          ===================================================================== */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#E8F1F5]/40 max-w-5xl mx-auto w-full pt-2 border-t border-white/5">
        <span>Alameda Lorena, Jardins</span>
        <span>Clique em qualquer lugar para pular</span>
      </div>

    </div>
  );
}
