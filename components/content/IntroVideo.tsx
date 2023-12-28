export default function IntroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      aria-hidden
      controls={false}
      poster={`/layouts/hero-video-thumb.webp`}
    >
      <source src="/layouts/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
