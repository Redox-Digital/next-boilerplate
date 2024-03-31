import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logos/logoipsum.svg';
import style from './Footer.module.scss';
import Button from '../navigation/Button';
import Address from '../content/Address';
import Socials from '../content/Socials';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerBody}>
        <div className={style.footerBody__logo}>
          <Image src={logo} alt="logo" className="logo" />
        </div>
        <div className={style.footerBody__top}>
          <h5>Suivez-nous sur les réseaux sociaux</h5>
          <div className={style.footerBody__top__socials}>
            <Socials />
          </div>
        </div>
        <div className={style.footerBody__bottom}>
          <div className={style.footerBody__bottom__right}>
            <Link aria-label="Accéder à la page d'accueil" href="/">
              Accueil
            </Link>
            <div className={style.footer__submenu}>
              <h5>Services</h5>
              <Link
                href="/services/particuliers"
                aria-label="Accéder à la page des services pour Particuliers"
              >
                Particuliers
              </Link>
              <Link
                href="/services/collectivites"
                aria-label="Accéder à la page des services pour Collectivités"
              >
                Collectivités
              </Link>
              <Link
                href="/services/entreprises"
                aria-label="Accéder à la page des services pour entreprises"
              >
                Entreprises
              </Link>
            </div>

            <Link aria-label="Accéder à la page d'à propos" href="/about">
              À propos
            </Link>
            <Link aria-label="Accéder à la page d'emploi" href="/careers">
              Emplois
            </Link>
          </div>
          <div className={style.footerBody__bottom__left}>
            <Address />

            <Button ariaLabel="Vers le formulaire de contact" size="big" to="/contact">
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <small className="xs">
          <Link
            href={'/confidentialite'}
            aria-label="Vers notre déclaration de protection des données"
          >
            Protection des données & mentions légales
          </Link>
        </small>
        <small>
          &copy; 2023 My Company Sàrl – Site web réalisé par{' '}
          <Link
            aria-label="Accéder au site de Redox Digital"
            href="https://redoxdigital.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redox&nbsp;Digital
          </Link>
        </small>
      </div>
    </footer>
  );
}
