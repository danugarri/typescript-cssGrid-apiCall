import React, { useState } from 'react';
import { useEffect } from 'react';
import { photosApi } from '../__dont_modify__/api/photos';
import { GetPhotosResponse } from '../__dont_modify__/api/photos';

export interface IGetDataResponse {
  data: GetPhotosResponse | null;
  error: boolean;
}
export const useGetData: (page: number) => IGetDataResponse = (page = 0) => {
  const { getPhotos } = photosApi;
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<GetPhotosResponse | null>({
    hasMore: true,
    page: 0,
    photos: [],
    total: 100,
  });

  useEffect(() => {
    let mounted = true;
    getPhotos({ page })
      .then(response => {
        if (mounted) {
          console.log(response);
          setData(response);
          setError(false);
        }
      })
      .catch(e => {
        console.log(e);
        setData(null);
        setError(true);
      });
    //   clean up function
    return function cleanup() {
      mounted = false;
    };
  }, [page]);
  return { data, error };
};
