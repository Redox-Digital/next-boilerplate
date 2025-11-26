import Metadata from '@/components/content/Metadata';
import ContactForm from '@/components/forms/ContactForm';
import Map from '@/components/content/Map';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import { TextHero } from '@/components/layouts/Hero';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';

export default function About() {
  const [pageTitle, pageDesc] = [
    'Notre entreprise',
    'Nous sommes une entreprise active dans la formation des apprentis.',
  ];

  const structuredData = generateStructuredData({
    page: {
      url: `${process.env.domain}/a-propos'`,
      title: pageTitle,
    },
  });

  return (
    <>
      <Metadata title={pageTitle} description={pageDesc}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      </Metadata>

      <TextHero title={pageTitle} surtitle={'À propos'} half>
        <p>{pageDesc}</p>
      </TextHero>

      <main>
        <TextImageSection title={'Section Title'} imgPath="/layouts/placeholder2.jpg" dark>
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi odio culpa ratione?
              Ipsam minima laudantium vitae laboriosam id alias dolorem, perferendis aperiam error
              sed iste voluptates accusantium necessitatibus dolorum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi odio culpa ratione?
              Ipsam minima laudantium vitae laboriosam id alias dolorem!
            </p>
            <Button href={'/'}>Retour à l&apos;accueil</Button>
          </>
        </TextImageSection>
      </main>
    </>
  );
}
