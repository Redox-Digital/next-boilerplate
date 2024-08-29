import Image from 'next/image';
import css from './Hero.module.scss';
import Link from 'next/link';
import arrowDown from '/public/pictograms/arrow-down.svg';
import logo from '/public/logos/logoipsum.svg';
import IntroVideo from '../content/IntroVideo';
import { useEffect, useState } from 'react';

type Props = {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  source: string;
  home?: boolean;
  opacity?: number;
};

const Hero = (props: Props) => {
  const { title, subtitle, source, home, opacity } = props;

  const [video, setVideo] = useState<JSX.Element | string>('');

  useEffect(() => {
    const pageWidth = window?.innerWidth || 0;
    setVideo(pageWidth > 768 ? <IntroVideo /> : '');
  }, []);

  return (
    <>
      <header
        className={`${css.hero} ${home ? css.hero__home : ''}`}
        style={{ backgroundImage: `url(${source})` }}
      >
        {home && video}
        <div className={css.hero__overlay} style={{ opacity: opacity || 0.5 }} />
        <div className={css.hero__content}>
          <h1 className={css.title}>{title}</h1>

          <p className={css.subtitle}>{subtitle}</p>
          {home ? (
            <Link href="#intro" scroll={false} aria-hidden>
              <Image src={arrowDown} alt={''}></Image>
            </Link>
          ) : (
            ''
          )}
        </div>
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
};

export default Hero;
