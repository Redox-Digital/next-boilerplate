import Image from 'next/image';
import css from './Galleries.module.scss';
import { DirectusFileType, DirectusGalleryApiType } from '@/types/Types';

interface GalleryMediaType extends DirectusFileType {
  src: string;
  onClick: () => void;
  viewer?: boolean;
  className?: string;
  // showImg: (file: DirectusGalleryApiType) => void;
}

export default function SquareImage({
  id,
  title,
  description,
  type,
  width,
  height,
  src,
  viewer,
  onClick,
  className,
}: // showImg,
GalleryMediaType) {
  return (
    <figure
      className={`${css.image} ${css.sqImage} ${viewer || css.readOnly} ${className}`}
      onClick={viewer ? onClick : () => null}
    >
      <Image
        // DEV : static URL
        src={src}
        alt={description || ''}
        width={500}
        height={500}
      />
      {viewer && (
        <figcaption className={css.imageOverlay}>
          <p>{title}</p>
        </figcaption>
      )}
    </figure>
  );
}

export function MasonryImage({
  id,
  title,
  description,
  type,
  width,
  height,
  src,
  viewer,
  onClick,
  className,
}: // showImg,
GalleryMediaType) {
  return (
    <figure
      className={`${css.masonryImage} ${viewer || css.readOnly} ${className}`}
      onClick={viewer ? onClick : () => null}
    >
      <Image
        // DEV : static URL
        src={src}
        alt={description || ''}
        width={width}
        height={height}
      />
      {viewer && (
        <figcaption className={css.imageOverlay}>
          <p>{title}</p>
        </figcaption>
      )}
    </figure>
  );
}
