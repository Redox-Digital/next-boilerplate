import { ReviewType } from '@/constants/projectSpecifics';
import css from './ReviewBlock.module.scss';

export default function ReviewBlock({ name, text, maxScore, score }: ReviewType) {
  let scoreBuilder: React.ReactNode[] = [];

  for (let i = 0; i < maxScore; i++) {
    scoreBuilder.push(<span className={i < score ? css.marked : ''}>★</span>);
  }

  return (
    <article className={css.review}>
      <div className={css.score}>{scoreBuilder}</div>
      <p>{name}</p>
      {text && <small>{text}</small>}
    </article>
  );
}
