import { MultiCTA } from '@/components/content/CTA';
import Metadata from '@/components/content/Metadata';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import CardsSection from '@/components/layouts/CardsSection';
import { TextHero } from '@/components/layouts/Hero';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import { productCards } from '@/constants/projectSpecifics';

export default function Services() {
  const [pageTitle, pageDesc] = [
    'À votre service',
    'Nous vous accompagnons tout au long de vos projets digitaux.',
  ];

  const structuredData = generateStructuredData({
    page: {
      url: `${process.env.domain}/services'`,
      title: pageTitle,
    },
  });

  return (
    <>
      <Metadata title={pageTitle} description={pageDesc}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      </Metadata>

      <TextHero title={pageTitle} surtitle={'Nos services'} half>
        <p>{pageDesc}</p>
      </TextHero>

      <main>
        <TextImageSection
          id="subservice-1"
          title={'Section Title'}
          imgPath="/layouts/placeholder2.jpg"
        >
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
          cards={productCards}
          action={{ label: 'Découvrez notre gamme de produits', href: '/services' }}
        />

        <TextImageSection
          id="subservice-2"
          title={'Section Title'}
          imgPath="/layouts/placeholder1.jpg"
          imgLastDesktop
        >
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
        <TextImageSection
          id="subservice-3"
          title={'Section Title'}
          imgPath="/layouts/placeholder2.jpg"
        >
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
        <MultiCTA
          cards={[
            {
              title: 'Nous rendre visite',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros  non orci pharetra interdum.',
              backgroundImageUrl: '/layouts/placeholder1.jpg',
              action: { label: 'Nos bureaux', href: '/contact', secondary: true },
            },
            {
              title: 'Nos services',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros  non orci pharetra interdum.',
              backgroundImageUrl: '/layouts/placeholder2.jpg',

              action: { label: 'SAV', href: '/services', secondary: true },
            },
          ]}
        />
      </main>
    </>
  );
}
