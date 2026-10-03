import React from 'react';
import { PageType } from '../../types';
import { CLINIC_INFO, CLINIC_IMAGES, TEAM_MEMBERS } from '../../data/content';
import { SmileCurve } from '../common/SmileCurve';
import { RevealSide } from '../common/RevealSide';
import {
  Heart,
  ShieldCheck,
  Sparkles,
  DollarSign,
  Baby,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (doctorName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const values = [
    {
      title: "Trato Amable y Familiar",
      desc: "Nos preocupamos por tu comodidad emocional desde que entras por la puerta.",
      icon: Heart,
    },
    {
      title: "Tecnología Moderna",
      desc: "Equipamiento de última generación para diagnósticos rápidos y sin dolor.",
      icon: Sparkles,
    },
    {
      title: "Supervisión Especializada",
      desc: "Cada caso es evaluado bajo rigurosos protocolos médicos y estéticos.",
      icon: ShieldCheck,
    },
    {
      title: "Precios Accesibles",
      desc: "Tratamientos de alta calidad con facilidades de pago justas en Jaén.",
      icon: DollarSign,
    },
  ];

  return (
    <div className="w-full pt-24 pb-20 overflow-hidden">
      {/* 1. HERO EDITORIAL (Foto grupal + Título superpuesto) */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <RevealSide direction="up" delay={0.1}>
          <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-[#029CE3]/15 bg-[#1E2A32] h-[340px] sm:h-[460px] flex items-end">
            <img
              src={CLINIC_IMAGES.team}
              alt="Familia Geraldine Dent en Jaén"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A32] via-[#1E2A32]/40 to-transparent" />

            <div className="relative z-10 p-6 sm:p-12 text-white max-w-2xl">
              <span className="px-3.5 py-1 rounded-full bg-[#7FC8BC]/20 border border-[#7FC8BC]/40 text-[#7FC8BC] text-xs uppercase tracking-wider font-semibold">
                Nuestra Identidad
              </span>
              <h1 className="font-sora text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3 mb-2">
                Más que un equipo, una{' '}
                <span className="font-serif-instrument italic font-normal text-[#7FC8BC]">
                  familia
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#E4EFF4]/90 font-light leading-relaxed">
                Nacimos en Jaén con un propósito claro: hacer que ir al dentista sea un momento de tranquilidad, confianza y felicidad para grandes y chicos.
              </p>
            </div>
          </div>
        </RevealSide>
      </section>

      {/* 2. HISTORIA & PASIÓN (Layout Asimétrico 2 Columnas) */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Historia Left (Slides in from extreme Left) */}
          <div className="lg:col-span-6 space-y-6">
            <RevealSide direction="left" delay={0.1} distance={80}>
              <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
                Nuestra Vocación
              </span>
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#1E2A32] tracking-tight mt-1">
                La pasión detrás de cada sonrisa en Jaén
              </h2>
            </RevealSide>

            <RevealSide direction="left" delay={0.2} distance={80}>
              <blockquote className="font-serif-instrument italic text-xl sm:text-2xl text-[#029CE3] border-l-2 border-[#E8B86D] pl-4 py-1 leading-snug">
                &ldquo;Qué bendición dedicarme a algo que amo todos los días: devolverle a las personas las ganas de reír sin miedo.&rdquo;
              </blockquote>
            </RevealSide>

            <RevealSide direction="left" delay={0.3} distance={80}>
              <p className="text-sm sm:text-base text-[#1E2A32]/80 leading-relaxed">
                En <strong>Geraldine Dent</strong>, cada paciente es recibido con el mismo cariño y dedicación que le daríamos a nuestra propia familia. Comenzamos con la visión de transformar la experiencia odontológica en Jaén, dejando atrás los viejos miedos al dolor y al sonido del torno.
              </p>
              <p className="text-sm sm:text-base text-[#1E2A32]/80 leading-relaxed mt-3">
                Hoy combinamos la calidez humana con equipamiento de vanguardia: odontología restauradora sin desgaste agresivo, profilaxis ultrasónica de alta precisión y un espacio especialmente concebido para los reyes del hogar.
              </p>
            </RevealSide>

            <RevealSide direction="left" delay={0.4} distance={80}>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#1E2A32]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7FC8BC]" />
                  <span>Atención personalizada</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7FC8BC]" />
                  <span>Bioseguridad hospitalaria</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7FC8BC]" />
                  <span>Materiales de primera calidad</span>
                </div>
              </div>
            </RevealSide>
          </div>

          {/* Polaroid Fan Stack Right (Slides in from extreme Right) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <RevealSide direction="right" delay={0.25} distance={80}>
              <div className="relative w-72 sm:w-80 h-96 group cursor-pointer">
                {/* Back Polaroid */}
                <div className="absolute inset-0 bg-white p-3 pb-8 rounded-2xl shadow-lg border border-[#029CE3]/15 rotate-[-8deg] group-hover:rotate-[-16deg] group-hover:-translate-x-6 transition-all duration-500 ease-out origin-bottom-left">
                  <img
                    src={CLINIC_IMAGES.hero}
                    alt="Consultorio dental"
                    referrerPolicy="no-referrer"
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <p className="text-[11px] text-center text-[#8A9BA6] font-serif-instrument italic mt-2">
                    Consultorio Ureta 230
                  </p>
                </div>

                {/* Middle Polaroid (Kids Area) */}
                <div className="absolute inset-0 bg-white p-3 pb-8 rounded-2xl shadow-xl border border-[#029CE3]/15 rotate-[6deg] group-hover:rotate-[12deg] group-hover:translate-x-6 transition-all duration-500 ease-out origin-bottom-right">
                  <img
                    src={CLINIC_IMAGES.kidsArea}
                    alt="Área infantil"
                    referrerPolicy="no-referrer"
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <p className="text-[11px] text-center text-[#8A9BA6] font-serif-instrument italic mt-2">
                    Nuestra área infantil
                  </p>
                </div>

                {/* Front Main Polaroid */}
                <div className="relative bg-white p-3 pb-8 rounded-2xl shadow-2xl border border-[#029CE3]/20 rotate-0 group-hover:scale-105 transition-all duration-500 ease-out">
                  <img
                    src={CLINIC_IMAGES.team}
                    alt="Familia Geraldine Dent"
                    referrerPolicy="no-referrer"
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="mt-2 text-center">
                    <p className="text-xs font-semibold text-[#1E2A32]">Familia Geraldine Dent</p>
                    <p className="text-[10px] text-[#029CE3]">Jaén, Cajamarca</p>
                  </div>
                </div>
              </div>
            </RevealSide>
          </div>
        </div>
      </section>

      {/* 3. EQUIPO MÉDICO (Grayscale to Color on Hover) */}
      <section className="py-20 bg-[#E4EFF4]/30 border-y border-[#029CE3]/10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <RevealSide direction="up" delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
                Profesionales con Vocación
              </span>
            </RevealSide>
            <RevealSide direction="up" delay={0.2}>
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#1E2A32] tracking-tight">
                Conoce a nuestro staff
              </h2>
            </RevealSide>
            <RevealSide direction="up" delay={0.3}>
              <p className="text-sm text-[#8A9BA6]">
                Especialistas comprometidos con la salud y estética de cada miembro de tu familia.
              </p>
            </RevealSide>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((doctor, index) => {
              const direction = index === 0 ? 'left' : index === 2 ? 'right' : 'up';
              return (
                <RevealSide key={doctor.name} direction={direction} delay={0.15 * (index + 1)} distance={70}>
                  <div className="group bg-white rounded-3xl overflow-hidden border border-[#029CE3]/15 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    {/* Doctor Photo */}
                    <div className="relative h-72 overflow-hidden bg-[#E4EFF4]">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#029CE3] shadow-sm">
                          {doctor.role.split('&')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-sora text-xl font-bold text-[#1E2A32] group-hover:text-[#029CE3] transition-colors">
                          {doctor.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#7FC8BC] mt-0.5">
                          {doctor.specialty}
                        </p>
                        <p className="text-xs text-[#8A9BA6] mt-3 leading-relaxed">
                          {doctor.bio}
                        </p>
                        <blockquote className="mt-3 text-xs italic text-[#029CE3] font-serif-instrument border-l-2 border-[#E8B86D] pl-2.5">
                          &ldquo;{doctor.quote}&rdquo;
                        </blockquote>
                      </div>

                      <button
                        onClick={() => onOpenBooking(doctor.name)}
                        className="w-full mt-4 py-2.5 px-4 rounded-full border border-[#029CE3]/25 group-hover:bg-[#029CE3] group-hover:text-white text-xs font-semibold text-[#029CE3] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Agendar con {doctor.name}</span>
                      </button>
                    </div>
                  </div>
                </RevealSide>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INSTALACIONES (Galería con Kids Area destacada) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <RevealSide direction="up" delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-[#029CE3] font-semibold">
              Instalaciones en Jaén
            </span>
          </RevealSide>
          <RevealSide direction="up" delay={0.2}>
            <h2 className="font-sora text-3xl font-bold text-[#1E2A32]">
              Espacios diseñados para tu tranquilidad
            </h2>
          </RevealSide>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main feature: Kids Area (Highlighted) - Slides from Left */}
          <div className="md:col-span-7">
            <RevealSide direction="left" delay={0.2} distance={80}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#7FC8BC]/40 group h-80 sm:h-96">
                <img
                  src={CLINIC_IMAGES.kidsArea}
                  alt="Área de juegos exclusiva para niños en Geraldine Dent"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A32]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#7FC8BC] text-[#1E2A32] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Baby className="w-4 h-4" />
                    <span>Exclusivo para peques</span>
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-sora text-xl font-bold">
                    Área Kids & Consultorio Temático Infantil
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">
                    Juguetes didácticos, ambiente amigable y libre de temor. Nuestro mayor orgullo es ver a los niños salir felices.
                  </p>
                </div>
              </div>
            </RevealSide>
          </div>

          {/* Secondary feature: Modern Treatment Chair - Slides from Right */}
          <div className="md:col-span-5">
            <RevealSide direction="right" delay={0.25} distance={80}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#029CE3]/15 group h-80 sm:h-96">
                <img
                  src={CLINIC_IMAGES.hero}
                  alt="Sillón de tratamiento moderno"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A32]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#029CE3] text-xs font-semibold">
                    Consultorio Clínico
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-sora text-lg font-bold">
                    Equipamiento Ergonómico & Digital
                  </h3>
                  <p className="text-xs text-white/90 mt-1">
                    Iluminación suave, confort total y estrictos estándares de bioseguridad.
                  </p>
                </div>
              </div>
            </RevealSide>
          </div>
        </div>
      </section>

      {/* 5. VALORES FUNDAMENTALES */}
      <section className="py-16 bg-[#FAFAF7] border-t border-[#029CE3]/10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <RevealSide key={val.title} direction={idx % 2 === 0 ? 'left' : 'right'} delay={0.1 * idx} distance={50}>
                  <div className="p-6 rounded-2xl bg-white border border-[#029CE3]/10 shadow-sm text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#E4EFF4] text-[#029CE3] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-sora text-sm font-bold text-[#1E2A32] mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-[#8A9BA6] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </RevealSide>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
