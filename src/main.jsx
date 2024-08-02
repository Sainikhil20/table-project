// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Updated import path
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
