import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logos/logoipsum.svg';
import css from './Header.module.scss';
import burgerCss from './Burger.module.scss';
import Button from './Button';
import { useEffect, useState } from 'react';
import { mainNavLinks, legalLinks, socialLinks, NavLinkType } from '@/constants/navigation';

export default function Header() {
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
        className={`${css.menu} ${navbar ? css.scrolling : ''} ${menuOpen ? css.open : ''} ${
          scrollingUp ? '' : css.hidden
        }`}
      >
        <div className={css.container}>
          <Link href="/" className={css.logo}>
            <Image src={logo} alt="" height={30} width={100} />
          </Link>

          <div className={css.links}>
            {mainNavLinks.map((link: NavLinkType) => (
              <>
                {link.subLinks ? (
                  <DropdownMenu>
                    <Link key={link.url} href={link.url} className={css.submenu}>
                      {link.label}
                    </Link>
                  </DropdownMenu>
                ) : link.btn ? (
                  <Button key={link.url} href={link.url} small>
                    {link.label}
                  </Button>
                ) : (
                  <Link key={link.url} href={link.url}>
                    {link.label}
                  </Link>
                )}
              </>
            ))}
          </div>

          <Burger open={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>

      <MobileMenu open={menuOpen} toggleMenu={toggleMenu} links={mainNavLinks} />
    </>
  );
}

type DropdownProps = {
  children?: string | React.ReactNode;
};

function DropdownMenu({ children }: DropdownProps) {
  return (
    <div className={css.dropdownMenu}>
      {children}
      <span>
        <Link href="/services/marketing">Marketing</Link>
        <Link href="/services/web">Web</Link>
        <Link href="/services/creation">Création</Link>
      </span>
    </div>
  );
}

type MobileMenuProps = {
  open: boolean;
  toggleMenu: () => void;
  links?: NavLinkType[];
};

function MobileMenu({ open, toggleMenu, links }: MobileMenuProps) {
  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <>
      <nav className={`${css.mobileMenu} ${open ? css.open : css.closed}`}>
        <div className={css.links}>
          {links?.map((link: NavLinkType) => (
            <>
              {link.subLinks ? (
                <>
                  <Link key={link.url} href={link.url}>
                    {link.label}
                  </Link>
                  <span className={css.submenu} key={link.url}>
                    {link.subLinks.map((subLink: NavLinkType) => (
                      <Link key={subLink.url} href={subLink.url}>
                        {subLink.label}
                      </Link>
                    ))}
                  </span>
                </>
              ) : link.btn ? (
                <Button key={link.url} href={link.url} small>
                  {link.label}
                </Button>
              ) : (
                <Link key={link.url} href={link.url}>
                  {link.label}
                </Link>
              )}
            </>
          ))}
        </div>
      </nav>
    </>
  );
}

type BurgerProps = {
  open: boolean;
  toggleMenu: () => void;
};

function Burger({ open, toggleMenu }: BurgerProps) {
  return (
    <button
      type="button"
      className={`${burgerCss.burger} ${open ? burgerCss.closed : ''}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
