import Image from 'next/image';
import css from './Hero.module.scss';
import Link from 'next/link';
import arrowDown from '/public/pictograms/arrow-down.svg';
import IntroVideo from '../content/IntroVideo';
import { useEffect, useState } from 'react';

type HeroProps = {
  title: string | React.ReactNode;
  surtitle?: string;
  children?: string | React.ReactNode;
  half?: boolean;
  className?: string;
  arrow?: boolean;
};

interface MediaHeroProps extends HeroProps {
  opacity?: number; // Overlay opacity
  imgUrl: string; // Background image standalone, or fallback if no video
  videoUrl?: { url: string; type: 'mp4' | 'webm' | 'mov' }[];
  videoMobileUrl?: { url: string; type: 'mp4' | 'webm' | 'mov' }[];
  variant?: 'background' | 'side' | 'bottom';
}

export default function MediaHero({
  title,
  surtitle,
  children,
  half,
  className,
  arrow,
  opacity,
  imgUrl,
  videoUrl,
  videoMobileUrl,
  variant = 'background',
}: MediaHeroProps) {
  const [video, setVideo] = useState<JSX.Element | string>('');

  const checkVariant = () => {
    switch (variant) {
      case 'side':
        return css.sideMedia;

      case 'bottom':
        return css.bottomMedia;

      default:
        return css.backgroundMedia;
    }
  };

  useEffect(() => {
    setVideo(
      <>
        <IntroVideo className={css.media} videos={videoUrl || []} poster={imgUrl} />
        <IntroVideo className={css.media} videos={videoMobileUrl || []} poster={imgUrl} mobile />
      </>
    );
  }, [videoUrl, videoMobileUrl, imgUrl]);

  return (
    <>
      <header
        className={`${css.hero} ${css.mediaHero} ${
          half && css.half
        } ${checkVariant()} ${className}`}
      >
        <div className={css.container}>
          {videoUrl ? (
            video
          ) : (
            <Image
              src={imgUrl}
              alt=""
              className={css.media}
              fill={variant === 'background'}
              width={variant !== 'background' ? 2000 : undefined}
              height={variant !== 'background' ? 1200 : undefined}
            />
          )}
          {variant === 'background' && (
            <div className={css.overlay} style={{ opacity: opacity || '' }} />
          )}

          <div className={css.content}>
            {surtitle && <p className={css.surtitle}>{surtitle}</p>}
            <h1>{title}</h1>
            {children && <div className={css.texts}>{children}</div>}
          </div>
        </div>

        {arrow && <Arrow />}
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
}

export function TextHero({ title, surtitle, children, half, className, arrow }: HeroProps) {
  return (
    <>
      <header className={`${css.hero} ${css.textHero} ${half && css.half} ${className}`}>
        <div className={css.container}>
          {surtitle && <p className={css.surtitle}>{surtitle}</p>}
          <h1>{title}</h1>
          {children && <div className={css.texts}>{children}</div>}
        </div>

        {arrow && <Arrow />}
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
}

function Arrow() {
  return (
    <Link href="#intro" scroll={false} aria-hidden className={css.arrow} title="Défiler la page">
      <Image src={arrowDown} alt={''} width={50} height={50} />
    </Link>
  );
}
