import React, { useState } from 'react';
import { PageType } from '../../types';
import { CLINIC_INFO, CLINIC_IMAGES } from '../../data/content';
import { SmileCurve } from '../common/SmileCurve';
import { RevealSide } from '../common/RevealSide';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Baby,
  Star,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ExternalLink,
  Users,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const marqueeItems = [
    "Diseño de Sonrisa",
    "Carillas de Resina",
    "Blanqueamiento Dental",
    "Ortodoncia & Brackets",
    "Odontopediatría Kids",
    "Endodoncia Rotatoria",
    "Prótesis Estéticas",
    "Profilaxis por Ultrasonido"
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION (100vh) */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Organic soft blue-fog background blob with slow breathing */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] sm:h-[600px] bg-[#E4EFF4]/80 rounded-[45%_55%_60%_40%/40%_50%_50%_60%] blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#7FC8BC]/15 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content (Slides in from extreme Left) */}
          <div className="lg:col-span-7 space-y-6">
            <RevealSide direction="left" delay={0.1} distance={90}>
              <h1 className="font-sora text-4xl sm:text-6xl lg:text-[4.25rem] font-bold text-[#1E2A32] tracking-tight leading-[1.08] text-balance">
                Sonríe con{' '}
                <span className="relative inline-block">
                  <span className="font-serif-instrument italic font-normal text-[#029CE3] px-1">
                    confianza
                  </span>
                  <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full flex justify-center">
                    <SmileCurve width={190} height={22} color="#E8B86D" />
                  </span>
                </span>
              </h1>
            </RevealSide>

            <RevealSide direction="left" delay={0.3} distance={90}>
              <p className="text-base sm:text-lg text-[#1E2A32]/80 font-normal leading-relaxed max-w-xl">
                Centro odontológico en Jaén especializado en diseño de sonrisa, ortodoncia, odontología infantil con área de juegos y tratamientos sin dolor.
              </p>
            </RevealSide>

            {/* Doble CTA */}
            <RevealSide direction="left" delay={0.4} distance={90}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white text-sm font-semibold tracking-wide shadow-[0_8px_24px_rgba(46,110,142,0.25)] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#7FC8BC]" />
                  <span>Agendar evaluación</span>
                </button>

                <button
                  onClick={() => onNavigate('sonrisas')}
                  className="px-7 py-3.5 rounded-full border border-[#029CE3]/30 bg-transparent hover:bg-[#E4EFF4]/70 text-[#1E2A32] text-sm font-medium transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Ver transformaciones</span>
                  <ArrowRight className="w-4 h-4 text-[#029CE3] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealSide>

            {/* Micro Trust Proof */}
            <RevealSide direction="left" delay={0.5} distance={90}>
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#8A9BA6]">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#E8B86D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#1E2A32]">5.0★ Google</span>
                  <span className="text-[#8A9BA6]">(175+ visitas)</span>
                </div>
                <span className="text-neutral-300">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#1E2A32]">Jaén, Cajamarca</span>
                  <span>(Prol. Mariscal Ureta)</span>
                </div>
              </div>
            </RevealSide>
          </div>

          {/* Hero Right Visual (Slides in from extreme Right) */}
          <div className="lg:col-span-5 relative">
            <RevealSide direction="right" delay={0.25} distance={90}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating highlight badge */}
                <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-[#029CE3]/15 shadow-[0_8px_24px_rgba(46,110,142,0.12)] p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7FC8BC]/20 flex items-center justify-center text-[#029CE3]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1E2A32] leading-tight">
                      Diseño de Sonrisa
                    </p>
                    <p className="text-[10px] text-[#8A9BA6]">
                      Acabado natural sin dolor
                    </p>
                  </div>
                </div>

                {/* Hero Doctor Image (Completamente despejada, sin letras encima) */}
                <div className="relative rounded-[36px] overflow-hidden shadow-[0_16px_48px_rgba(2,156,227,0.12)] border border-[#029CE3]/20 bg-gradient-to-b from-[#E4EFF4]/80 to-white flex items-center justify-center">
                  <img
                    src={CLINIC_IMAGES.heroDoctor}
                    alt="Dra. Geraldine — Centro Odontológico Geraldine Dent en Jaén"
                    referrerPolicy="no-referrer"
                    className="w-full h-[420px] sm:h-[500px] object-cover object-top hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Bottom Floating Kids badge */}
                <div className="absolute -bottom-5 -right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-[#029CE3]/15 shadow-[0_8px_24px_rgba(46,110,142,0.12)] p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E4EFF4] flex items-center justify-center text-[#029CE3]">
                    <Baby className="w-5 h-5 text-[#029CE3]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1E2A32] leading-tight">
                      Área Kids Exclusiva
                    </p>
                    <p className="text-[10px] text-[#7FC8BC] font-medium">
                      Juegos & diversión sin miedo
                    </p>
                  </div>
                </div>
              </div>
            </RevealSide>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE CONFIANZA & NÚMEROS (Animated Metrics) */}
      <section className="py-12 border-y border-[#029CE3]/10 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <RevealSide direction="left" delay={0.1} distance={60}>
              <div className="space-y-1">
                <p className="font-sora text-3xl sm:text-4xl font-bold text-[#029CE3] tabular-nums">
                  5.0★
                </p>
                <p className="text-xs uppercase tracking-wider text-[#8A9BA6] font-medium">
                  Calificación Google
                </p>
                <p className="text-[11px] text-[#1E2A32]/60">100% de reseñas 5 estrellas</p>
              </div>
            </RevealSide>

            <RevealSide direction="left" delay={0.2} distance={60}>
              <div className="space-y-1">
                <p className="font-sora text-3xl sm:text-4xl font-bold text-[#1E2A32] tabular-nums">
                  +4,200
                </p>
                <p className="text-xs uppercase tracking-wider text-[#8A9BA6] font-medium">
                  Seguidores Facebook
                </p>
                <p className="text-[11px] text-[#1E2A32]/60">Comunidad leal en Jaén</p>
              </div>
            </RevealSide>

            <RevealSide direction="right" delay={0.2} distance={60}>
              <div className="space-y-1">
                <p className="font-sora text-3xl sm:text-4xl font-bold text-[#029CE3] tabular-nums">
                  48.3K+
                </p>
                <p className="text-xs uppercase tracking-wider text-[#8A9BA6] font-medium">
                  Likes en TikTok
                </p>
                <p className="text-[11px] text-[#1E2A32]/60">Casos reales virales</p>
              </div>
            </RevealSide>

            <RevealSide direction="right" delay={0.1} distance={60}>
              <div className="space-y-1">
                <p className="font-sora text-3xl sm:text-4xl font-bold text-[#1E2A32] tabular-nums">
                  175+
                </p>
                <p className="text-xs uppercase tracking-wider text-[#8A9BA6] font-medium">
                  Visitas Registradas
                </p>
                <p className="text-[11px] text-[#1E2A32]/60">Pacientes satisfechos</p>
              </div>
            </RevealSide>
          </div>
        </div>
      </section>

      {/* 3. MARQUEE DE SERVICIOS INFINITO */}
      <section className="py-7 bg-[#E4EFF4]/60 overflow-hidden border-b border-[#029CE3]/15 relative">
        {/* Subtle gradient fades on extreme edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-infinite flex items-center">
          {/* Track 1 */}
          <div className="flex items-center space-x-8 pr-8 shrink-0">
            {marqueeItems.map((item, index) => (
              <div
                key={`m1-${index}`}
                className="inline-flex items-center gap-6 font-sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#1E2A32]/75 hover:text-[#029CE3] transition-colors cursor-default select-none"
              >
                <span>{item}</span>
                <span className="text-[#E8B86D] text-lg">✦</span>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for continuous seamless infinite loop) */}
          <div className="flex items-center space-x-8 pr-8 shrink-0" aria-hidden="true">
            {marqueeItems.map((item, index) => (
              <div
                key={`m2-${index}`}
                className="inline-flex items-center gap-6 font-sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#1E2A32]/75 hover:text-[#029CE3] transition-colors cursor-default select-none"
              >
                <span>{item}</span>
                <span className="text-[#E8B86D] text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN 3 PILARES: EL ADN DE GERALDINE DENT (IMÁGENES GRANDES SIN TAPAR + MÍNIMA INFORMACIÓN) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <RevealSide direction="up" delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
              El ADN de Geraldine Dent
            </span>
          </RevealSide>
          <RevealSide direction="up" delay={0.2}>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#1E2A32] tracking-tight">
              ¿Por qué las familias de Jaén nos eligen?
            </h2>
          </RevealSide>
          <RevealSide direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-[#8A9BA6]">
              Atención cercana, tecnología dental avanzada y un espacio pensado para la tranquilidad de toda la familia.
            </p>
          </RevealSide>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1: Staff Especializado (Imagen Grande Despejada + Mínima Información Abajo) */}
          <RevealSide direction="left" delay={0.2} distance={70}>
            <div className="group h-full bg-white rounded-3xl overflow-hidden border border-[#029CE3]/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
              {/* Imagen Grande Totalmente Despejada */}
              <div className="w-full h-64 sm:h-72 overflow-hidden bg-[#E4EFF4]">
                <img
                  src={CLINIC_IMAGES.team}
                  alt="Staff Especializado de Geraldine Dent"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Mínima Información por Debajo de la Imagen */}
              <div className="p-6 text-center space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-[#E4EFF4] text-[#029CE3] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#029CE3] group-hover:text-white transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-sora text-lg sm:text-xl font-bold text-[#1E2A32] group-hover:text-[#029CE3] transition-colors">
                  Staff Especializado
                </h3>
                <p className="text-xs text-[#8A9BA6]">
                  Cirujanos dentistas con trato cálido y familiar.
                </p>
              </div>
            </div>
          </RevealSide>

          {/* Pilar 2: Tecnología Moderna (Imagen Grande Despejada + Mínima Información Abajo) */}
          <RevealSide direction="up" delay={0.3}>
            <div className="group h-full bg-white rounded-3xl overflow-hidden border border-[#029CE3]/25 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
              {/* Imagen Grande Totalmente Despejada */}
              <div className="w-full h-64 sm:h-72 overflow-hidden bg-[#E4EFF4]">
                <img
                  src={CLINIC_IMAGES.hero}
                  alt="Tecnología Moderna en Geraldine Dent"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Mínima Información por Debajo de la Imagen */}
              <div className="p-6 text-center space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-[#029CE3] text-white flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4 text-[#E8B86D]" />
                </div>
                <h3 className="font-sora text-lg sm:text-xl font-bold text-[#1E2A32] group-hover:text-[#029CE3] transition-colors">
                  Tecnología Moderna
                </h3>
                <p className="text-xs text-[#8A9BA6]">
                  Equipamiento de vanguardia para procedimientos sin dolor.
                </p>
              </div>
            </div>
          </RevealSide>

          {/* Pilar 3: Área Kids Exclusiva (Imagen Grande Despejada + Mínima Información Abajo) */}
          <RevealSide direction="right" delay={0.4} distance={70}>
            <div className="group h-full bg-white rounded-3xl overflow-hidden border border-[#7FC8BC]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
              {/* Imagen Grande Totalmente Despejada */}
              <div className="w-full h-64 sm:h-72 overflow-hidden bg-[#E4EFF4]">
                <img
                  src={CLINIC_IMAGES.kidsArea}
                  alt="Área Kids Exclusiva en Geraldine Dent"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Mínima Información por Debajo de la Imagen */}
              <div className="p-6 text-center space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-[#7FC8BC]/20 text-[#029CE3] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#7FC8BC] group-hover:text-[#1E2A32] transition-colors">
                  <Baby className="w-4 h-4" />
                </div>
                <h3 className="font-sora text-lg sm:text-xl font-bold text-[#1E2A32] group-hover:text-[#029CE3] transition-colors">
                  Área Kids Exclusiva
                </h3>
                <p className="text-xs text-[#8A9BA6]">
                  Consultorio infantil y juegos para una visita feliz.
                </p>
              </div>
            </div>
          </RevealSide>
        </div>
      </section>

      {/* 5. SECCIÓN ANTES/DESPUÉS DESTACADA (INTERACTIVA) */}
      <section className="py-20 bg-[#E4EFF4]/40 border-y border-[#029CE3]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left information (Slide in from Left) */}
            <div className="lg:col-span-5 space-y-6">
              <RevealSide direction="left" delay={0.1} distance={70}>
                <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
                  Caso Estrella Geraldine Dent
                </span>
                <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#1E2A32] tracking-tight mt-2">
                  Transformaciones reales, pacientes reales
                </h2>
                <p className="text-sm sm:text-base text-[#8A9BA6] leading-relaxed">
                  Publicación destacada en TikTok (+2,100 me gusta): Diseño de sonrisa natural mediante blanqueamiento previo y 6 carillas de resina estética de microestratificación.
                </p>
              </RevealSide>

              <RevealSide direction="left" delay={0.2} distance={70}>
                <div className="space-y-3 py-2">
                  <div className="flex items-center gap-3 text-sm text-[#1E2A32]">
                    <CheckCircle2 className="w-4 h-4 text-[#7FC8BC] shrink-0" />
                    <span>Cierre armónico de espacios y forma anatómica</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#1E2A32]">
                    <CheckCircle2 className="w-4 h-4 text-[#7FC8BC] shrink-0" />
                    <span>Sin desgaste dental agresivo en el esmalte</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#1E2A32]">
                    <CheckCircle2 className="w-4 h-4 text-[#7FC8BC] shrink-0" />
                    <span>Brillo duradero y textura idéntica al diente natural</span>
                  </div>
                </div>
              </RevealSide>

              <RevealSide direction="left" delay={0.3} distance={70}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('sonrisas')}
                    className="px-6 py-3 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Ver más transformaciones</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('Diseño de Sonrisa & Carillas')}
                    className="px-6 py-3 rounded-full border border-[#029CE3]/30 text-[#1E2A32] hover:bg-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    Quiero un cambio así
                  </button>
                </div>
              </RevealSide>
            </div>

            {/* Right Slider (Slide in from Right) */}
            <div className="lg:col-span-7">
              <RevealSide direction="right" delay={0.2} distance={80}>
                <div className="p-2 sm:p-3 bg-white rounded-[36px] shadow-xl border border-[#029CE3]/15">
                  <BeforeAfterSlider
                    beforeImage={CLINIC_IMAGES.smileMakeover}
                    afterImage={CLINIC_IMAGES.smileMakeover}
                    beforeLabel="Antes"
                    afterLabel="Después (6 Carillas)"
                    aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                  />
                  <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A9BA6]">
                    <p className="italic">
                      &ldquo;El cambio fue sumamente natural, nadie nota que son carillas.&rdquo;
                    </p>
                    <span className="font-semibold text-[#029CE3] shrink-0">
                      Caso #01 · 2 citas
                    </span>
                  </div>
                </div>
              </RevealSide>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL BANNER */}
      <section className="py-24 px-6 relative bg-[#029CE3] text-white overflow-hidden">
        {/* Abstract curve light */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#7FC8BC]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <RevealSide direction="up" delay={0.1}>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest border border-white/15">
              Tu salud bucal en las mejores manos
            </span>
          </RevealSide>

          <RevealSide direction="up" delay={0.2}>
            <h2 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              ¿Lista tu sonrisa para el{' '}
              <span className="relative inline-block text-[#FAFAF7]">
                2026?
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full flex justify-center">
                  <SmileCurve width={150} height={18} color="#E8B86D" />
                </span>
              </span>
            </h2>
          </RevealSide>

          <RevealSide direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Agenda tu consulta de evaluación con la Dra. Geraldine y su equipo en Jaén. Tratamiento amable, cercano y de calidad garantizada.
            </p>
          </RevealSide>

          <RevealSide direction="up" delay={0.4}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CLINIC_INFO.whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#029CE3] hover:bg-[#FAFAF7] font-semibold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Escribir al WhatsApp (963 193 327)</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 text-white font-medium text-sm transition-all"
              >
                Solicitar Cita en Línea
              </button>
            </div>
          </RevealSide>
        </div>
      </section>
    </div>
  );
};
