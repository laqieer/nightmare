import React from 'react';
import App from './App';
import ErrorPage from './components/ErrorPage';
import { HomeRoutes } from './components/HomePage/routes';
import { FE1Routes } from './components/Module/FE1/routes';
import { FE2Routes } from './components/Module/FE2/routes';
import { FE3Routes } from './components/Module/FE3/routes';
import { FE4Routes } from './components/Module/FE4/routes';
import { FE5Routes } from './components/Module/FE5/routes';
import { FE6Routes } from './components/Module/FE6/routes';
import { FE7Routes } from './components/Module/FE7/routes';
import { FE8Routes } from './components/Module/FE8/routes';
import { FE10Routes } from './components/Module/FE10/routes';
import { FE11Routes } from './components/Module/FE11/routes';
import { FE12Routes } from './components/Module/FE12/routes';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      HomeRoutes,
      FE1Routes,
      FE2Routes,
      FE3Routes,
      FE4Routes,
      FE5Routes,
      FE6Routes,
      FE7Routes,
      FE8Routes,
      FE10Routes,
      FE11Routes,
      FE12Routes,
    ],
  },
];

export default routes;
