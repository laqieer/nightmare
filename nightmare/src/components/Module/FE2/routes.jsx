import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE2 from '.';

const FE2HomePage = lazy(() => import('./HomePage'));
const FE2CharacterEditorFE2 = lazy(() => import('./CharacterEditorFE2'));
const FE2CharacterGrowthRateEditorFE2 = lazy(() => import('./CharacterGrowthRateEditorFE2'));
const FE2CharacterResistanceEditorFE2 = lazy(() => import('./CharacterResistanceEditorFE2'));
const FE2ClassEditorFE2 = lazy(() => import('./ClassEditorFE2'));
const FE2ClassMovementEditorFE2 = lazy(() => import('./ClassMovementEditorFE2'));
const FE2ClassResistanceEditorFE2 = lazy(() => import('./ClassResistanceEditorFE2'));
const FE2ItemAccuracyEditorFE2 = lazy(() => import('./ItemAccuracyEditorFE2'));
const FE2ItemCriticalEditorFE2 = lazy(() => import('./ItemCriticalEditorFE2'));
const FE2ItemEffectivenessEditorFE2 = lazy(() => import('./ItemEffectivenessEditorFE2'));
const FE2ItemHPCostEditorFE2 = lazy(() => import('./ItemHPCostEditorFE2'));
const FE2ItemMightEditorFE2 = lazy(() => import('./ItemMightEditorFE2'));
const FE2ItemWeightEditorFE2 = lazy(() => import('./ItemWeightEditorFE2'));

export const FE2Routes = {
  path: 'FE2',
  element: <FE2 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE2HomePage /></Suspense> },
    { path: 'CharacterEditorFE2', element: <Suspense fallback={loading}><FE2CharacterEditorFE2 /></Suspense> },
    { path: 'CharacterGrowthRateEditorFE2', element: <Suspense fallback={loading}><FE2CharacterGrowthRateEditorFE2 /></Suspense> },
    { path: 'CharacterResistanceEditorFE2', element: <Suspense fallback={loading}><FE2CharacterResistanceEditorFE2 /></Suspense> },
    { path: 'ClassEditorFE2', element: <Suspense fallback={loading}><FE2ClassEditorFE2 /></Suspense> },
    { path: 'ClassMovementEditorFE2', element: <Suspense fallback={loading}><FE2ClassMovementEditorFE2 /></Suspense> },
    { path: 'ClassResistanceEditorFE2', element: <Suspense fallback={loading}><FE2ClassResistanceEditorFE2 /></Suspense> },
    { path: 'ItemAccuracyEditorFE2', element: <Suspense fallback={loading}><FE2ItemAccuracyEditorFE2 /></Suspense> },
    { path: 'ItemCriticalEditorFE2', element: <Suspense fallback={loading}><FE2ItemCriticalEditorFE2 /></Suspense> },
    { path: 'ItemEffectivenessEditorFE2', element: <Suspense fallback={loading}><FE2ItemEffectivenessEditorFE2 /></Suspense> },
    { path: 'ItemHPCostEditorFE2', element: <Suspense fallback={loading}><FE2ItemHPCostEditorFE2 /></Suspense> },
    { path: 'ItemMightEditorFE2', element: <Suspense fallback={loading}><FE2ItemMightEditorFE2 /></Suspense> },
    { path: 'ItemWeightEditorFE2', element: <Suspense fallback={loading}><FE2ItemWeightEditorFE2 /></Suspense> },
  ],
};

export default FE2Routes;
