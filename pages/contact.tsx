import Metadata from '@/components/content/Metadata';
import ContactForm from '@/components/forms/ContactForm';
import Map from '@/components/content/Map';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import { TextHero } from '@/components/layouts/Hero';

export default function Contact() {
  const [pageTitle, pageDesc] = [
    'Rendez-nous visite',
    'Découvrez notre emplacement et contactez-nous pour toute question.',
  ];

  return (
    <>
      <Metadata title={pageTitle} description={pageDesc} />

      <TextHero title={pageTitle} surtitle={'Contact'} half>
        <p>{pageDesc}</p>
      </TextHero>

      <main>
        <ContactForm />
        <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.920463044422!2d6.900426376694955!3d46.98289683083848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e89633cc35043%3A0x639791bb8e74ddf1!2sRedox%20Digital%20S%C3%A0rl!5e0!3m2!1sfr!2sch!4v1690360916650!5m2!1sfr!2sch" />
      </main>
    </>
  );
}
