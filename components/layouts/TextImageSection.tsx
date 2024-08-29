import Image from 'next/image';
import style from './TextImageSection.module.scss';
import logo from '/public/logos/logoipsum.svg';

type Props = {
  title: string;
  children: string | JSX.Element;
  imgPath: string;
  dark?: boolean;
};

export default function TextImageSection({ title, children, dark, imgPath }: Props) {
  return (
    <section className={`${style.txtImgSection} ${dark ? 'dark' : ''}`}>
      <div className="container">
        <Image
          className={style.txtImgSection__image}
          src={imgPath}
          alt={''}
          width={1000}
          height={1000}
        />
        <div className={style.txtImgSection__content}>
          {title === 'logo' ? (
            <Image src={logo} alt={''} width="900" height="300" />
          ) : (
            <h2 className={`all-caps`}>{title}</h2>
          )}
          <div className={style.txtImgSection__texts}>{children}</div>
        </div>
      </div>
    </section>
  );
}
