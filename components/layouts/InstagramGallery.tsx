import { Suspense, useEffect, useState } from 'react';
import InstagramImage from '../content/InstagramImage';
import { timestampToString } from '../helpers/DatesHelper';

type IgImage = {
  id: string;

  title: string;
  location?: string;
  description: string;
  source: string;
  mediaType: string;
};

type IgRawSource = {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  timestamp: string;
};

export default function InstagramGallery() {
  const [iGimagesApi, setIGImages] = useState<IgImage[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const galleryLength = iGimagesApi?.length || 0;
  const paginationStep = 9;

  const [pagination, setPagination] = useState<number>(paginationStep);

  // Form the request for sending data to the server.
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.igBearer || ''}`,
    },
  };

  const getIgFeed = () => {
    try {
      setLoading(true);
      // Fetching IG token
      fetch(`${process.env.api}/items/IgToken/1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.igBearer || ''}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.warn('Failed to get token');
          }
          return response.json();
        })
        .then((json) => json?.data?.token || '')
        .then((token) =>
          fetch(
            `https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,caption,timestamp&access_token=${token}`
          )
        )
        .then((response) => response.json())
        .then((json) => {
          setIGImages(
            json.data.map((elt: IgRawSource) => ({
              id: elt.id,
              title: timestampToString(elt.timestamp),
              description: elt.caption,
              source: elt.media_url,
              mediaType: elt.media_type,
            }))
          );
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.warn('Error: ', error);
    }
  };

  useEffect(() => {
    try {
      getIgFeed();
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  }, []);

  const displayedElts = iGimagesApi;

  return (
    <section>
      <h2>IG Gallery</h2>
      <div className="container">
        {isLoading && <p>Chargement des éléments</p>}
        {displayedElts &&
          displayedElts.map((img) => (
            <InstagramImage
              key={img.id}
              title={img.title}
              description={img.description}
              source={img.source}
            />
          ))}
      </div>
    </section>
  );
}
