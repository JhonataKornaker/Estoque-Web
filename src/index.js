import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastrar from './componentes/cadastro';
import CadastroProvider from './context/Cadastro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'cadastrar',
    element: <Cadastrar/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CadastroProvider>
    <RouterProvider router={router} />
  </CadastroProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
