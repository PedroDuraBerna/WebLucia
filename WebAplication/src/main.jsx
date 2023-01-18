import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './MainApp';
import './styles.css';
import { AppTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </AppTheme>
  </React.StrictMode>,
)
