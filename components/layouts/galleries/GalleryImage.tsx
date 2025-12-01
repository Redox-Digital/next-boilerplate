import Image from 'next/image';
import css from './Galleries.module.scss';
import { DirectusFileType, DirectusGalleryApiType } from '@/types/Types';

interface GalleryMediaType extends DirectusFileType {
  order: number;
  onClick: () => void;
  // showImg: (file: DirectusGalleryApiType) => void;
}

export default function SquareImageGallery({
  id,
  title,
  description,
  type,
  width,
  height,
  order,
  onClick,
}: // showImg,
GalleryMediaType) {
  return (
    <figure className={css.image} onClick={onClick}>
      <Image
        // DEV : static URL
        src={`https://cms.pittetfreres.ch/assets/${id}` || ''}
        alt={description || ''}
        width={500}
        height={500}
        data-order={order}
      />
      <figcaption className={css.image__overlay}>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
}
