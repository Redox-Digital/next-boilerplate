import Image from 'next/image';
import style from '@/styles/components/Gallery.module.scss';

type Props = {
  id: number;
  description: string;
  image: string;
  showImg: (id: number) => void;
};

export default function ImageGallery({ description, image, id, showImg }: Props) {
  return (
    <figure className={style.image} onClick={() => showImg(id)}>
      <Image
        src={`${process.env.api}/assets/${image}?key=thumbnail` || ''}
        alt={description}
        width={500}
        height={500}
      />
      <figcaption className={style.image__overlay}>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
