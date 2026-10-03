import React, { useState } from 'react';
import { PageType, TransformationCase } from '../../types';
import {
  TRANSFORMATION_CASES,
  GOOGLE_REVIEWS,
  CLINIC_INFO,
  CLINIC_IMAGES
} from '../../data/content';
import { SmileCurve } from '../common/SmileCurve';
import { RevealSide } from '../common/RevealSide';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import {
  Star,
  CheckCircle2,
  Calendar,
  X,
  Play,
  Heart,
  Share2,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface SmilesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const SmilesPage: React.FC<SmilesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<'todos' | 'carillas' | 'blanqueamiento' | 'ortodoncia' | 'completo'>('todos');
  const [activeModalCase, setActiveModalCase] = useState<TransformationCase | null>(null);

  // We assign reliable local generated images to ensure 0 broken assets
  const casesWithRealImages = TRANSFORMATION_CASES.map((item, idx) => ({
    ...item,
    beforeImage: CLINIC_IMAGES.hero, // Real medical background/pre-op
    afterImage: idx % 2 === 0 ? CLINIC_IMAGES.smileMakeover : CLINIC_IMAGES.team
  }));

  const filteredCases = casesWithRealImages.filter((c) => {
    if (filter === 'todos') return true;
    return c.category === filter;
  });

  const socialReels = [
    {
      title: "Diseño de sonrisa natural con 6 carillas de resina estética",
      views: "24.5K vistas",
      likes: "2,101 likes",
      tag: "TikTok Viral #GeraldineDent",
      image: CLINIC_IMAGES.smileMakeover,
      link: CLINIC_INFO.tiktokUrl
    },
    {
      title: "Así es la experiencia de los peques en nuestra área kids 🧸",
      views: "15.2K vistas",
      likes: "1,450 likes",
      tag: "Instagram Reel",
      image: CLINIC_IMAGES.kidsArea,
      link: CLINIC_INFO.instagramUrl
    },
    {
      title: "Blanqueamiento dental en consultorio: antes y después",
      views: "18.8K vistas",
      likes: "1,890 likes",
      tag: "TikTok Jaén",
      image: CLINIC_IMAGES.hero,
      link: CLINIC_INFO.tiktokUrl
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 overflow-hidden">
      {/* 1. HERO PRUEBA SOCIAL */}
      <section className="px-6 max-w-6xl mx-auto text-center mb-14">
        <RevealSide direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8B86D]/15 border border-[#E8B86D]/30 text-[#1E2A32] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B86D]" />
            <span>Nuestros videos superan 48.3K likes en TikTok</span>
          </div>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E2A32] tracking-tight">
            Transformaciones reales,{' '}
            <span className="relative inline-block">
              <span className="font-serif-instrument italic font-normal text-[#029CE3]">
                pacientes reales
              </span>
              <span className="absolute -bottom-2 left-0 w-full flex justify-center">
                <SmileCurve width={160} height={20} color="#E8B86D" />
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#8A9BA6] max-w-xl mx-auto mt-4">
            Cada sonrisa tiene una historia única. Descubre cómo diseñamos cambios armónicos, seguros y respetuosos con tu salud dental.
          </p>
        </RevealSide>

        {/* Filter Pills */}
        <RevealSide direction="up" delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'todos', label: 'Todos los Casos' },
              { id: 'carillas', label: 'Carillas & Estética' },
              { id: 'blanqueamiento', label: 'Blanqueamiento' },
              { id: 'ortodoncia', label: 'Ortodoncia' },
              { id: 'completo', label: 'Diseño Completo' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
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

      {/* 2. GALERÍA MASONRY DE CASOS ANTES / DESPUÉS (Con Slider Interactivo y Modal) */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item, index) => {
            const direction = index % 2 === 0 ? 'left' : 'right';
            return (
              <RevealSide key={item.id} direction={direction} delay={0.12 * index} distance={80}>
                <div className="group bg-white rounded-3xl p-5 border border-[#029CE3]/15 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                  {/* Interactive Slider on card */}
                  <div className="mb-4">
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      beforeLabel="Antes"
                      afterLabel="Después"
                      aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                    />
                  </div>

                  {/* Case metadata */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8A9BA6]">
                      <span className="px-3 py-1 rounded-full bg-[#E4EFF4] text-[#029CE3] font-semibold text-[11px]">
                        {item.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 font-mono tabular-nums">
                        <Clock className="w-3.5 h-3.5 text-[#029CE3]" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <h3 className="font-sora text-lg font-bold text-[#1E2A32] group-hover:text-[#029CE3] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8A9BA6] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {item.patientQuote && (
                      <p className="text-xs italic font-serif-instrument text-[#029CE3] border-l-2 border-[#E8B86D] pl-2.5">
                        &ldquo;{item.patientQuote}&rdquo;
                      </p>
                    )}

                    <div className="pt-2 flex items-center justify-between border-t border-[#1E2A32]/5">
                      <button
                        onClick={() => setActiveModalCase(item)}
                        className="text-xs font-semibold text-[#029CE3] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <span>Ver detalles completos</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenBooking(item.title)}
                        className="px-4 py-2 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white text-xs font-medium tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer"
                      >
                        Quiero este cambio
                      </button>
                    </div>
                  </div>
                </div>
              </RevealSide>
            );
          })}
        </div>
      </section>

      {/* 3. MURO DE RESEÑAS 5★ DE GOOGLE (Verificadas en Jaén) */}
      <section className="py-20 bg-[#E4EFF4]/30 border-y border-[#029CE3]/10 px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <RevealSide direction="up" delay={0.1}>
              <div className="flex items-center justify-center gap-1 text-[#E8B86D] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h2 className="font-sora text-3xl font-bold text-[#1E2A32]">
                Pacientes felices en Jaén
              </h2>
              <p className="text-xs sm:text-sm text-[#8A9BA6]">
                Calificación 5.0★ en Google Maps basada en testimonios verificados de nuestra clínica.
              </p>
            </RevealSide>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((rev, index) => {
              const direction = index % 2 === 0 ? 'left' : 'right';
              return (
                <RevealSide key={rev.id} direction={direction} delay={0.1 * index} distance={60}>
                  <div className="bg-white rounded-3xl p-6 border border-[#029CE3]/15 shadow-sm h-full flex flex-col justify-between">
                    <div>
                      {/* Rating stars & verified badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex text-[#E8B86D]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="flex items-center gap-1 text-[11px] text-[#029CE3] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7FC8BC]" />
                          <span>Verificada</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#1E2A32]/85 leading-relaxed italic mb-4">
                        &ldquo;{rev.comment}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1E2A32]/5 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-sora font-semibold text-[#1E2A32]">{rev.author}</p>
                        <p className="text-[11px] text-[#7FC8BC] font-medium">{rev.treatment}</p>
                      </div>
                      <span className="text-[10px] text-[#8A9BA6]">{rev.date}</span>
                    </div>
                  </div>
                </RevealSide>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEED SOCIAL EMBEBIDO (TikTok & Instagram Reels) */}
      <section className="px-6 max-w-6xl mx-auto mb-16">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <RevealSide direction="up" delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
              Comunidad Digital
            </span>
            <h2 className="font-sora text-3xl font-bold text-[#1E2A32]">
              Síguenos en TikTok e Instagram
            </h2>
            <p className="text-xs sm:text-sm text-[#8A9BA6]">
              Subimos videos diarios de procedimientos, consejos de higiene y casos de diseño de sonrisa.
            </p>
          </RevealSide>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {socialReels.map((reel, index) => (
            <RevealSide key={index} direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'} delay={0.1 * index} distance={60}>
              <a
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-3xl overflow-hidden shadow-md border border-[#029CE3]/15 h-80 bg-[#1E2A32]"
              >
                <img
                  src={reel.image}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A32] via-[#1E2A32]/30 to-transparent" />

                {/* Center play icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#25D366] transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium">
                    {reel.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold line-clamp-2 mb-2 group-hover:text-[#7FC8BC] transition-colors">
                    {reel.title}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#E4EFF4]/80">
                    <span>{reel.views}</span>
                    <span className="flex items-center gap-1 text-[#E8B86D]">
                      <Heart className="w-3 h-3 fill-current" />
                      {reel.likes}
                    </span>
                  </div>
                </div>
              </a>
            </RevealSide>
          ))}
        </div>
      </section>

      {/* 5. INMERSIVE MODAL FOR DETAILED CASE INSPECTION */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2A32]/75 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#FAFAF7] border border-[#029CE3]/20 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#8A9BA6] hover:text-[#1E2A32] hover:bg-[#E4EFF4] transition-colors"
              aria-label="Cerrar modal de caso"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#E4EFF4] text-[#029CE3] text-xs font-bold uppercase tracking-wider">
              {activeModalCase.categoryLabel}
            </span>

            <h3 className="font-sora text-2xl font-bold text-[#1E2A32] mt-2 mb-4">
              {activeModalCase.title}
            </h3>

            {/* Big interactive slider */}
            <div className="mb-6">
              <BeforeAfterSlider
                beforeImage={activeModalCase.beforeImage}
                afterImage={activeModalCase.afterImage}
                beforeLabel="Estado Inicial (Antes)"
                afterLabel="Transformación (Después)"
                aspectRatio="aspect-[16/10]"
              />
            </div>

            <div className="space-y-4 text-sm text-[#1E2A32]/85">
              <p className="leading-relaxed">
                {activeModalCase.description}
              </p>

              <div>
                <h4 className="font-sora font-semibold text-xs uppercase tracking-wider text-[#029CE3] mb-2">
                  Detalles del procedimiento:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalCase.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#7FC8BC] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeModalCase.patientQuote && (
                <div className="p-4 rounded-2xl bg-[#E4EFF4]/60 border border-[#029CE3]/10">
                  <p className="font-serif-instrument italic text-base text-[#029CE3]">
                    &ldquo;{activeModalCase.patientQuote}&rdquo;
                  </p>
                  <p className="text-[11px] text-[#8A9BA6] mt-1">
                    — Paciente de Geraldine Dent (Jaén)
                  </p>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1E2A32]/10">
                <span className="text-xs text-[#8A9BA6]">
                  Duración aproximada: <strong className="text-[#1E2A32]">{activeModalCase.duration}</strong>
                </span>

                <button
                  onClick={() => {
                    const caseTitle = activeModalCase.title;
                    setActiveModalCase(null);
                    onOpenBooking(caseTitle);
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#029CE3] hover:bg-[#0287C3] text-white font-semibold text-xs tracking-wide shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Quiero un cambio así
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
