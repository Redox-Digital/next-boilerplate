import Button from '../navigation/Button';
import css from './CTA.module.scss';
import btnCSS from '../navigation/Button.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ActionType } from '@/types/Types';

type CTAProps = {
  title: string;
  description?: string;
  backgroundImageUrl?: string;
  overlayOpacity?: number;
  action?: ActionType;
};

interface RichCTAProps extends CTAProps {
  overlayGradient?: boolean;
  subElement?: boolean;
}

export default function RichCTA({
  title,
  description,
  overlayOpacity = 0.5,
  overlayGradient,
  backgroundImageUrl,
  action,
  subElement,
}: RichCTAProps) {
  return (
    <section
      className={`${css.cta} ${css.richCTA} ${subElement && css.subElement}`}
      style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : '' }}
    >
      <div
        className={`${css.overlay} ${overlayGradient && css.gradient}`}
        style={{ opacity: overlayOpacity }}
      />
      <div className="container">
        <h3>{title}</h3>
        <p>{description}</p>
        {action &&
          (!subElement ? (
            <Button secondary={action.secondary} href={action.href}>
              {action.label}
            </Button>
          ) : (
            <span className={`${btnCSS.btn} ${action.secondary && btnCSS.secondary}`}>
              {action.label}
            </span>
          ))}
      </div>
    </section>
  );
}

type MultiCTAProps = {
  cards: CTAProps[];
};

export function MultiCTA({ cards }: MultiCTAProps) {
  return (
    <section className={`${css.multiCTA}`}>
      {cards.map((card, i) => (
        <Link key={i} href={card.action?.href || '#'}>
          <RichCTA
            title={card.title}
            description={card.description}
            action={card.action}
            overlayOpacity={0.5}
            backgroundImageUrl={card.backgroundImageUrl}
            subElement
          />
        </Link>
      ))}
    </section>
  );
}

interface BannerCTAProps extends CTAProps {
  pictoUrl?: string;
}

export function BannerCTA({
  title,
  backgroundImageUrl,
  pictoUrl,
  action,
  overlayOpacity = 1,
}: BannerCTAProps) {
  return (
    <section
      className={`${css.cta} ${css.bannerCTA}`}
      style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : '' }}
    >
      <div className={css.overlay} style={{ opacity: overlayOpacity }} />
      <div className="container">
        {pictoUrl && <Image src={pictoUrl} alt="" width={100} height={50} />}
        <h4>{title}</h4>

        {action && (
          <Button href={action.href} secondary={action.secondary}>
            {action.label}
          </Button>
        )}
      </div>
    </section>
  );
}
