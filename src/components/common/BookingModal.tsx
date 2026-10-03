import React, { useState } from 'react';
import { SERVICES_LIST, CLINIC_INFO } from '../../data/content';
import { X, Calendar, MessageCircle, Check, Clock, User, Phone } from 'lucide-react';
import { SmileCurve } from './SmileCurve';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = "",
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(
    initialService || SERVICES_LIST[0].title
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [selectedPhoneLine, setSelectedPhoneLine] = useState<'line1' | 'line2'>('line1');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const targetPhone = selectedPhoneLine === 'line1' ? '51963193327' : '51966345805';
    const message = `🦷 *Solicitud de Cita — Geraldine Dent*\n\n` +
      `*Paciente:* ${name || 'No especificado'}\n` +
      `*Teléfono:* ${phone || 'No especificado'}\n` +
      `*Tratamiento de interés:* ${selectedService}\n` +
      `*Preferencia de horario:* ${preferredDate || 'A coordinar'}\n\n` +
      `_Enviado desde el sitio web oficial de Geraldine Dent (Jaén, Perú)_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1200);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2A32]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#FAFAF7] border border-[#029CE3]/20 shadow-2xl p-6 sm:p-8 overflow-hidden text-[#1E2A32]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8A9BA6] hover:text-[#1E2A32] hover:bg-[#E4EFF4] transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#7FC8BC]/20 text-[#029CE3] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-[#029CE3]" />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#1E2A32]">
              ¡Abriendo WhatsApp!
            </h3>
            <p className="text-sm text-[#8A9BA6] max-w-xs mx-auto">
              Te estamos redirigiendo para coordinar tu cita con el equipo de Geraldine Dent en Jaén.
            </p>
            <SmileCurve width={120} height={18} />
          </div>
        ) : (
          <>
            <div className="mb-6 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
                Atención personalizada
              </span>
              <h3 className="font-sora text-2xl font-bold text-[#1E2A32]">
                Agendar Evaluación Dental
              </h3>
              <p className="text-xs text-[#8A9BA6]">
                Prolongación Mariscal Ureta 230, Jaén · WhatsApp directo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#1E2A32] mb-1">
                  Tu Nombre y Apellido
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BA6]" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carmen Rivera"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#029CE3]/20 bg-white text-sm focus:outline-none focus:border-[#029CE3] focus:ring-1 focus:ring-[#029CE3]"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-medium text-[#1E2A32] mb-1">
                  Teléfono / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BA6]" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 963 000 000"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#029CE3]/20 bg-white text-sm focus:outline-none focus:border-[#029CE3] focus:ring-1 focus:ring-[#029CE3]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-[#1E2A32] mb-1">
                  Tratamiento de Interés
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#029CE3]/20 bg-white text-sm focus:outline-none focus:border-[#029CE3] focus:ring-1 focus:ring-[#029CE3]"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Evaluación General / Primera Visita">
                    Evaluación General / Primera Visita
                  </option>
                  <option value="Consulta Dental Infantil">
                    Consulta Dental Infantil (Área Kids)
                  </option>
                </select>
              </div>

              {/* Preferred schedule / date */}
              <div>
                <label className="block text-xs font-medium text-[#1E2A32] mb-1">
                  Preferencia de Día y Turno (Opcional)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BA6]" />
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="Ej. Martes por la tarde o Sábado mañana"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#029CE3]/20 bg-white text-sm focus:outline-none focus:border-[#029CE3] focus:ring-1 focus:ring-[#029CE3]"
                  />
                </div>
              </div>

              {/* Which official number to contact */}
              <div>
                <label className="block text-xs font-medium text-[#1E2A32] mb-1.5">
                  Línea de WhatsApp a enviar:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPhoneLine('line1')}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      selectedPhoneLine === 'line1'
                        ? 'border-[#029CE3] bg-[#E4EFF4] font-medium text-[#029CE3]'
                        : 'border-[#029CE3]/15 bg-white text-[#1E2A32]'
                    }`}
                  >
                    <p className="font-semibold">Línea 1</p>
                    <p className="text-[11px] font-mono tabular-nums text-[#8A9BA6]">
                      963 193 327
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPhoneLine('line2')}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      selectedPhoneLine === 'line2'
                        ? 'border-[#029CE3] bg-[#E4EFF4] font-medium text-[#029CE3]'
                        : 'border-[#029CE3]/15 bg-white text-[#1E2A32]'
                    }`}
                  >
                    <p className="font-semibold">Línea 2</p>
                    <p className="text-[11px] font-mono tabular-nums text-[#8A9BA6]">
                      966 345 805
                    </p>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Continuar por WhatsApp</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
