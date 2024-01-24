import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyContextProvider from './context/PropertyContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropertyContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </PropertyContextProvider>
  </React.StrictMode>
);