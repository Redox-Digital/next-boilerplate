import Image from 'next/image';
import Link from 'next/link';
import placeholder from '../public/layouts/img-placeholder.png';
import style from './Menu.module.scss';

export default function DropdownMenu() {
  return (
    <div className={style.submenu__content}>
      <Link
        aria-label="Accéder à la page des services pour particuliers"
        href="/services/particuliers"
        style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
      >
        {' '}
        <div className={style.overlay}></div>
        <h5>Submenu #1</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Link>
      <Link
        aria-label="Accéder à la page des services pour collectivités"
        href="/services/collectivites"
        style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
      >
        <div className={style.overlay}></div>
        <h5>Submenu #2</h5>
        <p>Fugiat, animi! Ad corporis odio deleniti ipsum tenetur?</p>
      </Link>
      <Link
        aria-label="Accéder à la page des services pour entreprises"
        href="/services/entreprises"
        style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
      >
        {' '}
        <div className={style.overlay}></div>
        <h5>Submenu #3</h5>
        <p>
          Corrupti recusandae quam quisquam voluptatem itaque consequuntur officiis repudiandae
          nulla vitae!
        </p>
      </Link>
    </div>
  );
}
