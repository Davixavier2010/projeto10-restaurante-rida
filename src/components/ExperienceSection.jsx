import React from 'react';
import { Croissant, Coffee, UtensilsCrossed, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function ExperienceSection() {
  const pillars = [
    {
      icon: Croissant,
      step: 'PILAR 01',
      title: 'Viennoiserie DOP',
      subtitle: 'Farinha Pura T55 Francesa',
      description:
        'Nossos croissants e folhados descansam por 72 horas em fermentação lenta. Usamos exclusivamente manteiga AOP Charentes-Poitou para lâminas perfeitamente aeradas e crocantes.'
    },
    {
      icon: Coffee,
      step: 'PILAR 02',
      title: 'Café de Especialidade',
      subtitle: 'Microlotes 86+ Pontos SCA',
      description:
        'Torra própria e calibragem milimétrica a cada manhã. Extrações em máquina La Marzocco e rituais manuais filtrados (V60, Chemex e Prensa Francesa).'
    },
    {
      icon: UtensilsCrossed,
      step: 'PILAR 03',
      title: 'Cozinha Sazonal',
      subtitle: 'Da Horta Orgânica ao Prato',
      description:
        'Clássicos da culinária de bistrô executados com ingredientes frescos de produtores artesanais da Serra da Mantiqueira e do interior de São Paulo.'
    },
    {
      icon: Sparkles,
      step: 'PILAR 04',
      title: 'Espaço & Atmosfera',
      subtitle: 'O Charme de Saint-Germain nos Jardins',
      description:
        'Salão aconchegante com mesas de mármore carrara, cadeiras trançadas bistrô e um terraço arborizado banhado pela luz natural da Alameda Lorena.'
    }
  ];

  return (
    <section id="experiencia" className="py-20 md:py-28 bg-[#F9F7F2] border-y border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/10 text-[#1D3557] text-xs font-sora font-normal tracking-wider uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D48B1C]" />
            Nossa Filosofia Culinária
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-normal text-[#1D3557] tracking-tight leading-tight">
            A Autenticidade do Terroir <br className="hidden sm:inline" />
            <span className="font-sora font-normal text-[#2C221E]">com a delicadeza de Paris</span>
          </h2>
          <p className="mt-4 text-[#6B5E57] text-base leading-relaxed font-sora font-normal">
            Cada receita honra a tradição gastronômica francesa com respeito rigoroso aos processos, tempo de cura e técnicas centenárias.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D5] hover:border-[#1D3557]/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1D3557]/8 text-[#1D3557] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#D48B1C]" />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest font-semibold text-[#8C7E75]">
                      {p.step}
                    </span>
                  </div>

                  <h3 className="font-sora text-lg sm:text-xl font-normal text-[#1D3557] group-hover:text-[#D48B1C] transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-sora text-xs font-normal text-[#D48B1C] mt-1">
                    {p.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B5E57] mt-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#F2EDE4] flex items-center gap-1.5 text-xs font-mono font-medium text-[#1D3557]">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  <span>Padrão Francês Certificado</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
