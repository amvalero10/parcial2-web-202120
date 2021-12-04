import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart'

export const Report = () => {
  // const [products, setProducts] = useState([]);


  return (
    <section id='report'>
      <div className='report-container'>

        <h1>Unidades en inventario</h1>

        <Chart/>


      </div>
    

    </section>

  );


};
