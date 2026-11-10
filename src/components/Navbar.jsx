import React, { useState, useEffect } from 'react';
import { Coffee, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

export default function Navbar({ onOpenOpening }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Localização', href: '#localizacao' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E2D5] py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#1D3557] flex items-center justify-center text-[#FDFBF7] shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Coffee className="w-5 h-5 text-[#E9A825]" />
          </div>
          <div className="flex flex-col">
            <span className="font-sora text-base sm:text-lg font-semibold tracking-[0.16em] text-[#1D3557] uppercase pl-[0.16em]">
              LE PETIT BLEU
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#8C7E75] uppercase">
              BISTRÔ & CAFÉ // JARDINS SP
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#2C221E] hover:text-[#1D3557] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1D3557] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}

          {onOpenOpening && (
            <button
              onClick={onOpenOpening}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D3557]/5 hover:bg-[#1D3557]/10 text-[#1D3557] text-xs font-mono transition-colors border border-[#1D3557]/15 cursor-pointer"
              title="Rever animação de abertura do café"
            >
              <Coffee className="w-3.5 h-3.5 text-[#E9A825]" />
              <span>Abertura</span>
            </button>
          )}
        </nav>

        {/* CTA WhatsApp & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5512974070207?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Le%20Petit%20Bleu%20Jardins."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-bistro-bleu text-xs font-mono font-semibold tracking-wide"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Reservar no WhatsApp</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1D3557] hover:bg-[#1D3557]/10 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8E2D5] px-6 py-5 shadow-lg flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif font-semibold text-[#1D3557] py-2 border-b border-[#E8E2D5]/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#D48B1C]">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="https://wa.me/5512974070207?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Le%20Petit%20Bleu%20Jardins."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full btn-bistro-bleu text-xs font-mono font-bold"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Reservar Mesa: (12) 97407-0207</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
