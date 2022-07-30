import React from 'react';
import { PhotosView } from '../photosView/PhotosView';
import './ErrorHandler.scss';

export const ErrorHandler: React.FC<{}> = () => {
  return (
    <div id='error-container'>
      <h1>Se ha producido un error</h1>
      <h3>Volviendo a cargar....</h3>
    </div>
  );
};
