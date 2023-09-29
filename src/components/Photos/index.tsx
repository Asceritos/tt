import { getAllbumPhotos } from '../../api';
import React from 'react';
import BackButton from '../../elements/BackButton';
import { Spinner } from '../../elements/Spinner';
import { FC, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { IPhoto } from '../../types/interfaces/Photo';
import './styles.scss';

interface ISelectedPhoto {
  id: number;
  photoUrl: string;
}

const Photos: FC = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  console.log('params', params);
  console.log('searchParams', searchParams);

  useEffect(() => {
    getAllbumPhotos(Number(params.albumId))
      .then(loadedAlbums => {
        setPhotos(loadedAlbums);
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="photos">
      <BackButton isDouble={false} />
      <div className="photos__content">
        <h1 className="title">Photos:</h1>
        <div className="photos__list">
          {!photos.length && (
            <Spinner />
          )}
          {photos && photos.map(photo => (
            <div key={photo.id} className="photos__item photo-item">
              <img
                alt={photo.title}
                src={photo.thumbnailUrl}
                className={`photo-item__img`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;