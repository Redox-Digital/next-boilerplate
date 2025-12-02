import { LogoWall } from '@/components/content/LogoList';
import Metadata from '@/components/content/Metadata';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import AccordionSection from '@/components/layouts/Accordion';
import CardsSection from '@/components/layouts/CardsSection';
import { TextHero } from '@/components/layouts/Hero';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import { partners, valuesCards } from '@/constants/projectSpecifics';
import { AccordionEltType } from '@/types/Types';

export default function About() {
  const [pageTitle, pageDesc] = [
    'Notre entreprise',
    'Nous sommes une entreprise active dans la formation des apprentis.',
  ];

  const staticFaq: AccordionEltType[] = [
    {
      id: 'faq-1',
      title: 'Question #1',
      initOpen: true,
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra
          interdum.
        </p>
      ),
    },
    {
      id: 'faq-2',
      title: 'Question #2',
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra
          interdum.
        </p>
      ),
    },
    {
      id: 'faq-3',
      title: 'Question #3',
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra
          interdum.
        </p>
      ),
    },
  ];

  return (
    <>
      <Metadata title={pageTitle} description={pageDesc} />

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

        <AccordionSection
          title="FAQ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros non orci pharetra interdum."
          elts={staticFaq}
        />

        <LogoWall title="Our Partners" logos={partners} />
      </main>
    </>
  );
}
