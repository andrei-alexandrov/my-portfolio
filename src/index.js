import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ThemeProvider } from './Contex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);


