import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { NotificationContextProvider } from "./contexts/NotificationContext"


ReactDOM.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

