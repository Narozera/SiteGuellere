import {
  job,
  fml,
  cns,
  digital,
  civil,
  whats,
  email,
  timer,
  location,
  facebook,
  instagram,
} from "../assets";

export const menu = [
  {
    id: 1,
    text: "Sobre",
    href: "#about",
  },
  {
    id: 2,
    text: "Serviços",
    href: "#jobs",
  },
  {
    id: 3,
    text: "Entre em Contato",
    href: "#contact",
  },
];

export const hero = [
  "Serviços jurídicos com transparência e profissionalismo.",
  "Experiência em consultoria e assessoria jurídica, análise de riscos e elaboração de teses.",
  "Advocacia especializada em Direito Civil, Direito de Família, Direito do Consumidor e Direito do Trabalho.",
];

export const titleJobs = [
  "A virtude da justiça consiste na moderação regulada pela sabedoria",
];

export const jobs = [
  {
    id: 1,
    img: job,
    alt: "Trabalho",
    title: "Direito do Trabalho",
    text: "O Direito do Trabalho propõe ser o intermediário necessário para regularizar as relações entre empregados e empregadores, protegendo os direitos dos trabalhadores e promovendo um ambiente de trabalho justo.",
    button: "Saiba Mais",
  },

  {
    id: 2,
    img: cns,
    alt: "Consumidor",
    title: "Direito do Consumidor",
    text: "O Direito do Consumidor regula as relações comerciais entre consumidores e empresas, protegendo os interesses dos consumidores e equilibrando a relação de poder entre as partes.",
    button: "Saiba Mais",
  },

  {
    id: 3,
    img: fml,
    alt: "Fámilia",
    title: "Direito de Família",
    text: "O Direito de Família propõe ser o intermediário necessário para regularizar as relações existentes entre seus membros e as influências que exerce sobre as pessoas e bens promovendo um ambiente familiar saudável e justo",
    button: "Saiba Mais",
  },
  {
    id: 4,
    img: civil,
    alt: "Civil",
    title: "Direito Civil",
    text: "O Direito Civil tem como objetivo regulamentar as relações jurídicas entre as pessoas e seus bens, visando à justiça e à segurança nas relações privadas. Esse ramo do direito trata de questões como propriedade, contratos, responsabilidade civil, direitos das pessoas vulneráveis, sucessões e patrimônio.",
    button: "Saiba Mais",
  },
  {
    id: 5,
    img: digital,
    alt: "Digital",
    title: "Direito Digital",
    text: "O Direito Digital tem como propósito regular as relações jurídicas no ambiente virtual, promovendo a segurança e a justiça nas interações online. Esse ramo do direito abrange temas como proteção de dados, privacidade, comércio eletrônico, crimes virtuais e propriedade intelectual.",
    button: "Saiba Mais",
  },
];

export const about = [
  "Formado pela Faculdade de Direito IBMEC. Pós-Graduado em Direito Digital e Compliance.",
  "Com uma carreira em Direito em constante evolução, minhas experiências incluem gerenciamento de carteira de processos, elaboração de peças processuais complexas, consultoria jurídica em diversas áreas, análise jurídica, contato com clientes e muito mais.",
  "Portifólio",
];

export const form = ["Entre em Contato"];

export const footerTitle = [" Redes Sociais"];

export const footerText = [
  {
    id: 1,
    text: "(11) 95555-7002",
    icon: whats,
    href: "#",
  },

  {
    id: 2,
    text: "felipeguellere@gmail.com",
    icon: email,
    href: "#",
  },

  {
    id: 3,
    text: "12:00 até 21:00 | Segunda a Sexta",
    icon: timer,
    href: "#",
  },

  {
    id: 4,
    text: "Praça Pádua Dias, 108",
    icon: location,
    href: "#",
  },
];

export const footerIcons = [
  {
    id: 1,
    icon: facebook,
    href: "",
  },

  {
    id: 2,
    icon: instagram,
    href: "",
  },
];
