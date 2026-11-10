import React from 'react';
import { MapPin, Clock, Navigation, Car, PhoneCall, Sparkles } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/10 text-[#1D3557] text-xs font-sora font-semibold tracking-wider uppercase mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#D48B1C]" />
          Visite Nosso Espaço
        </div>
        <h2 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#1D3557] tracking-tight">
          Um Refúgio Parisiense no Coração dos Jardins
        </h2>
        <p className="mt-4 text-[#6B5E57] text-base leading-relaxed">
          Localizado na arborizada Alameda Lorena, o Le Petit Bleu foi desenhado para transportar você às calçadas mais nobres de Saint-Germain-des-Prés.
        </p>
      </div>

      {/* Grid: Coordinates & Interactive Google Maps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Info Card */}
        <div className="lg:col-span-5 card-bistro rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-sora font-bold text-[#D48B1C] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Endereço & Acesso</span>
              </div>
              <h3 className="font-sora text-xl sm:text-2xl font-bold text-[#1D3557]">
                Alameda Lorena, 1427
              </h3>
              <p className="text-sm text-[#6B5E57] mt-1">
                Jardins, São Paulo — SP • CEP 01424-001
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E8E2D5] space-y-3">
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-[#1D3557] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-sora font-bold text-[#1D3557]">
                    Valet Cortesia no Local
                  </div>
                  <div className="text-xs text-[#6B5E57] mt-0.5">
                    Serviço de manobrista com segurança privada na porta.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-sora font-bold text-[#D48B1C] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Horários de Funcionamento</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2C221E] font-medium">
                <li className="flex justify-between pb-1.5 border-b border-[#F2EDE4]">
                  <span>Terça a Sexta-feira</span>
                  <span className="font-mono font-bold text-[#1D3557]">08h00 — 23h00</span>
                </li>
                <li className="flex justify-between pb-1.5 border-b border-[#F2EDE4]">
                  <span>Sábados e Domingos</span>
                  <span className="font-mono font-bold text-[#1D3557]">08h30 — 23h30</span>
                </li>
                <li className="flex justify-between text-[#8C7E75]">
                  <span>Segundas-feiras</span>
                  <span className="font-mono italic">Fechado (Torra de Grãos)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#F2EDE4] flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com/?q=Alameda+Lorena,+1427+-+Jardins,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full btn-bistro-bleu flex items-center justify-center gap-2 text-xs font-mono font-bold"
            >
              <Navigation className="w-4 h-4 text-[#E9A825]" />
              <span>Abrir Google Maps</span>
            </a>

            <a
              href="https://waze.com/ul?q=Alameda%20Lorena%201427%20Jardins%20SP"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-full bg-white hover:bg-[#F2EDE4] text-[#1D3557] border border-[#E8E2D5] flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all active:scale-[0.97]"
            >
              <span>Waze</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Google Maps Iframe */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#E8E2D5] bg-white shadow-md relative min-h-[380px] flex flex-col">
          {/* Status pill over map */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#FDFBF7]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E2D5] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#1D3557]">
              Aberto Agora nos Jardins
            </span>
          </div>

          <iframe
            title="Localização do Le Petit Bleu Café & Bistrô nos Jardins"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.969188339841!2d-46.666683823793754!3d-23.570183178794825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e0a9f5d68b%3A0xb367121759bbfae9!2sAlameda%20Lorena%2C%201427%20-%20Jardins%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
