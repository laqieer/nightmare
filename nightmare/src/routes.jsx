import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import App from './App';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import FE6 from './components/Module/FE6';
import FE7 from './components/Module/FE7';
import FE6HomePage from './components/Module/FE6/HomePage';
import FE7HomePage from './components/Module/FE7/HomePage';

export const loading = <Spin tip="Loading..." />;

const FE6CharacterEditor = lazy(() => import('./components/Module/FE6/FE6CharacterEditor'));
const FE6ClassEditor = lazy(() => import('./components/Module/FE6/FE6ClassEditor'));
const FE7AnimationPointerTableEditor = lazy(() => import('./components/Module/FE7/AnimationPointerTableEditor'));
const FE7AnimationReference = lazy(() => import('./components/Module/FE7/AnimationReference'));
const FE7BattleAnimationEditor = lazy(() => import('./components/Module/FE7/BattleAnimationEditor'));
const FE7CopyofCustomBattleAnimationEditor = lazy(() => import('./components/Module/FE7/CopyofCustomBattleAnimationEditor'));
const FE7CustomBattleAnimationEditor = lazy(() => import('./components/Module/FE7/CustomBattleAnimationEditor'));
const FE7CustomItemAnimationList = lazy(() => import('./components/Module/FE7/CustomItemAnimationList'));
const FE7BattlePaletteReference = lazy(() => import('./components/Module/FE7/FE7BattlePaletteReference'));

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'FE6',
        element: <FE6 />,
        children: [
          {
            path: '',
            element: <FE6HomePage />,
          },
          {
            path: 'CharacterEditor',
            element: <Suspense fallback={loading}><FE6CharacterEditor /></Suspense>,
          },
          {
            path: 'ClassEditor',
            element: <Suspense fallback={loading}><FE6ClassEditor /></Suspense>,
          },
        ],
      },
      {
        path: 'FE7',
        element: <FE7 />,
        children: [
          {
            path: '',
            element: <FE7HomePage />,
          },
          {
            path: 'AnimationPointerTableEditor',
            element: <Suspense fallback={loading}><FE7AnimationPointerTableEditor /></Suspense>,
          },
          {
            path: 'AnimationReference',
            element: <Suspense fallback={loading}><FE7AnimationReference /></Suspense>,
          },
          {
            path: 'BattleAnimationEditor',
            element: <Suspense fallback={loading}><FE7BattleAnimationEditor /></Suspense>,
          },
          {
            path: 'CopyofCustomBattleAnimationEditor',
            element:
  <Suspense fallback={loading}>
    <FE7CopyofCustomBattleAnimationEditor />
  </Suspense>,
          },
          {
            path: 'CustomBattleAnimationEditor',
            element: <Suspense fallback={loading}><FE7CustomBattleAnimationEditor /></Suspense>,
          },
          {
            path: 'CustomItemAnimationList',
            element: <Suspense fallback={loading}><FE7CustomItemAnimationList /></Suspense>,
          },
          {
            path: 'BattlePaletteReference',
            element: <Suspense fallback={loading}><FE7BattlePaletteReference /></Suspense>,
          },
        ],
      },
    ],
  },
];

export default routes;
