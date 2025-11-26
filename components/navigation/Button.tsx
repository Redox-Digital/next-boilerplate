import Link from 'next/link';
import css from './Button.module.scss';
import Image from 'next/image';

type Props = {
  href?: string;
  secondary?: boolean;
  outline?: boolean;
  small?: boolean;
  dark?: boolean;
  className?: string;
  blank?: boolean;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: string | React.ReactNode;
};

export default function Button({
  href,
  children,
  secondary,
  outline,
  dark,
  small,
  className,
  blank,
  title,
  type = 'button',
  onClick,
}: Props) {
  return href ? (
    <Link
      href={href}
      className={`${css.btn} ${secondary && css.secondary} ${small && css.small} ${
        outline && css.outline
      } ${dark && css.dark} ${className}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
      title={title}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        dark && css.dark
      } ${className}`}
      onClick={onClick ? onClick : () => null}
      title={title}
    >
      {children}
    </button>
  );
}
