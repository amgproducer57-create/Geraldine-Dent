import React, { useState } from 'react';
import { PageType, ServiceItem } from '../../types';
import { SERVICES_LIST, FAQ_LIST, CLINIC_INFO } from '../../data/content';
import { SmileCurve } from '../common/SmileCurve';
import { RevealSide } from '../common/RevealSide';
import {
  Clock,
  MessageCircle,
  ChevronDown,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TreatmentsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<'todos' | 'estetica' | 'salud' | 'ninos'>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (filter === 'todos') return true;
    return srv.category === filter;
  });

  const handleWhatsappService = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/51963193327?text=${encoded}`, '_blank');
  };

  const getCategoryBadgeLabel = (category: ServiceItem['category']) => {
    switch (category) {
      case 'estetica':
        return 'Estética & Diseño';
      case 'ninos':
        return 'Niños · Área Kids';
      case 'salud':
        return 'Salud & Rehabilitación';
      default:
        return 'Tratamiento Dental';
    }
  };

  return (
    <div className="w-full pt-28 pb-20 overflow-hidden">
      {/* 1. HERO MÍNIMO */}
      <section className="px-6 max-w-6xl mx-auto text-center mb-12">
        <RevealSide direction="up" delay={0.1}>
          <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
            Nuestros Servicios Confirmados
          </span>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-[#1E2A32] tracking-tight mt-2 mb-3">
            Soluciones para cada{' '}
            <span className="relative inline-block">
              <span className="font-serif-instrument italic font-normal text-[#029CE3]">
                sonrisa
              </span>
              <span className="absolute -bottom-2 left-0 w-full flex justify-center">
                <SmileCurve width={120} height={16} color="#E8B86D" />
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#8A9BA6] max-w-xl mx-auto">
            Descubre nuestros tratamientos con imágenes reales. Haz clic o pasa el mouse sobre cualquier tratamiento para desplegar la información completa.
          </p>
        </RevealSide>

        {/* Interactive Filter Pills */}
        <RevealSide direction="up" delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'todos', label: 'Todos los tratamientos' },
              { id: 'estetica', label: 'Estética & Diseño' },
              { id: 'salud', label: 'Salud & Rehabilitación' },
              { id: 'ninos', label: 'Niños (Área Kids)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#029CE3] text-white shadow-md scale-105'
                    : 'bg-white border border-[#029CE3]/15 text-[#1E2A32]/80 hover:bg-[#E4EFF4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </RevealSide>
      </section>

      {/* 2. GRID DE TRATAMIENTOS CON IMÁGENES GRANDES & INFORMACIÓN DESPLEGABLE */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredServices.map((srv, index) => {
            const isFeatured = srv.isFeatured;
            const isKids = srv.category === 'ninos';
            const isExpanded = expandedCardId === srv.id;
            const slideDirection = index % 2 === 0 ? 'left' : 'right';

            return (
              <RevealSide
                key={srv.id}
                direction={slideDirection}
                delay={0.08 * index}
                distance={60}
              >
                <div
                  onClick={() => setExpandedCardId(isExpanded ? null : srv.id)}
                  className={`group relative rounded-3xl overflow-hidden bg-white border transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer ${
                    isFeatured
                      ? 'border-2 border-[#E8B86D]/80 hover:border-[#E8B86D]'
                      : isKids
                      ? 'border-2 border-[#7FC8BC]/60 hover:border-[#7FC8BC]'
                      : 'border border-[#029CE3]/20 hover:border-[#029CE3]/60'
                  }`}
                >
                  {/* IMAGEN GRANDE Y TOTALMENTE LIMPIA (PROTAGONISTA) */}
                  <div className="relative w-full h-64 sm:h-72 bg-[#E4EFF4] overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle top pill tags (discrete and unobtrusive) */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-[#1E2A32]/75 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-sm">
                        {getCategoryBadgeLabel(srv.category)}
                      </span>

                      {srv.badge && (
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm backdrop-blur-md ${
                            isFeatured
                              ? 'bg-[#E8B86D] text-[#1E2A32]'
                              : 'bg-[#7FC8BC] text-[#1E2A32]'
                          }`}
                        >
                          {srv.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CABECERA VISIBLE (Título + Duración + Indicador de Despliegue) */}
                  <div className="p-6 pb-4 bg-white transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-sora text-lg sm:text-xl font-bold text-[#1E2A32] group-hover:text-[#029CE3] transition-colors leading-snug">
                          {srv.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-[#8A9BA6] mt-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#029CE3]" />
                          <span className="font-mono tabular-nums">{srv.duration}</span>
                        </div>
                      </div>

                      {/* Botón / Flecha de Despliegue interactivo */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                          isExpanded
                            ? 'bg-[#029CE3] text-white border-[#029CE3] rotate-180'
                            : 'bg-[#E4EFF4] text-[#029CE3] border-[#029CE3]/20 group-hover:bg-[#029CE3] group-hover:text-white group-hover:translate-y-0.5'
                        }`}
                        title="Toca para ver o esconder información"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Micro-guía visual sutil */}
                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#8A9BA6] pt-2 border-t border-[#1E2A32]/5">
                      <span className="group-hover:text-[#029CE3] transition-colors">
                        {isExpanded ? 'Ocultar detalles' : 'Pasa el mouse o presiona para ver detalles'}
                      </span>
                      <span className="font-mono text-[10px] text-[#029CE3]">
                        {isExpanded ? '▲' : '▼'}
                      </span>
                    </div>
                  </div>

                  {/* INFORMACIÓN QUE BAJA / SE DESPLIEGA SUAVEMENTE (AL PASAR EL MOUSE O PRESIONAR) */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out bg-[#FAFAF7] border-t border-[#029CE3]/10 ${
                      isExpanded
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-5 space-y-4">
                        {/* Descripción Completa */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#029CE3] mb-1">
                            Sobre el Tratamiento
                          </h4>
                          <p className="text-xs sm:text-sm text-[#1E2A32]/85 leading-relaxed">
                            {srv.fullDesc}
                          </p>
                        </div>

                        {/* Beneficios */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#029CE3] mb-2">
                            Beneficios Principales
                          </h4>
                          <div className="space-y-1.5">
                            {srv.benefits.map((b, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-[#1E2A32]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#7FC8BC] mt-0.5 shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="pt-3 border-t border-[#1E2A32]/10 flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsappService(srv.whatsappMessage);
                            }}
                            className="flex-1 py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenBooking(srv.title);
                            }}
                            className="flex-1 py-2.5 px-4 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Agendar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSide>
            );
          })}
        </div>
      </section>

      {/* 3. CTA INTERCALADO (Banner Delgado) */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <RevealSide direction="up" delay={0.2}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#E4EFF4] border border-[#029CE3]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#029CE3] font-semibold">
                ¿No estás seguro de cuál necesitas?
              </span>
              <h3 className="font-sora text-xl sm:text-2xl font-bold text-[#1E2A32]">
                Agenda una cita de evaluación integral
              </h3>
              <p className="text-xs sm:text-sm text-[#8A9BA6]">
                Evaluamos tu sonrisa y te explicamos el plan ideal sin compromiso alguno en Jaén.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking('Evaluación Integral')}
              className="px-6 py-3 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md whitespace-nowrap transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#7FC8BC]" />
              <span>Solicitar Evaluación</span>
            </button>
          </div>
        </RevealSide>
      </section>

      {/* 4. PREGUNTAS FRECUENTES (FAQ Acordeón Animado) */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <RevealSide direction="up" delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
              Despeja tus dudas
            </span>
          </RevealSide>
          <RevealSide direction="up" delay={0.2}>
            <h2 className="font-sora text-3xl font-bold text-[#1E2A32]">
              Preguntas Frecuentes
            </h2>
          </RevealSide>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const direction = index % 2 === 0 ? 'left' : 'right';

            return (
              <RevealSide key={index} direction={direction} delay={0.1 * index} distance={60}>
                <div className="rounded-2xl bg-white border border-[#029CE3]/15 overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-sora text-sm sm:text-base font-semibold text-[#1E2A32]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#029CE3] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* 2026 Grid Template Transition */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#8A9BA6] leading-relaxed border-t border-[#1E2A32]/5">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSide>
            );
          })}
        </div>
      </section>
    </div>
  );
};
