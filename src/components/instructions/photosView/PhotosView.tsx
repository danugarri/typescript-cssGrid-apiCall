import React, { useState } from 'react';
import { useGetData } from '../../../hooks/useGetData';

export const PhotosView: React.FC<{}> = () => {
  const [page, setPage] = useState(0);
  const [data] = useGetData(page);

  return (
    <>
      {data.photos.map((photo, index) => (
        <img
          key={index}
          alt={photo.previewId}
          src={`${photo.previewUrl}.${photo.type}`}
          style={{ width: photo.width, height: photo.height }}
        />
      ))}
    </>
  );
};
