import React, { useState } from 'react';
import { PageType } from '../../types';
import { CLINIC_INFO, SERVICES_LIST } from '../../data/content';
import { SmileCurve } from '../common/SmileCurve';
import { RevealSide } from '../common/RevealSide';
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Check,
  Send,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  User,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES_LIST[0].title);
  const [message, setMessage] = useState('');
  const [selectedLine, setSelectedLine] = useState<'line1' | 'line2'>('line1');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    const targetPhone = selectedLine === 'line1' ? '51963193327' : '51966345805';
    const formatted = `🦷 *Consulta desde Web — Geraldine Dent*\n\n` +
      `*Paciente:* ${name}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*Tratamiento:* ${service}\n` +
      `*Mensaje:* ${message ? message : 'Deseo coordinar una evaluación.'}\n\n` +
      `_Geraldine Dent · Jaén, Perú_`;

    const encoded = encodeURIComponent(formatted);
    const url = `https://wa.me/${targetPhone}?text=${encoded}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 700);
  };

  return (
    <div className="w-full pt-28 pb-20 overflow-hidden">
      {/* 1. HEADER */}
      <section className="px-6 max-w-6xl mx-auto text-center mb-16">
        <RevealSide direction="up" delay={0.1}>
          <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
            Contacto Directo & Citas
          </span>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-[#1E2A32] tracking-tight mt-2 mb-3">
            Estamos listos para atenderte en{' '}
            <span className="relative inline-block">
              <span className="font-serif-instrument italic font-normal text-[#029CE3]">
                Jaén
              </span>
              <span className="absolute -bottom-2 left-0 w-full flex justify-center">
                <SmileCurve width={100} height={16} color="#E8B86D" />
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#8A9BA6] max-w-md mx-auto">
            Escríbenos directamente o visítanos en Las Almendras. Respondemos tus consultas con gusto y sin demoras.
          </p>
        </RevealSide>
      </section>

      {/* 2. LAYOUT 50/50: IZQUIERDA INFO & DERECHA FORMULARIO */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Izquierda (Info de Contacto) - Slides in from extreme Left */}
          <div className="lg:col-span-6 space-y-6">
            <RevealSide direction="left" delay={0.15} distance={80}>
              <div className="p-8 rounded-3xl bg-white border border-[#029CE3]/15 shadow-sm space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7FC8BC] font-semibold">
                    Ficha de Atención
                  </span>
                  <h3 className="font-sora text-2xl font-bold text-[#1E2A32] mt-1">
                    Centro Odontológico Geraldine Dent
                  </h3>
                  <p className="text-xs text-[#8A9BA6] mt-1">
                    Directora: Dra. Geraldine · Jaén, Cajamarca
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Dirección & Referencia */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#E4EFF4] text-[#029CE3] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A9BA6]">
                        Dirección
                      </h4>
                      <p className="text-sm font-semibold text-[#1E2A32] mt-0.5">
                        {CLINIC_INFO.address}
                      </p>
                      <p className="text-xs text-[#029CE3] mt-1">
                        📍 {CLINIC_INFO.reference}
                      </p>
                      <p className="text-[11px] text-[#8A9BA6] mt-0.5">
                        ({CLINIC_INFO.addressNote})
                      </p>
                    </div>
                  </div>

                  {/* Teléfonos Verificados */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#E4EFF4] text-[#029CE3] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A9BA6]">
                        Teléfonos & WhatsApp
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                        <a
                          href="tel:+51963193327"
                          className="font-mono text-sm font-bold text-[#029CE3] hover:text-[#25D366] transition-colors"
                        >
                          963 193 327 (Línea 1)
                        </a>
                        <a
                          href="tel:+51966345805"
                          className="font-mono text-sm font-bold text-[#029CE3] hover:text-[#25D366] transition-colors"
                        >
                          966 345 805 (Línea 2)
                        </a>
                      </div>
                      <p className="text-[11px] text-[#8A9BA6] mt-1">
                        Haz clic en cualquiera de los números para llamar o chatear
                      </p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#E4EFF4] text-[#029CE3] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A9BA6]">
                        Horario de Atención
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#1E2A32] mt-0.5">
                        {CLINIC_INFO.schedule}
                      </p>
                      <p className="text-[11px] text-[#7FC8BC] font-semibold mt-1">
                        Atención pediátrica y estética previa cita
                      </p>
                    </div>
                  </div>
                </div>

                {/* Redes */}
                <div className="pt-4 border-t border-[#1E2A32]/10 flex items-center justify-between">
                  <span className="text-xs text-[#8A9BA6]">Síguenos en redes:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={CLINIC_INFO.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-[#E4EFF4] hover:bg-[#029CE3] hover:text-white text-xs font-semibold text-[#029CE3] transition-colors"
                    >
                      TikTok
                    </a>
                    <a
                      href={CLINIC_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-[#E4EFF4] hover:bg-[#029CE3] hover:text-white text-xs font-semibold text-[#029CE3] transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href={CLINIC_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-[#E4EFF4] hover:bg-[#029CE3] hover:text-white text-xs font-semibold text-[#029CE3] transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </RevealSide>
          </div>

          {/* Derecha (Formulario Flotante de 4 campos) - Slides in from extreme Right */}
          <div className="lg:col-span-6">
            <RevealSide direction="right" delay={0.2} distance={80}>
              <div className="p-8 rounded-3xl bg-white border border-[#029CE3]/15 shadow-xl relative overflow-hidden">
                {isSuccess ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#7FC8BC]/20 text-[#029CE3] flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-[#029CE3]" />
                    </div>
                    <h3 className="font-sora text-2xl font-bold text-[#1E2A32]">
                      ¡Mensaje enviado a WhatsApp!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A9BA6] max-w-sm mx-auto">
                      La Dra. Geraldine o una de nuestras asistentas se comunicará contigo a la brevedad.
                    </p>
                    <div className="pt-2 flex justify-center">
                      <SmileCurve width={160} height={20} color="#E8B86D" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 space-y-1">
                      <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
                        Formulario de Contacto
                      </span>
                      <h3 className="font-sora text-2xl font-bold text-[#1E2A32]">
                        Escríbenos en un minuto
                      </h3>
                      <p className="text-xs text-[#8A9BA6]">
                        Genera un mensaje pre-formateado directamente a nuestro WhatsApp oficial en Jaén.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Campo 1: Nombre */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E2A32] mb-1">
                          1. Tu Nombre Completo
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BA6]" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ej. Roberto Sánchez"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#029CE3]/20 bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#029CE3] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Campo 2: Teléfono / WhatsApp */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E2A32] mb-1">
                          2. Tu Número de WhatsApp
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BA6]" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ej. 963 123 456"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#029CE3]/20 bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#029CE3] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Campo 3: Tratamiento de Interés */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E2A32] mb-1">
                          3. Tratamiento de Interés
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-[#029CE3]/20 bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#029CE3] focus:bg-white transition-colors cursor-pointer"
                        >
                          {SERVICES_LIST.map((srv) => (
                            <option key={srv.id} value={srv.title}>
                              {srv.title}
                            </option>
                          ))}
                          <option value="Consulta Dental Infantil (Área Kids)">
                            Consulta Dental Infantil (Área Kids)
                          </option>
                          <option value="Chequeo General Preventivo">
                            Chequeo General Preventivo
                          </option>
                        </select>
                      </div>

                      {/* Campo 4: Mensaje Opcional */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E2A32] mb-1">
                          4. Mensaje o Consulta Específica (Opcional)
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8A9BA6]" />
                          <textarea
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="¿Tienes dolor, deseas horarios específicos o consultar facilidades de pago?"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#029CE3]/20 bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#029CE3] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Selector de número oficial */}
                      <div className="pt-1">
                        <label className="block text-xs font-semibold text-[#1E2A32] mb-1.5">
                          Enviar a:
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedLine('line1')}
                            className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                              selectedLine === 'line1'
                                ? 'border-[#029CE3] bg-[#E4EFF4] font-semibold text-[#029CE3]'
                                : 'border-[#029CE3]/15 bg-white text-[#8A9BA6]'
                            }`}
                          >
                            Línea 963 193 327
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedLine('line2')}
                            className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                              selectedLine === 'line2'
                                ? 'border-[#029CE3] bg-[#E4EFF4] font-semibold text-[#029CE3]'
                                : 'border-[#029CE3]/15 bg-white text-[#8A9BA6]'
                            }`}
                          >
                            Línea 966 345 805
                          </button>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer mt-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Enviar por WhatsApp</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </RevealSide>
          </div>
        </div>
      </section>

      {/* 3. MAPA EMBEBIDO ESTILIZADO DE JAÉN */}
      <section className="px-6 max-w-6xl mx-auto">
        <RevealSide direction="up" delay={0.2}>
          <div className="rounded-3xl overflow-hidden border border-[#029CE3]/15 shadow-xl bg-white">
            <div className="p-4 sm:p-6 bg-[#FAFAF7] border-b border-[#029CE3]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-sora text-base font-bold text-[#1E2A32]">
                  Ubicación de Geraldine Dent en Jaén
                </h4>
                <p className="text-xs text-[#8A9BA6] mt-0.5">
                  Prolongación Mariscal Ureta 230, Urb. Las Almendras · Referencia: A 1 cuadra de la losa Los Bancarios
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Prolongacion+Mariscal+Ureta+230+Jaen+Cajamarca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white text-xs font-semibold transition-all self-start sm:self-auto cursor-pointer"
              >
                <span>Ver en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe focused on Jaén, Peru */}
            <div className="relative w-full h-[380px] bg-[#E4EFF4]">
              <iframe
                title="Mapa de Ubicación Geraldine Dent en Jaén"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.553941421045!2d-78.809312!3d-5.708892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b29a28c3a16709%3A0x6bcfad14df7c0a6b!2sProlongaci%C3%B3n%20Mariscal%20Ureta%20230%2C%20Ja%C3%A9n%2006801%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(95%) saturate(85%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Custom Overlay Pin Card */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#029CE3]/20 shadow-lg hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-8 h-8 rounded-full bg-[#029CE3] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  GD
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-[#1E2A32]">Geraldine Dent</p>
                  <p className="text-[#8A9BA6]">Las Almendras · Jaén</p>
                </div>
              </div>
            </div>
          </div>
        </RevealSide>
      </section>
    </div>
  );
};
