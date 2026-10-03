import React from 'react';
import { PageType } from '../../types';
import { CLINIC_INFO } from '../../data/content';
import { MapPin, Phone, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SmileCurve } from './SmileCurve';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#1E2A32] text-[#FAFAF7] pt-20 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#029CE3]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7FC8BC]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center">
              <span className="font-sora text-2xl font-bold tracking-tight text-white">
                Geraldine
              </span>
              <span className="font-sora text-2xl font-bold tracking-tight text-[#7FC8BC] ml-1.5">
                DENT
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E8B86D] ml-1 mb-3"></span>
            </div>

            <p className="font-serif-instrument italic text-xl md:text-2xl text-[#E4EFF4]/90 font-normal leading-relaxed">
              &ldquo;{CLINIC_INFO.motto}&rdquo;
            </p>

            <p className="text-sm text-[#8A9BA6] leading-relaxed max-w-sm">
              Centro odontológico de referencia en Jaén, Cajamarca. Calidez familiar, alta especialización y tecnología moderna para transformar tu salud y estética dental.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#029CE3] hover:bg-[#7FC8BC] text-white text-xs font-semibold tracking-wide uppercase transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>Agendar evaluación</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 2: Ubicación & Contacto Verificado */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#7FC8BC] font-semibold">
              Ubicación & Contacto
            </h4>

            <div className="space-y-3.5 text-sm text-[#E4EFF4]/80">
              <a
                href="https://maps.google.com/?q=Prolongacion+Mariscal+Ureta+230+Jaen+Cajamarca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#7FC8BC] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="leading-snug">
                  <p className="text-white font-medium">{CLINIC_INFO.address}</p>
                  <p className="text-xs text-[#8A9BA6] mt-0.5">{CLINIC_INFO.reference}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#7FC8BC] mt-1 group-hover:underline">
                    Abrir en Google Maps <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#7FC8BC] mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+51963193327"
                    className="hover:text-white font-mono tabular-nums transition-colors"
                  >
                    +51 963 193 327
                  </a>
                  <a
                    href="tel:+51966345805"
                    className="hover:text-white font-mono tabular-nums transition-colors"
                  >
                    +51 966 345 805
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#7FC8BC] mt-0.5 shrink-0" />
                <p className="text-xs leading-relaxed text-[#8A9BA6]">
                  {CLINIC_INFO.schedule}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Navegación & Redes Oficiales */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#7FC8BC] font-semibold">
              Conecta con nosotros
            </h4>

            <p className="text-xs text-[#8A9BA6]">
              Más de 48.3K likes en TikTok y comunidad de pacientes en Jaén:
            </p>

            <div className="flex items-center gap-3 pt-1">
              {/* TikTok */}
              <a
                href={CLINIC_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok @geraldinedent"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7FC8BC] hover:text-[#1E2A32] hover:-translate-y-1 hover:-rotate-8 transition-all duration-200 shadow-sm"
              >
                <span className="font-bold text-xs">TT</span>
              </a>

              {/* Instagram */}
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @geraldinedent.jaen"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7FC8BC] hover:text-[#1E2A32] hover:-translate-y-1 hover:-rotate-8 transition-all duration-200 shadow-sm"
              >
                <span className="font-bold text-xs">IG</span>
              </a>

              {/* Facebook */}
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook @geraldinedentjaen"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7FC8BC] hover:text-[#1E2A32] hover:-translate-y-1 hover:-rotate-8 transition-all duration-200 shadow-sm"
              >
                <span className="font-bold text-xs">FB</span>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={CLINIC_INFO.whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Directo"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:-translate-y-1 hover:-rotate-8 transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-3">
              <nav className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8A9BA6]">
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('tratamientos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tratamientos
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('sonrisas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sonrisas
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9BA6]">
          <div className="flex items-center gap-2">
            <span>© 2026 Geraldine Dent</span>
            <span aria-hidden="true">·</span>
            <span>Jaén, Cajamarca, Perú</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E8B86D]">Calificación 5.0★ Google</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#8A9BA6]">Diseñado con calma</span>
            <SmileCurve width={45} height={10} color="#E8B86D" />
          </div>
        </div>
      </div>
    </footer>
  );
};
