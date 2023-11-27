import Image from 'next/image';
import style from '@/styles/components/TextImageSection.module.scss';
import logo from '/public/logos/logoipsum.svg';

type Props = {
  title: string;
  surtitle: string;
  children: string | JSX.Element;
  imgPath: string;
  light?: boolean;
};

export default function TextImageSection({ title, surtitle, children, light, imgPath }: Props) {
  return (
    <section className={`${style.txtImgSection} ${light ? 'light' : ''}`}>
      <div className="container">
        <div className={style.txtImgSection__surtitle}>
          <h5 className={light ? 'color-dark' : ''}>{surtitle}</h5>
        </div>
        <div
          className={style.txtImgSection__image}
          style={{ backgroundImage: `url(${imgPath})` }}
        ></div>
        <div className={style.txtImgSection__content}>
          <h5 className={light ? 'color-dark' : ''}>{surtitle}</h5>
          {title === 'logo' ? (
            <Image src={logo} alt={''} width="900" height="300" />
          ) : (
            <h2 className={`all-caps ${light ? 'color-primary' : ''}`}>{title}</h2>
          )}
          <div className={style.txtImgSection__texts}>{children}</div>
        </div>
      </div>
    </section>
  );
}
