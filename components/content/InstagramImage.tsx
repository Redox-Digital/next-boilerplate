import Image from 'next/image';
import css from './InstagramImage.module.scss';

type Props = {
  title: string;
  location?: string;
  description: string;
  source: string;
};

export default function InstagramImage({ title, location, description, source }: Props) {
  return (
    <figure className={css.igImg}>
      <h3>{title}</h3>
      {location && <h5>{location}</h5>}
      <Image src={source || ''} alt={description} width={500} height={500} />
      <figcaption>
        {description.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </figcaption>
    </figure>
  );
}
