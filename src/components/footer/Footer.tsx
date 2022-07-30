import React from 'react';
import { IPagesProps } from '../../types/pages';
import './Footer.scss';

export const Footer: React.FC<IPagesProps> = ({
  page,
  incrementPage,
  decrementPage,
  totalPages,
}) => {
  return (
    <footer id='pages'>
      <section className='pages-box'>{`Pag ${page + 1} de ${totalPages}`}</section>
      <section className='pages-box'>
        <button className='pages-control' onClick={decrementPage}>
          Atrás
        </button>
        <button className='pages-control' onClick={incrementPage}>
          Siguiente
        </button>
      </section>
    </footer>
  );
};
