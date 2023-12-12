// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
