import ImageGallery from '../content/ImageGallery';
import Image from 'next/image';
import style from './GalleryAPI.module.scss';
import btn from '../navigation/Button.module.scss';
import { Suspense, useEffect, useState } from 'react';
import arrowDown from '/public/pictograms/arrow-down.svg';

type Realisation = {
  id: number;
  description: string;
  image: string;
  category: 'individual' | 'collectivity' | 'enterprise';
};

type Props = {
  surtitle: string;
  title: string;
  slug: 'particuliers' | 'collectivites' | 'entreprises';
};

export default function GalleryAPI({ title, surtitle, slug }: Props) {
  const [realisationsApi, setRealisations] = useState<Realisation[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const galleryLength = realisationsApi?.length || 0;
  const paginationStep = 9;

  const [pagination, setPagination] = useState<number>(paginationStep);
  const [fullImageId, setFullImageId] = useState<number>();
  const [realArrPos, setRealArrPos] = useState<number>();

  useEffect(() => {
    try {
      setLoading(true);
      // Fetching all Gallery objects
      fetch(`${process.env.api}/gallery`)
        .then((res) => res.json())
        .then((realisations) => {
          setRealisations(realisations.data);
          setLoading(false);
        });
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  }, [slug]);

  const displayedRealisations = realisationsApi;

  const keyboardNavigation = (evt: React.KeyboardEvent) => {
    switch (evt.key) {
      case 'Escape':
        hideOverlay();
        break;

      case 'ArrowRight':
        prevImg();
        break;

      case 'ArrowLeft':
        nextImg();
        break;

      default:
        break;
    }
  };

  const increasePagination = () => {
    setPagination(
      pagination + paginationStep <= galleryLength ? pagination + paginationStep : galleryLength
    );
  };

  const showOverlay = (imgId: number) => {
    if (displayedRealisations)
      setRealArrPos(displayedRealisations.findIndex((real) => real.id === imgId));
  };

  const hideOverlay = () => {
    setRealArrPos(undefined);
  };

  const nextImg = () => {
    // setFullImageId(realisation.nextId);
    if (realArrPos !== undefined && realArrPos >= galleryLength - 1) {
      setRealArrPos(0);
    } else if (realArrPos !== undefined) {
      setRealArrPos(realArrPos + 1);
    }
  };

  const prevImg = () => {
    if (realArrPos !== undefined && realArrPos <= 0) {
      setRealArrPos(galleryLength - 1);
    } else if (realArrPos !== undefined) {
      setRealArrPos(realArrPos - 1);
    }
  };

  useEffect(() => {
    realArrPos !== undefined
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [realArrPos]);

  return (
    <section className={`${style.gallery} light`}>
      <div className="container">
        <div className={style.service__titles}>
          <h5>{surtitle}</h5>
          <h2>{title}</h2>
        </div>
        <div className={style.gallery__images}>
          {isLoading && <p>Chargement de la galerie.</p>}
          {displayedRealisations &&
            displayedRealisations
              .map((realisation) => (
                <ImageGallery
                  key={realisation.id}
                  id={realisation.id}
                  image={realisation.image}
                  description={realisation.description}
                  showImg={showOverlay}
                />
              ))
              .slice(-1 * pagination)
              .reverse()}

          {!displayedRealisations && (
            <p>Un problème est survenu. Impossible de charger les réalisations.</p>
          )}
        </div>

        {realArrPos !== undefined && (
          <div
            className={style.gallery__overlay}
            aria-hidden
            ref={(div) => div?.focus()}
            onKeyDown={(evt) => keyboardNavigation(evt)}
            tabIndex={-1}
          >
            <div className={style.gallery__overlay__drop} onClick={hideOverlay} />
            <figure className={style.image}>
              <i className="fa-solid fa-spinner" />

              <Image
                src={`${process.env.api}/assets/${displayedRealisations?.[realArrPos].image}` || ''}
                alt={''}
                width={1500}
                height={1500}
              />

              <figcaption className={style.gallery__overlay__img}>
                <small>{displayedRealisations?.[realArrPos].description}</small>
              </figcaption>
            </figure>
            <button type="button" onClick={hideOverlay} className={style.btn__close}>
              Fermer
            </button>

            <button type="button" onClick={prevImg} className={style.btn__next}>
              <Image src={arrowDown} alt={''}></Image>
            </button>

            <button type="button" onClick={nextImg} className={style.btn__prev}>
              <Image src={arrowDown} alt={''}></Image>
            </button>
          </div>
        )}

        {pagination < galleryLength && (
          <button
            className={`${btn.btn} ${btn.btn__secondary}`}
            type="button"
            onClick={increasePagination}
          >
            En voir plus
          </button>
        )}
      </div>
    </section>
  );
}
