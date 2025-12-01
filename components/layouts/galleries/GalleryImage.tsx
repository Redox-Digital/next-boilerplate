import Image from 'next/image';
import css from './Galleries.module.scss';
import { DirectusFileType } from '@/types/Types';

interface GalleryMediaType extends DirectusFileType {
  order: number;
  showImg: (id: number) => void;
}

export default function ImageGallery({
  id,
  title,
  description,
  type,
  width,
  height,
  order,
  showImg,
}: GalleryMediaType) {
  return (
    <figure className={css.image} onClick={() => showImg(order)}>
      <Image
        // DEV : static URL
        src={`https://cms.pittetfreres.ch/assets/${id}` || ''}
        alt={description || ''}
        width={500}
        height={500}
      />
      <figcaption className={css.image__overlay}>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
}
