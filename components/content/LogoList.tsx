import Link from 'next/link';
import css from './LogoList.module.scss';
import Image from 'next/image';
import { LogoProps } from '@/types/Types';

type LogoWallProps = {
  title?: string;
  logos: LogoProps[];
};

type LogoBannerProps = {
  showLabel?: boolean;
  animated?: boolean;
  logos: LogoProps[];
};

export default function LogoBanner({ showLabel, animated, logos }: LogoBannerProps) {
  return (
    <section className={`${css.logoBanner} ${animated ? css.animated : css.static}`}>
      <ul className={`${css.track}`}>
        {/* chaque élément affiché 3x pour la boucle */}

        {logos.map((logo) => (
          <li key={logo.name}>
            <LogoElt {...logo} showLabel={showLabel} />
          </li>
        ))}

        {animated &&
          logos.map((logo) => (
            <li key={`${logo.name}-2`}>
              <LogoElt {...logo} showLabel={showLabel} />
            </li>
          ))}
        {animated &&
          logos.map((logo) => (
            <li key={`${logo.name}-2`}>
              <LogoElt {...logo} showLabel={showLabel} />
            </li>
          ))}
      </ul>
    </section>
  );
}

function LogoElt({ name, img, url, showLabel }: LogoProps) {
  if (url)
    return (
      <Link href={url} className={`${css.logo} ${css.clickable}`} target="_blank">
        <Image src={img} alt={name} width={320} height={180} />
        {showLabel && <small>{name}</small>}
      </Link>
    );
  return (
    <span className={css.logo}>
      <Image src={img} alt={name} width={320} height={180} />
      {showLabel && <small>{name}</small>}
    </span>
  );
}

export function LogoWall({ title, logos }: LogoWallProps) {
  return (
    <section className={css.logoWall}>
      <div className="container">
        {title && <h3>{title}</h3>}
        <ul>
          {logos.map((logo) => (
            <li key={logo.name}>
              <LogoElt {...logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
