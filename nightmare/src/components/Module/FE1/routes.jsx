import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE1 from '.';

const FE1HomePage = lazy(() => import('./HomePage'));
const FE1BossMusicEditor = lazy(() => import('./BossMusicEditor'));
const FE1Chapter10UnitDeploymentEditor = lazy(() => import('./Chapter10UnitDeploymentEditor'));
const FE1Chapter11UnitDeploymentEditor = lazy(() => import('./Chapter11UnitDeploymentEditor'));
const FE1Chapter12UnitDeploymentEditor = lazy(() => import('./Chapter12UnitDeploymentEditor'));
const FE1Chapter13UnitDeploymentEditor = lazy(() => import('./Chapter13UnitDeploymentEditor'));
const FE1Chapter14UnitDeploymentEditor = lazy(() => import('./Chapter14UnitDeploymentEditor'));
const FE1Chapter15UnitDeploymentEditor = lazy(() => import('./Chapter15UnitDeploymentEditor'));
const FE1Chapter16UnitDeploymentEditor = lazy(() => import('./Chapter16UnitDeploymentEditor'));
const FE1Chapter17UnitDeploymentEditor = lazy(() => import('./Chapter17UnitDeploymentEditor'));
const FE1Chapter18UnitDeploymentEditor = lazy(() => import('./Chapter18UnitDeploymentEditor'));
const FE1Chapter19UnitDeploymentEditor = lazy(() => import('./Chapter19UnitDeploymentEditor'));
const FE1Chapter2UnitDeploymentEditor = lazy(() => import('./Chapter2UnitDeploymentEditor'));
const FE1Chapter20UnitDeploymentEditor = lazy(() => import('./Chapter20UnitDeploymentEditor'));
const FE1Chapter21UnitDeploymentEditor = lazy(() => import('./Chapter21UnitDeploymentEditor'));
const FE1Chapter22UnitDeploymentEditor = lazy(() => import('./Chapter22UnitDeploymentEditor'));
const FE1Chapter23UnitDeploymentEditor = lazy(() => import('./Chapter23UnitDeploymentEditor'));
const FE1Chapter24UnitDeploymentEditor = lazy(() => import('./Chapter24UnitDeploymentEditor'));
const FE1Chapter25UnitDeploymentEditor = lazy(() => import('./Chapter25UnitDeploymentEditor'));
const FE1Chapter3UnitDeploymentEditor = lazy(() => import('./Chapter3UnitDeploymentEditor'));
const FE1Chapter4UnitDeploymentEditor = lazy(() => import('./Chapter4UnitDeploymentEditor'));
const FE1Chapter5UnitDeploymentEditor = lazy(() => import('./Chapter5UnitDeploymentEditor'));
const FE1Chapter6UnitDeploymentEditor = lazy(() => import('./Chapter6UnitDeploymentEditor'));
const FE1Chapter7UnitDeploymentEditor = lazy(() => import('./Chapter7UnitDeploymentEditor'));
const FE1Chapter8UnitDeploymentEditor = lazy(() => import('./Chapter8UnitDeploymentEditor'));
const FE1Chapter9UnitDeploymentEditor = lazy(() => import('./Chapter9UnitDeploymentEditor'));
const FE1ChapterUnitEditor = lazy(() => import('./ChapterUnitEditor'));
const FE1Charactereditor1FE1 = lazy(() => import('./Charactereditor1FE1'));
const FE1Charactereditor2FE1 = lazy(() => import('./Charactereditor2FE1'));
const FE1Charactereditor3FE1 = lazy(() => import('./Charactereditor3FE1'));
const FE1Charactereditor4FE1 = lazy(() => import('./Charactereditor4FE1'));
const FE1Charactereditor5FE1 = lazy(() => import('./Charactereditor5FE1'));
const FE1Charactereditor6FE1 = lazy(() => import('./Charactereditor6FE1'));
const FE1Charactereditor7FE1 = lazy(() => import('./Charactereditor7FE1'));
const FE1Charactereditor8FE1 = lazy(() => import('./Charactereditor8FE1'));
const FE1Charactereditor9FE1 = lazy(() => import('./Charactereditor9FE1'));
const FE1ClassWeaponUsablityPointerEditor = lazy(() => import('./ClassWeaponUsablityPointerEditor'));
const FE1Mappointerseditor = lazy(() => import('./Mappointerseditor'));
const FE1Chapter17SecretShopEditor = lazy(() => import('./Chapter17SecretShopEditor'));
const FE1Chapter21SecretShopEditor = lazy(() => import('./Chapter21SecretShopEditor'));
const FE1Chapter23SecretShopEditor = lazy(() => import('./Chapter23SecretShopEditor'));
const FE1Chapter24SecretShopEditor = lazy(() => import('./Chapter24SecretShopEditor'));
const FE1ClassEditor = lazy(() => import('./ClassEditor'));
const FE1GrowthRatesEditor = lazy(() => import('./GrowthRatesEditor'));
const FE1ItemEditor = lazy(() => import('./ItemEditor'));
const FE1ItemNameEditor = lazy(() => import('./ItemNameEditor'));
const FE1ItemTypeEditor = lazy(() => import('./ItemTypeEditor'));
const FE1ShopEditor1 = lazy(() => import('./ShopEditor1'));
const FE1ShopEditor2 = lazy(() => import('./ShopEditor2'));
const FE1ShopEditor3 = lazy(() => import('./ShopEditor3'));
const FE1ShopEditor4 = lazy(() => import('./ShopEditor4'));
const FE1ShopEditor5 = lazy(() => import('./ShopEditor5'));
const FE1ShopEditor6 = lazy(() => import('./ShopEditor6'));
const FE1ShopEditor7 = lazy(() => import('./ShopEditor7'));
const FE1ShopEditor8 = lazy(() => import('./ShopEditor8'));
const FE1ShopEditor9 = lazy(() => import('./ShopEditor9'));
const FE1VendorEditor1 = lazy(() => import('./VendorEditor1'));
const FE1VendorEditor2 = lazy(() => import('./VendorEditor2'));
const FE1VendorEditor3 = lazy(() => import('./VendorEditor3'));
const FE1VendorEditor4 = lazy(() => import('./VendorEditor4'));
const FE1VendorEditor5 = lazy(() => import('./VendorEditor5'));
const FE1VendorEditor6 = lazy(() => import('./VendorEditor6'));
const FE1VendorEditor7 = lazy(() => import('./VendorEditor7'));
const FE1PromotionDataTable = lazy(() => import('./PromotionDataTable'));
const FE1RecruitmentEditor = lazy(() => import('./RecruitmentEditor'));
const FE1WeaponEffectivenessEditor = lazy(() => import('./WeaponEffectivenessEditor'));

export const FE1Routes = {
  path: 'FE1',
  element: <FE1 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE1HomePage /></Suspense> },
    { path: 'BossMusicEditor', element: <Suspense fallback={loading}><FE1BossMusicEditor /></Suspense> },
    { path: 'Chapter10UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter10UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter11UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter11UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter12UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter12UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter13UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter13UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter14UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter14UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter15UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter15UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter16UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter16UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter17UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter17UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter18UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter18UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter19UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter19UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter2UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter2UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter20UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter20UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter21UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter21UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter22UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter22UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter23UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter23UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter24UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter24UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter25UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter25UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter3UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter3UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter4UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter4UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter5UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter5UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter6UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter6UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter7UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter7UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter8UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter8UnitDeploymentEditor /></Suspense> },
    { path: 'Chapter9UnitDeploymentEditor', element: <Suspense fallback={loading}><FE1Chapter9UnitDeploymentEditor /></Suspense> },
    { path: 'ChapterUnitEditor', element: <Suspense fallback={loading}><FE1ChapterUnitEditor /></Suspense> },
    { path: 'Charactereditor1FE1', element: <Suspense fallback={loading}><FE1Charactereditor1FE1 /></Suspense> },
    { path: 'Charactereditor2FE1', element: <Suspense fallback={loading}><FE1Charactereditor2FE1 /></Suspense> },
    { path: 'Charactereditor3FE1', element: <Suspense fallback={loading}><FE1Charactereditor3FE1 /></Suspense> },
    { path: 'Charactereditor4FE1', element: <Suspense fallback={loading}><FE1Charactereditor4FE1 /></Suspense> },
    { path: 'Charactereditor5FE1', element: <Suspense fallback={loading}><FE1Charactereditor5FE1 /></Suspense> },
    { path: 'Charactereditor6FE1', element: <Suspense fallback={loading}><FE1Charactereditor6FE1 /></Suspense> },
    { path: 'Charactereditor7FE1', element: <Suspense fallback={loading}><FE1Charactereditor7FE1 /></Suspense> },
    { path: 'Charactereditor8FE1', element: <Suspense fallback={loading}><FE1Charactereditor8FE1 /></Suspense> },
    { path: 'Charactereditor9FE1', element: <Suspense fallback={loading}><FE1Charactereditor9FE1 /></Suspense> },
    { path: 'ClassWeaponUsablityPointerEditor', element: <Suspense fallback={loading}><FE1ClassWeaponUsablityPointerEditor /></Suspense> },
    { path: 'Mappointerseditor', element: <Suspense fallback={loading}><FE1Mappointerseditor /></Suspense> },
    { path: 'Chapter17SecretShopEditor', element: <Suspense fallback={loading}><FE1Chapter17SecretShopEditor /></Suspense> },
    { path: 'Chapter21SecretShopEditor', element: <Suspense fallback={loading}><FE1Chapter21SecretShopEditor /></Suspense> },
    { path: 'Chapter23SecretShopEditor', element: <Suspense fallback={loading}><FE1Chapter23SecretShopEditor /></Suspense> },
    { path: 'Chapter24SecretShopEditor', element: <Suspense fallback={loading}><FE1Chapter24SecretShopEditor /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE1ClassEditor /></Suspense> },
    { path: 'GrowthRatesEditor', element: <Suspense fallback={loading}><FE1GrowthRatesEditor /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE1ItemEditor /></Suspense> },
    { path: 'ItemNameEditor', element: <Suspense fallback={loading}><FE1ItemNameEditor /></Suspense> },
    { path: 'ItemTypeEditor', element: <Suspense fallback={loading}><FE1ItemTypeEditor /></Suspense> },
    { path: 'ShopEditor1', element: <Suspense fallback={loading}><FE1ShopEditor1 /></Suspense> },
    { path: 'ShopEditor2', element: <Suspense fallback={loading}><FE1ShopEditor2 /></Suspense> },
    { path: 'ShopEditor3', element: <Suspense fallback={loading}><FE1ShopEditor3 /></Suspense> },
    { path: 'ShopEditor4', element: <Suspense fallback={loading}><FE1ShopEditor4 /></Suspense> },
    { path: 'ShopEditor5', element: <Suspense fallback={loading}><FE1ShopEditor5 /></Suspense> },
    { path: 'ShopEditor6', element: <Suspense fallback={loading}><FE1ShopEditor6 /></Suspense> },
    { path: 'ShopEditor7', element: <Suspense fallback={loading}><FE1ShopEditor7 /></Suspense> },
    { path: 'ShopEditor8', element: <Suspense fallback={loading}><FE1ShopEditor8 /></Suspense> },
    { path: 'ShopEditor9', element: <Suspense fallback={loading}><FE1ShopEditor9 /></Suspense> },
    { path: 'VendorEditor1', element: <Suspense fallback={loading}><FE1VendorEditor1 /></Suspense> },
    { path: 'VendorEditor2', element: <Suspense fallback={loading}><FE1VendorEditor2 /></Suspense> },
    { path: 'VendorEditor3', element: <Suspense fallback={loading}><FE1VendorEditor3 /></Suspense> },
    { path: 'VendorEditor4', element: <Suspense fallback={loading}><FE1VendorEditor4 /></Suspense> },
    { path: 'VendorEditor5', element: <Suspense fallback={loading}><FE1VendorEditor5 /></Suspense> },
    { path: 'VendorEditor6', element: <Suspense fallback={loading}><FE1VendorEditor6 /></Suspense> },
    { path: 'VendorEditor7', element: <Suspense fallback={loading}><FE1VendorEditor7 /></Suspense> },
    { path: 'PromotionDataTable', element: <Suspense fallback={loading}><FE1PromotionDataTable /></Suspense> },
    { path: 'RecruitmentEditor', element: <Suspense fallback={loading}><FE1RecruitmentEditor /></Suspense> },
    { path: 'WeaponEffectivenessEditor', element: <Suspense fallback={loading}><FE1WeaponEffectivenessEditor /></Suspense> },
  ],
};

export default FE1Routes;
