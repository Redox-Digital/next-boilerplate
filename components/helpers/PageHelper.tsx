import { DirectusBlock } from '@/types/Types';
// DEV : improve css import
import css from '../../pages/projets/Project.module.scss';
import Image from 'next/image';

export const buildPage = (blocks: DirectusBlock[]) => {
  return blocks.map((block, key) => {
    switch (block.type) {
      case 'header':
        return <h4 key={key} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
      case 'embed':
        return (
          <div key={key} className={css.iframeHolder}>
            <iframe
              src={`${block.data.embed}&rel=0&loop=1`}
              title="YouTube Video Player"
              allow="autoplay; clipboard-write; encrypted-media; "
              allowFullScreen
            />
          </div>
        );
      case 'image':
        return (
          <figure key={key} className={block.data.stretched ? css.fullwidthImg : css.containerImg}>
            <Image
              src={`${process.env.api}${block.data.file.url}`}
              width={block.data.file.width || 1000}
              height={block.data.file.height || 540}
              alt={''}
            />
            {block.data.caption && !block.data.stretched ? (
              <figcaption dangerouslySetInnerHTML={{ __html: block.data.caption }} />
            ) : (
              ''
            )}
          </figure>
        );

      default: // "paragraph"
        return (
          <p
            key={key}
            className={css.textBlock}
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );
    }
  });
};

/* Unused for now. */
export function slugify(text: string): string {
  return text
    .normalize('NFD') // Split accented letters into letter + diacritic
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars (keep spaces and dashes)
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-'); // Collapse multiple dashes
}

export const ProjectUrlBuilder = (id: number, title: string, client: string): string => {
  return `/projets/${id}/${slugify(client)}-${slugify(title)}`;
};
/* .unused */
