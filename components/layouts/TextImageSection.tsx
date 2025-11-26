import Image from 'next/image';
import css from './TextImageSection.module.scss';

type Props = {
  id?: string;
  title: string;
  surtitle?: string;
  children: string | JSX.Element;
  imgPath: string;
  imgFirstMobile?: boolean;
  imgLastDesktop?: boolean;
};

export default function TextImageSection({
  id,
  title,
  surtitle,
  children,
  imgLastDesktop,
  imgFirstMobile,
  imgPath,
}: Props) {
  return (
    <section className={css.txtImgSection} id={id || ''}>
      <div
        className={`container ${imgLastDesktop && css.invertedDesktop} ${
          imgFirstMobile && css.invertedMobile
        }`}
      >
        <Image className={css.image} src={imgPath} alt={''} width={1000} height={1000} />
        <div className={css.content}>
          {surtitle && <p className={css.surtitle}>{surtitle}</p>}
          <h2>{title}</h2>
          <div className={css.texts}>{children}</div>
        </div>
      </div>
    </section>
  );
}
