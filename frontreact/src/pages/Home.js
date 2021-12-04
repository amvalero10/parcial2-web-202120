import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Card } from "../components/Card"

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    fetch("api/products/")
      .then((response) => response.json())
      //.then(response => setCentrosDisp(response.json()) )
      //.then( data => console.log(data) )
      .then((data) => setProducts(data));
  }, []);




  return (
    <section id='home'>
      <div className='home-container'>
<h1>
      <FormattedMessage id='gallery'/>
    </h1>



        <div className='home-card'>

  {products &&
          products.map((element) => (

            <Card
            name = {element.name}            
            picture = {element.picture}
            price = {element.price}
            isActive = {element.isActive}     

            />
          ))}


        </div>
      </div>
    </section>
  );
};
