import SquareImageGallery from './GalleryImage';
import Image from 'next/image';
import css from './Galleries.module.scss';
import btnCss from '@/components/navigation/Button.module.scss';
import { useEffect, useState } from 'react';
import arrowDown from '/public/pictograms/arrow-down.svg';
import { DirectusFileType, DirectusGalleryApiType } from '@/types/Types';

type Props = {
  title: string;
  description?: string;
  viewer?: boolean;
  pagination?: number;
  apiUrl: string;
};

export default function SquareGallery({ title, description, viewer, pagination, apiUrl }: Props) {
  // ### GET MEDIA FROM API ###
  const [mediaApi, setMedia] = useState<DirectusGalleryApiType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

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
  // ### .GET MEDIA ###

  // ### PAGINATION ###
  const paginationStep = pagination || 0;
  const [nbDisplayedItem, setNbDisplayedItem] = useState<number>(paginationStep);

  // Work object (used for pagination), stored in reversed order (then re-reversed at display)
  // The gallery files must habe an `order` field.
  const displayedMedia = mediaApi.sort((a, b) => (a.order && b.order ? b.order - a.order : 0));

  const increasePagination = () => {
    setNbDisplayedItem(
      nbDisplayedItem + paginationStep < mediaApi.length
        ? nbDisplayedItem + paginationStep
        : mediaApi.length
    );
  };
  // ### .PAGINATION ###

  // ### IMAGE FULL-SIZE VIEWER ###
  const [fullImage, setFullImage] = useState<DirectusGalleryApiType>();
  const [arrayCursor, setArrayCursor] = useState<number>();

  const showOverlay = (file: DirectusGalleryApiType) => {
    setFullImage(file);
    console.log(file ? mediaApi.indexOf(file) : undefined);
  };

  const hideOverlay = () => {
    setFullImage(undefined);
    setArrayCursor(undefined);
  };

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

  const nextImg = () => {
    if (fullImage) {
      if (mediaApi.indexOf(fullImage) + 1 < mediaApi.length)
        setFullImage(mediaApi[mediaApi.indexOf(fullImage) + 1]);
      else setFullImage(mediaApi[0]);
    }
  };

  const prevImg = () => {
    if (fullImage) {
      if (mediaApi.indexOf(fullImage) - 1 < 0) setFullImage(mediaApi[mediaApi.length - 1]);
      else setFullImage(mediaApi[mediaApi.indexOf(fullImage) - 1]);
    }
  };

  useEffect(() => {
    arrayCursor !== undefined
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [arrayCursor]);

  return (
    <section className={`${css.gallery}`}>
      <div className="container">
        <div className={css.service__titles}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={css.gallery__images}>
          {isLoading && <p>Chargement de la galerie.</p>}
          {displayedMedia &&
            displayedMedia
              .map((media, key) => (
                <SquareImageGallery
                  key={media.directus_files_id.id}
                  order={media.order || key}
                  {...media.directus_files_id}
                  onClick={() => showOverlay(media)}
                />
              ))
              .slice(-1 * nbDisplayedItem)
              .reverse()}

          {!displayedMedia && (
            <p>Un problème est survenu. Impossible de charger les réalisations.</p>
          )}
        </div>

        {/* OVERLAY */}
        {fullImage !== undefined && (
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
                // DEV : static URL
                src={`https://cms.pittetfreres.ch/assets/${fullImage.directus_files_id.id}` || ''}
                alt={''}
                width={1500}
                height={1500}
              />

              <figcaption className={css.gallery__overlay__img}>
                {/* <small>{displayedMedia?.[realArrPos].description}</small> */}
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
        )}

        {nbDisplayedItem !== 0 && nbDisplayedItem < mediaApi.length ? (
          <button className={`${btnCss.btn} ${btnCss}`} type="button" onClick={increasePagination}>
            En voir plus
          </button>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
