import Image from 'next/image';
import style from '@/styles/components/Hero.module.scss';
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
        className={`${style.hero} ${home ? style.hero__home : ''}`}
        style={{ backgroundImage: `url(${source})` }}
      >
        {home && video}
        <div className={style.hero__overlay} style={{ opacity: opacity || 0.5 }} />
        <div className={style.hero__content}>
          {home ? (
            <>
              <Image src={logo} alt={''} width="1200" priority />
              {/* Pour optimiser : https://beta.nextjs.org/docs/optimizing/lazy-loading#example-adding-a-custom-loading-component */}
            </>
          ) : (
            <h1 className={style.title}>{title}</h1>
          )}

          <p className={style.subtitle}>{subtitle}</p>
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
