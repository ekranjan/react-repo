import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './components/products/ProductList';
import Overlay from './utilities/Overlay';

ReactDOM.render(
  <React.StrictMode>
   <><Overlay /> <App /></>
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);
