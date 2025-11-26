export type NavLinkType = {
  url: string;
  label: string;
  icon?: string;
  btn?: boolean;
  subLinks?: NavLinkType[];
};

export const mainNavLinks: NavLinkType[] = [
  {
    url: '/',
    label: 'Accueil',
  },
  {
    url: '/a-propos',
    label: 'À propos',
  },
  {
    url: '/services',
    label: 'Services',
    subLinks: [
      {
        url: '/services/subservice-1',
        label: 'Subservice #1',
      },
      {
        url: '/services/subservice-2',
        label: 'Subservice #2',
      },
      {
        url: '/services/subservice-3',
        label: 'Subservice #3',
      },
    ],
  },
  {
    url: '/portfolio',
    label: 'Portfolio',
  },
  {
    url: '/contact',
    label: 'Contact Us',
    btn: true,
  },
];

export const socialLinks: NavLinkType[] = [
  {
    url: 'https://www.instagram.com/redox/',
    label: 'Instagram',
    icon: 'icon-instagram',
  },
  {
    url: 'https://www.facebook.com/redox',
    label: 'Facebook',
    icon: 'icon-facebook',
  },
  {
    url: 'https://www.linkedin.com/redox',
    label: 'LinkedIn',
    icon: 'icon-linkedin',
  },
];
