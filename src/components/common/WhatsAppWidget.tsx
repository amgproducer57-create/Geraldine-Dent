import React, { useState } from 'react';
import { CLINIC_INFO } from '../../data/content';
import { MessageCircle, X, ChevronRight, Sparkles } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expandable Dialog */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl bg-[#FAFAF7] border border-[#029CE3]/15 shadow-2xl p-5 text-[#1E2A32] animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#029CE3]/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sora text-sm font-semibold text-[#1E2A32]">
                  Geraldine Dent
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#029CE3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>En línea · Jaén, Perú</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#8A9BA6] hover:text-[#1E2A32] hover:bg-[#E4EFF4] transition-colors"
              aria-label="Cerrar widget de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-[#1E2A32]/80 leading-relaxed">
            <p>
              ¡Hola! 👋 ¿En qué podemos ayudarte hoy? Elige una línea de atención para coordinar tu cita o consulta con la Dra. Geraldine:
            </p>
          </div>

          {/* Numbers list */}
          <div className="space-y-2">
            <a
              href="https://wa.me/51963193327?text=Hola%20Geraldine%20Dent,%20deseo%20informaci%C3%B3n%20para%20agendar%20una%20cita%20odontol%C3%B3gica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#029CE3]/15 hover:border-[#25D366] hover:bg-[#E4EFF4]/60 transition-all group"
            >
              <div>
                <p className="text-xs font-semibold text-[#1E2A32] group-hover:text-[#029CE3]">
                  Línea Principal
                </p>
                <p className="text-xs text-[#8A9BA6] font-mono tabular-nums">
                  963 193 327
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8A9BA6] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="https://wa.me/51966345805?text=Hola%20Geraldine%20Dent,%20deseo%20consultar%20por%20tratamientos%20y%20horarios%20disponibles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#029CE3]/15 hover:border-[#25D366] hover:bg-[#E4EFF4]/60 transition-all group"
            >
              <div>
                <p className="text-xs font-semibold text-[#1E2A32] group-hover:text-[#029CE3]">
                  Línea Secundaria
                </p>
                <p className="text-xs text-[#8A9BA6] font-mono tabular-nums">
                  966 345 805
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8A9BA6] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          <div className="mt-3 pt-2 text-[10px] text-center text-[#8A9BA6] flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-[#E8B86D]" />
            <span>Respuesta habitual en menos de 15 minutos</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Subtle expand ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};
