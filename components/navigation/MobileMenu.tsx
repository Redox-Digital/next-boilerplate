import style from './MobileMenu.module.scss';
import menu from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Socials from '../content/Socials';
import Address from '../content/Address';

type Props = {
  open: boolean;
  toggleMenu: () => void;
};

export default function MobileMenu(props: Props) {
  const { open, toggleMenu } = props;

  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const toggleAllMenus = () => {
    toggleSubMenu();
    toggleMenu();
  };

  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <>
      <nav
        className={`${style.mobileMenu} ${
          open ? style.mobileMenu__open : style.mobileMenu__closed
        }`}
      >
        <div className={style.mobileMenu__links}>
          <Link href="/" onClick={toggleMenu} aria-label="Accéder à la page d'accueil">
            Home
          </Link>
          <button aria-label="Afficher nos services" type="button" onClick={toggleSubMenu}>
            Services
          </button>
          <Link href="/about" onClick={toggleMenu} aria-label="Accéder à la page d'à propos">
            About
          </Link>
          <Link href="/careers" onClick={toggleMenu} aria-label="Accéder à la page d'emplois">
            Careers
          </Link>
          <Link href="/contact" onClick={toggleMenu} aria-label="Accéder à la page de contact">
            Contact us
          </Link>
        </div>
        <Address />
        <div className={style.mobileMenu__socials}>
          <Socials />
        </div>
      </nav>
      <nav
        className={`${style.mobileSubMenu} ${
          subMenuOpen ? style.mobileSubMenu__open : style.mobileSubMenu__closed
        }`}
      >
        <div className={style.mobileSubMenu__top}>
          <button aria-label="Afficher nos services" type="button" onClick={toggleSubMenu}>
            Services
          </button>
          <button
            aria-label="Ouvrir la navigation mobile"
            className={`${burgerStyle.burger} ${open ? burgerStyle.burger__closed : ''}`}
            onClick={toggleAllMenus}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={style.mobileSubMenu__body}>
          <Link
            aria-label="Accéder à nos services pour les particuliers"
            href="/services/particuliers"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
          >
            <div className={style.overlay}></div>
            <h5>Submenu #1</h5>
          </Link>
          <Link
            aria-label="Accéder à nos services pour les collectivités"
            href="/services/collectivites"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
          >
            <div className={style.overlay}></div>
            <h5>Submenu #2</h5>
          </Link>
          <Link
            aria-label="Accéder à nos services pour les entreprises"
            href="/services/entreprises"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
          >
            <div className={style.overlay}></div>
            <h5>Submenu #3</h5>
          </Link>
        </div>
      </nav>
    </>
  );
}
