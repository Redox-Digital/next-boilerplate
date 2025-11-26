import css from './IntroVideo.module.scss';

type Props = {
  className?: string;
  poster: string;
  mobile?: boolean;
  videos: { url: string; type: 'mp4' | 'webm' | 'mov' }[];
};

export default function IntroVideo({ videos, mobile, poster, className }: Props) {
  if (videos.length === 0) return null;

  return (
    <video
      autoPlay
      playsInline
      muted
      loop
      aria-hidden
      poster={poster}
      className={`${css.video} ${mobile ? css.mobile : css.desktop} ${className}`}
    >
      {videos.map((u, index) => (
        <source key={index} src={u.url} type={`video/${u.type}`} />
      ))}
    </video>
  );
}
