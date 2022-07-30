import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer id='pages'>
      <section className='pages-box'>Pag 1 de 100</section>
      <section className='pages-box'>
        <button className='pages-control'>Atrás</button>
        <button className='pages-control'>Siguiente</button>
      </section>
    </footer>
  );
};
