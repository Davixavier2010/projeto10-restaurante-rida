import React, { useState } from 'react';
import { Calendar, Users, Clock, Sparkles, MessageCircle, Heart, Wine, Coffee, CheckCircle } from 'lucide-react';

export default function ReservationConcierge() {
  const [occasion, setOccasion] = useState('brunch');
  const [guests, setGuests] = useState('2');

  const occasions = [
    { id: 'brunch', label: 'Café & Brunch', icon: Coffee },
    { id: 'almoco', label: 'Almoço & Negócios', icon: Clock },
    { id: 'jantar', label: 'Jantar a Dois', icon: Heart }
  ];

  const guestOptions = [
    { id: '2', label: '2 Pessoas' },
    { id: '4', label: '3 a 4 Pessoas' },
    { id: '6', label: '5 a 8 Pessoas (Grupo)' }
  ];

  const getRecommendation = () => {
    if (occasion === 'jantar') {
      return {
        table: 'Salão Parisiense // Mesa Luz de Velas',
        description:
          'Mesa intimista no salão interno com sofás de veludo azul cobalto, iluminação quente e acústica ideal para uma conversa a dois.',
        schedule: '19h30 às 22h30',
        winePairing: 'Recomendação: Harmonização com vinho Bordeaux AOC'
      };
    }
    if (occasion === 'almoco') {
      return {
        table: 'Varanda Central Lorena // Almoço Executivo',
        description:
          'Ambiente iluminado e ágil com mesas espaçosas de mármore carrara, perfeito para almoços de negócios ou pausas revigorantes.',
        schedule: '12h00 às 15h00',
        winePairing: 'Recomendação: Menu Executivo com entrada, prato e sobremesa'
      };
    }
    return {
      table: 'Terraço Jardim Bistrô // Brunch Ensolarado',
      description:
        'Mesa ao ar livre cercada por oliveiras ornamentais e luz natural da Alameda Lorena, proporcionando a autêntica atmosfera de café francês.',
      schedule: '09h00 às 13h30',
      winePairing: 'Recomendação: Mimosa da Casa e Cesta de Croissants Folhados'
    };
  };

  const rec = getRecommendation();

  const selectedOccasionLabel =
    occasions.find((o) => o.id === occasion)?.label || 'Visita';
  const selectedGuestsLabel =
    guestOptions.find((g) => g.id === guests)?.label || '2 pessoas';

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de reservar uma mesa no Le Petit Bleu Jardins.\n\n• Ocasião: ${selectedOccasionLabel}\n• Pessoas: ${selectedGuestsLabel}\n• Espaço sugerido: ${rec.table}\n\nPoderia me informar a disponibilidade de horários?`
  );

  return (
    <section id="reservas" className="py-20 md:py-28 bg-[#F9F7F2] border-t border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/10 text-[#1D3557] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D48B1C]" />
            Concierge Digital RIDA
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1D3557] tracking-tight">
            Reserve a Mesa Ideal Para o Seu Momento
          </h2>
          <p className="mt-4 text-[#6B5E57] text-base leading-relaxed">
            Selecione a sua ocasião e tamanho do grupo para recomendarmos o melhor espaço do bistrô e garantir sua reserva sem filas.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Selection Controls */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm space-y-8">
            {/* 1. Occasion */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#1D3557] mb-3">
                1. Qual é a sua ocasião?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {occasions.map((o) => {
                  const Icon = o.icon;
                  const isSelected = occasion === o.id;
                  return (
                    <button
                      key={o.id}
                      onClick={() => setOccasion(o.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 active:scale-[0.97] ${
                        isSelected
                          ? 'border-[#1D3557] bg-[#1D3557]/5 ring-1 ring-[#1D3557]'
                          : 'border-[#E8E2D5] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 mb-3 ${
                          isSelected ? 'text-[#1D3557]' : 'text-[#8C7E75]'
                        }`}
                      />
                      <span className="font-serif text-sm font-bold text-[#1A1412]">
                        {o.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Number of Guests */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#1D3557] mb-3">
                2. Quantas pessoas acompanharão?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {guestOptions.map((g) => {
                  const isSelected = guests === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setGuests(g.id)}
                      className={`p-4 rounded-2xl border text-center transition-all duration-200 active:scale-[0.97] ${
                        isSelected
                          ? 'border-[#1D3557] bg-[#1D3557] text-white shadow-sm'
                          : 'border-[#E8E2D5] text-[#2C221E] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <span className="font-mono text-xs sm:text-sm font-semibold">
                        {g.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EDE4] flex items-center gap-2 text-xs font-mono text-[#8C7E75]">
              <CheckCircle className="w-4 h-4 text-[#25D366]" />
              <span>Confirmação sem custo de taxa com atendimento exclusivo pelo WhatsApp.</span>
            </div>
          </div>

          {/* Right: Dynamic Personalized Recommendation Card */}
          <div className="lg:col-span-5 bg-[#1D3557] text-[#FDFBF7] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E9A825]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9A825] text-[10px] font-mono uppercase tracking-widest font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Recomendação Personalizada
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {rec.table}
              </h3>

              <div className="text-xs font-mono text-[#E9A825] mb-4">
                Horário Sugerido: {rec.schedule}
              </div>

              <p className="text-xs sm:text-sm text-[#E8F1F5] leading-relaxed mb-6">
                {rec.description}
              </p>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-8">
                <div className="text-[11px] font-mono text-[#E9A825]">
                  ✦ {rec.winePairing}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA with pre-formatted message */}
            <div>
              <a
                href={`https://wa.me/5512974070207?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full btn-bistro-gold flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-wide"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Confirmar Reserva no WhatsApp</span>
              </a>

              <div className="text-center mt-3 text-[11px] font-mono text-white/60">
                Atendimento RIDA: (12) 97407-0207
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
