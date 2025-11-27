import css from './Home.module.scss';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import RichCTA, { BannerCTA } from '@/components/content/CTA';
import Metadata from '@/components/content/Metadata';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import MediaHero from '@/components/layouts/Hero';
import LogoBanner, { LogoWall } from '@/components/content/LogoList';
import { partners } from '@/constants/projectSpecifics';
import { productCards } from '@/constants/projectSpecifics';
import CardsSection from '@/components/layouts/CardsSection';

export default function Home() {
  const structuredData = generateStructuredData({
    page: {
      url: process.env.domain || '',
      title: 'Redox Digital | Marketing digital, solutions web sur-mesure, création de contenu',
    },
    services: [
      {
        serviceType: 'Stratégie & marketing digital',
        description:
          'Gestion stratégique et créative de la présence des marques sur les réseaux sociaux.',
      },
    ],
  });

  return (
    <>
      <Metadata>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      </Metadata>

      <MediaHero
        title="My Company"
        surtitle="We make the best NextJS templates"
        imgUrl="/layouts/placeholder1.jpg"
        // videoUrl={[{ url: '/layouts/video_placeholder.mp4', type: 'mp4' }]}
        // videoMobileUrl={[{ url: '/layouts/video_placeholder_mobile.mp4', type: 'mp4' }]}
        opacity={0.75}
        variant="bottom"
      >
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi odio culpa ratione?
          </p>
          <Button href="/a-propos">À propos</Button>
        </>
      </MediaHero>

      <main className="home">
        <BannerCTA
          title={'Banner CTA Title'}
          backgroundImageUrl="./layouts/placeholder1.jpg"
          pictoUrl="./pictograms/quality.svg"
          action={{
            label: `${process.env.phone}`,
            href: `tel:${process.env.phone}`,
            secondary: true,
          }}
        />

        <CardsSection
          title={'Nos produits'}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros  non orci pharetra interdum. Maecenas ornare pretium eros. Proin  facilisis congue leo sed congue."
          cards={productCards}
          action={{ label: 'Découvrez notre gamme de produits', href: '/services' }}
          hideAction
          hideDesc
        />

        <TextImageSection
          surtitle="Surtitle"
          title={'Section Title'}
          imgPath="./layouts/placeholder2.jpg"
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
            <Button href={'/a-propos'}>Read more</Button>
          </>
        </TextImageSection>

        <LogoBanner logos={partners} showLabel animated />

        <TextImageSection
          title={'Section Title'}
          surtitle="Surtitle"
          imgPath="./layouts/placeholder2.jpg"
          imgLastDesktop
          imgFirstMobile
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
            <Button href={'/a-propos'}>Read more</Button>
          </>
        </TextImageSection>

        <RichCTA
          title="Contactez-nous"
          description="Nous sommes là pour vous aider."
          overlayOpacity={0.5}
          backgroundImageUrl="./layouts/placeholder1.jpg"
          action={{ label: 'Nous contacter', href: '/contact' }}
        />

        {/* <InstagramGallery /> */}
      </main>
    </>
  );
}
