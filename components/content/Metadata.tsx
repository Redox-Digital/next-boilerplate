import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
};

export default function Metadata({ title, description, image, children }: Props) {
  const defaultTitle =
    'Redox Digital | Marketing digital, solutions web sur-mesure, création de contenu';
  const defaultDesc =
    'Nous concevons des stratégies de communication, des sites web créatifs et des contenus visuels percutants mettant en valeur votre institution ou PME. Basés à Neuchâtel, nous travaillons dans toute la Suisse romande.';

  const defaultImage = `${process.env.domain}/socials/social_thumbnail.png`;
  return (
    <Head>
      <title>{title ? `${title} | Redox Digital` : defaultTitle}</title>

      <meta
        name="keywords"
        content="agence digitale, agence web, communication, agence de communication, réalisation vidéo, portfolio, neuchâtel, fribourg"
      />
      <meta name="description" content={description || defaultDesc} />
      <meta name="author" content="Redox Digital" />

      <meta property="og:title" content={title ? `${title} | Redox Digital` : defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={process.env.domain} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Redox Digital` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />

      {children}
    </Head>
  );
}
