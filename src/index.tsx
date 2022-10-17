import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import reportWebVitals from './reportWebVitals';
import appSettings from './appSettings.json';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    { appSettings.isUnderConstrucionEnabled ? <UnderConstruction /> : <App /> }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
