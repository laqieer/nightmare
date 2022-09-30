import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE6 from '.';

const FE6HomePage = lazy(() => import('./HomePage'));
const FE6Battlescreeneditorpart1 = lazy(() => import('./Battlescreeneditorpart1'));
const FE6Battlescreeneditorpart2 = lazy(() => import('./Battlescreeneditorpart2'));
const FE6Battlescreeneditorpart3 = lazy(() => import('./Battlescreeneditorpart3'));
const FE6Battlescreeneditorpart4 = lazy(() => import('./Battlescreeneditorpart4'));
const FE6Battlescreeneditorpart5 = lazy(() => import('./Battlescreeneditorpart5'));
const FE6Chapter1ArmyEditor = lazy(() => import('./Chapter1ArmyEditor'));
const FE6Chapter10AArmyEditor = lazy(() => import('./Chapter10AArmyEditor'));
const FE6Chapter10BArmoryEditor = lazy(() => import('./Chapter10BArmoryEditor'));
const FE6Chapter10BArmyEditor = lazy(() => import('./Chapter10BArmyEditor'));
const FE6Chapter10BShopEvents = lazy(() => import('./Chapter10BShopEvents'));
const FE6Chapter11AArmyEditor = lazy(() => import('./Chapter11AArmyEditor'));
const FE6Chapter11AShopEvents = lazy(() => import('./Chapter11AShopEvents'));
const FE6Chapter11BArmyEditor = lazy(() => import('./Chapter11BArmyEditor'));
const FE6Chapter11BShopEvents = lazy(() => import('./Chapter11BShopEvents'));
const FE6Chapter12ArmyEditor = lazy(() => import('./Chapter12ArmyEditor'));
const FE6Chapter12xArmyEditor = lazy(() => import('./Chapter12xArmyEditor'));
const FE6Chapter13ArmyEditor = lazy(() => import('./Chapter13ArmyEditor'));
const FE6Chapter13ShopEvents = lazy(() => import('./Chapter13ShopEvents'));
const FE6Chapter14ArmyEditor = lazy(() => import('./Chapter14ArmyEditor'));
const FE6Chapter14ShopEvents = lazy(() => import('./Chapter14ShopEvents'));
const FE6Chapter14xArmyEditor = lazy(() => import('./Chapter14xArmyEditor'));
const FE6Chapter15ArmyEditor = lazy(() => import('./Chapter15ArmyEditor'));
const FE6Chapter15ShopEvents = lazy(() => import('./Chapter15ShopEvents'));
const FE6Chapter16ArmyEditor = lazy(() => import('./Chapter16ArmyEditor'));
const FE6Chapter16ShopEvents = lazy(() => import('./Chapter16ShopEvents'));
const FE6Chapter16xArmyEditor = lazy(() => import('./Chapter16xArmyEditor'));
const FE6Chapter17AArmyEditor = lazy(() => import('./Chapter17AArmyEditor'));
const FE6Chapter17AShopEvents = lazy(() => import('./Chapter17AShopEvents'));
const FE6Chapter17BArmyEditor = lazy(() => import('./Chapter17BArmyEditor'));
const FE6Chapter17BShopEvents = lazy(() => import('./Chapter17BShopEvents'));
const FE6Chapter18AArmyEditor = lazy(() => import('./Chapter18AArmyEditor'));
const FE6Chapter18BArmyEditor = lazy(() => import('./Chapter18BArmyEditor'));
const FE6Chapter18BShopEvents = lazy(() => import('./Chapter18BShopEvents'));
const FE6Chapter19AArmyEditor = lazy(() => import('./Chapter19AArmyEditor'));
const FE6Chapter19AShopEvents = lazy(() => import('./Chapter19AShopEvents'));
const FE6Chapter19BArmyEditor = lazy(() => import('./Chapter19BArmyEditor'));
const FE6Chapter19BShopEvents = lazy(() => import('./Chapter19BShopEvents'));
const FE6Chapter2ArmoryEditor = lazy(() => import('./Chapter2ArmoryEditor'));
const FE6Chapter2ArmyEditor = lazy(() => import('./Chapter2ArmyEditor'));
const FE6Chapter2ShopEvents = lazy(() => import('./Chapter2ShopEvents'));
const FE6Chapter2VendorEditor = lazy(() => import('./Chapter2VendorEditor'));
const FE6Chapter20AArmyEditor = lazy(() => import('./Chapter20AArmyEditor'));
const FE6Chapter20AShopEvents = lazy(() => import('./Chapter20AShopEvents'));
const FE6Chapter20AxArmyEditor = lazy(() => import('./Chapter20AxArmyEditor'));
const FE6Chapter20BArmyEditor = lazy(() => import('./Chapter20BArmyEditor'));
const FE6Chapter20BxArmyEditor = lazy(() => import('./Chapter20BxArmyEditor'));
const FE6Chapter21ArmyEditor = lazy(() => import('./Chapter21ArmyEditor'));
const FE6Chapter21ShopEvents = lazy(() => import('./Chapter21ShopEvents'));
const FE6Chapter21xArmyEditor = lazy(() => import('./Chapter21xArmyEditor'));
const FE6Chapter22ArmyEditor = lazy(() => import('./Chapter22ArmyEditor'));
const FE6Chapter23ArmyEditor = lazy(() => import('./Chapter23ArmyEditor'));
const FE6Chapter23ShopEvents = lazy(() => import('./Chapter23ShopEvents'));
const FE6Chapter24ArmyEditor = lazy(() => import('./Chapter24ArmyEditor'));
const FE6Chapter3ArmyEditor = lazy(() => import('./Chapter3ArmyEditor'));
const FE6Chapter4ArmoryEditor = lazy(() => import('./Chapter4ArmoryEditor'));
const FE6Chapter4ArmyEditor = lazy(() => import('./Chapter4ArmyEditor'));
const FE6Chapter4ShopEvents = lazy(() => import('./Chapter4ShopEvents'));
const FE6Chapter4VendorEditor = lazy(() => import('./Chapter4VendorEditor'));
const FE6Chapter5ArmyEditor = lazy(() => import('./Chapter5ArmyEditor'));
const FE6Chapter5ShopEvents = lazy(() => import('./Chapter5ShopEvents'));
const FE6Chapter5VendorEditor = lazy(() => import('./Chapter5VendorEditor'));
const FE6Chapter6ArmyEditor = lazy(() => import('./Chapter6ArmyEditor'));
const FE6Chapter7ArmyEditor = lazy(() => import('./Chapter7ArmyEditor'));
const FE6Chapter7LeftArmoryEditor = lazy(() => import('./Chapter7LeftArmoryEditor'));
const FE6Chapter7RightArmoryEditor = lazy(() => import('./Chapter7RightArmoryEditor'));
const FE6Chapter7ShopEvents = lazy(() => import('./Chapter7ShopEvents'));
const FE6Chapter7VendorEditor = lazy(() => import('./Chapter7VendorEditor'));
const FE6Chapter8ArmyEditor = lazy(() => import('./Chapter8ArmyEditor'));
const FE6Chapter8xArmyEditor = lazy(() => import('./Chapter8xArmyEditor'));
const FE6Chapter9ArmoryEditor = lazy(() => import('./Chapter9ArmoryEditor'));
const FE6Chapter9ArmyEditor = lazy(() => import('./Chapter9ArmyEditor'));
const FE6Chapter9ShopEvents = lazy(() => import('./Chapter9ShopEvents'));
const FE6Chapter9VendorEditor = lazy(() => import('./Chapter9VendorEditor'));
const FE6ChapterDataEditorFE6 = lazy(() => import('./ChapterDataEditorFE6'));
const FE6ChapterTrialMap1ArmyEditor = lazy(() => import('./ChapterTrialMap1ArmyEditor'));
const FE6ChapterTrialMap2ArmyEditor = lazy(() => import('./ChapterTrialMap2ArmyEditor'));
const FE6ChapterTrialMap3ArmyEditor = lazy(() => import('./ChapterTrialMap3ArmyEditor'));
const FE6ChapterTrialMap4ArmyEditor = lazy(() => import('./ChapterTrialMap4ArmyEditor'));
const FE6ChapterTrialMap5ArmyEditor = lazy(() => import('./ChapterTrialMap5ArmyEditor'));
const FE6CustomShopEditor = lazy(() => import('./CustomShopEditor'));
const FE6Critbonuseditor = lazy(() => import('./Critbonuseditor'));
const FE6EventTableReferences = lazy(() => import('./EventTableReferences'));
const FE6BattlePaletteReference = lazy(() => import('./BattlePaletteReference'));
const FE6CharacterEditor = lazy(() => import('./CharacterEditor'));
const FE6ClassEditor = lazy(() => import('./ClassEditor'));
const FE6CustomBattleAnimationEditor = lazy(() => import('./CustomBattleAnimationEditor'));
const FE6CustomPromotionPointerEditor = lazy(() => import('./CustomPromotionPointerEditor'));
const FE6Deathquoteeditor = lazy(() => import('./Deathquoteeditor'));
const FE6Enemybossbattlequoteeditor = lazy(() => import('./Enemybossbattlequoteeditor'));
const FE6ItemEditor = lazy(() => import('./ItemEditor'));
const FE6PortraitEditor = lazy(() => import('./PortraitEditor'));
const FE6PromotionItemEditor = lazy(() => import('./PromotionItemEditor'));
const FE6Promotionleveleditor = lazy(() => import('./Promotionleveleditor'));
const FE6SoundRoomEditor = lazy(() => import('./SoundRoomEditor'));
const FE6SpellAssociationEditor = lazy(() => import('./SpellAssociationEditor'));
const FE6SupportEditor = lazy(() => import('./SupportEditor'));
const FE6Triangleattackquoteeditor = lazy(() => import('./Triangleattackquoteeditor'));
const FE6FinalChapterArmyEditor = lazy(() => import('./FinalChapterArmyEditor'));
const FE6LevelCapEditor = lazy(() => import('./LevelCapEditor'));
const FE6Supportbonuseditor = lazy(() => import('./Supportbonuseditor'));
const FE6TrialMapCharactersArmyEditor = lazy(() => import('./TrialMapCharactersArmyEditor'));
const FE6TutorialArmyEditor = lazy(() => import('./TutorialArmyEditor'));

export const FE6Routes = {
  path: 'FE6',
  element: <FE6 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE6HomePage /></Suspense> },
    { path: 'Battlescreeneditorpart1', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart1 /></Suspense> },
    { path: 'Battlescreeneditorpart2', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart2 /></Suspense> },
    { path: 'Battlescreeneditorpart3', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart3 /></Suspense> },
    { path: 'Battlescreeneditorpart4', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart4 /></Suspense> },
    { path: 'Battlescreeneditorpart5', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart5 /></Suspense> },
    { path: 'Chapter1ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter1ArmyEditor /></Suspense> },
    { path: 'Chapter10AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter10AArmyEditor /></Suspense> },
    { path: 'Chapter10BArmoryEditor', element: <Suspense fallback={loading}><FE6Chapter10BArmoryEditor /></Suspense> },
    { path: 'Chapter10BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter10BArmyEditor /></Suspense> },
    { path: 'Chapter10BShopEvents', element: <Suspense fallback={loading}><FE6Chapter10BShopEvents /></Suspense> },
    { path: 'Chapter11AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter11AArmyEditor /></Suspense> },
    { path: 'Chapter11AShopEvents', element: <Suspense fallback={loading}><FE6Chapter11AShopEvents /></Suspense> },
    { path: 'Chapter11BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter11BArmyEditor /></Suspense> },
    { path: 'Chapter11BShopEvents', element: <Suspense fallback={loading}><FE6Chapter11BShopEvents /></Suspense> },
    { path: 'Chapter12ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter12ArmyEditor /></Suspense> },
    { path: 'Chapter12xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter12xArmyEditor /></Suspense> },
    { path: 'Chapter13ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter13ArmyEditor /></Suspense> },
    { path: 'Chapter13ShopEvents', element: <Suspense fallback={loading}><FE6Chapter13ShopEvents /></Suspense> },
    { path: 'Chapter14ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter14ArmyEditor /></Suspense> },
    { path: 'Chapter14ShopEvents', element: <Suspense fallback={loading}><FE6Chapter14ShopEvents /></Suspense> },
    { path: 'Chapter14xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter14xArmyEditor /></Suspense> },
    { path: 'Chapter15ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter15ArmyEditor /></Suspense> },
    { path: 'Chapter15ShopEvents', element: <Suspense fallback={loading}><FE6Chapter15ShopEvents /></Suspense> },
    { path: 'Chapter16ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter16ArmyEditor /></Suspense> },
    { path: 'Chapter16ShopEvents', element: <Suspense fallback={loading}><FE6Chapter16ShopEvents /></Suspense> },
    { path: 'Chapter16xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter16xArmyEditor /></Suspense> },
    { path: 'Chapter17AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter17AArmyEditor /></Suspense> },
    { path: 'Chapter17AShopEvents', element: <Suspense fallback={loading}><FE6Chapter17AShopEvents /></Suspense> },
    { path: 'Chapter17BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter17BArmyEditor /></Suspense> },
    { path: 'Chapter17BShopEvents', element: <Suspense fallback={loading}><FE6Chapter17BShopEvents /></Suspense> },
    { path: 'Chapter18AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter18AArmyEditor /></Suspense> },
    { path: 'Chapter18BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter18BArmyEditor /></Suspense> },
    { path: 'Chapter18BShopEvents', element: <Suspense fallback={loading}><FE6Chapter18BShopEvents /></Suspense> },
    { path: 'Chapter19AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter19AArmyEditor /></Suspense> },
    { path: 'Chapter19AShopEvents', element: <Suspense fallback={loading}><FE6Chapter19AShopEvents /></Suspense> },
    { path: 'Chapter19BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter19BArmyEditor /></Suspense> },
    { path: 'Chapter19BShopEvents', element: <Suspense fallback={loading}><FE6Chapter19BShopEvents /></Suspense> },
    { path: 'Chapter2ArmoryEditor', element: <Suspense fallback={loading}><FE6Chapter2ArmoryEditor /></Suspense> },
    { path: 'Chapter2ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter2ArmyEditor /></Suspense> },
    { path: 'Chapter2ShopEvents', element: <Suspense fallback={loading}><FE6Chapter2ShopEvents /></Suspense> },
    { path: 'Chapter2VendorEditor', element: <Suspense fallback={loading}><FE6Chapter2VendorEditor /></Suspense> },
    { path: 'Chapter20AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20AArmyEditor /></Suspense> },
    { path: 'Chapter20AShopEvents', element: <Suspense fallback={loading}><FE6Chapter20AShopEvents /></Suspense> },
    { path: 'Chapter20AxArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20AxArmyEditor /></Suspense> },
    { path: 'Chapter20BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20BArmyEditor /></Suspense> },
    { path: 'Chapter20BxArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20BxArmyEditor /></Suspense> },
    { path: 'Chapter21ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter21ArmyEditor /></Suspense> },
    { path: 'Chapter21ShopEvents', element: <Suspense fallback={loading}><FE6Chapter21ShopEvents /></Suspense> },
    { path: 'Chapter21xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter21xArmyEditor /></Suspense> },
    { path: 'Chapter22ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter22ArmyEditor /></Suspense> },
    { path: 'Chapter23ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter23ArmyEditor /></Suspense> },
    { path: 'Chapter23ShopEvents', element: <Suspense fallback={loading}><FE6Chapter23ShopEvents /></Suspense> },
    { path: 'Chapter24ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter24ArmyEditor /></Suspense> },
    { path: 'Chapter3ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter3ArmyEditor /></Suspense> },
    { path: 'Chapter4ArmoryEditor', element: <Suspense fallback={loading}><FE6Chapter4ArmoryEditor /></Suspense> },
    { path: 'Chapter4ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter4ArmyEditor /></Suspense> },
    { path: 'Chapter4ShopEvents', element: <Suspense fallback={loading}><FE6Chapter4ShopEvents /></Suspense> },
    { path: 'Chapter4VendorEditor', element: <Suspense fallback={loading}><FE6Chapter4VendorEditor /></Suspense> },
    { path: 'Chapter5ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter5ArmyEditor /></Suspense> },
    { path: 'Chapter5ShopEvents', element: <Suspense fallback={loading}><FE6Chapter5ShopEvents /></Suspense> },
    { path: 'Chapter5VendorEditor', element: <Suspense fallback={loading}><FE6Chapter5VendorEditor /></Suspense> },
    { path: 'Chapter6ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter6ArmyEditor /></Suspense> },
    { path: 'Chapter7ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter7ArmyEditor /></Suspense> },
    { path: 'Chapter7LeftArmoryEditor', element: <Suspense fallback={loading}><FE6Chapter7LeftArmoryEditor /></Suspense> },
    { path: 'Chapter7RightArmoryEditor', element: <Suspense fallback={loading}><FE6Chapter7RightArmoryEditor /></Suspense> },
    { path: 'Chapter7ShopEvents', element: <Suspense fallback={loading}><FE6Chapter7ShopEvents /></Suspense> },
    { path: 'Chapter7VendorEditor', element: <Suspense fallback={loading}><FE6Chapter7VendorEditor /></Suspense> },
    { path: 'Chapter8ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter8ArmyEditor /></Suspense> },
    { path: 'Chapter8xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter8xArmyEditor /></Suspense> },
    { path: 'Chapter9ArmoryEditor', element: <Suspense fallback={loading}><FE6Chapter9ArmoryEditor /></Suspense> },
    { path: 'Chapter9ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter9ArmyEditor /></Suspense> },
    { path: 'Chapter9ShopEvents', element: <Suspense fallback={loading}><FE6Chapter9ShopEvents /></Suspense> },
    { path: 'Chapter9VendorEditor', element: <Suspense fallback={loading}><FE6Chapter9VendorEditor /></Suspense> },
    { path: 'ChapterDataEditorFE6', element: <Suspense fallback={loading}><FE6ChapterDataEditorFE6 /></Suspense> },
    { path: 'ChapterTrialMap1ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap1ArmyEditor /></Suspense> },
    { path: 'ChapterTrialMap2ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap2ArmyEditor /></Suspense> },
    { path: 'ChapterTrialMap3ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap3ArmyEditor /></Suspense> },
    { path: 'ChapterTrialMap4ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap4ArmyEditor /></Suspense> },
    { path: 'ChapterTrialMap5ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap5ArmyEditor /></Suspense> },
    { path: 'CustomShopEditor', element: <Suspense fallback={loading}><FE6CustomShopEditor /></Suspense> },
    { path: 'Critbonuseditor', element: <Suspense fallback={loading}><FE6Critbonuseditor /></Suspense> },
    { path: 'EventTableReferences', element: <Suspense fallback={loading}><FE6EventTableReferences /></Suspense> },
    { path: 'BattlePaletteReference', element: <Suspense fallback={loading}><FE6BattlePaletteReference /></Suspense> },
    { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE6CharacterEditor /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE6ClassEditor /></Suspense> },
    { path: 'CustomBattleAnimationEditor', element: <Suspense fallback={loading}><FE6CustomBattleAnimationEditor /></Suspense> },
    { path: 'CustomPromotionPointerEditor', element: <Suspense fallback={loading}><FE6CustomPromotionPointerEditor /></Suspense> },
    { path: 'Deathquoteeditor', element: <Suspense fallback={loading}><FE6Deathquoteeditor /></Suspense> },
    { path: 'Enemybossbattlequoteeditor', element: <Suspense fallback={loading}><FE6Enemybossbattlequoteeditor /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE6ItemEditor /></Suspense> },
    { path: 'PortraitEditor', element: <Suspense fallback={loading}><FE6PortraitEditor /></Suspense> },
    { path: 'PromotionItemEditor', element: <Suspense fallback={loading}><FE6PromotionItemEditor /></Suspense> },
    { path: 'Promotionleveleditor', element: <Suspense fallback={loading}><FE6Promotionleveleditor /></Suspense> },
    { path: 'SoundRoomEditor', element: <Suspense fallback={loading}><FE6SoundRoomEditor /></Suspense> },
    { path: 'SpellAssociationEditor', element: <Suspense fallback={loading}><FE6SpellAssociationEditor /></Suspense> },
    { path: 'SupportEditor', element: <Suspense fallback={loading}><FE6SupportEditor /></Suspense> },
    { path: 'Triangleattackquoteeditor', element: <Suspense fallback={loading}><FE6Triangleattackquoteeditor /></Suspense> },
    { path: 'FinalChapterArmyEditor', element: <Suspense fallback={loading}><FE6FinalChapterArmyEditor /></Suspense> },
    { path: 'LevelCapEditor', element: <Suspense fallback={loading}><FE6LevelCapEditor /></Suspense> },
    { path: 'Supportbonuseditor', element: <Suspense fallback={loading}><FE6Supportbonuseditor /></Suspense> },
    { path: 'TrialMapCharactersArmyEditor', element: <Suspense fallback={loading}><FE6TrialMapCharactersArmyEditor /></Suspense> },
    { path: 'TutorialArmyEditor', element: <Suspense fallback={loading}><FE6TutorialArmyEditor /></Suspense> },
  ],
};

export default FE6Routes;
