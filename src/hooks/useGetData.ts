import React, { useState } from 'react';
import { useEffect } from 'react';
import { photosApi } from '../__dont_modify__/api/photos';
import { GetPhotosResponse } from '../__dont_modify__/api/photos';

export const useGetData: (page: number) => GetPhotosResponse[] = (page = 0) => {
  const { getPhotos } = photosApi;
  const [data, setData] = useState<GetPhotosResponse>({
    hasMore: true,
    page: 0,
    photos: [],
    total: 100,
  });

  useEffect(() => {
    let fetch = true;
    if (fetch)
      getPhotos({ page }).then(response => {
        console.log(response);
        setData(response);
      });
    //   celan up
    return () => {
      fetch = false;
    };
  }, [page]);

  return [data];
};
