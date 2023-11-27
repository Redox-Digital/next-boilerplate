import Link from 'next/link';

export default function Socials() {
  return (
    <>
      <Link
        href={process.env.ig || '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accéder à notre compte Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link
        href={process.env.fb || '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accéder à notre page Facebook"
      >
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link
        href={process.env.in || '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accéder à notre page LinkedIn"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
    </>
  );
}
