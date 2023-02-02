import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModeContextProvider } from "./useContext/ModeContext"
import { AuthContextProvider } from './useContext/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ModeContextProvider>
  </React.StrictMode>
);
