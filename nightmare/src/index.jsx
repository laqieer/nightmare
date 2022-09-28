import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Spin } from 'antd';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import FE6 from './components/Module/FE6';
import FE7 from './components/Module/FE7';
import FE6CharacterEditor from './components/Module/FE6/FE6CharacterEditor';
import FE6ClassEditor from './components/Module/FE6/FE6ClassEditor';
import FE7AnimationPointerTableEditor from './components/Module/FE7/AnimationPointerTableEditor';
import FE7AnimationReference from './components/Module/FE7/AnimationReference';
import FE7BattleAnimationEditor from './components/Module/FE7/BattleAnimationEditor';
import FE7CopyofCustomBattleAnimationEditor from './components/Module/FE7/CopyofCustomBattleAnimationEditor';
import FE7CustomBattleAnimationEditor from './components/Module/FE7/CustomBattleAnimationEditor';
import FE7CustomItemAnimationList from './components/Module/FE7/CustomItemAnimationList';
import FE7BattlePaletteReference from './components/Module/FE7/FE7BattlePaletteReference';
import FE6HomePage from './components/Module/FE6/HomePage';
import FE7HomePage from './components/Module/FE7/HomePage';

const router = createBrowserRouter([
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
            element: <FE6CharacterEditor />,
          },
          {
            path: 'ClassEditor',
            element: <FE6ClassEditor />,
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
            element: <FE7AnimationPointerTableEditor />,
          },
          {
            path: 'AnimationReference',
            element: <FE7AnimationReference />,
          },
          {
            path: 'BattleAnimationEditor',
            element: <FE7BattleAnimationEditor />,
          },
          {
            path: 'CopyofCustomBattleAnimationEditor',
            element: <FE7CopyofCustomBattleAnimationEditor />,
          },
          {
            path: 'CustomBattleAnimationEditor',
            element: <FE7CustomBattleAnimationEditor />,
          },
          {
            path: 'CustomItemAnimationList',
            element: <FE7CustomItemAnimationList />,
          },
          {
            path: 'BattlePaletteReference',
            element: <FE7BattlePaletteReference />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={(
        <Spin
          tip="Loading..."
        />
      )}
    />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
