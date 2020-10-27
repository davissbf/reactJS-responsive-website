import React from 'react';
import '../../App.css';
import ProductsCards from '../PorductsCards';

export default function Products() {
  return (
    <section className='Main'>
      <div>
        <h1 className='products'>Conheça mais minhas habilidades</h1>
      </div>
      <div>
       <ProductsCards />
      </div>
    </section>
  )
};
