import Button from '@/components/navigation/Button';
import { TextHero } from '@/components/layouts/Hero';
import Metadata from '@/components/content/Metadata';

export default function NotFoundPage() {
  const pageTitle = 'Page introuvable';

  return (
    <>
      <Metadata title={pageTitle} />
      <TextHero title="Page introuvable" surtitle="Erreur 404" half>
        <>
          <p>La page que vous recherchez n’existe pas.</p>
          <Button href="/">Retour à l’accueil</Button>
        </>
      </TextHero>
    </>
  );
}
