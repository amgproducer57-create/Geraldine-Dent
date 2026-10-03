import { ServiceItem, TransformationCase, ReviewItem, TeamMember } from '../types';

import heroClinicImg from '../assets/images/hero_clinic_interior_1790894295386.jpg';
import teamImg from '../assets/images/dental_team_family_1790894307336.jpg';
import kidsAreaImg from '../assets/images/kids_dental_area_1790894318024.jpg';
import smileMakeoverImg from '../assets/images/smile_makeover_close_1790894327837.jpg';
import whiteningImg from '../assets/images/whitening_treatment_1790895745675.jpg';
import orthodonticsImg from '../assets/images/orthodontics_treatment_1790895756001.jpg';
import cleaningImg from '../assets/images/cleaning_prophylaxis_1790895765241.jpg';
import prosthesisImg from '../assets/images/prosthesis_crowns_1790895775859.jpg';
import heroDoctorImg from '../assets/images/hero_doctor_image.png';

export const CLINIC_IMAGES = {
  hero: heroClinicImg,
  heroDoctor: heroDoctorImg,
  team: teamImg,
  kidsArea: kidsAreaImg,
  smileMakeover: smileMakeoverImg,
  whitening: whiteningImg,
  orthodontics: orthodonticsImg,
  cleaning: cleaningImg,
  prosthesis: prosthesisImg,
};

export const CLINIC_INFO = {
  name: "Geraldine Dent",
  styledName: "Geraldine DENT",
  city: "Jaén, Cajamarca, Perú",
  address: "Prolongación Mariscal Ureta 230, Urb. Las Almendras, Jaén 06801",
  addressNote: "Google Maps registra el nro. 224",
  reference: "A 1 cuadra de la losa deportiva \"Los Bancarios\"",
  phones: ["963 193 327", "966 345 805"],
  whatsappLink1: "https://wa.me/51963193327",
  whatsappLink2: "https://wa.me/51966345805",
  rating: "5.0",
  reviewsCount: "175+",
  followers: "4,278+",
  tiktokFollowers: "2,831+",
  tiktokLikes: "48.3K+",
  instagram: "@geraldinedent.jaen",
  instagramUrl: "https://www.instagram.com/geraldinedent.jaen",
  facebook: "@geraldinedentjaen",
  facebookUrl: "https://www.facebook.com/geraldinedentjaen",
  tiktok: "@geraldinedent",
  tiktokUrl: "https://www.tiktok.com/@geraldinedent",
  schedule: "Lunes a Sábado: 8:30 am - 1:00 pm | 3:00 pm - 8:00 pm",
  motto: "Tu sonrisa merece lo mejor",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "diseno-sonrisa",
    title: "Diseño de Sonrisa & Carillas de Resina",
    category: "estetica",
    image: smileMakeoverImg,
    shortDesc: "Transformación armónica y natural. Especialistas en microdiseño dental y carillas de alta estética.",
    fullDesc: "Nuestro tratamiento estrella más solicitado en Jaén. Diseñamos sonrisas respetando la anatomía de tu rostro y labios. Frecuentemente combinado con blanqueamiento dental previo y carillas de resina estética de alta estratificación sin desgaste excesivo.",
    iconName: "Sparkles",
    duration: "2 a 3 sesiones",
    isFeatured: true,
    badge: "Caso viral TikTok",
    benefits: [
      "Simulación previa de tu sonrisa",
      "Resinas estéticas de alta durabilidad y brillo",
      "Aspecto sumamente natural sin dolor",
      "Transformación en pocas citas"
    ],
    whatsappMessage: "Hola Dra. Geraldine, deseo información y agendar una cita para Diseño de Sonrisa y Carillas de Resina."
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento Dental",
    category: "estetica",
    image: whiteningImg,
    shortDesc: "Aclaramiento profesional seguro que devuelve la luminosidad y blancura a tus dientes.",
    fullDesc: "Tecnología de aclaramiento fotoactivado en consultorio y protocolos ambulatorios personalizados. Diseñado con agentes protectores para minimizar la sensibilidad y maximizar el brillo.",
    iconName: "SunMedium",
    duration: "45 a 60 minutos",
    benefits: [
      "Hasta 4 tonos más claros en una sesión",
      "Fórmulas con desensibilizantes protectores",
      "Seguro para el esmalte dental",
      "Mantenimiento sencillo y duradero"
    ],
    whatsappMessage: "Hola Geraldine Dent, quisiera consultar por una sesión de Blanqueamiento Dental."
  },
  {
    id: "odontopediatria",
    title: "Odontología Infantil (Kids)",
    category: "ninos",
    image: kidsAreaImg,
    shortDesc: "Consultorio infantil exclusivo y área de juegos para que los pequeños disfruten su visita al dentista sin miedo.",
    fullDesc: "Contamos con instalaciones especialmente diseñadas para niños en Jaén: área de juegos con juguetes didácticos, ambiente lúdico y especialistas capacitados en manejo de conducta con amor y paciencia infinita.",
    iconName: "Smile",
    duration: "30 a 45 minutos",
    badge: "Área de Juegos Exclusiva",
    benefits: [
      "Área de recreación infantil antes de la atención",
      "Prevención temprana de caries y sellantes",
      "Técnicas sin dolor y reforzamiento positivo",
      "Guía de cepillado y hábitos para padres"
    ],
    whatsappMessage: "Hola, me gustaría agendar una cita para mi hijo/a en el consultorio infantil con área de juegos."
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia (Brackets & Alineación)",
    category: "salud",
    image: orthodonticsImg,
    shortDesc: "Corrección de apiñamiento y mordida para lograr una alineación perfecta funcional y estética.",
    fullDesc: "Evaluación cefalométrica digital integral. Opciones en brackets metálicos convencionales, brackets cerámicos/zafiro estéticos de alta discreción y alineadores.",
    iconName: "Maximize2",
    duration: "Control mensual",
    benefits: [
      "Estudio ortodóncico completo y plan digital",
      "Opciones estéticas transparentes",
      "Mejora sustancial de la mordida y articulación",
      "Planes de financiamiento accesibles en Jaén"
    ],
    whatsappMessage: "Hola Geraldine Dent, deseo solicitar una evaluación para Ortodoncia / Brackets."
  },
  {
    id: "limpieza-dental",
    title: "Limpieza Dental & Profilaxis",
    category: "salud",
    image: cleaningImg,
    shortDesc: "Profilaxis profunda con ultrasonido, remoción de sarro y pulido dental sin dolor.",
    fullDesc: "Eliminación exhaustiva de placa bacteriana, cálculo supra y subgingival mediante ultrasonido suave, seguido de pulido con pasta profiláctica y aplicación tópica de flúor protector.",
    iconName: "ShieldCheck",
    duration: "30 a 40 minutos",
    benefits: [
      "Prevención eficaz de gingivitis y mal aliento",
      "Eliminación de manchas superficiales de café o té",
      "Sensación de frescura y limpieza inmediata",
      "Revisión preventiva general incluida"
    ],
    whatsappMessage: "Hola, deseo reservar una cita para una Limpieza Dental y Profilaxis."
  },
  {
    id: "endodoncia",
    title: "Endodoncia (Tratamiento de Conductos)",
    category: "salud",
    image: heroClinicImg,
    shortDesc: "Alivio inmediato del dolor y conservación de tu diente natural con tecnología rotatoria.",
    fullDesc: "Tratamiento de la pulpa dental infectada o inflamada utilizando localizador apical electrónico y sistemas rotatorios modernos para un procedimiento rápido, preciso e indoloro.",
    iconName: "Activity",
    duration: "1 a 2 sesiones",
    benefits: [
      "Eliminación definitiva del dolor agudo",
      "Salva tu pieza dental evitando la extracción",
      "Procedimiento con anestesia local de alta eficacia",
      "Restauración posterior reforzada y duradera"
    ],
    whatsappMessage: "Hola Dra. Geraldine, tengo dolor y necesito una cita para evaluación de Endodoncia urgente."
  },
  {
    id: "protesis-dentales",
    title: "Prótesis Dentales & Coronas",
    category: "salud",
    image: prosthesisImg,
    shortDesc: "Rehabilitación oral fija o removible para recuperar la función masticatoria y la sonrisa completa.",
    fullDesc: "Soluciones de prótesis fijas de zirconio libre de metal, coronas estéticas y prótesis removibles confortables adaptadas milimétricamente para hablar y masticar con total seguridad.",
    iconName: "Layers",
    duration: "Según plan protésico",
    benefits: [
      "Materiales biocompatibles de alto realismo óptico",
      "Ajuste cómodo y seguro sin balanceos",
      "Recuperación inmediata de la función masticatoria",
      "Armonía visual con el resto de tus dientes"
    ],
    whatsappMessage: "Hola, quisiera información sobre prótesis dentales o coronas en Geraldine Dent."
  }
];

export const TRANSFORMATION_CASES: TransformationCase[] = [
  {
    id: "caso-1",
    title: "Diseño de Sonrisa Natural: Blanqueamiento + 6 Carillas de Resina",
    category: "carillas",
    categoryLabel: "Diseño de Sonrisa",
    description: "Publicado en nuestras redes con más de 2,100 likes en TikTok. Paciente femenina que deseaba cerrar diastemas y mejorar el tono general de sus dientes anteriores con un acabado armónico y no invasivo.",
    duration: "2 sesiones",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    patientQuote: "¡No puedo dejar de sonreír! El cambio fue delicado, nadie nota que son carillas porque se ven como mis dientes naturales pero perfectos.",
    highlights: ["Blanqueamiento previo fotoactivado", "6 carillas de resina estética de alta gama", "Sin tallado agresivo", "Bordes incisales armonizados"]
  },
  {
    id: "caso-2",
    title: "Aclaramiento Estético Profundo",
    category: "blanqueamiento",
    categoryLabel: "Blanqueamiento",
    description: "Tratamiento de aclaramiento dental de consultorio para paciente con tinciones por consumo regular de café y mate. Se lograron 4 tonos de aclaramiento con cero hipersensibilidad.",
    duration: "1 sesión (50 min)",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    patientQuote: "Pensé que me dolería pero fue súper suave y el resultado al salir fue impresionante.",
    highlights: ["Gel desensibilizante previo", "Luz LED de activación suave", "Tratamiento ambulatorio de refuerzo"]
  },
  {
    id: "caso-3",
    title: "Ortodoncia Correctiva & Alineación de Caninos",
    category: "ortodoncia",
    categoryLabel: "Ortodoncia",
    description: "Corrección de apiñamiento severo y mordida cruzada en paciente joven en Jaén. Tratamiento concluido con arcos estéticos y retención fija invisible.",
    duration: "14 meses",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
    patientQuote: "Tenía vergüenza de sonreír en fotos familiares. Ahora mi perfil y mi risa son completamente diferentes.",
    highlights: ["Guía canina restablecida", "Sonrisa amplia y equilibrada", "Retención fija estética"]
  },
  {
    id: "caso-4",
    title: "Rehabilitación Estética Integral & Carillas Anteriores",
    category: "completo",
    categoryLabel: "Diseño Completo",
    description: "Reconstrucción estética de sector anterosuperior con resinas de microrrelleno estratificado, combinando cambio de forma, longitud y color.",
    duration: "3 sesiones",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    patientQuote: "La atención de la Dra. Geraldine y su equipo fue como estar en casa. Me explicaron cada detalle con mucho cariño.",
    highlights: ["Morfología personalizada", "Equilibrio con la línea de la sonrisa", "Alta resistencia mecánica"]
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Karina Delgado V.",
    rating: 5,
    date: "Hace 2 semanas",
    treatment: "Diseño de Sonrisa & Carillas",
    comment: "Excelente atención de la Dra. Geraldine. Tenía mucho miedo de hacerme carillas pero el resultado superó todo lo que imaginaba, súper natural y el trato es inmejorable. ¡100% recomendados en Jaén!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Jorge Luis Mendoza",
    rating: 5,
    date: "Hace 1 mes",
    treatment: "Limpieza & Blanqueamiento",
    comment: "La clínica es impecable, muy moderna y tranquila. La limpieza con ultrasonido no me dolió nada y el blanqueamiento quedó espectacular. Los dos números de WhatsApp responden rapidísimo.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Mariela Saavedra",
    rating: 5,
    date: "Hace 3 semanas",
    treatment: "Odontopediatría (Atención Niños)",
    comment: "Llevé a mi pequeña de 5 años y le encantó el área de juegos. Las doctoras tienen una paciencia y un amor increíble para tratar a los niños. Ya no le tiene miedo al dentista, quiere volver.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Manuel E. Campos",
    rating: 5,
    date: "Hace 2 meses",
    treatment: "Ortodoncia",
    comment: "Llevo mis controles de ortodoncia aquí desde el inicio. El avance ha sido impresionante y el ambiente siempre es muy familiar y profesional. Da gusto atenderse en Geraldine Dent.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Dora Elizabeth Peña",
    rating: 5,
    date: "Hace 1 mes",
    treatment: "Endodoncia & Restauración",
    comment: "Llegué con un dolor terrible y me salvaron el diente en una sola cita sin ninguna molestia. Gran calidad humana y equipos de primera en Las Almendras.",
    verified: true
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dra. Geraldine",
    role: "Directora Médica & Especialista en Estética",
    specialty: "Diseño de Sonrisa, Carillas de Resina y Rehabilitación Oral",
    bio: "Apasionada por la odontología estética conservadora y la armonización de la sonrisa. Con formación continua en técnicas de estratificación dental y microestética en Perú y el extranjero.",
    quote: "Qué bendición dedicarme a algo que amo todos los días: ver a nuestros pacientes recuperar su seguridad al sonreír.",
    image: teamImg
  },
  {
    name: "Dra. Especialista en Odontopediatría",
    role: "Especialista en Odontología Infantil",
    specialty: "Manejo Integral del Niño y Prevención Temprana",
    bio: "Dedicada a crear una experiencia libre de ansiedad para los más pequeños, convirtiendo cada visita en un momento seguro y divertido en nuestra exclusiva área de juegos.",
    quote: "El primer recuerdo de un niño en el dentista define la salud de su sonrisa para toda la vida.",
    image: kidsAreaImg
  },
  {
    name: "Dr. Especialista en Ortodoncia",
    role: "Especialista en Ortodoncia & Ortopedia Maxilar",
    specialty: "Brackets Estéticos, Autoligado y Alineadores",
    bio: "Enfocado en la biomecánica precisa y la estabilidad a largo plazo, logrando perfiles armónicos y oclusiones funcionales y saludables.",
    quote: "La verdadera belleza de la sonrisa radica en la armonía entre función y estética.",
    image: heroClinicImg
  }
];

export const FAQ_LIST = [
  {
    q: "¿Duele el tratamiento de blanqueamiento o las carillas?",
    a: "No. En Geraldine Dent utilizamos protocolos suaves con agentes desensibilizantes protectores. Las carillas de resina son un procedimiento conservador donde generalmente no se requiere anestesia profunda ni desgaste dental agresivo."
  },
  {
    q: "¿A partir de qué edad pueden atender a los niños en el área kids?",
    a: "Atendemos desde los primeros meses de vida (aparición del primer diente de leche, ~6 meses) para chequeos preventivos. Nuestro consultorio infantil y área de juegos están equipados para hacer que niños de todas las edades se sientan en un parque de diversiones dental."
  },
  {
    q: "¿Dónde están ubicados exactamente en Jaén?",
    a: "Nos encontramos en Prolongación Mariscal Ureta 230, Urbanización Las Almendras, Jaén (a solo 1 cuadra de la reconocida losa deportiva 'Los Bancarios'). Contamos con fácil acceso y estacionamiento seguro."
  },
  {
    q: "¿Cómo puedo agendar mi cita o pedir un presupuesto?",
    a: "Puedes escribirnos directamente a cualquiera de nuestros dos números de WhatsApp oficiales: 963 193 327 o 966 345 805. Nuestro equipo te responderá de inmediato para coordinar tu fecha y hora más conveniente."
  },
  {
    q: "¿Aceptan facilidades de pago para tratamientos de ortodoncia o carillas?",
    a: "Sí, disponemos de planes de pago fraccionados por etapas y cuotas mensuales para ortodoncia, así como facilidades para diseños de sonrisa integrales."
  }
];
