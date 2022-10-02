import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE11 from '.';

const FE11HomePage = lazy(() => import('./HomePage'));
const FE11Chapter1UnitEditor = lazy(() => import('./Chapter1UnitEditor'));
const FE11FEDSCharacterEditorU = lazy(() => import('./FEDSCharacterEditorU'));
const FE11FEDSClassEditorU = lazy(() => import('./FEDSClassEditorU'));
const FE11FEDSItemEditorU = lazy(() => import('./FEDSItemEditorU'));

export const FE11Routes = {
  path: 'FE11',
  element: <FE11 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE11HomePage /></Suspense> },
    { path: 'Chapter1UnitEditor', element: <Suspense fallback={loading}><FE11Chapter1UnitEditor /></Suspense> },
    { path: 'FEDSCharacterEditorU', element: <Suspense fallback={loading}><FE11FEDSCharacterEditorU /></Suspense> },
    { path: 'FEDSClassEditorU', element: <Suspense fallback={loading}><FE11FEDSClassEditorU /></Suspense> },
    { path: 'FEDSItemEditorU', element: <Suspense fallback={loading}><FE11FEDSItemEditorU /></Suspense> },
  ],
};

export default FE11Routes;
