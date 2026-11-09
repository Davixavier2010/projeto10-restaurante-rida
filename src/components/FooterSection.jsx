import React from 'react';
import { Coffee, MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1412] text-[#FDFBF7] pt-16 pb-12 border-t border-[#332924] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#D48B1C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1D3557] flex items-center justify-center text-[#FDFBF7]">
                <Coffee className="w-5 h-5 text-[#E9A825]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                LE PETIT BLEU
              </span>
            </div>

            <p className="text-sm text-[#8C7E75] leading-relaxed max-w-sm">
              A verdadeira alma da culinária bistrô francesa em São Paulo. Viennoiserie de fermentação lenta 72h, brunch autoral e cafés de microlotes colhidos na Mantiqueira.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D48B1C]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Alameda Lorena, 1427 — Jardins, SP</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/50">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#FDFBF7]/80">
              <li>
                <a href="#cardapio" className="hover:text-[#E9A825] transition-colors">
                  Cardápio Autoral & Viennoiserie
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#E9A825] transition-colors">
                  Os 4 Pilares da Nossa Cozinha
                </a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-[#E9A825] transition-colors">
                  Concierge & Reserva de Mesas
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#E9A825] transition-colors">
                  Como Chegar & Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct WhatsApp Channel */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/50">
              Canal de Conversão
            </h4>
            <p className="text-xs text-[#8C7E75]">
              Faça reservas corporativas, comemorações e pedidos para retirada direto pelo nosso canal oficial:
            </p>
            <a
              href="https://wa.me/5512974070207?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20atendimento%20do%20Le%20Petit%20Bleu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full btn-bistro-gold text-xs font-mono font-bold tracking-wide"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp: (12) 97407-0207</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C7E75]">
          <div>
            © 2026 Le Petit Bleu Café. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span>Desenvolvido sob o</span>
            <span className="text-[#E9A825] font-bold">Plano Personalizado Agência RIDA</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
