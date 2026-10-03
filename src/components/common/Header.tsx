import React, { useState, useEffect } from 'react';
import { PageType } from '../../types';
import { CLINIC_INFO } from '../../data/content';
import { Calendar, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'tratamientos', label: 'Tratamientos' },
    { id: 'sonrisas', label: 'Sonrisas' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (pageId: PageType) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none">
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 pointer-events-auto rounded-full border border-[#029CE3]/15 bg-[#FAFAF7]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(46,110,142,0.08)] flex items-center justify-between ${
          scrolled ? 'py-2.5 px-4 sm:px-6' : 'py-3.5 px-5 sm:px-8'
        }`}
      >
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="text-left focus:outline-none group flex items-center cursor-pointer shrink-0"
        >
          <span className="font-sora text-base sm:text-xl font-semibold tracking-tight text-[#1E2A32] group-hover:text-[#029CE3] transition-colors">
            Geraldine
          </span>
          <span className="font-sora text-base sm:text-xl font-bold tracking-tight text-[#029CE3] ml-1">
            DENT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7FC8BC] ml-1 mb-1.5 inline-block shrink-0"></span>
        </button>

        {/* Zone 2: 5 clean nav links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#029CE3] font-semibold'
                    : 'text-[#1E2A32]/75 hover:text-[#029CE3]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#029CE3] rounded-full transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick WhatsApp chat icon button */}
          <a
            href={CLINIC_INFO.whatsappLink1}
            target="_blank"
            rel="noopener noreferrer"
            title="Escribir por WhatsApp a Jaén"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#E4EFF4] text-[#029CE3] hover:bg-[#7FC8BC]/20 hover:text-[#1E2A32] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Agendar cita pill CTA (Más compacto en móvil para no tapar DENT) */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 bg-[#029CE3] hover:bg-[#0287C3] text-white text-[11px] sm:text-sm font-medium px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#7FC8BC]" />
            <span>Agendar Cita</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-full text-[#1E2A32] hover:bg-[#E4EFF4] transition-colors focus:outline-none shrink-0"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm pointer-events-auto rounded-3xl border border-[#029CE3]/15 bg-[#FAFAF7]/95 backdrop-blur-2xl shadow-xl p-4 transition-all">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E4EFF4] text-[#029CE3] font-semibold'
                      : 'text-[#1E2A32] hover:bg-[#FAFAF7]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#029CE3]" />}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#1E2A32]/10 mt-1 flex flex-col gap-2">
              <a
                href={CLINIC_INFO.whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#E4EFF4] text-[#029CE3] text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {CLINIC_INFO.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
