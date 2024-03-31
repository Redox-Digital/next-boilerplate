import style from './ContactCTA.module.scss';
import Button from '../navigation/Button';

export default function ContactCTA() {
  return (
    <section
      className={`${style.contactCTA} light`}
      style={{ backgroundImage: 'url(/layouts/placeholder1.jpg)' }}
    >
      <div className={style.contactCTA__overlay} />
      <div className={style.container}>
        <h3>Contact CTA Title</h3>
        <p>Contact CTA description, it can be long if you want</p>
        <Button to="/contact" ariaLabel="Vers le formulaire de contact">
          Contact us
        </Button>
      </div>
    </section>
  );
}
