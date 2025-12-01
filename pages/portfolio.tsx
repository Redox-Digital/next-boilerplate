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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi odio culpa ratione? Ipsam minima laudantium vitae laboriosam id alias dolorem, perferendis aperiam error sed iste voluptates accusantium necessitatibus dolorum!"
          apiUrl={
            'https://cms.pittetfreres.ch/items/Services/menuiserie?fields=gallery.*, gallery.directus_files_id.*'
          }
          viewer
          masonry
          pagination={9}
        />
      </main>
    </>
  );
}
