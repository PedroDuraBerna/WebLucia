import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './MainApp';
import './styles.css';
import { AppTheme } from './theme';
import { store } from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <AppTheme>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
