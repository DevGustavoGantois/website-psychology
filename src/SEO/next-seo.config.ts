import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Consultório de Psicologia Clínica Mônica Aran',
  description:
    'O Consultório de Psicologia Clínica Mônica Aran oferece uma abordagem terapêutica especializada em gestalt-terapia para crianças, adolescentes e adultos. Agende sua consulta e inicie seu processo de autoconhecimento.',
  openGraph: {
    type: 'website',
    url: 'https://website-monica-aran.vercel.app/',
    title: 'Consultório de Psicologia Clínica Mônica Aran',
    description:
      'O Consultório de Psicologia Clínica Mônica Aran oferece uma abordagem terapêutica especializada em gestalt-terapia, com atendimento a crianças, adolescentes e adultos. Entre em contato para saber mais sobre nossos serviços.',
    images: [
      {
        url: 'https://website-monica-aran.vercel.app/Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Logo Consultório de Psicologia Clínica Mônica Aran',
      },
    ],
    siteName: 'Consultório de Psicologia Clínica Mônica Aran',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MonicaAran',
    creator: '@devgustavogantois_',
    title: 'Consultório de Psicologia Clínica Mônica Aran',
    description:
      'O Consultório de Psicologia Clínica Mônica Aran oferece atendimento terapêutico especializado para crianças, adolescentes e adultos, com foco na gestalt-terapia. Agende sua consulta agora.',
    images: ['https://website-monica-aran.vercel.app/Logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'psicologia, gestalt-terapia, consulta, psicóloga, psicoterapia, crianças, adolescentes, adultos, autoconhecimento',
};
