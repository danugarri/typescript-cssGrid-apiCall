import React, { useState } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { DataResponse } from '../dataResponse/DataResponse';
import { ErrorHandler } from '../errorHandler/ErrorHandler';
import { Footer } from '../footer/Footer';

export const PhotosView: React.FC<{}> = () => {
  const [page, setPage] = useState(0);
  //   fecth handler
  const { data, error } = useGetData(page);
  //   Pages handlers
  const incrementPage = () => (page !== data!.total ? setPage(() => page + 1) : null);
  const decrementPage = () => (page !== 0 ? setPage(() => page - 1) : null);

  return (
    <>
      {!error ? (
        <React.Fragment>
          <DataResponse
            data={data}
            page={page}
            incrementPage={incrementPage}
            decrementPage={decrementPage}
          />
          {data!.photos.length > 0 && (
            <Footer
              page={page}
              incrementPage={incrementPage}
              totalPages={data!.total}
              decrementPage={decrementPage}
            />
          )}
        </React.Fragment>
      ) : (
        <ErrorHandler />
      )}
    </>
  );
};
