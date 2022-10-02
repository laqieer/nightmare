import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE12 from '.';

const FE12HomePage = lazy(() => import('./HomePage'));
const FE12Chapter0UnitEditor = lazy(() => import('./Chapter0UnitEditor'));
const FE12Chapter1UnitEditor = lazy(() => import('./Chapter1UnitEditor'));
const FE12Chapter10UnitEditor = lazy(() => import('./Chapter10UnitEditor'));
const FE12Chapter10xUnitEditor = lazy(() => import('./Chapter10xUnitEditor'));
const FE12Chapter11UnitEditor = lazy(() => import('./Chapter11UnitEditor'));
const FE12Chapter12UnitEditor = lazy(() => import('./Chapter12UnitEditor'));
const FE12Chapter13UnitEditor = lazy(() => import('./Chapter13UnitEditor'));
const FE12Chapter13xUnitEditor = lazy(() => import('./Chapter13xUnitEditor'));
const FE12Chapter14UnitEditor = lazy(() => import('./Chapter14UnitEditor'));
const FE12Chapter15UnitEditor = lazy(() => import('./Chapter15UnitEditor'));
const FE12Chapter16UnitEditor = lazy(() => import('./Chapter16UnitEditor'));
const FE12Chapter16xUnitEditor = lazy(() => import('./Chapter16xUnitEditor'));
const FE12Chapter17UnitEditor = lazy(() => import('./Chapter17UnitEditor'));
const FE12Chapter18UnitEditor = lazy(() => import('./Chapter18UnitEditor'));
const FE12Chapter19UnitEditor = lazy(() => import('./Chapter19UnitEditor'));
const FE12Chapter2UnitEditor = lazy(() => import('./Chapter2UnitEditor'));
const FE12Chapter20UnitEditor = lazy(() => import('./Chapter20UnitEditor'));
const FE12Chapter20xUnitEditor = lazy(() => import('./Chapter20xUnitEditor'));
const FE12Chapter21UnitEditor = lazy(() => import('./Chapter21UnitEditor'));
const FE12Chapter22UnitEditor = lazy(() => import('./Chapter22UnitEditor'));
const FE12Chapter23UnitEditor = lazy(() => import('./Chapter23UnitEditor'));
const FE12Chapter24UnitEditor = lazy(() => import('./Chapter24UnitEditor'));
const FE12Chapter3UnitEditor = lazy(() => import('./Chapter3UnitEditor'));
const FE12Chapter3xUnitEditor = lazy(() => import('./Chapter3xUnitEditor'));
const FE12Chapter4UnitEditor = lazy(() => import('./Chapter4UnitEditor'));
const FE12Chapter5UnitEditor = lazy(() => import('./Chapter5UnitEditor'));
const FE12Chapter6UnitEditor = lazy(() => import('./Chapter6UnitEditor'));
const FE12Chapter6xUnitEditor = lazy(() => import('./Chapter6xUnitEditor'));
const FE12Chapter7UnitEditor = lazy(() => import('./Chapter7UnitEditor'));
const FE12Chapter8UnitEditor = lazy(() => import('./Chapter8UnitEditor'));
const FE12Chapter9UnitEditor = lazy(() => import('./Chapter9UnitEditor'));
const FE12ChapterBSFE1UnitEditor = lazy(() => import('./ChapterBSFE1UnitEditor'));
const FE12ChapterBSFE2UnitEditor = lazy(() => import('./ChapterBSFE2UnitEditor'));
const FE12ChapterBSFE3UnitEditor = lazy(() => import('./ChapterBSFE3UnitEditor'));
const FE12ChapterBSFE4UnitEditor = lazy(() => import('./ChapterBSFE4UnitEditor'));
const FE12ChapterDL1UnitEditor = lazy(() => import('./ChapterDL1UnitEditor'));
const FE12ChapterDL2UnitEditor = lazy(() => import('./ChapterDL2UnitEditor'));
const FE12ChapterDL3UnitEditor = lazy(() => import('./ChapterDL3UnitEditor'));
const FE12CharacterEditor = lazy(() => import('./CharacterEditor'));
const FE12ClassEditorU = lazy(() => import('./ClassEditorU'));
const FE12ClassSlotEditor = lazy(() => import('./ClassSlotEditor'));
const FE12ItemEditorU = lazy(() => import('./ItemEditorU'));
const FE12TerrainCostDataEditor = lazy(() => import('./TerrainCostDataEditor'));
const FE12TerrainDataEditor = lazy(() => import('./TerrainDataEditor'));

export const FE12Routes = {
  path: 'FE12',
  element: <FE12 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE12HomePage /></Suspense> },
    { path: 'Chapter0UnitEditor', element: <Suspense fallback={loading}><FE12Chapter0UnitEditor /></Suspense> },
    { path: 'Chapter1UnitEditor', element: <Suspense fallback={loading}><FE12Chapter1UnitEditor /></Suspense> },
    { path: 'Chapter10UnitEditor', element: <Suspense fallback={loading}><FE12Chapter10UnitEditor /></Suspense> },
    { path: 'Chapter10xUnitEditor', element: <Suspense fallback={loading}><FE12Chapter10xUnitEditor /></Suspense> },
    { path: 'Chapter11UnitEditor', element: <Suspense fallback={loading}><FE12Chapter11UnitEditor /></Suspense> },
    { path: 'Chapter12UnitEditor', element: <Suspense fallback={loading}><FE12Chapter12UnitEditor /></Suspense> },
    { path: 'Chapter13UnitEditor', element: <Suspense fallback={loading}><FE12Chapter13UnitEditor /></Suspense> },
    { path: 'Chapter13xUnitEditor', element: <Suspense fallback={loading}><FE12Chapter13xUnitEditor /></Suspense> },
    { path: 'Chapter14UnitEditor', element: <Suspense fallback={loading}><FE12Chapter14UnitEditor /></Suspense> },
    { path: 'Chapter15UnitEditor', element: <Suspense fallback={loading}><FE12Chapter15UnitEditor /></Suspense> },
    { path: 'Chapter16UnitEditor', element: <Suspense fallback={loading}><FE12Chapter16UnitEditor /></Suspense> },
    { path: 'Chapter16xUnitEditor', element: <Suspense fallback={loading}><FE12Chapter16xUnitEditor /></Suspense> },
    { path: 'Chapter17UnitEditor', element: <Suspense fallback={loading}><FE12Chapter17UnitEditor /></Suspense> },
    { path: 'Chapter18UnitEditor', element: <Suspense fallback={loading}><FE12Chapter18UnitEditor /></Suspense> },
    { path: 'Chapter19UnitEditor', element: <Suspense fallback={loading}><FE12Chapter19UnitEditor /></Suspense> },
    { path: 'Chapter2UnitEditor', element: <Suspense fallback={loading}><FE12Chapter2UnitEditor /></Suspense> },
    { path: 'Chapter20UnitEditor', element: <Suspense fallback={loading}><FE12Chapter20UnitEditor /></Suspense> },
    { path: 'Chapter20xUnitEditor', element: <Suspense fallback={loading}><FE12Chapter20xUnitEditor /></Suspense> },
    { path: 'Chapter21UnitEditor', element: <Suspense fallback={loading}><FE12Chapter21UnitEditor /></Suspense> },
    { path: 'Chapter22UnitEditor', element: <Suspense fallback={loading}><FE12Chapter22UnitEditor /></Suspense> },
    { path: 'Chapter23UnitEditor', element: <Suspense fallback={loading}><FE12Chapter23UnitEditor /></Suspense> },
    { path: 'Chapter24UnitEditor', element: <Suspense fallback={loading}><FE12Chapter24UnitEditor /></Suspense> },
    { path: 'Chapter3UnitEditor', element: <Suspense fallback={loading}><FE12Chapter3UnitEditor /></Suspense> },
    { path: 'Chapter3xUnitEditor', element: <Suspense fallback={loading}><FE12Chapter3xUnitEditor /></Suspense> },
    { path: 'Chapter4UnitEditor', element: <Suspense fallback={loading}><FE12Chapter4UnitEditor /></Suspense> },
    { path: 'Chapter5UnitEditor', element: <Suspense fallback={loading}><FE12Chapter5UnitEditor /></Suspense> },
    { path: 'Chapter6UnitEditor', element: <Suspense fallback={loading}><FE12Chapter6UnitEditor /></Suspense> },
    { path: 'Chapter6xUnitEditor', element: <Suspense fallback={loading}><FE12Chapter6xUnitEditor /></Suspense> },
    { path: 'Chapter7UnitEditor', element: <Suspense fallback={loading}><FE12Chapter7UnitEditor /></Suspense> },
    { path: 'Chapter8UnitEditor', element: <Suspense fallback={loading}><FE12Chapter8UnitEditor /></Suspense> },
    { path: 'Chapter9UnitEditor', element: <Suspense fallback={loading}><FE12Chapter9UnitEditor /></Suspense> },
    { path: 'ChapterBSFE1UnitEditor', element: <Suspense fallback={loading}><FE12ChapterBSFE1UnitEditor /></Suspense> },
    { path: 'ChapterBSFE2UnitEditor', element: <Suspense fallback={loading}><FE12ChapterBSFE2UnitEditor /></Suspense> },
    { path: 'ChapterBSFE3UnitEditor', element: <Suspense fallback={loading}><FE12ChapterBSFE3UnitEditor /></Suspense> },
    { path: 'ChapterBSFE4UnitEditor', element: <Suspense fallback={loading}><FE12ChapterBSFE4UnitEditor /></Suspense> },
    { path: 'ChapterDL1UnitEditor', element: <Suspense fallback={loading}><FE12ChapterDL1UnitEditor /></Suspense> },
    { path: 'ChapterDL2UnitEditor', element: <Suspense fallback={loading}><FE12ChapterDL2UnitEditor /></Suspense> },
    { path: 'ChapterDL3UnitEditor', element: <Suspense fallback={loading}><FE12ChapterDL3UnitEditor /></Suspense> },
    { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE12CharacterEditor /></Suspense> },
    { path: 'ClassEditorU', element: <Suspense fallback={loading}><FE12ClassEditorU /></Suspense> },
    { path: 'ClassSlotEditor', element: <Suspense fallback={loading}><FE12ClassSlotEditor /></Suspense> },
    { path: 'ItemEditorU', element: <Suspense fallback={loading}><FE12ItemEditorU /></Suspense> },
    { path: 'TerrainCostDataEditor', element: <Suspense fallback={loading}><FE12TerrainCostDataEditor /></Suspense> },
    { path: 'TerrainDataEditor', element: <Suspense fallback={loading}><FE12TerrainDataEditor /></Suspense> },
  ],
};

export default FE12Routes;
