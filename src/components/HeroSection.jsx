import React from 'react';
import { Calendar, BookOpen, Sparkles, Croissant, Coffee, Leaf, Wine, ArrowDownRight, Award } from 'lucide-react';

export default function HeroSection() {
  const highlights = [
    {
      icon: Croissant,
      title: '72h Fermentação',
      sub: 'Manteiga Francesa DOP',
      desc: 'Folhagem artesanal crocante'
    },
    {
      icon: Coffee,
      title: 'Grãos Especiais',
      sub: 'Microlotes 86+ pts',
      desc: 'Espresso & V60 calibrados'
    },
    {
      icon: Leaf,
      title: '100% Fresco',
      sub: 'Produtores Orgânicos',
      desc: 'Ingredientes sazonais colhidos'
    },
    {
      icon: Wine,
      title: 'Vinhos Naturais',
      sub: 'Rótulos Franceses',
      desc: 'Curadoria de pequenos terroirs'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial effects */}
      <div className="bistro-glow-bleu pointer-events-none" />
      <div className="bistro-glow-amber pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/8 border border-[#1D3557]/15 text-[#1D3557] text-xs font-sora font-normal tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D48B1C]" />
            Bistrô Francês & Café de Especialidade // Jardins SP
          </div>

          {/* Main Editorial Headlines */}
          <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1D3557] leading-[1.15] max-w-4xl">
            A Arte da Gastronomia Francesa <br className="hidden sm:inline" />
            <span className="font-sora font-normal text-[#2C221E] underline decoration-[#D48B1C]/40 decoration-wavy decoration-1">
              com o frescor do nosso tempo.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg font-sora font-normal text-[#6B5E57] max-w-2xl leading-relaxed">
            Viennoiserie artesanal folhada com pura manteiga francesa, brunch autoral e clássicos da culinária bistrô preparados diariamente na Alameda Lorena.
          </p>

          {/* CTA Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/5512974070207?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20para%20o%20Brunch%20no%20Le%20Petit%20Bleu."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full btn-bistro-bleu flex items-center justify-center gap-2.5 text-sm font-mono font-bold tracking-wide"
            >
              <Calendar className="w-4 h-4 text-[#E9A825]" />
              <span>Reservar Mesa no WhatsApp</span>
            </a>

            <a
              href="#cardapio"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#F2EDE4] text-[#1D3557] border border-[#E8E2D5] flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] shadow-sm hover:border-[#1D3557]/40"
            >
              <BookOpen className="w-4 h-4 text-[#D48B1C]" />
              <span>Explorar Cardápio Autoral</span>
            </a>
          </div>
        </div>

        {/* Hero Media Showcase: Brunch Table */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8E2D5] bg-white shadow-xl">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Mesa de Brunch Francês no Le Petit Bleu Bistrô"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/60 via-transparent to-black/10" />

              {/* Tag flutuante sobre a imagem */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-[#FDFBF7]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E8E2D5] shadow-md">
                <Award className="w-4 h-4 text-[#D48B1C]" />
                <span className="font-serif text-xs sm:text-sm font-bold text-[#1D3557]">
                  Viennoiserie & Brunch Servido Diariamente a partir das 08h
                </span>
              </div>
            </div>
          </div>

          {/* 4 Cards de Destaque Técnico / Pilares rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-bistro p-4 sm:p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1D3557]/8 text-[#1D3557] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D48B1C]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#8C7E75]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-sora font-normal text-sm sm:text-base text-[#1D3557]">
                      {item.title}
                    </h3>
                    <p className="font-sora text-xs font-normal text-[#D48B1C] mt-0.5">
                      {item.sub}
                    </p>
                    <p className="text-[11px] text-[#6B5E57] mt-1 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
