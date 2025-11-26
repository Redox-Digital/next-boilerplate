import css from './Home.module.scss';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import ContactCTA from '@/components/content/ContactCTA';
import ContactForm from '@/components/forms/ContactForm';
import Map from '@/components/content/Map';
import Metadata from '@/components/content/Metadata';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import MediaHero from '@/components/layouts/Hero';

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
        <TextImageSection title={'Section Title'} imgPath="./layouts/placeholder2.jpg">
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
            <Button href={'/about'}>Read more</Button>
          </>
        </TextImageSection>

        <ContactCTA
          title="Contactez-nous"
          description="Nous sommes là pour vous aider."
          overlayOpacity={0.5}
          backgroundImageUrl="./layouts/placeholder1.jpg"
        >
          <Button href="/contact">Nous contacter</Button>
        </ContactCTA>

        <TextImageSection title={'Section Title'} imgPath="./layouts/placeholder2.jpg" dark>
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
            <Button href={'/about'}>Read more</Button>
          </>
        </TextImageSection>

        {/* <InstagramGallery /> */}
        <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.920463044422!2d6.900426376694955!3d46.98289683083848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e89633cc35043%3A0x639791bb8e74ddf1!2sRedox%20Digital%20S%C3%A0rl!5e0!3m2!1sfr!2sch!4v1690360916650!5m2!1sfr!2sch" />

        <ContactForm />
      </main>
    </>
  );
}
