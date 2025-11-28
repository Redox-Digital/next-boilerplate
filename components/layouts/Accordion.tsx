import css from './Accordion.module.scss';
import { useState } from 'react';
import { AccordionEltType } from '@/types/Types';

type Props = {
  title?: string;
  description?: string;
  elts: AccordionEltType[];
};

export default function AccordionSection({ title, description, elts }: Props) {
  return (
    <section className={css.accordionSection}>
      <div className="container">
        {title || description ? (
          <div className={css.head}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ) : (
          ''
        )}
        <div className={css.accordionList}>
          {elts.map((elt) => (
            <AccordionElt key={elt.id} {...elt} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionElt({ id, title, body, initOpen }: AccordionEltType) {
  const [open, setOpen] = useState<boolean>(initOpen || false);

  const toggleAccordion = () => {
    setOpen(!open);
    window.dispatchEvent(new Event('resize'));
  };
  return (
    <article id={id} className={`${css.accordion} ${open || css.closed}`}>
      <label htmlFor={`header-${id}`} className={css.header}>
        <div className={css.titles}>
          <h4>{title}</h4>
          <input
            className={css.toggle}
            type="checkbox"
            id={`header-${id}`}
            name={`header-${id}`}
            onChange={toggleAccordion}
          />
          <div className={`${css.icon} ${open && css.open}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </label>
      <div className={`${css.accordion__body} ${open || css.accordion__body__closed}`}>{body}</div>
    </article>
  );
}
