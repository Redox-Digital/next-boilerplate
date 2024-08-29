import css from './Home.module.scss';
import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import ContactCTA from '@/components/content/ContactCTA';
import ContactForm from '@/components/content/ContactForm';
import Map from '@/components/content/Map';

const structuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Organization',
  'url': process.env.domain,
  'name': 'My Company',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Address Line 1',
    'addressLocality': 'City',
    'addressRegion': 'NE',
    'postalCode': '2000',
    'addressCountry': 'CH',
  },
  'logo': `${process.env.domain}/logos/logoipsum.svg`,
  'telephone': process.env.phone,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>My Company | Welcome</title>

        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="Redox Digital" />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://mydomain.com/socials/social_thumbnail.png" />
        <meta property="og:url" content="https://mydomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://mydomain.com/socials/social_thumbnail.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Hero
        title="My Company"
        home
        subtitle="We make the best NextJS templates"
        source="./layouts/placeholder1.jpg"
      />
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
            <Button to={'/about'}>Read more</Button>
          </>
        </TextImageSection>

        <ContactCTA />

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
            <Button to={'/about'}>Read more</Button>
          </>
        </TextImageSection>

        {/* <InstagramGallery /> */}
        <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.920463044422!2d6.900426376694955!3d46.98289683083848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e89633cc35043%3A0x639791bb8e74ddf1!2sRedox%20Digital%20S%C3%A0rl!5e0!3m2!1sfr!2sch!4v1690360916650!5m2!1sfr!2sch" />

        <ContactForm />
      </main>
    </>
  );
}
