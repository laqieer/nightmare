import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE5 from '.';

const FE5HomePage = lazy(() => import('./HomePage'));
const FE5ArmyDataCh23Koruta = lazy(() => import('./ArmyDataCh23Koruta'));
const FE5ArmyDataCh1Manster1 = lazy(() => import('./ArmyDataCh1Manster1'));
const FE5ArmyDataCh1Manster2 = lazy(() => import('./ArmyDataCh1Manster2'));
const FE5ArmyDataCh1Manster3 = lazy(() => import('./ArmyDataCh1Manster3'));
const FE5Nanna = lazy(() => import('./Nanna'));
const FE5ArmyDataCh1Weissman = lazy(() => import('./ArmyDataCh1Weissman'));
const FE5Oruen = lazy(() => import('./Oruen'));
const FE5ArmyDataCh10Freege1 = lazy(() => import('./ArmyDataCh10Freege1'));
const FE5ArmyDataCh10Freege2 = lazy(() => import('./ArmyDataCh10Freege2'));
const FE5ArmyDataCh10Freege3 = lazy(() => import('./ArmyDataCh10Freege3'));
const FE5ArmyDataCh10Ralgo = lazy(() => import('./ArmyDataCh10Ralgo'));
const FE5ArmyDataCh11Fred = lazy(() => import('./ArmyDataCh11Fred'));
const FE5ArmyDataCh11Freege1 = lazy(() => import('./ArmyDataCh11Freege1'));
const FE5ArmyDataCh11Freege2 = lazy(() => import('./ArmyDataCh11Freege2'));
const FE5ArmyDataCh11Oruen = lazy(() => import('./ArmyDataCh11Oruen'));
const FE5ArmyDataCh11xFred = lazy(() => import('./ArmyDataCh11xFred'));
const FE5ArmyDataCh11xFreege1 = lazy(() => import('./ArmyDataCh11xFreege1'));
const FE5ArmyDataCh11xFreege2 = lazy(() => import('./ArmyDataCh11xFreege2'));
const FE5ArmyDataCh11xFreege3 = lazy(() => import('./ArmyDataCh11xFreege3'));
const FE5ArmyDataCh11xFreege4 = lazy(() => import('./ArmyDataCh11xFreege4'));
const FE5ArmyDataCh11xNPCs = lazy(() => import('./ArmyDataCh11xNPCs'));
const FE5ArmyDataCh11xOruen = lazy(() => import('./ArmyDataCh11xOruen'));
const FE5ArmyDataCh12Mareeta = lazy(() => import('./ArmyDataCh12Mareeta'));
const FE5ArmyDataCh12Seiram = lazy(() => import('./ArmyDataCh12Seiram'));
const FE5ArmyDataCh12xBowFighter = lazy(() => import('./ArmyDataCh12xBowFighter'));
const FE5Tina = lazy(() => import('./Tina'));
const FE5ArmyDataCh13Freege1 = lazy(() => import('./ArmyDataCh13Freege1'));
const FE5ArmyDataCh13Freege2 = lazy(() => import('./ArmyDataCh13Freege2'));
const FE5ArmyDataCh13Glade = lazy(() => import('./ArmyDataCh13Glade'));
const FE5ArmyDataCh13Lenster = lazy(() => import('./ArmyDataCh13Lenster'));
const FE5ArmyDataCh13Paluce = lazy(() => import('./ArmyDataCh13Paluce'));
const FE5ArmyDataCh14Aightman = lazy(() => import('./ArmyDataCh14Aightman'));
const FE5Eda = lazy(() => import('./Eda'));
const FE5ArmyDataCh14Freege1 = lazy(() => import('./ArmyDataCh14Freege1'));
const FE5ArmyDataCh14Freege2 = lazy(() => import('./ArmyDataCh14Freege2'));
const FE5ArmyDataCh14Freege3 = lazy(() => import('./ArmyDataCh14Freege3'));
const FE5ArmyDataCh14Linonan = lazy(() => import('./ArmyDataCh14Linonan'));
const FE5ArmyDataCh14Makroi = lazy(() => import('./ArmyDataCh14Makroi'));
const FE5ArmyDataCh14Roputo = lazy(() => import('./ArmyDataCh14Roputo'));
const FE5Linonan = lazy(() => import('./Linonan'));
const FE5Ralf = lazy(() => import('./Ralf'));
const FE5ArmyDataCh15Bandit1 = lazy(() => import('./ArmyDataCh15Bandit1'));
const FE5ArmyDataCh15Bandit2 = lazy(() => import('./ArmyDataCh15Bandit2'));
const FE5ArmyDataCh15Bandit3 = lazy(() => import('./ArmyDataCh15Bandit3'));
const FE5ArmyDataCh15Bandit4 = lazy(() => import('./ArmyDataCh15Bandit4'));
const FE5ArmyDataCh15Shanam = lazy(() => import('./ArmyDataCh15Shanam'));
const FE5ArmyDataCh15Thief = lazy(() => import('./ArmyDataCh15Thief'));
const FE5ArmyDataCh15Zail = lazy(() => import('./ArmyDataCh15Zail'));
const FE5ArmyDataCh16ABluke = lazy(() => import('./ArmyDataCh16ABluke'));
const FE5ArmyDataCh16AConomore = lazy(() => import('./ArmyDataCh16AConomore'));
const FE5ArmyDataCh16ANikolaf = lazy(() => import('./ArmyDataCh16ANikolaf'));
const FE5ArmyDataCh16ASilesia = lazy(() => import('./ArmyDataCh16ASilesia'));
const FE5ArmyDataCh16ASleuf = lazy(() => import('./ArmyDataCh16ASleuf'));
const FE5Shanam = lazy(() => import('./Shanam'));
const FE5ArmyDataCh16BReincock = lazy(() => import('./ArmyDataCh16BReincock'));
const FE5Ishtar = lazy(() => import('./Ishtar'));
const FE5ArmyDataCh17AMyura = lazy(() => import('./ArmyDataCh17AMyura'));
const FE5Misha = lazy(() => import('./Misha'));
const FE5ArmyDataCh17BAmalda = lazy(() => import('./ArmyDataCh17BAmalda'));
const FE5ArmyDataCh17BFreege = lazy(() => import('./ArmyDataCh17BFreege'));
const FE5ArmyDataCh17BPalman = lazy(() => import('./ArmyDataCh17BPalman'));
const FE5ArmyDataCh17BResistance = lazy(() => import('./ArmyDataCh17BResistance'));
const FE5ArmyDataCh18Freege1 = lazy(() => import('./ArmyDataCh18Freege1'));
const FE5ArmyDataCh18Freege2 = lazy(() => import('./ArmyDataCh18Freege2'));
const FE5Xavier = lazy(() => import('./Xavier'));
const FE5ArmyDataCh18Roputo = lazy(() => import('./ArmyDataCh18Roputo'));
const FE5Conomore = lazy(() => import('./Conomore'));
const FE5ArmyDataCh19Bandit = lazy(() => import('./ArmyDataCh19Bandit'));
const FE5ArmyDataCh19Freege1 = lazy(() => import('./ArmyDataCh19Freege1'));
const FE5ArmyDataCh19Freege2 = lazy(() => import('./ArmyDataCh19Freege2'));
const FE5Leidrick = lazy(() => import('./Leidrick'));
const FE5ArmyDataCh19Leidrick = lazy(() => import('./ArmyDataCh19Leidrick'));
const FE5ArmyDataCh19NPCs = lazy(() => import('./ArmyDataCh19NPCs'));
const FE5ArmyDataCh19Thief = lazy(() => import('./ArmyDataCh19Thief'));
const FE5ArmyDataCh19Wolf = lazy(() => import('./ArmyDataCh19Wolf'));
const FE5ArmyDataCh2Bugs = lazy(() => import('./ArmyDataCh2Bugs'));
const FE5ArmyDataCh2RifisGang1 = lazy(() => import('./ArmyDataCh2RifisGang1'));
const FE5ArmyDataCh2RifisGang2 = lazy(() => import('./ArmyDataCh2RifisGang2'));
const FE5ArmyDataCh2RifisGang3 = lazy(() => import('./ArmyDataCh2RifisGang3'));
const FE5ArmyDataCh2RifisGang4 = lazy(() => import('./ArmyDataCh2RifisGang4'));
const FE5ArmyDataCh2RifisGang5 = lazy(() => import('./ArmyDataCh2RifisGang5'));
const FE5ArmyDataCh2RifisGang6 = lazy(() => import('./ArmyDataCh2RifisGang6'));
const FE5ArmyDataCh2RifisGang7 = lazy(() => import('./ArmyDataCh2RifisGang7'));
const FE5ArmyDataCh2RifisGang8 = lazy(() => import('./ArmyDataCh2RifisGang8'));
const FE5ArmyDataCh2Ronan = lazy(() => import('./ArmyDataCh2Ronan'));
const FE5ArmyDataCh20Barrat = lazy(() => import('./ArmyDataCh20Barrat'));
const FE5ArmyDataCh20Freege1 = lazy(() => import('./ArmyDataCh20Freege1'));
const FE5ArmyDataCh20Freege2 = lazy(() => import('./ArmyDataCh20Freege2'));
const FE5ArmyDataCh20Freege3 = lazy(() => import('./ArmyDataCh20Freege3'));
const FE5ArmyDataCh20Freege4 = lazy(() => import('./ArmyDataCh20Freege4'));
const FE5ArmyDataCh20Freege5 = lazy(() => import('./ArmyDataCh20Freege5'));
const FE5ArmyDataCh20Freege6 = lazy(() => import('./ArmyDataCh20Freege6'));
const FE5ArmyDataCh20Freege7 = lazy(() => import('./ArmyDataCh20Freege7'));
const FE5ArmyDataCh20Freege8 = lazy(() => import('./ArmyDataCh20Freege8'));
const FE5ArmyDataCh20Reinhardt = lazy(() => import('./ArmyDataCh20Reinhardt'));
const FE5ArmyDataCh21Delmud = lazy(() => import('./ArmyDataCh21Delmud'));
const FE5ArmyDataCh21Freege = lazy(() => import('./ArmyDataCh21Freege'));
const FE5ArmyDataCh21Freege2 = lazy(() => import('./ArmyDataCh21Freege2'));
const FE5ArmyDataCh21Phlaus = lazy(() => import('./ArmyDataCh21Phlaus'));
const FE5ArmyDataCh21Roputo = lazy(() => import('./ArmyDataCh21Roputo'));
const FE5ArmyDataCh21Semitol = lazy(() => import('./ArmyDataCh21Semitol'));
const FE5ArmyDataCh21xFreege = lazy(() => import('./ArmyDataCh21xFreege'));
const FE5ArmyDataCh21xFreege2 = lazy(() => import('./ArmyDataCh21xFreege2'));
const FE5ArmyDataCh21xFreege3 = lazy(() => import('./ArmyDataCh21xFreege3'));
const FE5ArmyDataCh21xRoputo = lazy(() => import('./ArmyDataCh21xRoputo'));
const FE5ArmyDataCh21xRoputo2 = lazy(() => import('./ArmyDataCh21xRoputo2'));
const FE5ArmyDataCh21xZaom = lazy(() => import('./ArmyDataCh21xZaom'));
const FE5Koen = lazy(() => import('./Koen'));
const FE5ArmyDataCh22Freege = lazy(() => import('./ArmyDataCh22Freege'));
const FE5ArmyDataCh22Freege2 = lazy(() => import('./ArmyDataCh22Freege2'));
const FE5Ferdan = lazy(() => import('./Ferdan'));
const FE5Sety = lazy(() => import('./Sety'));
const FE5ArmyDataCh23Manster = lazy(() => import('./ArmyDataCh23Manster'));
const FE5ArmyDataCh23NPCs = lazy(() => import('./ArmyDataCh23NPCs'));
const FE5ArmyDataCh23Thief = lazy(() => import('./ArmyDataCh23Thief'));
const FE5Beldo = lazy(() => import('./Beldo'));
const FE5ArmyDataCh24Leidrick = lazy(() => import('./ArmyDataCh24Leidrick'));
const FE5ArmyDataCh24Manster = lazy(() => import('./ArmyDataCh24Manster'));
const FE5ArmyDataCh24Roputo = lazy(() => import('./ArmyDataCh24Roputo'));
const FE5ArmyDataCh24Roputo2 = lazy(() => import('./ArmyDataCh24Roputo2'));
const FE5ArmyDataCh24xLopto = lazy(() => import('./ArmyDataCh24xLopto'));
const FE5ArmyDataCh24xRoputo = lazy(() => import('./ArmyDataCh24xRoputo'));
const FE5ArmyDataCh24xSniper = lazy(() => import('./ArmyDataCh24xSniper'));
const FE5ArmyDataCh2xRifisGang1 = lazy(() => import('./ArmyDataCh2xRifisGang1'));
const FE5ArmyDataCh2xRifisGang2 = lazy(() => import('./ArmyDataCh2xRifisGang2'));
const FE5ArmyDataCh2xRifisGang3 = lazy(() => import('./ArmyDataCh2xRifisGang3'));
const FE5ArmyDataCh2xRifisGang4 = lazy(() => import('./ArmyDataCh2xRifisGang4'));
const FE5ArmyDataCh2xRifisGang5 = lazy(() => import('./ArmyDataCh2xRifisGang5'));
const FE5ArmyDataCh2xRifisGang6 = lazy(() => import('./ArmyDataCh2xRifisGang6'));
const FE5Shiva = lazy(() => import('./Shiva'));
const FE5ArmyDataCh2xSaphy = lazy(() => import('./ArmyDataCh2xSaphy'));
const FE5ArmyDataCh3Manster1 = lazy(() => import('./ArmyDataCh3Manster1'));
const FE5ArmyDataCh3Manster2 = lazy(() => import('./ArmyDataCh3Manster2'));
const FE5ArmyDataCh3Manster3 = lazy(() => import('./ArmyDataCh3Manster3'));
const FE5ArmyDataCh3Manster4 = lazy(() => import('./ArmyDataCh3Manster4'));
const FE5ArmyDataCh3Manster5 = lazy(() => import('./ArmyDataCh3Manster5'));
const FE5ArmyDataCh3Manster6 = lazy(() => import('./ArmyDataCh3Manster6'));
const FE5ArmyDataCh3NPCs = lazy(() => import('./ArmyDataCh3NPCs'));
const FE5ArmyDataCh3Thracia = lazy(() => import('./ArmyDataCh3Thracia'));
const FE5ArmyDataCh4Bandit = lazy(() => import('./ArmyDataCh4Bandit'));
const FE5ArmyDataCh4Dalshein = lazy(() => import('./ArmyDataCh4Dalshein'));
const FE5Karin = lazy(() => import('./Karin'));
const FE5Manfroy = lazy(() => import('./Manfroy'));
const FE5ArmyDataCh4Manster1 = lazy(() => import('./ArmyDataCh4Manster1'));
const FE5ArmyDataCh4Manster2 = lazy(() => import('./ArmyDataCh4Manster2'));
const FE5ArmyDataCh4Manster3 = lazy(() => import('./ArmyDataCh4Manster3'));
const FE5ArmyDataCh4Manster4 = lazy(() => import('./ArmyDataCh4Manster4'));
const FE5ArmyDataCh4NPCs1 = lazy(() => import('./ArmyDataCh4NPCs1'));
const FE5ArmyDataCh4NPCs2 = lazy(() => import('./ArmyDataCh4NPCs2'));
const FE5Lara = lazy(() => import('./Lara'));
const FE5Sety4G = lazy(() => import('./Sety4G'));
const FE5ArmyDataCh4xManster1 = lazy(() => import('./ArmyDataCh4xManster1'));
const FE5ArmyDataCh4xManster2 = lazy(() => import('./ArmyDataCh4xManster2'));
const FE5ArmyDataCh4xManster3 = lazy(() => import('./ArmyDataCh4xManster3'));
const FE5ArmyDataCh4xNPCs = lazy(() => import('./ArmyDataCh4xNPCs'));
const FE5ArmyDataCh5August = lazy(() => import('./ArmyDataCh5August'));
const FE5ArmyDataCh5Manster1 = lazy(() => import('./ArmyDataCh5Manster1'));
const FE5ArmyDataCh5Manster2 = lazy(() => import('./ArmyDataCh5Manster2'));
const FE5ArmyDataCh5Manster3 = lazy(() => import('./ArmyDataCh5Manster3'));
const FE5Galzus = lazy(() => import('./Galzus'));
const FE5ArmyDataCh5Nanna = lazy(() => import('./ArmyDataCh5Nanna'));
const FE5Cyas = lazy(() => import('./Cyas'));
const FE5ArmyDataCh6Hicks = lazy(() => import('./ArmyDataCh6Hicks'));
const FE5ArmyDataCh6Manster1 = lazy(() => import('./ArmyDataCh6Manster1'));
const FE5ArmyDataCh6Manster2 = lazy(() => import('./ArmyDataCh6Manster2'));
const FE5ArmyDataCh6Manster3 = lazy(() => import('./ArmyDataCh6Manster3'));
const FE5ArmyDataCh6Manster4 = lazy(() => import('./ArmyDataCh6Manster4'));
const FE5ArmyDataCh6Manster5 = lazy(() => import('./ArmyDataCh6Manster5'));
const FE5ArmyDataCh6Sety4G = lazy(() => import('./ArmyDataCh6Sety4G'));
const FE5ArmyDataCh7Bandit = lazy(() => import('./ArmyDataCh7Bandit'));
const FE5ArmyDataCh7Hannibal = lazy(() => import('./ArmyDataCh7Hannibal'));
const FE5ArmyDataCh7Izenau = lazy(() => import('./ArmyDataCh7Izenau'));
const FE5ArmyDataCh7Leidrick = lazy(() => import('./ArmyDataCh7Leidrick'));
const FE5ArmyDataCh7Manster1 = lazy(() => import('./ArmyDataCh7Manster1'));
const FE5ArmyDataCh7Manster2 = lazy(() => import('./ArmyDataCh7Manster2'));
const FE5ArmyDataCh7Manster3 = lazy(() => import('./ArmyDataCh7Manster3'));
const FE5ArmyDataCh7Shiva = lazy(() => import('./ArmyDataCh7Shiva'));
const FE5ArmyDataCh7Thracia = lazy(() => import('./ArmyDataCh7Thracia'));
const FE5ArmyDataCh8Bandit1 = lazy(() => import('./ArmyDataCh8Bandit1'));
const FE5ArmyDataCh8Bandit2 = lazy(() => import('./ArmyDataCh8Bandit2'));
const FE5ArmyDataCh8Carrion = lazy(() => import('./ArmyDataCh8Carrion'));
const FE5ArmyDataCh8xGomez = lazy(() => import('./ArmyDataCh8xGomez'));
const FE5Roberto = lazy(() => import('./Roberto'));
const FE5ArmyDataCh9Altenna = lazy(() => import('./ArmyDataCh9Altenna'));
const FE5Torabant = lazy(() => import('./Torabant'));
const FE5ArmyDataCh9Mallock = lazy(() => import('./ArmyDataCh9Mallock'));
const FE5Kein = lazy(() => import('./Kein'));
const FE5ArmyDataCh9Thracia1 = lazy(() => import('./ArmyDataCh9Thracia1'));
const FE5ArmyDataCh9Thracia2 = lazy(() => import('./ArmyDataCh9Thracia2'));
const FE5ArmyDataChFinalBeldo = lazy(() => import('./ArmyDataChFinalBeldo'));
const FE5ArmyDataChFinalDarkSoldiers = lazy(() => import('./ArmyDataChFinalDarkSoldiers'));
const FE5Ch1LeafFinnEyvelOthinHalvan = lazy(() => import('./Ch1LeafFinnEyvelOthinHalvan'));
const FE5Ch1MartyDagudarTanya = lazy(() => import('./Ch1MartyDagudarTanya'));
const FE5ArenaClassEditor1 = lazy(() => import('./ArenaClassEditor1'));
const FE5ArenaClassEditor2 = lazy(() => import('./ArenaClassEditor2'));
const FE5ArenaClassEditor3 = lazy(() => import('./ArenaClassEditor3'));
const FE5ArenaWeaponEditor = lazy(() => import('./ArenaWeaponEditor'));
const FE5BattleAnimationEditor = lazy(() => import('./BattleAnimationEditor'));
const FE5BattleSpriteEditor = lazy(() => import('./BattleSpriteEditor'));
const FE5BossQuoteEditor = lazy(() => import('./BossQuoteEditor'));
const FE5CharacterEditor = lazy(() => import('./CharacterEditor'));
const FE5ClassEditor = lazy(() => import('./ClassEditor'));
const FE5CustomEffectivenessEditor = lazy(() => import('./CustomEffectivenessEditor'));
const FE5CustomStatBonusesEditor = lazy(() => import('./CustomStatBonusesEditor'));
const FE5CustomWeaponLockEditor = lazy(() => import('./CustomWeaponLockEditor'));
const FE5DeathQuoteEditor = lazy(() => import('./DeathQuoteEditor'));
const FE5EscapeQuoteEditor = lazy(() => import('./EscapeQuoteEditor'));
const FE5ItemEditor = lazy(() => import('./ItemEditor'));
const FE5MagicAnimationEditor = lazy(() => import('./MagicAnimationEditor'));
const FE5DismountEditor = lazy(() => import('./DismountEditor'));
const FE5PortraittoMapRelationEditor = lazy(() => import('./PortraittoMapRelationEditor'));
const FE5PromotionEditor = lazy(() => import('./PromotionEditor'));
const FE5ScrollsEditor = lazy(() => import('./ScrollsEditor'));
const FE5ShieldAssociationEditor = lazy(() => import('./ShieldAssociationEditor'));
const FE5SupportsEditor = lazy(() => import('./SupportsEditor'));
const FE5TerrainMovementCostEditor = lazy(() => import('./TerrainMovementCostEditor'));
const FE5WeaponTriangleBonusEditor = lazy(() => import('./WeaponTriangleBonusEditor'));
const FE5WeaponTriangleEditor = lazy(() => import('./WeaponTriangleEditor'));
const FE5LeafFinnEyvelOthinHalvan = lazy(() => import('./LeafFinnEyvelOthinHalvan'));
const FE5MartyDagudarTanya = lazy(() => import('./MartyDagudarTanya'));

export const FE5Routes = {
  path: 'FE5',
  element: <FE5 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE5HomePage /></Suspense> },
    { path: 'ArmyDataCh23Koruta', element: <Suspense fallback={loading}><FE5ArmyDataCh23Koruta /></Suspense> },
    { path: 'ArmyDataCh1Manster1', element: <Suspense fallback={loading}><FE5ArmyDataCh1Manster1 /></Suspense> },
    { path: 'ArmyDataCh1Manster2', element: <Suspense fallback={loading}><FE5ArmyDataCh1Manster2 /></Suspense> },
    { path: 'ArmyDataCh1Manster3', element: <Suspense fallback={loading}><FE5ArmyDataCh1Manster3 /></Suspense> },
    { path: 'Nanna', element: <Suspense fallback={loading}><FE5Nanna /></Suspense> },
    { path: 'ArmyDataCh1Weissman', element: <Suspense fallback={loading}><FE5ArmyDataCh1Weissman /></Suspense> },
    { path: 'Oruen', element: <Suspense fallback={loading}><FE5Oruen /></Suspense> },
    { path: 'ArmyDataCh10Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh10Freege1 /></Suspense> },
    { path: 'ArmyDataCh10Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh10Freege2 /></Suspense> },
    { path: 'ArmyDataCh10Freege3', element: <Suspense fallback={loading}><FE5ArmyDataCh10Freege3 /></Suspense> },
    { path: 'ArmyDataCh10Ralgo', element: <Suspense fallback={loading}><FE5ArmyDataCh10Ralgo /></Suspense> },
    { path: 'ArmyDataCh11Fred', element: <Suspense fallback={loading}><FE5ArmyDataCh11Fred /></Suspense> },
    { path: 'ArmyDataCh11Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh11Freege1 /></Suspense> },
    { path: 'ArmyDataCh11Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh11Freege2 /></Suspense> },
    { path: 'ArmyDataCh11Oruen', element: <Suspense fallback={loading}><FE5ArmyDataCh11Oruen /></Suspense> },
    { path: 'ArmyDataCh11xFred', element: <Suspense fallback={loading}><FE5ArmyDataCh11xFred /></Suspense> },
    { path: 'ArmyDataCh11xFreege1', element: <Suspense fallback={loading}><FE5ArmyDataCh11xFreege1 /></Suspense> },
    { path: 'ArmyDataCh11xFreege2', element: <Suspense fallback={loading}><FE5ArmyDataCh11xFreege2 /></Suspense> },
    { path: 'ArmyDataCh11xFreege3', element: <Suspense fallback={loading}><FE5ArmyDataCh11xFreege3 /></Suspense> },
    { path: 'ArmyDataCh11xFreege4', element: <Suspense fallback={loading}><FE5ArmyDataCh11xFreege4 /></Suspense> },
    { path: 'ArmyDataCh11xNPCs', element: <Suspense fallback={loading}><FE5ArmyDataCh11xNPCs /></Suspense> },
    { path: 'ArmyDataCh11xOruen', element: <Suspense fallback={loading}><FE5ArmyDataCh11xOruen /></Suspense> },
    { path: 'ArmyDataCh12Mareeta', element: <Suspense fallback={loading}><FE5ArmyDataCh12Mareeta /></Suspense> },
    { path: 'ArmyDataCh12Seiram', element: <Suspense fallback={loading}><FE5ArmyDataCh12Seiram /></Suspense> },
    { path: 'ArmyDataCh12xBowFighter', element: <Suspense fallback={loading}><FE5ArmyDataCh12xBowFighter /></Suspense> },
    { path: 'Tina', element: <Suspense fallback={loading}><FE5Tina /></Suspense> },
    { path: 'ArmyDataCh13Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh13Freege1 /></Suspense> },
    { path: 'ArmyDataCh13Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh13Freege2 /></Suspense> },
    { path: 'ArmyDataCh13Glade', element: <Suspense fallback={loading}><FE5ArmyDataCh13Glade /></Suspense> },
    { path: 'ArmyDataCh13Lenster', element: <Suspense fallback={loading}><FE5ArmyDataCh13Lenster /></Suspense> },
    { path: 'ArmyDataCh13Paluce', element: <Suspense fallback={loading}><FE5ArmyDataCh13Paluce /></Suspense> },
    { path: 'ArmyDataCh14Aightman', element: <Suspense fallback={loading}><FE5ArmyDataCh14Aightman /></Suspense> },
    { path: 'Eda', element: <Suspense fallback={loading}><FE5Eda /></Suspense> },
    { path: 'ArmyDataCh14Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh14Freege1 /></Suspense> },
    { path: 'ArmyDataCh14Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh14Freege2 /></Suspense> },
    { path: 'ArmyDataCh14Freege3', element: <Suspense fallback={loading}><FE5ArmyDataCh14Freege3 /></Suspense> },
    { path: 'ArmyDataCh14Linonan', element: <Suspense fallback={loading}><FE5ArmyDataCh14Linonan /></Suspense> },
    { path: 'ArmyDataCh14Makroi', element: <Suspense fallback={loading}><FE5ArmyDataCh14Makroi /></Suspense> },
    { path: 'ArmyDataCh14Roputo', element: <Suspense fallback={loading}><FE5ArmyDataCh14Roputo /></Suspense> },
    { path: 'Linonan', element: <Suspense fallback={loading}><FE5Linonan /></Suspense> },
    { path: 'Ralf', element: <Suspense fallback={loading}><FE5Ralf /></Suspense> },
    { path: 'ArmyDataCh15Bandit1', element: <Suspense fallback={loading}><FE5ArmyDataCh15Bandit1 /></Suspense> },
    { path: 'ArmyDataCh15Bandit2', element: <Suspense fallback={loading}><FE5ArmyDataCh15Bandit2 /></Suspense> },
    { path: 'ArmyDataCh15Bandit3', element: <Suspense fallback={loading}><FE5ArmyDataCh15Bandit3 /></Suspense> },
    { path: 'ArmyDataCh15Bandit4', element: <Suspense fallback={loading}><FE5ArmyDataCh15Bandit4 /></Suspense> },
    { path: 'ArmyDataCh15Shanam', element: <Suspense fallback={loading}><FE5ArmyDataCh15Shanam /></Suspense> },
    { path: 'ArmyDataCh15Thief', element: <Suspense fallback={loading}><FE5ArmyDataCh15Thief /></Suspense> },
    { path: 'ArmyDataCh15Zail', element: <Suspense fallback={loading}><FE5ArmyDataCh15Zail /></Suspense> },
    { path: 'ArmyDataCh16ABluke', element: <Suspense fallback={loading}><FE5ArmyDataCh16ABluke /></Suspense> },
    { path: 'ArmyDataCh16AConomore', element: <Suspense fallback={loading}><FE5ArmyDataCh16AConomore /></Suspense> },
    { path: 'ArmyDataCh16ANikolaf', element: <Suspense fallback={loading}><FE5ArmyDataCh16ANikolaf /></Suspense> },
    { path: 'ArmyDataCh16ASilesia', element: <Suspense fallback={loading}><FE5ArmyDataCh16ASilesia /></Suspense> },
    { path: 'ArmyDataCh16ASleuf', element: <Suspense fallback={loading}><FE5ArmyDataCh16ASleuf /></Suspense> },
    { path: 'Shanam', element: <Suspense fallback={loading}><FE5Shanam /></Suspense> },
    { path: 'ArmyDataCh16BReincock', element: <Suspense fallback={loading}><FE5ArmyDataCh16BReincock /></Suspense> },
    { path: 'Ishtar', element: <Suspense fallback={loading}><FE5Ishtar /></Suspense> },
    { path: 'ArmyDataCh17AMyura', element: <Suspense fallback={loading}><FE5ArmyDataCh17AMyura /></Suspense> },
    { path: 'Misha', element: <Suspense fallback={loading}><FE5Misha /></Suspense> },
    { path: 'ArmyDataCh17BAmalda', element: <Suspense fallback={loading}><FE5ArmyDataCh17BAmalda /></Suspense> },
    { path: 'ArmyDataCh17BFreege', element: <Suspense fallback={loading}><FE5ArmyDataCh17BFreege /></Suspense> },
    { path: 'ArmyDataCh17BPalman', element: <Suspense fallback={loading}><FE5ArmyDataCh17BPalman /></Suspense> },
    { path: 'ArmyDataCh17BResistance', element: <Suspense fallback={loading}><FE5ArmyDataCh17BResistance /></Suspense> },
    { path: 'ArmyDataCh18Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh18Freege1 /></Suspense> },
    { path: 'ArmyDataCh18Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh18Freege2 /></Suspense> },
    { path: 'Xavier', element: <Suspense fallback={loading}><FE5Xavier /></Suspense> },
    { path: 'ArmyDataCh18Roputo', element: <Suspense fallback={loading}><FE5ArmyDataCh18Roputo /></Suspense> },
    { path: 'Conomore', element: <Suspense fallback={loading}><FE5Conomore /></Suspense> },
    { path: 'ArmyDataCh19Bandit', element: <Suspense fallback={loading}><FE5ArmyDataCh19Bandit /></Suspense> },
    { path: 'ArmyDataCh19Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh19Freege1 /></Suspense> },
    { path: 'ArmyDataCh19Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh19Freege2 /></Suspense> },
    { path: 'Leidrick', element: <Suspense fallback={loading}><FE5Leidrick /></Suspense> },
    { path: 'ArmyDataCh19Leidrick', element: <Suspense fallback={loading}><FE5ArmyDataCh19Leidrick /></Suspense> },
    { path: 'ArmyDataCh19NPCs', element: <Suspense fallback={loading}><FE5ArmyDataCh19NPCs /></Suspense> },
    { path: 'ArmyDataCh19Thief', element: <Suspense fallback={loading}><FE5ArmyDataCh19Thief /></Suspense> },
    { path: 'ArmyDataCh19Wolf', element: <Suspense fallback={loading}><FE5ArmyDataCh19Wolf /></Suspense> },
    { path: 'ArmyDataCh2Bugs', element: <Suspense fallback={loading}><FE5ArmyDataCh2Bugs /></Suspense> },
    { path: 'ArmyDataCh2RifisGang1', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang1 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang2', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang2 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang3', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang3 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang4', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang4 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang5', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang5 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang6', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang6 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang7', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang7 /></Suspense> },
    { path: 'ArmyDataCh2RifisGang8', element: <Suspense fallback={loading}><FE5ArmyDataCh2RifisGang8 /></Suspense> },
    { path: 'ArmyDataCh2Ronan', element: <Suspense fallback={loading}><FE5ArmyDataCh2Ronan /></Suspense> },
    { path: 'ArmyDataCh20Barrat', element: <Suspense fallback={loading}><FE5ArmyDataCh20Barrat /></Suspense> },
    { path: 'ArmyDataCh20Freege1', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege1 /></Suspense> },
    { path: 'ArmyDataCh20Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege2 /></Suspense> },
    { path: 'ArmyDataCh20Freege3', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege3 /></Suspense> },
    { path: 'ArmyDataCh20Freege4', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege4 /></Suspense> },
    { path: 'ArmyDataCh20Freege5', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege5 /></Suspense> },
    { path: 'ArmyDataCh20Freege6', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege6 /></Suspense> },
    { path: 'ArmyDataCh20Freege7', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege7 /></Suspense> },
    { path: 'ArmyDataCh20Freege8', element: <Suspense fallback={loading}><FE5ArmyDataCh20Freege8 /></Suspense> },
    { path: 'ArmyDataCh20Reinhardt', element: <Suspense fallback={loading}><FE5ArmyDataCh20Reinhardt /></Suspense> },
    { path: 'ArmyDataCh21Delmud', element: <Suspense fallback={loading}><FE5ArmyDataCh21Delmud /></Suspense> },
    { path: 'ArmyDataCh21Freege', element: <Suspense fallback={loading}><FE5ArmyDataCh21Freege /></Suspense> },
    { path: 'ArmyDataCh21Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh21Freege2 /></Suspense> },
    { path: 'ArmyDataCh21Phlaus', element: <Suspense fallback={loading}><FE5ArmyDataCh21Phlaus /></Suspense> },
    { path: 'ArmyDataCh21Roputo', element: <Suspense fallback={loading}><FE5ArmyDataCh21Roputo /></Suspense> },
    { path: 'ArmyDataCh21Semitol', element: <Suspense fallback={loading}><FE5ArmyDataCh21Semitol /></Suspense> },
    { path: 'ArmyDataCh21xFreege', element: <Suspense fallback={loading}><FE5ArmyDataCh21xFreege /></Suspense> },
    { path: 'ArmyDataCh21xFreege2', element: <Suspense fallback={loading}><FE5ArmyDataCh21xFreege2 /></Suspense> },
    { path: 'ArmyDataCh21xFreege3', element: <Suspense fallback={loading}><FE5ArmyDataCh21xFreege3 /></Suspense> },
    { path: 'ArmyDataCh21xRoputo', element: <Suspense fallback={loading}><FE5ArmyDataCh21xRoputo /></Suspense> },
    { path: 'ArmyDataCh21xRoputo2', element: <Suspense fallback={loading}><FE5ArmyDataCh21xRoputo2 /></Suspense> },
    { path: 'ArmyDataCh21xZaom', element: <Suspense fallback={loading}><FE5ArmyDataCh21xZaom /></Suspense> },
    { path: 'Koen', element: <Suspense fallback={loading}><FE5Koen /></Suspense> },
    { path: 'ArmyDataCh22Freege', element: <Suspense fallback={loading}><FE5ArmyDataCh22Freege /></Suspense> },
    { path: 'ArmyDataCh22Freege2', element: <Suspense fallback={loading}><FE5ArmyDataCh22Freege2 /></Suspense> },
    { path: 'Ferdan', element: <Suspense fallback={loading}><FE5Ferdan /></Suspense> },
    { path: 'Sety', element: <Suspense fallback={loading}><FE5Sety /></Suspense> },
    { path: 'ArmyDataCh23Manster', element: <Suspense fallback={loading}><FE5ArmyDataCh23Manster /></Suspense> },
    { path: 'ArmyDataCh23NPCs', element: <Suspense fallback={loading}><FE5ArmyDataCh23NPCs /></Suspense> },
    { path: 'ArmyDataCh23Thief', element: <Suspense fallback={loading}><FE5ArmyDataCh23Thief /></Suspense> },
    { path: 'Beldo', element: <Suspense fallback={loading}><FE5Beldo /></Suspense> },
    { path: 'ArmyDataCh24Leidrick', element: <Suspense fallback={loading}><FE5ArmyDataCh24Leidrick /></Suspense> },
    { path: 'ArmyDataCh24Manster', element: <Suspense fallback={loading}><FE5ArmyDataCh24Manster /></Suspense> },
    { path: 'ArmyDataCh24Roputo', element: <Suspense fallback={loading}><FE5ArmyDataCh24Roputo /></Suspense> },
    { path: 'ArmyDataCh24Roputo2', element: <Suspense fallback={loading}><FE5ArmyDataCh24Roputo2 /></Suspense> },
    { path: 'ArmyDataCh24xLopto', element: <Suspense fallback={loading}><FE5ArmyDataCh24xLopto /></Suspense> },
    { path: 'ArmyDataCh24xRoputo', element: <Suspense fallback={loading}><FE5ArmyDataCh24xRoputo /></Suspense> },
    { path: 'ArmyDataCh24xSniper', element: <Suspense fallback={loading}><FE5ArmyDataCh24xSniper /></Suspense> },
    { path: 'ArmyDataCh2xRifisGang1', element: <Suspense fallback={loading}><FE5ArmyDataCh2xRifisGang1 /></Suspense> },
    { path: 'ArmyDataCh2xRifisGang2', element: <Suspense fallback={loading}><FE5ArmyDataCh2xRifisGang2 /></Suspense> },
    { path: 'ArmyDataCh2xRifisGang3', element: <Suspense fallback={loading}><FE5ArmyDataCh2xRifisGang3 /></Suspense> },
    { path: 'ArmyDataCh2xRifisGang4', element: <Suspense fallback={loading}><FE5ArmyDataCh2xRifisGang4 /></Suspense> },
    { path: 'ArmyDataCh2xRifisGang5', element: <Suspense fallback={loading}><FE5ArmyDataCh2xRifisGang5 /></Suspense> },
    { path: 'ArmyDataCh2xRifisGang6', element: <Suspense fallback={loading}><FE5ArmyDataCh2xRifisGang6 /></Suspense> },
    { path: 'Shiva', element: <Suspense fallback={loading}><FE5Shiva /></Suspense> },
    { path: 'ArmyDataCh2xSaphy', element: <Suspense fallback={loading}><FE5ArmyDataCh2xSaphy /></Suspense> },
    { path: 'ArmyDataCh3Manster1', element: <Suspense fallback={loading}><FE5ArmyDataCh3Manster1 /></Suspense> },
    { path: 'ArmyDataCh3Manster2', element: <Suspense fallback={loading}><FE5ArmyDataCh3Manster2 /></Suspense> },
    { path: 'ArmyDataCh3Manster3', element: <Suspense fallback={loading}><FE5ArmyDataCh3Manster3 /></Suspense> },
    { path: 'ArmyDataCh3Manster4', element: <Suspense fallback={loading}><FE5ArmyDataCh3Manster4 /></Suspense> },
    { path: 'ArmyDataCh3Manster5', element: <Suspense fallback={loading}><FE5ArmyDataCh3Manster5 /></Suspense> },
    { path: 'ArmyDataCh3Manster6', element: <Suspense fallback={loading}><FE5ArmyDataCh3Manster6 /></Suspense> },
    { path: 'ArmyDataCh3NPCs', element: <Suspense fallback={loading}><FE5ArmyDataCh3NPCs /></Suspense> },
    { path: 'ArmyDataCh3Thracia', element: <Suspense fallback={loading}><FE5ArmyDataCh3Thracia /></Suspense> },
    { path: 'ArmyDataCh4Bandit', element: <Suspense fallback={loading}><FE5ArmyDataCh4Bandit /></Suspense> },
    { path: 'ArmyDataCh4Dalshein', element: <Suspense fallback={loading}><FE5ArmyDataCh4Dalshein /></Suspense> },
    { path: 'Karin', element: <Suspense fallback={loading}><FE5Karin /></Suspense> },
    { path: 'Manfroy', element: <Suspense fallback={loading}><FE5Manfroy /></Suspense> },
    { path: 'ArmyDataCh4Manster1', element: <Suspense fallback={loading}><FE5ArmyDataCh4Manster1 /></Suspense> },
    { path: 'ArmyDataCh4Manster2', element: <Suspense fallback={loading}><FE5ArmyDataCh4Manster2 /></Suspense> },
    { path: 'ArmyDataCh4Manster3', element: <Suspense fallback={loading}><FE5ArmyDataCh4Manster3 /></Suspense> },
    { path: 'ArmyDataCh4Manster4', element: <Suspense fallback={loading}><FE5ArmyDataCh4Manster4 /></Suspense> },
    { path: 'ArmyDataCh4NPCs1', element: <Suspense fallback={loading}><FE5ArmyDataCh4NPCs1 /></Suspense> },
    { path: 'ArmyDataCh4NPCs2', element: <Suspense fallback={loading}><FE5ArmyDataCh4NPCs2 /></Suspense> },
    { path: 'Lara', element: <Suspense fallback={loading}><FE5Lara /></Suspense> },
    { path: 'Sety4G', element: <Suspense fallback={loading}><FE5Sety4G /></Suspense> },
    { path: 'ArmyDataCh4xManster1', element: <Suspense fallback={loading}><FE5ArmyDataCh4xManster1 /></Suspense> },
    { path: 'ArmyDataCh4xManster2', element: <Suspense fallback={loading}><FE5ArmyDataCh4xManster2 /></Suspense> },
    { path: 'ArmyDataCh4xManster3', element: <Suspense fallback={loading}><FE5ArmyDataCh4xManster3 /></Suspense> },
    { path: 'ArmyDataCh4xNPCs', element: <Suspense fallback={loading}><FE5ArmyDataCh4xNPCs /></Suspense> },
    { path: 'ArmyDataCh5August', element: <Suspense fallback={loading}><FE5ArmyDataCh5August /></Suspense> },
    { path: 'ArmyDataCh5Manster1', element: <Suspense fallback={loading}><FE5ArmyDataCh5Manster1 /></Suspense> },
    { path: 'ArmyDataCh5Manster2', element: <Suspense fallback={loading}><FE5ArmyDataCh5Manster2 /></Suspense> },
    { path: 'ArmyDataCh5Manster3', element: <Suspense fallback={loading}><FE5ArmyDataCh5Manster3 /></Suspense> },
    { path: 'Galzus', element: <Suspense fallback={loading}><FE5Galzus /></Suspense> },
    { path: 'ArmyDataCh5Nanna', element: <Suspense fallback={loading}><FE5ArmyDataCh5Nanna /></Suspense> },
    { path: 'Cyas', element: <Suspense fallback={loading}><FE5Cyas /></Suspense> },
    { path: 'ArmyDataCh6Hicks', element: <Suspense fallback={loading}><FE5ArmyDataCh6Hicks /></Suspense> },
    { path: 'ArmyDataCh6Manster1', element: <Suspense fallback={loading}><FE5ArmyDataCh6Manster1 /></Suspense> },
    { path: 'ArmyDataCh6Manster2', element: <Suspense fallback={loading}><FE5ArmyDataCh6Manster2 /></Suspense> },
    { path: 'ArmyDataCh6Manster3', element: <Suspense fallback={loading}><FE5ArmyDataCh6Manster3 /></Suspense> },
    { path: 'ArmyDataCh6Manster4', element: <Suspense fallback={loading}><FE5ArmyDataCh6Manster4 /></Suspense> },
    { path: 'ArmyDataCh6Manster5', element: <Suspense fallback={loading}><FE5ArmyDataCh6Manster5 /></Suspense> },
    { path: 'ArmyDataCh6Sety4G', element: <Suspense fallback={loading}><FE5ArmyDataCh6Sety4G /></Suspense> },
    { path: 'ArmyDataCh7Bandit', element: <Suspense fallback={loading}><FE5ArmyDataCh7Bandit /></Suspense> },
    { path: 'ArmyDataCh7Hannibal', element: <Suspense fallback={loading}><FE5ArmyDataCh7Hannibal /></Suspense> },
    { path: 'ArmyDataCh7Izenau', element: <Suspense fallback={loading}><FE5ArmyDataCh7Izenau /></Suspense> },
    { path: 'ArmyDataCh7Leidrick', element: <Suspense fallback={loading}><FE5ArmyDataCh7Leidrick /></Suspense> },
    { path: 'ArmyDataCh7Manster1', element: <Suspense fallback={loading}><FE5ArmyDataCh7Manster1 /></Suspense> },
    { path: 'ArmyDataCh7Manster2', element: <Suspense fallback={loading}><FE5ArmyDataCh7Manster2 /></Suspense> },
    { path: 'ArmyDataCh7Manster3', element: <Suspense fallback={loading}><FE5ArmyDataCh7Manster3 /></Suspense> },
    { path: 'ArmyDataCh7Shiva', element: <Suspense fallback={loading}><FE5ArmyDataCh7Shiva /></Suspense> },
    { path: 'ArmyDataCh7Thracia', element: <Suspense fallback={loading}><FE5ArmyDataCh7Thracia /></Suspense> },
    { path: 'ArmyDataCh8Bandit1', element: <Suspense fallback={loading}><FE5ArmyDataCh8Bandit1 /></Suspense> },
    { path: 'ArmyDataCh8Bandit2', element: <Suspense fallback={loading}><FE5ArmyDataCh8Bandit2 /></Suspense> },
    { path: 'ArmyDataCh8Carrion', element: <Suspense fallback={loading}><FE5ArmyDataCh8Carrion /></Suspense> },
    { path: 'ArmyDataCh8xGomez', element: <Suspense fallback={loading}><FE5ArmyDataCh8xGomez /></Suspense> },
    { path: 'Roberto', element: <Suspense fallback={loading}><FE5Roberto /></Suspense> },
    { path: 'ArmyDataCh9Altenna', element: <Suspense fallback={loading}><FE5ArmyDataCh9Altenna /></Suspense> },
    { path: 'Torabant', element: <Suspense fallback={loading}><FE5Torabant /></Suspense> },
    { path: 'ArmyDataCh9Mallock', element: <Suspense fallback={loading}><FE5ArmyDataCh9Mallock /></Suspense> },
    { path: 'Kein', element: <Suspense fallback={loading}><FE5Kein /></Suspense> },
    { path: 'ArmyDataCh9Thracia1', element: <Suspense fallback={loading}><FE5ArmyDataCh9Thracia1 /></Suspense> },
    { path: 'ArmyDataCh9Thracia2', element: <Suspense fallback={loading}><FE5ArmyDataCh9Thracia2 /></Suspense> },
    { path: 'ArmyDataChFinalBeldo', element: <Suspense fallback={loading}><FE5ArmyDataChFinalBeldo /></Suspense> },
    { path: 'ArmyDataChFinalDarkSoldiers', element: <Suspense fallback={loading}><FE5ArmyDataChFinalDarkSoldiers /></Suspense> },
    { path: 'Ch1LeafFinnEyvelOthinHalvan', element: <Suspense fallback={loading}><FE5Ch1LeafFinnEyvelOthinHalvan /></Suspense> },
    { path: 'Ch1MartyDagudarTanya', element: <Suspense fallback={loading}><FE5Ch1MartyDagudarTanya /></Suspense> },
    { path: 'ArenaClassEditor1', element: <Suspense fallback={loading}><FE5ArenaClassEditor1 /></Suspense> },
    { path: 'ArenaClassEditor2', element: <Suspense fallback={loading}><FE5ArenaClassEditor2 /></Suspense> },
    { path: 'ArenaClassEditor3', element: <Suspense fallback={loading}><FE5ArenaClassEditor3 /></Suspense> },
    { path: 'ArenaWeaponEditor', element: <Suspense fallback={loading}><FE5ArenaWeaponEditor /></Suspense> },
    { path: 'BattleAnimationEditor', element: <Suspense fallback={loading}><FE5BattleAnimationEditor /></Suspense> },
    { path: 'BattleSpriteEditor', element: <Suspense fallback={loading}><FE5BattleSpriteEditor /></Suspense> },
    { path: 'BossQuoteEditor', element: <Suspense fallback={loading}><FE5BossQuoteEditor /></Suspense> },
    { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE5CharacterEditor /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE5ClassEditor /></Suspense> },
    { path: 'CustomEffectivenessEditor', element: <Suspense fallback={loading}><FE5CustomEffectivenessEditor /></Suspense> },
    { path: 'CustomStatBonusesEditor', element: <Suspense fallback={loading}><FE5CustomStatBonusesEditor /></Suspense> },
    { path: 'CustomWeaponLockEditor', element: <Suspense fallback={loading}><FE5CustomWeaponLockEditor /></Suspense> },
    { path: 'DeathQuoteEditor', element: <Suspense fallback={loading}><FE5DeathQuoteEditor /></Suspense> },
    { path: 'EscapeQuoteEditor', element: <Suspense fallback={loading}><FE5EscapeQuoteEditor /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE5ItemEditor /></Suspense> },
    { path: 'MagicAnimationEditor', element: <Suspense fallback={loading}><FE5MagicAnimationEditor /></Suspense> },
    { path: 'DismountEditor', element: <Suspense fallback={loading}><FE5DismountEditor /></Suspense> },
    { path: 'PortraittoMapRelationEditor', element: <Suspense fallback={loading}><FE5PortraittoMapRelationEditor /></Suspense> },
    { path: 'PromotionEditor', element: <Suspense fallback={loading}><FE5PromotionEditor /></Suspense> },
    { path: 'ScrollsEditor', element: <Suspense fallback={loading}><FE5ScrollsEditor /></Suspense> },
    { path: 'ShieldAssociationEditor', element: <Suspense fallback={loading}><FE5ShieldAssociationEditor /></Suspense> },
    { path: 'SupportsEditor', element: <Suspense fallback={loading}><FE5SupportsEditor /></Suspense> },
    { path: 'TerrainMovementCostEditor', element: <Suspense fallback={loading}><FE5TerrainMovementCostEditor /></Suspense> },
    { path: 'WeaponTriangleBonusEditor', element: <Suspense fallback={loading}><FE5WeaponTriangleBonusEditor /></Suspense> },
    { path: 'WeaponTriangleEditor', element: <Suspense fallback={loading}><FE5WeaponTriangleEditor /></Suspense> },
    { path: 'LeafFinnEyvelOthinHalvan', element: <Suspense fallback={loading}><FE5LeafFinnEyvelOthinHalvan /></Suspense> },
    { path: 'MartyDagudarTanya', element: <Suspense fallback={loading}><FE5MartyDagudarTanya /></Suspense> },
  ],
};

export default FE5Routes;
