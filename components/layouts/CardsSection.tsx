import { CardType, ActionType } from '@/types/Types';
import css from './CardsSection.module.scss';
import Image from 'next/image';
import Button from '../navigation/Button';

type Props = {
  title: string;
  description?: string;
  cards: CardType[];
  action?: ActionType;
  hideDesc?: boolean;
  hideAction?: boolean;
};

export default function CardsSection({
  title,
  description,
  cards,
  action,
  hideDesc,
  hideAction,
}: Props) {
  return (
    <section className={`${css.section}`}>
      <div className="container">
        <div className={css.header}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <ul className={css.grid}>
          {cards.map((card) => (
            <li key={card.title}>
              <SimpleCard
                title={card.title}
                picto={card.picto}
                description={hideDesc ? '' : card.description}
                action={hideAction ? undefined : card.action}
              />
            </li>
          ))}
        </ul>
        {action && (
          <Button href={action.href} secondary={action.secondary}>
            {action.label}
          </Button>
        )}
      </div>
    </section>
  );
}

function SimpleCard({ title, description, picto, action }: CardType) {
  return (
    <article className={css.card}>
      {picto && <Image src={picto} alt="" width={50} height={50} />}
      <h5>{title}</h5>
      {description && <small>{description}</small>}
      {action && (
        <Button href={action.href} small secondary={action.secondary}>
          {action.label}
        </Button>
      )}
    </article>
  );
}
