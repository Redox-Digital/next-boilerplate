import css from './ContactCTA.module.scss';

type ContactCTAProps = {
  title: string;
  description: string;
  overlayOpacity?: number;
  overlayGradient?: boolean;
  backgroundImageUrl?: string;
  children?: React.ReactNode;
};

export default function ContactCTA({
  title,
  description,
  overlayOpacity,
  overlayGradient,
  backgroundImageUrl,
  children,
}: ContactCTAProps) {
  return (
    <section
      className={`${css.contactCTA}`}
      style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : '' }}
    >
      <div
        className={`${css.overlay} ${overlayGradient && css.gradient}`}
        style={{ opacity: overlayOpacity }}
      />
      <div className={css.container}>
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}

export function MultiCTA() {}
