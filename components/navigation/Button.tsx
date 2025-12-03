import Link from 'next/link';
import css from './Button.module.scss';

type Props = {
  href?: string;
  secondary?: boolean;
  outline?: boolean;
  small?: boolean;
  className?: string;
  blank?: boolean;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  onClick?: () => void;
  children?: string | React.ReactNode;
};

export default function Button({
  href,
  children,
  secondary,
  outline,
  small,
  className,
  blank,
  title,
  type = 'button',
  tabIndex,
  onClick,
}: Props) {
  return href ? (
    <Link
      href={href}
      className={`${css.btn} ${secondary && css.secondary} ${small && css.small} ${
        outline && css.outline
      } ${className}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
      title={title}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={`${css.btn} ${small && css.small} ${outline && css.outline}
       ${className}`}
      onClick={onClick ? onClick : () => null}
      title={title}
    >
      {children}
    </button>
  );
}
