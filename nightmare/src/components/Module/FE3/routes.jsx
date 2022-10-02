import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE3 from '.';

const FE3HomePage = lazy(() => import('./HomePage'));
const FE311MarthEmbarksHidden = lazy(() => import('./11MarthEmbarksHidden'));
const FE3110TheAgelessPalaceHidden = lazy(() => import('./110TheAgelessPalaceHidden'));
const FE3110TheAgelessPalaceStart = lazy(() => import('./110TheAgelessPalaceStart'));
const FE3111LandofSorrowHidden = lazy(() => import('./111LandofSorrowHidden'));
const FE3111LandofSorrowStart = lazy(() => import('./111LandofSorrowStart'));
const FE3112AnOasisofMagicStart = lazy(() => import('./112AnOasisofMagicStart'));
const FE3113TheBattleforAlteaHidden = lazy(() => import('./113TheBattleforAlteaHidden'));
const FE3113TheBattleforAlteaStart = lazy(() => import('./113TheBattleforAlteaStart'));
const FE3114StarandSaviorHidden = lazy(() => import('./114StarandSaviorHidden'));
const FE3114StarandSaviorStart = lazy(() => import('./114StarandSaviorStart'));
const FE3115ManaketePrincessHidden = lazy(() => import('./115ManaketePrincessHidden'));
const FE3115ManaketePrincessStart = lazy(() => import('./115ManaketePrincessStart'));
const FE3116CamustheSableHidden = lazy(() => import('./116CamustheSableHidden'));
const FE3116CamustheSableStart = lazy(() => import('./116CamustheSableStart'));
const FE3117AKnightFilledSkyHidden = lazy(() => import('./117AKnightFilledSkyHidden'));
const FE3117AKnightFilledSkyStart = lazy(() => import('./117AKnightFilledSkyStart'));
const FE3118DarkPontifexHidden = lazy(() => import('./118DarkPontifexHidden'));
const FE3118DarkPontifexStart = lazy(() => import('./118DarkPontifexStart'));
const FE3119TheDragonkinRealmHidden = lazy(() => import('./119TheDragonkinRealmHidden'));
const FE3119TheDragonkinRealmStart = lazy(() => import('./119TheDragonkinRealmStart'));
const FE312ThePiratesofGalderHidden = lazy(() => import('./12ThePiratesofGalderHidden'));
const FE312ThePiratesofGalderStart = lazy(() => import('./12ThePiratesofGalderStart'));
const FE3120Chosen = lazy(() => import('./120Chosen'));
const FE313ABrushinTheTeethHidden = lazy(() => import('./13ABrushinTheTeethHidden'));
const FE313ABrushinTheTeethStart = lazy(() => import('./13ABrushinTheTeethStart'));
const FE314ChampionofAurelisHidden = lazy(() => import('./14ChampionofAurelisHidden'));
const FE314ChampionofAurelisStart = lazy(() => import('./14ChampionofAurelisStart'));
const FE315FireEmblemHidden = lazy(() => import('./15FireEmblemHidden'));
const FE315FireEmblemStart = lazy(() => import('./15FireEmblemStart'));
const FE316LefcandithGauntletHidden = lazy(() => import('./16LefcandithGauntletHidden'));
const FE316LefcandithGauntletStart = lazy(() => import('./16LefcandithGauntletStart'));
const FE317PortWarrenHidden = lazy(() => import('./17PortWarrenHidden'));
const FE317PortWarrenStart = lazy(() => import('./17PortWarrenStart'));
const FE318PrincessMinervaHidden = lazy(() => import('./18PrincessMinervaHidden'));
const FE318PrincessMinervaStart = lazy(() => import('./18PrincessMinervaStart'));
const FE319KnordaSlaveMarketHidden = lazy(() => import('./19KnordaSlaveMarketHidden'));
const FE319KnordaSlaveMarketStart = lazy(() => import('./19KnordaSlaveMarketStart'));
const FE321TheGrustianExpeditionHidden = lazy(() => import('./21TheGrustianExpeditionHidden'));
const FE321TheGrustianExpeditionStart = lazy(() => import('./21TheGrustianExpeditionStart'));
const FE3210TwoSorcerersHidden = lazy(() => import('./210TwoSorcerersHidden'));
const FE3210TwoSorcerersStart = lazy(() => import('./210TwoSorcerersStart'));
const FE3211AnrisWayStart = lazy(() => import('./211AnrisWayStart'));
const FE3212GraveyardofFireDragonsStart = lazy(() => import('./212GraveyardofFireDragonsStart'));
const FE3213FrozenLandStart = lazy(() => import('./213FrozenLandStart'));
const FE3214AMysteryRevealedHidden = lazy(() => import('./214AMysteryRevealedHidden'));
const FE3214AMysteryRevealedStart = lazy(() => import('./214AMysteryRevealedStart'));
const FE3215ReturnofthePrinceHidden = lazy(() => import('./215ReturnofthePrinceHidden'));
const FE3215ReturnofthePrinceStart = lazy(() => import('./215ReturnofthePrinceStart'));
const FE3216RegainingtheCapitalHidden = lazy(() => import('./216RegainingtheCapitalHidden'));
const FE3216RegainingtheCapitalStart = lazy(() => import('./216RegainingtheCapitalStart'));
const FE3217GrasSunSetsHidden = lazy(() => import('./217GrasSunSetsHidden'));
const FE3217GrasSunSetsStart = lazy(() => import('./217GrasSunSetsStart'));
const FE3218BattleofthePassStart = lazy(() => import('./218BattleofthePassStart'));
const FE3219TheLastDecisiveBattleHidden = lazy(() => import('./219TheLastDecisiveBattleHidden'));
const FE3219TheLastDecisiveBattleStart = lazy(() => import('./219TheLastDecisiveBattleStart'));
const FE322RebellionatMacedonHidden = lazy(() => import('./22RebellionatMacedonHidden'));
const FE322RebellionatMacedonStart = lazy(() => import('./22RebellionatMacedonStart'));
const FE3220DarkEmperorHidden = lazy(() => import('./220DarkEmperorHidden'));
const FE3220DarkEmperorStart = lazy(() => import('./220DarkEmperorStart'));
const FE3221TheWyvernsDaleStart = lazy(() => import('./221TheWyvernsDaleStart'));
const FE323AbductedPrincessHidden = lazy(() => import('./23AbductedPrincessHidden'));
const FE323AbductedPrincessStart = lazy(() => import('./23AbductedPrincessStart'));
const FE324JoyandSorrowHidden = lazy(() => import('./24JoyandSorrowHidden'));
const FE324JoyandSorrowStart = lazy(() => import('./24JoyandSorrowStart'));
const FE325LiberationofGrustHidden = lazy(() => import('./25LiberationofGrustHidden'));
const FE325LiberationofGrustStart = lazy(() => import('./25LiberationofGrustStart'));
const FE326TheNestofEvilHidden = lazy(() => import('./26TheNestofEvilHidden'));
const FE326TheNestofEvilStart = lazy(() => import('./26TheNestofEvilStart'));
const FE327TheScarletSwordsmanHidden = lazy(() => import('./27TheScarletSwordsmanHidden'));
const FE327TheScarletSwordsmanStart = lazy(() => import('./27TheScarletSwordsmanStart'));
const FE328SoulfulBridgeHidden = lazy(() => import('./28SoulfulBridgeHidden'));
const FE328SoulfulBridgeStart = lazy(() => import('./28SoulfulBridgeStart'));
const FE329SanctuaryofSorceryHidden = lazy(() => import('./29SanctuaryofSorceryHidden'));
const FE329SanctuaryofSorceryStart = lazy(() => import('./29SanctuaryofSorceryStart'));
const FE3ArenaWeaponEditor = lazy(() => import('./ArenaWeaponEditor'));
const FE3BuriedTreasureEditor = lazy(() => import('./BuriedTreasureEditor'));
const FE3ChestItemEditor = lazy(() => import('./ChestItemEditor'));
const FE3ChestItemEditor2 = lazy(() => import('./ChestItemEditor2'));
const FE3ChestItemEditor3 = lazy(() => import('./ChestItemEditor3'));
const FE3ChestItemEditor4 = lazy(() => import('./ChestItemEditor4'));
const FE3DeathQuoteEditor = lazy(() => import('./DeathQuoteEditor'));
const FE3DebugMapStart = lazy(() => import('./DebugMapStart'));
const FE3DragonsTablePart1Start = lazy(() => import('./DragonsTablePart1Start'));
const FE3DragonsTablePart2Start = lazy(() => import('./DragonsTablePart2Start'));
const FE3DragonsTablePart3Hidden = lazy(() => import('./DragonsTablePart3Hidden'));
const FE3DragonsTablePart3Start = lazy(() => import('./DragonsTablePart3Start'));
const FE3EnemyRecrutableCharacterEditor = lazy(() => import('./EnemyRecrutableCharacterEditor'));
const FE3EventTileEditor = lazy(() => import('./EventTileEditor'));
const FE3ArmyEditor = lazy(() => import('./ArmyEditor'));
const FE3AstralShardEditor = lazy(() => import('./AstralShardEditor'));
const FE3AxeLockEditor = lazy(() => import('./AxeLockEditor'));
const FE3BowLockEditor = lazy(() => import('./BowLockEditor'));
const FE3ChapterEnemySpriteEditor = lazy(() => import('./ChapterEnemySpriteEditor'));
const FE3CharacterGrowthBaseEditor = lazy(() => import('./CharacterGrowthBaseEditor'));
const FE3ClassBasesEditor = lazy(() => import('./ClassBasesEditor'));
const FE3ClassGrowthEditor = lazy(() => import('./ClassGrowthEditor'));
const FE3DragonWhipCheckEditor = lazy(() => import('./DragonWhipCheckEditor'));
const FE3DragonstoneLockEditor = lazy(() => import('./DragonstoneLockEditor'));
const FE3ItemEditor = lazy(() => import('./ItemEditor'));
const FE3KnightCrestCheckEditor = lazy(() => import('./KnightCrestCheckEditor'));
const FE3LadySwordLockEditor = lazy(() => import('./LadySwordLockEditor'));
const FE3LanceLockEditor = lazy(() => import('./LanceLockEditor'));
const FE3OrbFragmentEditor = lazy(() => import('./OrbFragmentEditor'));
const FE3PromotionEditor = lazy(() => import('./PromotionEditor'));
const FE3PromotionItemsEditor = lazy(() => import('./PromotionItemsEditor'));
const FE3ResireLockEditor = lazy(() => import('./ResireLockEditor'));
const FE3ShopContentsEditor = lazy(() => import('./ShopContentsEditor'));
const FE3ShopEditor = lazy(() => import('./ShopEditor'));
const FE3StaveLockEditor = lazy(() => import('./StaveLockEditor'));
const FE3SwordLockEditor = lazy(() => import('./SwordLockEditor'));
const FE3TomeLockEditor = lazy(() => import('./TomeLockEditor'));
const FE3MapDataEditor = lazy(() => import('./MapDataEditor'));
const FE3SupportEditor = lazy(() => import('./SupportEditor'));
const FE3UniversalReinforcements = lazy(() => import('./UniversalReinforcements'));

export const FE3Routes = {
  path: 'FE3',
  element: <FE3 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE3HomePage /></Suspense> },
    { path: '11MarthEmbarksHidden', element: <Suspense fallback={loading}><FE311MarthEmbarksHidden /></Suspense> },
    { path: '110TheAgelessPalaceHidden', element: <Suspense fallback={loading}><FE3110TheAgelessPalaceHidden /></Suspense> },
    { path: '110TheAgelessPalaceStart', element: <Suspense fallback={loading}><FE3110TheAgelessPalaceStart /></Suspense> },
    { path: '111LandofSorrowHidden', element: <Suspense fallback={loading}><FE3111LandofSorrowHidden /></Suspense> },
    { path: '111LandofSorrowStart', element: <Suspense fallback={loading}><FE3111LandofSorrowStart /></Suspense> },
    { path: '112AnOasisofMagicStart', element: <Suspense fallback={loading}><FE3112AnOasisofMagicStart /></Suspense> },
    { path: '113TheBattleforAlteaHidden', element: <Suspense fallback={loading}><FE3113TheBattleforAlteaHidden /></Suspense> },
    { path: '113TheBattleforAlteaStart', element: <Suspense fallback={loading}><FE3113TheBattleforAlteaStart /></Suspense> },
    { path: '114StarandSaviorHidden', element: <Suspense fallback={loading}><FE3114StarandSaviorHidden /></Suspense> },
    { path: '114StarandSaviorStart', element: <Suspense fallback={loading}><FE3114StarandSaviorStart /></Suspense> },
    { path: '115ManaketePrincessHidden', element: <Suspense fallback={loading}><FE3115ManaketePrincessHidden /></Suspense> },
    { path: '115ManaketePrincessStart', element: <Suspense fallback={loading}><FE3115ManaketePrincessStart /></Suspense> },
    { path: '116CamustheSableHidden', element: <Suspense fallback={loading}><FE3116CamustheSableHidden /></Suspense> },
    { path: '116CamustheSableStart', element: <Suspense fallback={loading}><FE3116CamustheSableStart /></Suspense> },
    { path: '117AKnightFilledSkyHidden', element: <Suspense fallback={loading}><FE3117AKnightFilledSkyHidden /></Suspense> },
    { path: '117AKnightFilledSkyStart', element: <Suspense fallback={loading}><FE3117AKnightFilledSkyStart /></Suspense> },
    { path: '118DarkPontifexHidden', element: <Suspense fallback={loading}><FE3118DarkPontifexHidden /></Suspense> },
    { path: '118DarkPontifexStart', element: <Suspense fallback={loading}><FE3118DarkPontifexStart /></Suspense> },
    { path: '119TheDragonkinRealmHidden', element: <Suspense fallback={loading}><FE3119TheDragonkinRealmHidden /></Suspense> },
    { path: '119TheDragonkinRealmStart', element: <Suspense fallback={loading}><FE3119TheDragonkinRealmStart /></Suspense> },
    { path: '12ThePiratesofGalderHidden', element: <Suspense fallback={loading}><FE312ThePiratesofGalderHidden /></Suspense> },
    { path: '12ThePiratesofGalderStart', element: <Suspense fallback={loading}><FE312ThePiratesofGalderStart /></Suspense> },
    { path: '120Chosen', element: <Suspense fallback={loading}><FE3120Chosen /></Suspense> },
    { path: '13ABrushinTheTeethHidden', element: <Suspense fallback={loading}><FE313ABrushinTheTeethHidden /></Suspense> },
    { path: '13ABrushinTheTeethStart', element: <Suspense fallback={loading}><FE313ABrushinTheTeethStart /></Suspense> },
    { path: '14ChampionofAurelisHidden', element: <Suspense fallback={loading}><FE314ChampionofAurelisHidden /></Suspense> },
    { path: '14ChampionofAurelisStart', element: <Suspense fallback={loading}><FE314ChampionofAurelisStart /></Suspense> },
    { path: '15FireEmblemHidden', element: <Suspense fallback={loading}><FE315FireEmblemHidden /></Suspense> },
    { path: '15FireEmblemStart', element: <Suspense fallback={loading}><FE315FireEmblemStart /></Suspense> },
    { path: '16LefcandithGauntletHidden', element: <Suspense fallback={loading}><FE316LefcandithGauntletHidden /></Suspense> },
    { path: '16LefcandithGauntletStart', element: <Suspense fallback={loading}><FE316LefcandithGauntletStart /></Suspense> },
    { path: '17PortWarrenHidden', element: <Suspense fallback={loading}><FE317PortWarrenHidden /></Suspense> },
    { path: '17PortWarrenStart', element: <Suspense fallback={loading}><FE317PortWarrenStart /></Suspense> },
    { path: '18PrincessMinervaHidden', element: <Suspense fallback={loading}><FE318PrincessMinervaHidden /></Suspense> },
    { path: '18PrincessMinervaStart', element: <Suspense fallback={loading}><FE318PrincessMinervaStart /></Suspense> },
    { path: '19KnordaSlaveMarketHidden', element: <Suspense fallback={loading}><FE319KnordaSlaveMarketHidden /></Suspense> },
    { path: '19KnordaSlaveMarketStart', element: <Suspense fallback={loading}><FE319KnordaSlaveMarketStart /></Suspense> },
    { path: '21TheGrustianExpeditionHidden', element: <Suspense fallback={loading}><FE321TheGrustianExpeditionHidden /></Suspense> },
    { path: '21TheGrustianExpeditionStart', element: <Suspense fallback={loading}><FE321TheGrustianExpeditionStart /></Suspense> },
    { path: '210TwoSorcerersHidden', element: <Suspense fallback={loading}><FE3210TwoSorcerersHidden /></Suspense> },
    { path: '210TwoSorcerersStart', element: <Suspense fallback={loading}><FE3210TwoSorcerersStart /></Suspense> },
    { path: '211AnrisWayStart', element: <Suspense fallback={loading}><FE3211AnrisWayStart /></Suspense> },
    { path: '212GraveyardofFireDragonsStart', element: <Suspense fallback={loading}><FE3212GraveyardofFireDragonsStart /></Suspense> },
    { path: '213FrozenLandStart', element: <Suspense fallback={loading}><FE3213FrozenLandStart /></Suspense> },
    { path: '214AMysteryRevealedHidden', element: <Suspense fallback={loading}><FE3214AMysteryRevealedHidden /></Suspense> },
    { path: '214AMysteryRevealedStart', element: <Suspense fallback={loading}><FE3214AMysteryRevealedStart /></Suspense> },
    { path: '215ReturnofthePrinceHidden', element: <Suspense fallback={loading}><FE3215ReturnofthePrinceHidden /></Suspense> },
    { path: '215ReturnofthePrinceStart', element: <Suspense fallback={loading}><FE3215ReturnofthePrinceStart /></Suspense> },
    { path: '216RegainingtheCapitalHidden', element: <Suspense fallback={loading}><FE3216RegainingtheCapitalHidden /></Suspense> },
    { path: '216RegainingtheCapitalStart', element: <Suspense fallback={loading}><FE3216RegainingtheCapitalStart /></Suspense> },
    { path: '217GrasSunSetsHidden', element: <Suspense fallback={loading}><FE3217GrasSunSetsHidden /></Suspense> },
    { path: '217GrasSunSetsStart', element: <Suspense fallback={loading}><FE3217GrasSunSetsStart /></Suspense> },
    { path: '218BattleofthePassStart', element: <Suspense fallback={loading}><FE3218BattleofthePassStart /></Suspense> },
    { path: '219TheLastDecisiveBattleHidden', element: <Suspense fallback={loading}><FE3219TheLastDecisiveBattleHidden /></Suspense> },
    { path: '219TheLastDecisiveBattleStart', element: <Suspense fallback={loading}><FE3219TheLastDecisiveBattleStart /></Suspense> },
    { path: '22RebellionatMacedonHidden', element: <Suspense fallback={loading}><FE322RebellionatMacedonHidden /></Suspense> },
    { path: '22RebellionatMacedonStart', element: <Suspense fallback={loading}><FE322RebellionatMacedonStart /></Suspense> },
    { path: '220DarkEmperorHidden', element: <Suspense fallback={loading}><FE3220DarkEmperorHidden /></Suspense> },
    { path: '220DarkEmperorStart', element: <Suspense fallback={loading}><FE3220DarkEmperorStart /></Suspense> },
    { path: '221TheWyvernsDaleStart', element: <Suspense fallback={loading}><FE3221TheWyvernsDaleStart /></Suspense> },
    { path: '23AbductedPrincessHidden', element: <Suspense fallback={loading}><FE323AbductedPrincessHidden /></Suspense> },
    { path: '23AbductedPrincessStart', element: <Suspense fallback={loading}><FE323AbductedPrincessStart /></Suspense> },
    { path: '24JoyandSorrowHidden', element: <Suspense fallback={loading}><FE324JoyandSorrowHidden /></Suspense> },
    { path: '24JoyandSorrowStart', element: <Suspense fallback={loading}><FE324JoyandSorrowStart /></Suspense> },
    { path: '25LiberationofGrustHidden', element: <Suspense fallback={loading}><FE325LiberationofGrustHidden /></Suspense> },
    { path: '25LiberationofGrustStart', element: <Suspense fallback={loading}><FE325LiberationofGrustStart /></Suspense> },
    { path: '26TheNestofEvilHidden', element: <Suspense fallback={loading}><FE326TheNestofEvilHidden /></Suspense> },
    { path: '26TheNestofEvilStart', element: <Suspense fallback={loading}><FE326TheNestofEvilStart /></Suspense> },
    { path: '27TheScarletSwordsmanHidden', element: <Suspense fallback={loading}><FE327TheScarletSwordsmanHidden /></Suspense> },
    { path: '27TheScarletSwordsmanStart', element: <Suspense fallback={loading}><FE327TheScarletSwordsmanStart /></Suspense> },
    { path: '28SoulfulBridgeHidden', element: <Suspense fallback={loading}><FE328SoulfulBridgeHidden /></Suspense> },
    { path: '28SoulfulBridgeStart', element: <Suspense fallback={loading}><FE328SoulfulBridgeStart /></Suspense> },
    { path: '29SanctuaryofSorceryHidden', element: <Suspense fallback={loading}><FE329SanctuaryofSorceryHidden /></Suspense> },
    { path: '29SanctuaryofSorceryStart', element: <Suspense fallback={loading}><FE329SanctuaryofSorceryStart /></Suspense> },
    { path: 'ArenaWeaponEditor', element: <Suspense fallback={loading}><FE3ArenaWeaponEditor /></Suspense> },
    { path: 'BuriedTreasureEditor', element: <Suspense fallback={loading}><FE3BuriedTreasureEditor /></Suspense> },
    { path: 'ChestItemEditor', element: <Suspense fallback={loading}><FE3ChestItemEditor /></Suspense> },
    { path: 'ChestItemEditor2', element: <Suspense fallback={loading}><FE3ChestItemEditor2 /></Suspense> },
    { path: 'ChestItemEditor3', element: <Suspense fallback={loading}><FE3ChestItemEditor3 /></Suspense> },
    { path: 'ChestItemEditor4', element: <Suspense fallback={loading}><FE3ChestItemEditor4 /></Suspense> },
    { path: 'DeathQuoteEditor', element: <Suspense fallback={loading}><FE3DeathQuoteEditor /></Suspense> },
    { path: 'DebugMapStart', element: <Suspense fallback={loading}><FE3DebugMapStart /></Suspense> },
    { path: 'DragonsTablePart1Start', element: <Suspense fallback={loading}><FE3DragonsTablePart1Start /></Suspense> },
    { path: 'DragonsTablePart2Start', element: <Suspense fallback={loading}><FE3DragonsTablePart2Start /></Suspense> },
    { path: 'DragonsTablePart3Hidden', element: <Suspense fallback={loading}><FE3DragonsTablePart3Hidden /></Suspense> },
    { path: 'DragonsTablePart3Start', element: <Suspense fallback={loading}><FE3DragonsTablePart3Start /></Suspense> },
    { path: 'EnemyRecrutableCharacterEditor', element: <Suspense fallback={loading}><FE3EnemyRecrutableCharacterEditor /></Suspense> },
    { path: 'EventTileEditor', element: <Suspense fallback={loading}><FE3EventTileEditor /></Suspense> },
    { path: 'ArmyEditor', element: <Suspense fallback={loading}><FE3ArmyEditor /></Suspense> },
    { path: 'AstralShardEditor', element: <Suspense fallback={loading}><FE3AstralShardEditor /></Suspense> },
    { path: 'AxeLockEditor', element: <Suspense fallback={loading}><FE3AxeLockEditor /></Suspense> },
    { path: 'BowLockEditor', element: <Suspense fallback={loading}><FE3BowLockEditor /></Suspense> },
    { path: 'ChapterEnemySpriteEditor', element: <Suspense fallback={loading}><FE3ChapterEnemySpriteEditor /></Suspense> },
    { path: 'CharacterGrowthBaseEditor', element: <Suspense fallback={loading}><FE3CharacterGrowthBaseEditor /></Suspense> },
    { path: 'ClassBasesEditor', element: <Suspense fallback={loading}><FE3ClassBasesEditor /></Suspense> },
    { path: 'ClassGrowthEditor', element: <Suspense fallback={loading}><FE3ClassGrowthEditor /></Suspense> },
    { path: 'DragonWhipCheckEditor', element: <Suspense fallback={loading}><FE3DragonWhipCheckEditor /></Suspense> },
    { path: 'DragonstoneLockEditor', element: <Suspense fallback={loading}><FE3DragonstoneLockEditor /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE3ItemEditor /></Suspense> },
    { path: 'KnightCrestCheckEditor', element: <Suspense fallback={loading}><FE3KnightCrestCheckEditor /></Suspense> },
    { path: 'LadySwordLockEditor', element: <Suspense fallback={loading}><FE3LadySwordLockEditor /></Suspense> },
    { path: 'LanceLockEditor', element: <Suspense fallback={loading}><FE3LanceLockEditor /></Suspense> },
    { path: 'OrbFragmentEditor', element: <Suspense fallback={loading}><FE3OrbFragmentEditor /></Suspense> },
    { path: 'PromotionEditor', element: <Suspense fallback={loading}><FE3PromotionEditor /></Suspense> },
    { path: 'PromotionItemsEditor', element: <Suspense fallback={loading}><FE3PromotionItemsEditor /></Suspense> },
    { path: 'ResireLockEditor', element: <Suspense fallback={loading}><FE3ResireLockEditor /></Suspense> },
    { path: 'ShopContentsEditor', element: <Suspense fallback={loading}><FE3ShopContentsEditor /></Suspense> },
    { path: 'ShopEditor', element: <Suspense fallback={loading}><FE3ShopEditor /></Suspense> },
    { path: 'StaveLockEditor', element: <Suspense fallback={loading}><FE3StaveLockEditor /></Suspense> },
    { path: 'SwordLockEditor', element: <Suspense fallback={loading}><FE3SwordLockEditor /></Suspense> },
    { path: 'TomeLockEditor', element: <Suspense fallback={loading}><FE3TomeLockEditor /></Suspense> },
    { path: 'MapDataEditor', element: <Suspense fallback={loading}><FE3MapDataEditor /></Suspense> },
    { path: 'SupportEditor', element: <Suspense fallback={loading}><FE3SupportEditor /></Suspense> },
    { path: 'UniversalReinforcements', element: <Suspense fallback={loading}><FE3UniversalReinforcements /></Suspense> },
  ],
};

export default FE3Routes;
