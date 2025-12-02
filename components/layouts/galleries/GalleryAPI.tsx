import css from './Galleries.module.scss';
import btnCss from '@/components/navigation/Button.module.scss';
import { useEffect, useRef, useState } from 'react';
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
            <MasonryGallery
              media={mediaApi}
              viewer={viewer}
              breakpoints={{ default: 2, 900: 3, 1200: 4 }}
              toggleOverlay={toggleOverlay}
            />
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
            invertBtns={!masonry}
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
  breakpoints?: BreakpointsType;
  toggleOverlay: (file?: DirectusGalleryApiType) => void;
};

/**
 * No pagination for now
 */
function MasonryGallery({
  media,
  viewer,
  breakpoints = { default: 1, 500: 2, 900: 3, 1200: 4 },
  toggleOverlay,
}: MasonryGalleryProps) {
  // DEV : static value
  const columnCount = useResponsiveColumns(breakpoints);

  const columns = createMasonryColumns(media, columnCount);

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

export function createMasonryColumns(media: DirectusGalleryApiType[], colCount: number) {
  // Initialize N empty columns
  const columns: DirectusGalleryApiType[][] = Array.from({ length: colCount }, () => []);
  const columnHeights = Array(colCount).fill(0);

  for (const item of media) {
    // Find the column with the smallest accumulated height
    const targetColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));

    // Push this item into the "best" column
    columns[targetColumnIndex].push(item);

    // Increase that column’s height by the media height
    columnHeights[targetColumnIndex] += item.directus_files_id.height;
  }

  return columns;
}

type BreakpointsType = {
  [width: number]: number; // e.g. 1024: 3
} & {
  default: number;
};

function useResponsiveColumns(breakpoints: BreakpointsType, debounceDelay = 150) {
  const [columns, setColumns] = useState<number>(breakpoints.default);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR safety

    const handleResize = () => {
      // Clear any previous queued updates
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Debounce
      timeoutRef.current = setTimeout(() => {
        // Use RAF for smoothness
        window.requestAnimationFrame(() => {
          const width = window.innerWidth;

          let col = breakpoints.default;

          const sorted = Object.keys(breakpoints)
            .filter((bp) => bp !== 'default')
            .map(Number)
            .sort((a, b) => a - b);

          for (const bp of sorted) {
            if (width >= bp) col = breakpoints[bp];
          }

          setColumns(col);
        });
      }, debounceDelay);
    };

    // Run once on mount
    handleResize();

    // Listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [breakpoints, debounceDelay]);

  return columns;
}
