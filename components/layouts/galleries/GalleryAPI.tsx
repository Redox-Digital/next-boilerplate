import ImageGallery from './GalleryImage';
import Image from 'next/image';
import css from './Galleries.module.scss';
import btn from '../navigation/Button.module.scss';
import { useEffect, useState } from 'react';
import arrowDown from '/public/pictograms/arrow-down.svg';
import { DirectusFileType, DirectusGalleryApiType } from '@/types/Types';

type Props = {
  title: string;
  description?: string;
  apiUrl: string;
};

export default function GalleryAPI({ title, description, apiUrl }: Props) {
  const [mediaApi, setMedia] = useState<DirectusGalleryApiType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const galleryLength = mediaApi?.length || 0;
  // const paginationStep = 9;

  // const [pagination, setPagination] = useState<number>(paginationStep);
  const [fullImageId, setFullImageId] = useState<number>();
  const [realArrPos, setRealArrPos] = useState<number>();

  useEffect(() => {
    try {
      setLoading(true);
      // Fetching all Gallery objects
      fetch(apiUrl)
        .then((res) => res.json())
        .then((media) => {
          setMedia(media.data.gallery);
        });
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  // const displayedRealisations = realisationsApi;
  /*
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
    */

  const showOverlay = (imgId: number) => {
    if (mediaApi) console.log(imgId);
    // setRealArrPos(mediaApi.findIndex((real) => real.id === imgId));
  };

  const hideOverlay = () => {
    setRealArrPos(undefined);
  };

  /*
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
*/
  return (
    <section className={`${css.gallery}`}>
      <div className="container">
        <div className={css.service__titles}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={css.gallery__images}>
          {isLoading && <p>Chargement de la galerie.</p>}
          {
            mediaApi &&
              mediaApi.map((media) => (
                <ImageGallery
                  key={media.directus_files_id.id}
                  order={media.order}
                  showImg={showOverlay}
                  {...media.directus_files_id}
                />
              ))
            // .slice(-1 * pagination)
          }

          {!mediaApi && <p>Un problème est survenu. Impossible de charger les réalisations.</p>}
        </div>

        {/* realArrPos !== undefined && (
          <div
            className={css.gallery__overlay}
            aria-hidden
            ref={(div) => div?.focus()}
            onKeyDown={(evt) => keyboardNavigation(evt)}
            tabIndex={-1}
          >
            <div className={css.gallery__overlay__drop} onClick={hideOverlay} />
            <figure className={css.image}>
              <i className="icon-spinner9" />

              <Image
                src={`${process.env.api}/assets/${displayedRealisations?.[realArrPos].image}` || ''}
                alt={''}
                width={1500}
                height={1500}
              />

              <figcaption className={css.gallery__overlay__img}>
                <small>{displayedRealisations?.[realArrPos].description}</small>
              </figcaption>
            </figure>
            <button type="button" onClick={hideOverlay} className={css.btn__close}>
              Fermer
            </button>

            <button type="button" onClick={prevImg} className={css.btn__next}>
              <Image src={arrowDown} alt={''}></Image>
            </button>

            <button type="button" onClick={nextImg} className={css.btn__prev}>
              <Image src={arrowDown} alt={''}></Image>
            </button>
          </div>
        ) */}

        {/* pagination < galleryLength && (
          <button
            className={`${btn.btn} ${btn.btn__secondary}`}
            type="button"
            onClick={increasePagination}
          >
            En voir plus
          </button>
        ) */}
      </div>
    </section>
  );
}
