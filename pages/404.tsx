import Button from '@/components/Button';
import style from '@/styles/layouts/404.module.scss';

export default function NotFoundPage() {
  return (
    <section className={`light ${style.notFoundPage}`}>
      <div className="container">
        <h5>Erreur 404</h5>
        <h2>Page introuvable</h2>
        <p>La page que vous recherchez n&rsquo;existe pas.</p>
        <Button ariaLabel="Retourner à la page accueil" to={'/'}>
          Retour à l&rsquo;accueil
        </Button>
      </div>
    </section>
  );
}
