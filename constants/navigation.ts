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
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
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
    icon: '/pictograms/instagram.svg',
  },
  {
    url: 'https://www.facebook.com/redox',
    label: 'Facebook',
    icon: '/pictograms/facebook.svg',
  },
  {
    url: 'https://www.linkedin.com/redox',
    label: 'LinkedIn',
    icon: '/pictograms/linkedin.svg',
  },
];
