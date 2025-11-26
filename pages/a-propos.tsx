import Metadata from '@/components/content/Metadata';
import { generateStructuredData } from '@/components/helpers/MetaDatahelper';
import { TextHero } from '@/components/layouts/Hero';

export default function About() {
  const [pageTitle, pageDesc] = [
    'Notre entreprise',
    'Nous sommes une entreprise active dans la formation des apprentis.',
  ];

  const structuredData = generateStructuredData({
    page: {
      url: `${process.env.domain}/about'`,
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
    </>
  );
}
