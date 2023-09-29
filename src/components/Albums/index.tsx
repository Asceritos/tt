import { getUserAlbums } from '../../api';
import React from 'react';
import BackButton from '../../elements/BackButton';
import { Spinner } from '../../elements/Spinner';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IAlbum } from '../../types/interfaces/Album';
import './styles.scss';

const Albums: FC = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    getUserAlbums(Number(userId))
      .then(loadedAlbums => {
        setAlbums(loadedAlbums);
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="albums__page">
      <BackButton />
      <div className="albums__content">
        <h1 className="title">Albums:</h1>
        {!albums.length && (
          <Spinner />
        )}
        {albums && albums.map(allbum => (
          <div
            key={allbum.id}
            className="albums__item"
          >
            <Link
              to={`/users/${userId}/albums/${allbum.id}`}
              className="link"
            >
              <p className='subtitle'>{`${allbum.id} - ${allbum.title}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;