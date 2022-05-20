import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCsO9ZtR486hZJ2GY_HjLsJm3GaKNvBXww",
  authDomain: "ecommerce-coder-tiendaexel.firebaseapp.com",
  projectId: "ecommerce-coder-tiendaexel",
  storageBucket: "ecommerce-coder-tiendaexel.appspot.com",
  messagingSenderId: "31937901530",
  appId: "1:31937901530:web:93e5bfde64202df14886e3",
  measurementId: "G-ZLNMVMX10D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
