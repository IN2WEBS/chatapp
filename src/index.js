import React from 'react';
import ReactDOM from 'react-dom';
import StorageProvider from './context/StorageProvider';
import App from './App';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <StorageProvider>
      <App />
    </StorageProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
