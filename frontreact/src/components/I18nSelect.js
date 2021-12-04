import React from 'react';
import { LOCALES } from '../i18n/locales';


export const I18nSelect = () => {



const optionsState= ()=>{
  console.log('cambiar idioma')
}



  return(
    <div>
  <button onClick={ ()=> optionsState()} >
    es/en
  </button>
    </div>

  ) 
};
