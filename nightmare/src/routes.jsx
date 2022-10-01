import React from 'react';
import App from './App';
import ErrorPage from './components/ErrorPage';
import { HomeRoutes } from './components/HomePage/routes';
import { FE6Routes } from './components/Module/FE6/routes';
import { FE7Routes } from './components/Module/FE7/routes';
import { FE8Routes } from './components/Module/FE8/routes';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      HomeRoutes,
      FE6Routes,
      FE7Routes,
      FE8Routes,
    ],
  },
];

export default routes;
