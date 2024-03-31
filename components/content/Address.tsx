import style from './Address.module.scss';
import Link from 'next/link';

export default function Address() {
  return (
    <div className={style.address}>
      <div className={style.address__elt}>
        <h5>Téléphone</h5>
        <p>
          <Link href={`tel:${process.env.customKey}`} aria-label="Nous téléphoner">
            <span id="phone"></span>
          </Link>
        </p>
      </div>
      <div className={style.address__elt}>
        <h5>Adresse</h5>
        <p>Rue du Test 12, 2000 Neuchâtel</p>
      </div>
      <div className={style.address__elt}>
        <h5>Horaires</h5>
        <p>
          Lundi au Jeudi
          <br />
          7h00-12h00 / 13h00-17h00
        </p>
        <p>
          Vendredi
          <br />
          7h00-12h00
        </p>
      </div>
    </div>
  );
}
