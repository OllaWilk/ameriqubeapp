import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RegionProvider } from './context/RegionContext';
import './i18n/i18n';
import './styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RegionProvider>
      <App />
    </RegionProvider>
  </React.StrictMode>
);

reportWebVitals();
