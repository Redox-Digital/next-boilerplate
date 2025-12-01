import css from './Galleries.module.scss';
import btnCss from '@/components/navigation/Button.module.scss';
import { useEffect, useState } from 'react';
import { DirectusGalleryApiType } from '@/types/Types';
import Overlay from './GalleryOverlay';
import Image from 'next/image';
import SquareImage, { MasonryImage } from './GalleryImage';

type Props = {
  title: string;
  description?: string;
  masonry?: boolean;
  viewer?: boolean;
  pagination?: number;
  apiUrl: string;
};

export default function Gallery({
  title,
  description,
  masonry,
  viewer,
  pagination,
  apiUrl,
}: Props) {
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

  // ### IMAGE FULL-SIZE VIEWER ###
  const [fullImage, setFullImage] = useState<DirectusGalleryApiType>();
  const toggleOverlay = (file?: DirectusGalleryApiType) => setFullImage(file);

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
    fullImage !== undefined
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [fullImage]);

  return (
    <section className={`${css.gallery}`}>
      <div className="container">
        <div className={css.titles}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {isLoading && <p>Chargement de la galerie.</p>}
        {mediaApi &&
          (masonry ? (
            <MasonryGallery media={mediaApi} viewer={viewer} toggleOverlay={toggleOverlay} />
          ) : (
            <SquareGallery
              media={mediaApi}
              toggleOverlay={toggleOverlay}
              viewer={viewer}
              pagination={pagination}
            />
          ))}

        {!mediaApi && <p>Un problème est survenu. Impossible de charger les réalisations.</p>}

        {/* OVERLAY */}
        {fullImage && viewer ? (
          <Overlay
            fullImage={fullImage}
            toggleOverlay={toggleOverlay}
            prevImg={prevImg}
            nextImg={nextImg}
          />
        ) : (
          ''
        )}
        {/* .OVERLAY */}
      </div>
    </section>
  );
}

type SquareGalleryProps = {
  media: DirectusGalleryApiType[];
  viewer?: boolean;
  pagination?: number;
  toggleOverlay: (file?: DirectusGalleryApiType) => void;
};

function SquareGallery({ media, viewer, pagination = 0, toggleOverlay }: SquareGalleryProps) {
  const displayedMedia = media.sort((a, b) => (a.order && b.order ? b.order - a.order : 0));
  const [nbDisplayedItem, setNbDisplayedItem] = useState<number>(pagination);

  const increasePagination = () => {
    setNbDisplayedItem(
      nbDisplayedItem + pagination < media.length ? nbDisplayedItem + pagination : media.length
    );
  };

  return (
    <>
      <div className={css.galleryImages}>
        {displayedMedia &&
          displayedMedia
            .map((medium) => (
              <SquareImage
                key={medium.directus_files_id.id}
                src={`https://cms.pittetfreres.ch/assets/${medium.directus_files_id.id}?width=500&height=500&fit=cover`}
                {...medium.directus_files_id}
                onClick={() => toggleOverlay(medium)}
                viewer={viewer}
              />
            ))
            .slice(-1 * nbDisplayedItem)
            .reverse()}
      </div>
      {nbDisplayedItem !== 0 && nbDisplayedItem < media.length ? (
        <button className={`${btnCss.btn}`} type="button" onClick={increasePagination}>
          En voir plus
        </button>
      ) : (
        ''
      )}
    </>
  );
}

type MasonryGalleryProps = {
  media: DirectusGalleryApiType[];
  viewer?: boolean;
  toggleOverlay: (file?: DirectusGalleryApiType) => void;
};

/**
 * No pagination for now
 */
function MasonryGallery({ media, viewer, toggleOverlay }: MasonryGalleryProps) {
  // DEV : static value
  const colNb = 3;

  // Initialize N empty columns
  const columns: DirectusGalleryApiType[][] = Array.from({ length: colNb }, () => []);
  const columnHeights = Array(colNb).fill(0);

  for (const medium of media) {
    // Find the column with the smallest accumulated height,
    // add the next item into the "best" column
    const targetColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[targetColumnIndex].push(medium);

    // Increase that column’s height by the media height
    columnHeights[targetColumnIndex] += medium.directus_files_id.height;
  }
  console.log(columns);

  return (
    <div className={css.masonryGrid}>
      {columns.map((col, colIndex) => (
        <div key={colIndex} className={css.masonryCol}>
          {col.map((medium) => (
            <MasonryImage
              key={medium.id}
              src={`https://cms.pittetfreres.ch/assets/${medium.directus_files_id.id}?width=500`}
              {...medium.directus_files_id}
              onClick={() => toggleOverlay(medium)}
              viewer={viewer}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
