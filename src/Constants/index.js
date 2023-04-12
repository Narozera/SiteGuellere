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
  linkedin,
  instagram,
  people,
  building,
  chain,
  family,
  checklist,
  dish,
  bank,
  hospital,
  consumer,
  familyTree,
  contract,
  realEstate,
  home,
  shield,
  homeOffice,
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

export const titleJobs = ["Áreas de atuação"];

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

export const textModal = [
  {
    title: "Direito do Trabalho",
  },
  {
    title: "Direito do Consumidor",
  },
  {
    title: "Direito de Família",
  },
  {
    title: "Direito Civil",
  },
  {
    title: "Direito Digital",
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
    href: "https://api.whatsapp.com/send?phone=5511955557002",
  },

  {
    id: 2,
    text: "felipeguellere@gmail.com",
    icon: email,
    href: "mailto:felipeguellere@gmail.com?subject=&body=",
  },

  {
    id: 3,
    text: "9:00 às 18:00 | Segunda a Sexta",
    icon: timer,
    href: "https://www.google.com/maps/place/Praça+Pádua+Dias,+108+-+Tatuapé,+São+Paulo+-+SP,+03067-050/@-23.537782,-46.57076,17z/data=!4m6!3m5!1s0x94ce5ee85455469f:0x16b39b084be6f2c7!8m2!3d-23.5382429!4d-46.571858!16s%2Fg%2F11fjxywn1j?hl=pt-BR",
  },

  {
    id: 4,
    text: "Praça Pádua Dias, 108",
    icon: location,
    href: "https://www.google.com/maps/place/Praça+Pádua+Dias,+108+-+Tatuapé,+São+Paulo+-+SP,+03067-050/@-23.537782,-46.57076,17z/data=!4m6!3m5!1s0x94ce5ee85455469f:0x16b39b084be6f2c7!8m2!3d-23.5382429!4d-46.571858!16s%2Fg%2F11fjxywn1j?hl=pt-BR",
  },
];

export const footerIcons = [
  {
    id: 1,
    icon: linkedin,
    href: "https://www.linkedin.com/in/felipeguellere/",
  },

  {
    id: 2,
    icon: instagram,
    href: "https://www.instagram.com/felipeguellere/?igshid=YmMyMTA2M2Y%3D",
  },
];

export const laborLaw = [
  {
    id: 1,
    icon: people,
    text: "Assessoria jurídica trabalhista ao empregado. Realização de Reclamações Trabalhistas, compreendendo todos os direitos e benefícios trabalhistas, como bono salarial, férias, licenças legais (licença maternidade e licença paternidade), adicionais previstos na legislação, ações sindicais, FGTS, 13º salário, admissões, aumento salarial, entre outros.",
  },
  {
    id: 2,
    icon: building,
    text: "Assessoria jurídica trabalhista ao empregador. Atuação preventiva na empresa e representação processual trabalhista estratégica, levando em consideração o segmento da empresa.",
  },
];

export const consumerLaw = [
  {
    id: 1,
    icon: bank,
    text: "Atuação em questões relacionadas a empréstimos, financiamentos, cartões de crédito, cheque especial, cobranças abusivas, dentre outros assuntos relacionados a instituições financeiras.",
  },
  {
    id: 2,
    icon: consumer,
    text: "Atuação em defesa dos direitos do consumidor de pessoas físicas em geral, incluindo ações judiciais individuais e coletivas, consultoria e elaboração de contratos e pareceres jurídicos.",
  },
  {
    id: 3,
    icon: hospital,
    text: "Atuação em questões relacionadas a planos de saúde, responsabilidade civil médica, produtos médicos, dentre outros assuntos relacionados a saúde.",
  },
];

export const familyLaw = [
  {
    id: 1,
    title: "Ação de Separação e Divórcio",
    icon: chain,
    text: "Ambos procedimentos podem ser realizados via tabelionato de notas em caso de dissolução consensual. Na hipótese de litígio, o procedimento deve ser judicial.",
  },
  {
    id: 2,
    title: "Inventários",
    icon: checklist,
    text: "É procedimento judicial visando a partilha de bens que não comporta o procedimento de arrolamento.",
  },
  {
    id: 3,
    title: "Pensão Alimentícia",
    icon: dish,
    text: "É a quantia fixada judicialmente para atender às necessidades do dependente familiar.",
  },
  {
    id: 4,
    title: "Regulamentação de Guarda e Visita",
    icon: family,
    text: "É a quantia fixada judicialmente para atender às necessidades do dependente familiar.",
  },
];

export const civilLaw = [
  {
    id: 1,
    icon: familyTree,
    text: "Atuação em questões relacionadas a testamentos, heranças, partilha de bens, dentre outras",
  },
  {
    id: 2,
    icon: contract,
    text: "Atuação em questões relacionadas a contratos, cobranças, indenizações, dentre outras.",
  },
  {
    id: 3,
    icon: realEstate,
    text: "Atuação em questões relacionadas a contratos, cobranças, indenizações, dentre outras.",
  },
  {
    id: 4,
    icon: home,
    text: "Atuação em questões relacionadas a propriedade, posse, usucapião, dentre outras.",
  },
];

export const digitalLaw = [
  {
    id: 1,
    icon: shield,
    text: "Atuação em questões relacionadas à coleta, armazenamento e uso de dados pessoais, incluindo o Regulamento Geral de Proteção de Dados (RGPD) na União Europeia e a Lei Geral de Proteção de Dados (LGPD) no Brasil. Além de questões relacionadas a direitos autorais, patentes, marcas e outras formas de propriedade intelectual.",
  },
  {
    id: 2,
    icon: homeOffice,
    text: "Atuação em questões relacionadas ao trabalho remoto, ao uso da tecnologia no ambiente de trabalho e à proteção de dados do trabalhador.",
  },
];
