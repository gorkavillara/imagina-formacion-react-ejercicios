import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css';
import Home from './components/Home';
import Contacto from './components/Contacto';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contacto',
    element: <Contacto />
  }
]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
