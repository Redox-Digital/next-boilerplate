import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logos/logoipsum.svg';
import css from './Footer.module.scss';
import { mainNavLinks, socialLinks } from '@/constants/navigation';
import { openingHours } from '@/constants/address';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.body}>
        <div className={`${css.col} ${css.contact}`}>
          <Image src={logo} alt="logo" className={css.logo} />

          <ul className={css.address}>
            <li>
              <span>Redox Digital Sàrl</span>
            </li>
            <li>
              <span>Rue des Fahys 21, 2000 Neuchâtel</span>
            </li>
            <li>
              <Link href={`tel:${process.env.phone}`} target="_blank">
                <span id="phone" />
              </Link>
            </li>
            <li>
              <Link href={`mailto:${process.env.mail}`} target="_blank">
                <span id="mail" />
              </Link>
            </li>
          </ul>

          <ul className={css.socials}>
            {socialLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url} title={link.label}>
                  {link.icon ? <i className={link.icon} /> : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${css.col} ${css.navigation}`}>
          <h5>Horaires</h5>
          <ul>
            {openingHours.map((elt) => (
              <li key={elt.day}>
                <span>
                  {elt.day} : {elt.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${css.col} ${css.navigation}`}>
          <h5>Navigation</h5>
          <ul>
            {mainNavLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.foot}>
        <div className={css.container}>
          <small>
            &copy; 2025 My Company Sàrl – Site web réalisé par{' '}
            <Link
              aria-label="Accéder au site de Redox Digital"
              href="https://redoxdigital.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redox&nbsp;Digital
            </Link>
          </small>
          <small>
            <Link
              href={'/confidentialite'}
              aria-label="Vers notre déclaration de protection des données"
            >
              Protection des données & mentions légales
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
