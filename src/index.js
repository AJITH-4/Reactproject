import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css';

export const API_URL="https://6488626b0e2469c038fd9cd1.mockapi.io/blog";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={2000}/>
  </React.StrictMode>
);

