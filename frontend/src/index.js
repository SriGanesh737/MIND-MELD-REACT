import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css';
import { Provider } from 'react-redux';
import { Toaster, toast } from 'sonner'
import store from './store/index.js';
import { AuthProvider } from './providers/authProvider.js';
import UserProvider from './providers/UserProvider.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Toaster  position="bottom-center" expand={true} richColors/>
    <Provider store={store}>
    <AuthProvider>
    <UserProvider>
    <App />
    </UserProvider> 
    </AuthProvider>
    </Provider>
  </React.StrictMode>
);


