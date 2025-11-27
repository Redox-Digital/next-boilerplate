import { CardType, LogoProps } from '@/types/Types';

type OpeningHour = {
  day: string;
  hours: string;
};

export const openingHours: OpeningHour[] = [
  {
    day: 'Lundi',
    hours: 'Fermé',
  },
  {
    day: 'Mardi',
    hours: '9h-12h / 14h-18h30',
  },
  {
    day: 'Mercredi',
    hours: '9h-12h',
  },
  {
    day: 'Jeudi',
    hours: '9h-12h / 14h-18h30',
  },
  {
    day: 'Vendredi',
    hours: '9h-12h / 14h-18h',
  },
  {
    day: 'Samedi',
    hours: '9h-12h',
  },
];

export const partners: LogoProps[] = [
  {
    name: 'Partner #1',
    img: '/logos/logoipsum.svg',
    url: 'https://redoxdigital.ch',
  },
  {
    name: 'Partner #2',
    img: '/logos/favicon.svg',
    url: 'https://redoxdigital.ch',
  },
  {
    name: 'Partner #3',
    img: '/logos/favicon.svg',
  },
  {
    name: 'Partner #4',
    img: '/logos/logoipsum.svg',
    url: 'https://redoxdigital.ch',
  },
];

export const productCards: CardType[] = [
  {
    title: 'Element #1',
    picto: '/logos/favicon.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum.',
    action: { label: 'En savoir plus', href: '/services' },
  },
  {
    title: 'Element #2',
    picto: '/logos/favicon.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum.',
  },
  {
    title: 'Element #3',
    picto: '/logos/favicon.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum.',
  },
  {
    title: 'Element #4',
    picto: '/logos/favicon.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum.',
  },
  {
    title: 'Element #5',
    picto: '/logos/favicon.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum.',
  },
  {
    title: 'Element #6',
    picto: '/logos/favicon.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum.',
  },
];
