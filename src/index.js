import React, {StrictMode} from 'react';
import './styles/globals.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode>
  <App />
</StrictMode>);

reportWebVitals();
