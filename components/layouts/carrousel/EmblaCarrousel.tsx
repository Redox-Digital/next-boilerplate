import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarrouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import css from './EmblaCarrousel.module.scss';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarrouselArrowButtons';

type CarrouselProps = {
  title: string;
  description?: string;
  options?: EmblaOptionsType;
  hideBtns?: boolean;
  hideDots?: boolean;
  children: React.ReactNode[];
};

export default function CarrouselSection({
  title,
  description,
  options,
  hideBtns,
  hideDots,
  children,
}: CarrouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className={css.embla}>
      <div className={css.head}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className={css.embla__viewport} ref={emblaRef}>
        <ul className={css.embla__container}>
          {children.map((elt, key) => (
            <li key={key} className={css.embla__slide}>
              {elt}
            </li>
          ))}
        </ul>
      </div>

      {hideBtns && hideDots ? (
        ''
      ) : (
        <div className={css.embla__controls}>
          {hideBtns || (
            <div className={css.embla__buttons}>
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
          )}
          {hideDots || (
            <div className={css.embla__dots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`${css.embla__dot}`.concat(
                    index === selectedIndex ? ` ${css.embla__dot__selected}` : ''
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
