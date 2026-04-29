export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Início' },
  { href: '/about', key: 'sobre', label: 'Sobre' },
  { href: '/certifications', key: 'certificacoes', label: 'Certificações' },
  { href: '/covenants', key: 'convenios', label: 'Convênios' },
  { href: '/faq', key: 'duvidas_frequentes', label: 'Dúvidas Frequentes' },
  { href: '/units', key: 'unidades', label: 'Unidades e Contato' },
];

export const HERO_SLIDES = [
  {
    src: '/art1.jpg.jpeg',
    alt: 'Resultados de exames online',
    link: 'https://wa.me/551637618555?text=Ol%C3%A1%2C%20quero%20ver%20meus%20resultados.',
  },
  {
    src: '/art2.jpg.jpeg',
    alt: 'Nossos serviços de excelência',
    link: 'https://wa.me/551637618555?text=Ol%C3%A1%2C%20quero%20agendar%20um%20exame.',
  },
  {
    src: '/art3.jpg.jpeg',
    alt: 'Coleta domiciliar',
    link: 'https://wa.me/551637618555?text=Ol%C3%A1%2C%20quero%20agendar%20coleta%20domiciliar.',
  },
  {
    src: '/art4.jpg.jpeg',
    alt: 'Campanha da prevenção inteligente',
    link: 'https://wa.me/551637618555?text=Ol%C3%A1%2C%20quero%20fazer%20um%20check-up.',
  },
];

export const SERVICE_CARDS = [
  {
    id: 1,
    src: '/fetalsexing.png',
    alt: 'Sexagem fetal',
    title: 'Sexagem Fetal',
    eyebrow: 'Biologia molecular',
    gradient: 'from-emerald-950/95 via-emerald-900/60 to-transparent',
    whatsappMessage: 'Olá, quero saber mais sobre Sexagem Fetal.',
  },
  {
    id: 2,
    src: '/toxicologicalexam.png',
    alt: 'Exame toxicológico',
    title: 'Exame Toxicológico',
    eyebrow: 'Rastreio ocupacional',
    gradient: 'from-[#d2ae6d]/95 via-[#d2ae6d]/70 to-transparent',
    whatsappMessage: 'Olá, quero saber mais sobre Exame Toxicológico.',
  },
  {
    id: 3,
    src: '/heelpricktest.png',
    alt: 'Teste do pezinho',
    title: 'Teste do Pezinho',
    eyebrow: 'Cuidado neonatal',
    gradient: 'from-emerald-950/95 via-emerald-900/60 to-transparent',
    whatsappMessage: 'Olá, quero saber mais sobre Teste do Pezinho.',
  },
  {
    id: 4,
    src: '/paternitytest.png',
    alt: 'Teste de paternidade',
    title: 'Teste de Paternidade',
    eyebrow: 'DNA e vínculos biológicos',
    gradient: 'from-[#d2ae6d]/95 via-[#d2ae6d]/70 to-transparent',
    whatsappMessage: 'Olá, quero saber mais sobre Teste de Paternidade.',
  },
];

export const QUICK_LINKS = [
  {
    id: 1,
    background: 'bg-emerald-950',
    title: 'Dúvidas Frequentes',
    description: 'Respostas objetivas sobre preparo, prazos e atendimento.',
    href: '/faq',
  },
  {
    id: 2,
    background: 'bg-[#d2ae6d]',
    title: 'Coleta em Domicílio',
    description: 'Agende com praticidade para pacientes com rotina corrida.',
    href: '/pickup',
  },
  {
    id: 3,
    background: 'bg-emerald-900',
    title: 'Direitos e Deveres',
    description: 'Informações claras para uma experiência segura e transparente.',
    href: '/RightsAndDuties',
  },
  {
    id: 4,
    background: 'bg-green-90',
    title: 'Código de Conduta Ética',
    description: 'Compromissos institucionais e padrões de conduta da equipe.',
    href: '/ethics',
  },
];

export const LAB_PHOTOS = [
  { src: '/lab1.jpg', alt: 'Laboratório - ambiente 1' },
  { src: '/lab2.jpg', alt: 'Laboratório - ambiente 2' },
  { src: '/lab3.jpg', alt: 'Laboratório - ambiente 3' },
  { src: '/lab4.jpg', alt: 'Laboratório - ambiente 4' },
];

export const UNIT_LOCATIONS = [
  {
    id: 'batatais-forum',
    accent: 'gold',
    city: 'Batatais',
    shortTitle: 'Unidade de Batatais',
    title: 'Labormed Batatais',
    imageSrc: '/unidade2.jpg',
    pinSrc: '/pinGold.svg',
    address: 'Travessa Intendente Vigilato, 295 - Centro - Batatais - São Paulo',
    phones: ['(16) 3761-8555', '(16) 3761-3311'],
    whatsappNumber: '551637618555',
    hours: ['Seg - Sex: 6h30 - 17h30', 'Sábado: 7h - 11h', 'Domingo: Fechado'],
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3320.9272525537353!2d-47.58491778009317!3d-20.887571597239255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9faea56fd24d1%3A0x28e0e2e22a0fc31c!2sR.%20Dr.%20Manoel%20Furtado%2C%20235%20-%20Centro%2C%20Batatais%20-%20SP%2C%2014300-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1726110289366!5m2!1spt-BR!2sus',
  },
  {
    id: 'altinopolis',
    accent: 'main',
    city: 'Altinópolis',
    shortTitle: 'Unidade de Altinópolis',
    title: 'Labormed Altinópolis',
    imageSrc: '/unidade3.jpg',
    pinSrc: '/pinMain.svg',
    address: 'Rua Coronel Joaquim Alberto, 377 - Centro - Altinópolis - São Paulo',
    phones: ['(16) 3665-3422'],
    whatsappNumber: '551636653422',
    hours: ['Seg - Sex: 6h30 - 17h', 'Sábado e Domingo: Fechado'],
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2558.4166046496994!2d-47.37624281591836!3d-21.025992980221528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b760ce779031d3%3A0x3c58634861723af1!2sR.%20Cel.%20Joaquim%20Alberto%2C%20354%20-%20Centro%2C%20Altin%C3%B3polis%20-%20SP%2C%2013920-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1726110915783!5m2!1spt-BR!2sus',
  },
];
