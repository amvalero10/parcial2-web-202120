import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { IntlProvider } from "react-intl";


import locale_Es from "./locales/es-co.json"
import locale_En from "./locales/en-us.json"


//var lang = 'en'
var lang = navigator.language.substring(0,2)
var localM;

lang === "es"? localM=locale_Es  : localM=locale_En;


ReactDOM.render(

  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>,
  // document.getElementById('root')

<IntlProvider locale={lang} messages={localM}>
  <BrowserRouter>

  <App/> 
  
  </BrowserRouter>

</IntlProvider>, document.getElementById("root")


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
