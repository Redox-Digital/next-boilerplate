import css from './CookiesPopUp.module.scss';
import btn from '../navigation/Button.module.scss';
import Link from 'next/link';

type Props = {
  handleCookiePolicy: (answer: boolean) => void;
};

export default function CookiesPopUp({ handleCookiePolicy }: Props) {
  return (
    <div className={css.popup}>
      <small>
        Acceptez-vous que ce site enregistre des cookies sur votre appareil et partage des
        informations anonymes selon notre{' '}
        <Link href="/lpd">Déclaration de Protection des Données</Link> ?
      </small>
      <button className={`${btn.btn} ${btn.btn__xs}`} onClick={() => handleCookiePolicy(true)}>
        J&rsquo;accepte
      </button>
      <button
        className={`${btn.btn} ${btn.btn__secondary} ${btn.btn__xs}`}
        onClick={() => handleCookiePolicy(false)}
      >
        Je&nbsp;refuse
      </button>
    </div>
  );
}
