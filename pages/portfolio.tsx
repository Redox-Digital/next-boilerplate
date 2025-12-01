import { TextHero } from '@/components/layouts/Hero';
import css from './Portfolio.module.scss';
import GalleryAPI from '@/components/layouts/galleries/GalleryAPI';
export default function Portfolio() {
  return (
    <>
      <TextHero title={"Galerie d'images"} half />

      <main>
        <GalleryAPI
          title={'Galerie'}
          apiUrl={
            'https://cms.pittetfreres.ch/items/Services/menuiserie?fields=gallery.*, gallery.directus_files_id.*'
          }
        />
      </main>
    </>
  );
}
