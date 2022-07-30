import React from 'react';
import { GetPhotosResponse } from '../../__dont_modify__/api/photos';
import { Footer } from '../footer/Footer';
import './DataResponse.scss';

export const DataResponse: React.FC<{
  data: GetPhotosResponse | null;
  page: number;
  incrementPage: () => void;
  decrementPage: () => void;
}> = ({ data, page, incrementPage, decrementPage }) => {
  return (
    <React.Fragment>
      <main style={{ textAlign: 'center' }}>
        {data!.photos.map((photo, index) => (
          <img
            key={index}
            alt={photo.previewId}
            src={`https://picsum.photos/id/${Math.floor(Math.random() * 200)}/200/200.${
              photo.type
            }`}
            className='photo'
          />
        ))}
      </main>
      {data!.photos.length > 0 && (
        <Footer
          page={page}
          incrementPage={incrementPage}
          totalPages={data!.total}
          decrementPage={decrementPage}
        />
      )}
    </React.Fragment>
  );
};
