import Button from '@/components/navigation/Button';
import { TextHero } from '@/components/layouts/Hero';

export default function NotFoundPage() {
  return (
    <TextHero title="Page introuvable" surtitle="Erreur 404" half>
      <>
        <p>La page que vous recherchez n’existe pas.</p>
        <Button href="/">Retour à l’accueil</Button>
      </>
    </TextHero>
  );
}
