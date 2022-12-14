import React from 'react';
import './ErrorHandler.scss';

export const ErrorHandler: React.FC<{}> = () => {
  setTimeout(() => window.open(window.location.href, '_self'), 3000);
  return (
    <div id='error-container'>
      <h1>Se ha producido un error</h1>
      <h3>Volviendo a cargar....</h3>
    </div>
  );
};
