import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { SkeletonTheme } from "react-loading-skeleton";
import './styles/inputfield.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SkeletonTheme baseColor="#d9d9d9">
          <App />
      </SkeletonTheme>
  </React.StrictMode>
);   