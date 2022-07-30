import React, { useState } from 'react';
import { useGetData } from '../../../hooks/useGetData';
import { ErrorHandler } from '../../errorHandler/ErrorHandler';
import { Footer } from '../../footer/Footer';

export const PhotosView: React.FC<{}> = () => {
  const [page, setPage] = useState(0);
  const { data, error } = useGetData(page);

  return (
    <>
      {!error ? (
        data!.photos.map((photo, index) => (
          <img
            key={index}
            alt={photo.previewId}
            src={`${photo.previewUrl}.${photo.type}`}
            style={{ width: photo.width, height: photo.height }}
          />
        ))
      ) : (
        <ErrorHandler />
      )}
      <Footer />
    </>
  );
};
