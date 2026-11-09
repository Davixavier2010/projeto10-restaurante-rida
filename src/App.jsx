import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import MenuSection from './components/MenuSection';
import ReservationConcierge from './components/ReservationConcierge';
import LocationSection from './components/LocationSection';
import FooterSection from './components/FooterSection';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bistro-linen-bg text-[#1A1412] font-sans selection:bg-[#1D3557] selection:text-white flex flex-col">
      {/* 1. Barra de Navegação */}
      <Navbar />

      {/* 2. Hero Section: Brunch Editorial & Destaques */}
      <HeroSection />

      {/* 3. Experiência: Os 4 Pilares da Gastronomia Francesa */}
      <ExperienceSection />

      {/* 4. Menu em Abas: Viennoiserie, Brunch, Pratos, Sobremesas, Vinhos */}
      <MenuSection />

      {/* 5. Concierge Interativo de Reservas */}
      <ReservationConcierge />

      {/* 6. Localização Jardins & Google Maps */}
      <LocationSection />

      {/* 7. Rodapé com Assinatura RIDA */}
      <FooterSection />

      {/* Botão Flutuante Rápido de Conversão WhatsApp */}
      <a
        href="https://wa.me/5512974070207?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Le%20Petit%20Bleu."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-mono text-xs font-bold pl-0 group-hover:pl-2">
          Reservar Mesa
        </span>
      </a>
    </div>
  );
}
