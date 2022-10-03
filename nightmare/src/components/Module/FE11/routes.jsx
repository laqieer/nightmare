import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE11 from '.';

const FE11HomePage = lazy(() => import('./HomePage'));
const FE11Chapter1UnitEditor = lazy(() => import('./Chapter1UnitEditor'));
const FE11Chapter10UnitEditor = lazy(() => import('./Chapter10UnitEditor'));
const FE11Chapter11UnitEditor = lazy(() => import('./Chapter11UnitEditor'));
const FE11Chapter12UnitEditor = lazy(() => import('./Chapter12UnitEditor'));
const FE11Chapter12xUnitEditor = lazy(() => import('./Chapter12xUnitEditor'));
const FE11Chapter13UnitEditor = lazy(() => import('./Chapter13UnitEditor'));
const FE11Chapter14UnitEditor = lazy(() => import('./Chapter14UnitEditor'));
const FE11Chapter15UnitEditor = lazy(() => import('./Chapter15UnitEditor'));
const FE11Chapter16UnitEditor = lazy(() => import('./Chapter16UnitEditor'));
const FE11Chapter17UnitEditor = lazy(() => import('./Chapter17UnitEditor'));
const FE11Chapter17xUnitEditor = lazy(() => import('./Chapter17xUnitEditor'));
const FE11Chapter18UnitEditor = lazy(() => import('./Chapter18UnitEditor'));
const FE11Chapter19UnitEditor = lazy(() => import('./Chapter19UnitEditor'));
const FE11Chapter2UnitEditor = lazy(() => import('./Chapter2UnitEditor'));
const FE11Chapter20UnitEditor = lazy(() => import('./Chapter20UnitEditor'));
const FE11Chapter20xUnitEditor = lazy(() => import('./Chapter20xUnitEditor'));
const FE11Chapter21UnitEditor = lazy(() => import('./Chapter21UnitEditor'));
const FE11Chapter22UnitEditor = lazy(() => import('./Chapter22UnitEditor'));
const FE11Chapter23UnitEditor = lazy(() => import('./Chapter23UnitEditor'));
const FE11Chapter24UnitEditor = lazy(() => import('./Chapter24UnitEditor'));
const FE11Chapter24xUnitEditor = lazy(() => import('./Chapter24xUnitEditor'));
const FE11Chapter25UnitEditor = lazy(() => import('./Chapter25UnitEditor'));
const FE11Chapter3UnitEditor = lazy(() => import('./Chapter3UnitEditor'));
const FE11Chapter4UnitEditor = lazy(() => import('./Chapter4UnitEditor'));
const FE11Chapter5UnitEditor = lazy(() => import('./Chapter5UnitEditor'));
const FE11Chapter6UnitEditor = lazy(() => import('./Chapter6UnitEditor'));
const FE11Chapter6xUnitEditor = lazy(() => import('./Chapter6xUnitEditor'));
const FE11Chapter7UnitEditor = lazy(() => import('./Chapter7UnitEditor'));
const FE11Chapter8UnitEditor = lazy(() => import('./Chapter8UnitEditor'));
const FE11Chapter9UnitEditor = lazy(() => import('./Chapter9UnitEditor'));
const FE11FEDSCharacterEditorU = lazy(() => import('./FEDSCharacterEditorU'));
const FE11FEDSClassEditorU = lazy(() => import('./FEDSClassEditorU'));
const FE11FEDSClassEditorUpdate = lazy(() => import('./FEDSClassEditorUpdate'));
const FE11FEDSItemEditorU = lazy(() => import('./FEDSItemEditorU'));
const FE11FEDSItemEditorUpdate = lazy(() => import('./FEDSItemEditorUpdate'));
const FE11Prologue1UnitEditor = lazy(() => import('./Prologue1UnitEditor'));
const FE11Prologue2UnitEditor = lazy(() => import('./Prologue2UnitEditor'));
const FE11Prologue3UnitEditor = lazy(() => import('./Prologue3UnitEditor'));
const FE11Prologue4UnitEditor = lazy(() => import('./Prologue4UnitEditor'));

export const FE11Routes = {
  path: 'FE11',
  element: <FE11 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE11HomePage /></Suspense> },
    { path: 'Chapter1UnitEditor', element: <Suspense fallback={loading}><FE11Chapter1UnitEditor /></Suspense> },
    { path: 'Chapter10UnitEditor', element: <Suspense fallback={loading}><FE11Chapter10UnitEditor /></Suspense> },
    { path: 'Chapter11UnitEditor', element: <Suspense fallback={loading}><FE11Chapter11UnitEditor /></Suspense> },
    { path: 'Chapter12UnitEditor', element: <Suspense fallback={loading}><FE11Chapter12UnitEditor /></Suspense> },
    { path: 'Chapter12xUnitEditor', element: <Suspense fallback={loading}><FE11Chapter12xUnitEditor /></Suspense> },
    { path: 'Chapter13UnitEditor', element: <Suspense fallback={loading}><FE11Chapter13UnitEditor /></Suspense> },
    { path: 'Chapter14UnitEditor', element: <Suspense fallback={loading}><FE11Chapter14UnitEditor /></Suspense> },
    { path: 'Chapter15UnitEditor', element: <Suspense fallback={loading}><FE11Chapter15UnitEditor /></Suspense> },
    { path: 'Chapter16UnitEditor', element: <Suspense fallback={loading}><FE11Chapter16UnitEditor /></Suspense> },
    { path: 'Chapter17UnitEditor', element: <Suspense fallback={loading}><FE11Chapter17UnitEditor /></Suspense> },
    { path: 'Chapter17xUnitEditor', element: <Suspense fallback={loading}><FE11Chapter17xUnitEditor /></Suspense> },
    { path: 'Chapter18UnitEditor', element: <Suspense fallback={loading}><FE11Chapter18UnitEditor /></Suspense> },
    { path: 'Chapter19UnitEditor', element: <Suspense fallback={loading}><FE11Chapter19UnitEditor /></Suspense> },
    { path: 'Chapter2UnitEditor', element: <Suspense fallback={loading}><FE11Chapter2UnitEditor /></Suspense> },
    { path: 'Chapter20UnitEditor', element: <Suspense fallback={loading}><FE11Chapter20UnitEditor /></Suspense> },
    { path: 'Chapter20xUnitEditor', element: <Suspense fallback={loading}><FE11Chapter20xUnitEditor /></Suspense> },
    { path: 'Chapter21UnitEditor', element: <Suspense fallback={loading}><FE11Chapter21UnitEditor /></Suspense> },
    { path: 'Chapter22UnitEditor', element: <Suspense fallback={loading}><FE11Chapter22UnitEditor /></Suspense> },
    { path: 'Chapter23UnitEditor', element: <Suspense fallback={loading}><FE11Chapter23UnitEditor /></Suspense> },
    { path: 'Chapter24UnitEditor', element: <Suspense fallback={loading}><FE11Chapter24UnitEditor /></Suspense> },
    { path: 'Chapter24xUnitEditor', element: <Suspense fallback={loading}><FE11Chapter24xUnitEditor /></Suspense> },
    { path: 'Chapter25UnitEditor', element: <Suspense fallback={loading}><FE11Chapter25UnitEditor /></Suspense> },
    { path: 'Chapter3UnitEditor', element: <Suspense fallback={loading}><FE11Chapter3UnitEditor /></Suspense> },
    { path: 'Chapter4UnitEditor', element: <Suspense fallback={loading}><FE11Chapter4UnitEditor /></Suspense> },
    { path: 'Chapter5UnitEditor', element: <Suspense fallback={loading}><FE11Chapter5UnitEditor /></Suspense> },
    { path: 'Chapter6UnitEditor', element: <Suspense fallback={loading}><FE11Chapter6UnitEditor /></Suspense> },
    { path: 'Chapter6xUnitEditor', element: <Suspense fallback={loading}><FE11Chapter6xUnitEditor /></Suspense> },
    { path: 'Chapter7UnitEditor', element: <Suspense fallback={loading}><FE11Chapter7UnitEditor /></Suspense> },
    { path: 'Chapter8UnitEditor', element: <Suspense fallback={loading}><FE11Chapter8UnitEditor /></Suspense> },
    { path: 'Chapter9UnitEditor', element: <Suspense fallback={loading}><FE11Chapter9UnitEditor /></Suspense> },
    { path: 'FEDSCharacterEditorU', element: <Suspense fallback={loading}><FE11FEDSCharacterEditorU /></Suspense> },
    { path: 'FEDSClassEditorU', element: <Suspense fallback={loading}><FE11FEDSClassEditorU /></Suspense> },
    { path: 'FEDSClassEditorUpdate', element: <Suspense fallback={loading}><FE11FEDSClassEditorUpdate /></Suspense> },
    { path: 'FEDSItemEditorU', element: <Suspense fallback={loading}><FE11FEDSItemEditorU /></Suspense> },
    { path: 'FEDSItemEditorUpdate', element: <Suspense fallback={loading}><FE11FEDSItemEditorUpdate /></Suspense> },
    { path: 'Prologue1UnitEditor', element: <Suspense fallback={loading}><FE11Prologue1UnitEditor /></Suspense> },
    { path: 'Prologue2UnitEditor', element: <Suspense fallback={loading}><FE11Prologue2UnitEditor /></Suspense> },
    { path: 'Prologue3UnitEditor', element: <Suspense fallback={loading}><FE11Prologue3UnitEditor /></Suspense> },
    { path: 'Prologue4UnitEditor', element: <Suspense fallback={loading}><FE11Prologue4UnitEditor /></Suspense> },
  ],
};

export default FE11Routes;
