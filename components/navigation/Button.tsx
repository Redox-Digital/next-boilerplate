import Link from 'next/link';
import css from './Button.module.scss';
import Image from 'next/image';

type Props = {
  href?: string;
  outline?: boolean;
  small?: boolean;
  darkBg?: boolean;
  title?: string;
  className?: string;
  blank?: boolean;
  onClick?: () => void;
  children?: string | React.ReactNode;
};

export default function Button({
  href,
  children,
  outline,
  darkBg,
  className,
  blank,
  title,
  small,
  onClick,
}: Props) {
  return href ? (
    <Link
      href={href}
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${className}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
      title={title}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={`${css.btn} ${small && css.small} ${outline && css.outline} ${
        darkBg && css.darkBg
      } ${className}`}
      onClick={onClick ? onClick : () => null}
      title={title}
    >
      {children}
    </button>
  );
}
