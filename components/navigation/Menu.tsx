import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logos/logoipsum.svg';
import DropdownMenu from './DropdownMenu';
import css from './Menu.module.scss';
import burgerStyle from './Burger.module.scss';
import Button from './Button';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [scrollingUp, setScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background

    window.addEventListener('scroll', changeBackground);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const displayOnScroll = () => {
        if (typeof window !== 'undefined') {
          if (window.scrollY >= lastScrollY) {
            // if scroll down hide the navbar
            setScrollingUp(false);
          } else {
            // if scroll up show the navbar
            setScrollingUp(true);
          }

          // remember current page location to use in the next move
          setLastScrollY(window.scrollY);
        }
      };
      window.addEventListener('scroll', displayOnScroll);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', displayOnScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`${css.menu} ${navbar ? css.menu__scrolling : ''} ${
          menuOpen ? css.menu__open : ''
        } ${scrollingUp ? '' : css.menu__hidden}`}
      >
        <div className={css.mainMenu}>
          <div className={css.mainMenu__container}>
            <Link href="/" className={css.logo} aria-label="Accéder à la page d'accueil">
              <Image src={logo} alt="" height={30} className="logo" />
            </Link>

            <div className={css.menu__links}>
              <Link href="/" aria-label="Accéder à la page d'accueil">
                Home
              </Link>
              <Link
                href="#"
                scroll={false}
                className={css.submenu}
                aria-label="Afficher nos services"
              >
                Services
              </Link>
              <DropdownMenu />

              <Link href="/about" aria-label="Accéder à la page d'à propos">
                About
              </Link>
              <Link href="/careers" aria-label="Accéder à la page d'emplois">
                Careers
              </Link>
              <Button
                ariaLabel="Vers le formulaire de contact"
                to="/contact"
                size="small"
                addClass="btn"
              >
                Contact us
              </Button>
            </div>
            <button
              className={`${burgerStyle.burger} ${menuOpen ? burgerStyle.burger__closed : ''}`}
              onClick={toggleMenu}
              aria-label="Ouvrir la navigation mobile"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
