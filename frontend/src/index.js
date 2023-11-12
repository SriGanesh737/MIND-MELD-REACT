import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css';
import { Toaster, toast } from 'sonner'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Toaster  position="bottom-center" expand={true} richColors/>
    <App />
  </React.StrictMode>
);


