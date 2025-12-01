import css from './TagembedGallery.module.scss';

type Props = {
  src: string;
};

/**
 * Using the external tool TagEmbed : https://tagembed.com/fr/
 */
export default function TagEmbedGallery({ src }: Props) {
  return (
    <section className={css.gallery}>
      <iframe className={css.tagembedFrame} src={src}></iframe>
    </section>
  );
}
