import Link from 'next/link';
import style from './Button.module.scss';

type Props = {
  to: string;
  size?: undefined | 'small' | 'big';
  // type?: undefined | "submit";
  variation?: undefined | 'secondary' | 'black' | 'outline';
  icon?: undefined | string;
  addClass?: string;
  blank?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  children: string;
};

const getSize = (param: string | undefined) => {
  switch (param) {
    case 'small':
      return style.btn__small;

    case 'big':
      return style.btn__big;

    default:
      return '';
  }
};

const getVariation = (param: string | undefined) => {
  switch (param) {
    case 'secondary':
      return style.btn__secondary;

    case 'black':
      return style.btn__black;

    case 'outline':
      return style.btn__outline;

    default:
      return '';
  }
};

export default function Button({
  to,
  // type,
  size,
  children,
  icon,
  variation,
  addClass,
  blank,
  ariaLabel,
  onClick,
}: Props) {
  return (
    <Link
      href={to}
      className={`${style.btn} ${getSize(size)} ${getVariation(variation)} ${addClass}`}
      target={blank ? '_blank' : ''}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
      {icon ? <i className={icon}></i> : ''}
    </Link>
  );
}
