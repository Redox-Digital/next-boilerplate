import { LogoWall } from '@/components/content/LogoList';
import Metadata from '@/components/content/Metadata';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import CardsSection from '@/components/layouts/CardsSection';
import { TextHero } from '@/components/layouts/Hero';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import { partners, valuesCards } from '@/constants/projectSpecifics';

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
        <TextImageSection title={'Section Title'} imgPath="/layouts/placeholder2.jpg">
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

        <CardsSection
          title={'Une large gamme de produits'}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros  non orci pharetra interdum. Maecenas ornare pretium eros. Proin  facilisis congue leo sed congue."
          cards={valuesCards}
          action={{ label: 'Découvrez notre gamme de produits', href: '/services' }}
          altCards
          bigCards
        />

        <LogoWall title="Our Partners" logos={partners} />
      </main>
    </>
  );
}
