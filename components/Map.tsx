import style from '@/styles/components/Map.module.scss';

type Props = {
  url: string;
};

export default function Map(props: Props) {
  const { url } = props;

  return (
    <>
      <iframe className={style.map} src={url} height="400" loading="lazy"></iframe>
    </>
  );
}
