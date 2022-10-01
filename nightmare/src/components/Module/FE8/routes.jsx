import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE8 from '.';

const FE8HomePage = lazy(() => import('./HomePage'));
const FE8BattlePreparations = lazy(() => import('./BattlePreparations'));
const FE8BattlePreperations = lazy(() => import('./BattlePreperations'));
const FE8Battlescreeneditorpart1 = lazy(() => import('./Battlescreeneditorpart1'));
const FE8Battlescreeneditorpart2 = lazy(() => import('./Battlescreeneditorpart2'));
const FE8Battlescreeneditorpart3 = lazy(() => import('./Battlescreeneditorpart3'));
const FE8Battlescreeneditorpart4 = lazy(() => import('./Battlescreeneditorpart4'));
const FE8Battlescreeneditorpart5 = lazy(() => import('./Battlescreeneditorpart5'));
const FE8Chapter1UnitEditor = lazy(() => import('./Chapter1UnitEditor'));
const FE8Chapter10AUnitEditor = lazy(() => import('./Chapter10AUnitEditor'));
const FE8Chapter10BArmouryEditor = lazy(() => import('./Chapter10BArmouryEditor'));
const FE8Chapter10BCutsceneUnitEditor = lazy(() => import('./Chapter10BCutsceneUnitEditor'));
const FE8Chapter10BShopEditor = lazy(() => import('./Chapter10BShopEditor'));
const FE8Chapter10BUnitEditor = lazy(() => import('./Chapter10BUnitEditor'));
const FE8Chapter11ACutsceneUnitEditor = lazy(() => import('./Chapter11ACutsceneUnitEditor'));
const FE8Chapter11AUnitEditor = lazy(() => import('./Chapter11AUnitEditor'));
const FE8Chapter11BUnitEditor = lazy(() => import('./Chapter11BUnitEditor'));
const FE8Chapter12AShopEditor = lazy(() => import('./Chapter12AShopEditor'));
const FE8Chapter12AUnitEditor = lazy(() => import('./Chapter12AUnitEditor'));
const FE8Chapter12BShopEditor = lazy(() => import('./Chapter12BShopEditor'));
const FE8Chapter12BUnitEditor = lazy(() => import('./Chapter12BUnitEditor'));
const FE8Chapter13ACutsceneUnitEditor = lazy(() => import('./Chapter13ACutsceneUnitEditor'));
const FE8Chapter13ACutscene2UnitEditor = lazy(() => import('./Chapter13ACutscene2UnitEditor'));
const FE8Chapter13AUnitEditor = lazy(() => import('./Chapter13AUnitEditor'));
const FE8Chapter13BUnitEditor = lazy(() => import('./Chapter13BUnitEditor'));
const FE8Chapter14ACutsceneUnitEditor = lazy(() => import('./Chapter14ACutsceneUnitEditor'));
const FE8Chapter14ACutscene2UnitEditor = lazy(() => import('./Chapter14ACutscene2UnitEditor'));
const FE8Chapter14ACutscene3UnitEditor = lazy(() => import('./Chapter14ACutscene3UnitEditor'));
const FE8Chapter14ASecretEditor = lazy(() => import('./Chapter14ASecretEditor'));
const FE8Chapter14AUnitEditor = lazy(() => import('./Chapter14AUnitEditor'));
const FE8Chapter14BCutsceneUnitEditor = lazy(() => import('./Chapter14BCutsceneUnitEditor'));
const FE8Chapter14BCutscene2UnitEditor = lazy(() => import('./Chapter14BCutscene2UnitEditor'));
const FE8Chapter14BCutscene3UnitEditor = lazy(() => import('./Chapter14BCutscene3UnitEditor'));
const FE8Chapter14BSecretEditor = lazy(() => import('./Chapter14BSecretEditor'));
const FE8Chapter14BUnitEditor = lazy(() => import('./Chapter14BUnitEditor'));
const FE8Chapter15AShopEditor = lazy(() => import('./Chapter15AShopEditor'));
const FE8Chapter15AUnitEditor = lazy(() => import('./Chapter15AUnitEditor'));
const FE8Chapter15BShopEditor = lazy(() => import('./Chapter15BShopEditor'));
const FE8Chapter15BUnitEditor = lazy(() => import('./Chapter15BUnitEditor'));
const FE8Chapter16ACutsceneUnitEditor = lazy(() => import('./Chapter16ACutsceneUnitEditor'));
const FE8Chapter16ACutscene2UnitEditor = lazy(() => import('./Chapter16ACutscene2UnitEditor'));
const FE8Chapter16ACutscene3UnitEditor = lazy(() => import('./Chapter16ACutscene3UnitEditor'));
const FE8Chapter16ACutscene4UnitEditor = lazy(() => import('./Chapter16ACutscene4UnitEditor'));
const FE8Chapter16ACutscene5UnitEditor = lazy(() => import('./Chapter16ACutscene5UnitEditor'));
const FE8Chapter16AUnitEditor = lazy(() => import('./Chapter16AUnitEditor'));
const FE8Chapter16BUnitEditor = lazy(() => import('./Chapter16BUnitEditor'));
const FE8Chapter17AArmouryEditor = lazy(() => import('./Chapter17AArmouryEditor'));
const FE8Chapter17AShopEditor = lazy(() => import('./Chapter17AShopEditor'));
const FE8Chapter17AUnitEditor = lazy(() => import('./Chapter17AUnitEditor'));
const FE8Chapter17BArmouryEditor = lazy(() => import('./Chapter17BArmouryEditor'));
const FE8Chapter17BShopEditor = lazy(() => import('./Chapter17BShopEditor'));
const FE8Chapter17BUnitEditor = lazy(() => import('./Chapter17BUnitEditor'));
const FE8Chapter18AUnitEditor = lazy(() => import('./Chapter18AUnitEditor'));
const FE8Chapter18BUnitEditor = lazy(() => import('./Chapter18BUnitEditor'));
const FE8Chapter19ACutsceneUnitEditor = lazy(() => import('./Chapter19ACutsceneUnitEditor'));
const FE8Chapter19ASecretEditor = lazy(() => import('./Chapter19ASecretEditor'));
const FE8Chapter19AUnitEditor = lazy(() => import('./Chapter19AUnitEditor'));
const FE8Chapter19BSecretEditor = lazy(() => import('./Chapter19BSecretEditor'));
const FE8Chapter19BUnitEditor = lazy(() => import('./Chapter19BUnitEditor'));
const FE8Chapter2ArmouryEditor = lazy(() => import('./Chapter2ArmouryEditor'));
const FE8Chapter2UnitEditor = lazy(() => import('./Chapter2UnitEditor'));
const FE8Chapter20ACutsceneUnitEditor = lazy(() => import('./Chapter20ACutsceneUnitEditor'));
const FE8Chapter20AUnitEditor = lazy(() => import('./Chapter20AUnitEditor'));
const FE8Chapter20BUnitEditor = lazy(() => import('./Chapter20BUnitEditor'));
const FE8Chapter3CutsceneUnitEditor = lazy(() => import('./Chapter3CutsceneUnitEditor'));
const FE8Chapter3UnitEditor = lazy(() => import('./Chapter3UnitEditor'));
const FE8Chapter4UnitEditor = lazy(() => import('./Chapter4UnitEditor'));
const FE8Chapter5ArmouryEditor = lazy(() => import('./Chapter5ArmouryEditor'));
const FE8Chapter5ShopEditor = lazy(() => import('./Chapter5ShopEditor'));
const FE8Chapter5UnitEditor = lazy(() => import('./Chapter5UnitEditor'));
const FE8Chapter5xCutsceneUnitEditor = lazy(() => import('./Chapter5xCutsceneUnitEditor'));
const FE8Chapter5xCutscene2UnitEditor = lazy(() => import('./Chapter5xCutscene2UnitEditor'));
const FE8Chapter5xUnitEditor = lazy(() => import('./Chapter5xUnitEditor'));
const FE8Chapter6UnitEditor = lazy(() => import('./Chapter6UnitEditor'));
const FE8Chapter7UnitEditor = lazy(() => import('./Chapter7UnitEditor'));
const FE8Chapter8Cutscene2UnitEditor = lazy(() => import('./Chapter8Cutscene2UnitEditor'));
const FE8Chapter8CutsceneUnitEditor = lazy(() => import('./Chapter8CutsceneUnitEditor'));
const FE8Chapter8UnitEditor = lazy(() => import('./Chapter8UnitEditor'));
const FE8Chapter9AArmouryEditor = lazy(() => import('./Chapter9AArmouryEditor'));
const FE8Chapter9ACutsceneUnitEditor = lazy(() => import('./Chapter9ACutsceneUnitEditor'));
const FE8Chapter9AShopEditor = lazy(() => import('./Chapter9AShopEditor'));
const FE8Chapter9AUnitEditor = lazy(() => import('./Chapter9AUnitEditor'));
const FE8Chapter9BCutsceneUnitEditor = lazy(() => import('./Chapter9BCutsceneUnitEditor'));
const FE8Chapter9BCutscene2UnitEditor = lazy(() => import('./Chapter9BCutscene2UnitEditor'));
const FE8Chapter9BUnitEditor = lazy(() => import('./Chapter9BUnitEditor'));
const FE8ChapterFinalAUnitEditor = lazy(() => import('./ChapterFinalAUnitEditor'));
const FE8ChapterFinalBTowerofValni1UnitEditor = lazy(() => import('./ChapterFinalBTowerofValni1UnitEditor'));
const FE8ChapterFinalBossUnitEditor = lazy(() => import('./ChapterFinalBossUnitEditor'));
const FE8Critbonuseditor = lazy(() => import('./Critbonuseditor'));
const FE8Eventtableeditor = lazy(() => import('./Eventtableeditor'));
const FE8Mapspritepointertableeditor = lazy(() => import('./Mapspritepointertableeditor'));
const FE8BattlePaletteReference = lazy(() => import('./BattlePaletteReference'));
const FE8BossQuoteEditor = lazy(() => import('./BossQuoteEditor'));
const FE8SpecialDeathQuoteEditor = lazy(() => import('./SpecialDeathQuoteEditor'));
const FE8Ch1EventTileEditor = lazy(() => import('./Ch1EventTileEditor'));
const FE8Ch1ReinforcementEditor = lazy(() => import('./Ch1ReinforcementEditor'));
const FE8Ch10Ephraimrecruitmenteditor = lazy(() => import('./Ch10Ephraimrecruitmenteditor'));
const FE8Ch10irikarecruitmenteditor = lazy(() => import('./Ch10irikarecruitmenteditor'));
const FE8Ch10AEventTileEditor = lazy(() => import('./Ch10AEventTileEditor'));
const FE8Ch10AReinforcementEditor = lazy(() => import('./Ch10AReinforcementEditor'));
const FE8Ch10BEventTileEditor = lazy(() => import('./Ch10BEventTileEditor'));
const FE8Ch10BReinforcementEditor = lazy(() => import('./Ch10BReinforcementEditor'));
const FE8Ch11Eirikarecruitmenteditor = lazy(() => import('./Ch11Eirikarecruitmenteditor'));
const FE8Ch11Ephraimrecruitmenteditor = lazy(() => import('./Ch11Ephraimrecruitmenteditor'));
const FE8Ch11AChestEditor = lazy(() => import('./Ch11AChestEditor'));
const FE8Ch11AReinforcementEditor = lazy(() => import('./Ch11AReinforcementEditor'));
const FE8Ch11BEventTileEditor = lazy(() => import('./Ch11BEventTileEditor'));
const FE8Ch11BReinforcementEditor = lazy(() => import('./Ch11BReinforcementEditor'));
const FE8Ch12Ephraimrecruitmenteditor = lazy(() => import('./Ch12Ephraimrecruitmenteditor'));
const FE8Ch12AEventTileEditor = lazy(() => import('./Ch12AEventTileEditor'));
const FE8Ch12AReinforcementEditor = lazy(() => import('./Ch12AReinforcementEditor'));
const FE8Ch12BEventTileEditor = lazy(() => import('./Ch12BEventTileEditor'));
const FE8Ch12BReinforcementEditor = lazy(() => import('./Ch12BReinforcementEditor'));
const FE8Ch13Eirikarecruitmenteditor = lazy(() => import('./Ch13Eirikarecruitmenteditor'));
const FE8Ch13AEventTileEditor = lazy(() => import('./Ch13AEventTileEditor'));
const FE8Ch13AReinforcementEditor = lazy(() => import('./Ch13AReinforcementEditor'));
const FE8Ch13BEventTileEditor = lazy(() => import('./Ch13BEventTileEditor'));
const FE8Ch13BReinforcementEditor = lazy(() => import('./Ch13BReinforcementEditor'));
const FE8Ch14Eirikarecruitmenteditor = lazy(() => import('./Ch14Eirikarecruitmenteditor'));
const FE8Ch14AChestEditor = lazy(() => import('./Ch14AChestEditor'));
const FE8Ch14AReinforcementEditor = lazy(() => import('./Ch14AReinforcementEditor'));
const FE8Ch14BChestEditor = lazy(() => import('./Ch14BChestEditor'));
const FE8Ch14BReinforcementEditor = lazy(() => import('./Ch14BReinforcementEditor'));
const FE8Ch15AEventTileEditor = lazy(() => import('./Ch15AEventTileEditor'));
const FE8Ch15AReinforcementEditor = lazy(() => import('./Ch15AReinforcementEditor'));
const FE8Ch15BEventTileEditor = lazy(() => import('./Ch15BEventTileEditor'));
const FE8Ch15BReinforcementEditor = lazy(() => import('./Ch15BReinforcementEditor'));
const FE8Ch16AChestEditor = lazy(() => import('./Ch16AChestEditor'));
const FE8Ch16AReinforcementEditor = lazy(() => import('./Ch16AReinforcementEditor'));
const FE8Ch16BChestEditor = lazy(() => import('./Ch16BChestEditor'));
const FE8Ch16BReinforcementEditor = lazy(() => import('./Ch16BReinforcementEditor'));
const FE8Ch17Eirikarecruitmenteditor = lazy(() => import('./Ch17Eirikarecruitmenteditor'));
const FE8Ch17AEventTileEditor = lazy(() => import('./Ch17AEventTileEditor'));
const FE8Ch17AReinforcementEditor = lazy(() => import('./Ch17AReinforcementEditor'));
const FE8Ch17BEventTileEditor = lazy(() => import('./Ch17BEventTileEditor'));
const FE8Ch17BReinforcementEditor = lazy(() => import('./Ch17BReinforcementEditor'));
const FE8Ch18AEventTileEditor = lazy(() => import('./Ch18AEventTileEditor'));
const FE8Ch18AReinforcementEditor = lazy(() => import('./Ch18AReinforcementEditor'));
const FE8Ch18BEventTileEditor = lazy(() => import('./Ch18BEventTileEditor'));
const FE8Ch18BReinforcementEditor = lazy(() => import('./Ch18BReinforcementEditor'));
const FE8Ch19AChestEditor = lazy(() => import('./Ch19AChestEditor'));
const FE8Ch19AReinforcementEditor = lazy(() => import('./Ch19AReinforcementEditor'));
const FE8Ch19BChestEditor = lazy(() => import('./Ch19BChestEditor'));
const FE8Ch19BReinforcementEditor = lazy(() => import('./Ch19BReinforcementEditor'));
const FE8Ch2EventTileEditor = lazy(() => import('./Ch2EventTileEditor'));
const FE8Ch2recruitmenteditor = lazy(() => import('./Ch2recruitmenteditor'));
const FE8Ch2ReinforcementEditor = lazy(() => import('./Ch2ReinforcementEditor'));
const FE8Ch20AEventTileEditor = lazy(() => import('./Ch20AEventTileEditor'));
const FE8Ch20AReinforcementEditor = lazy(() => import('./Ch20AReinforcementEditor'));
const FE8Ch20BEventTileEditor = lazy(() => import('./Ch20BEventTileEditor'));
const FE8Ch20BReinforcementEditor = lazy(() => import('./Ch20BReinforcementEditor'));
const FE8Ch3ChestEditor = lazy(() => import('./Ch3ChestEditor'));
const FE8Ch3recruitmenteditor = lazy(() => import('./Ch3recruitmenteditor'));
const FE8Ch3ReinforcementEditor = lazy(() => import('./Ch3ReinforcementEditor'));
const FE8Ch4EventTileEditor = lazy(() => import('./Ch4EventTileEditor'));
const FE8Ch4ReinforcementEditor = lazy(() => import('./Ch4ReinforcementEditor'));
const FE8Ch5ChestEditor = lazy(() => import('./Ch5ChestEditor'));
const FE8Ch5recruitmenteditor = lazy(() => import('./Ch5recruitmenteditor'));
const FE8Ch5ReinforcementEditor = lazy(() => import('./Ch5ReinforcementEditor'));
const FE8Ch5xChestEditor = lazy(() => import('./Ch5xChestEditor'));
const FE8Ch6EventTileEditor = lazy(() => import('./Ch6EventTileEditor'));
const FE8Ch6ReinforcementEditor = lazy(() => import('./Ch6ReinforcementEditor'));
const FE8Ch7EventTileEditor = lazy(() => import('./Ch7EventTileEditor'));
const FE8Ch7ReinforcementEditor = lazy(() => import('./Ch7ReinforcementEditor'));
const FE8Ch8ChestEditor = lazy(() => import('./Ch8ChestEditor'));
const FE8Ch8ReinforcementEditor = lazy(() => import('./Ch8ReinforcementEditor'));
const FE8Ch9Eirikarecruitmenteditor = lazy(() => import('./Ch9Eirikarecruitmenteditor'));
const FE8Ch9Ephraimrecruitmenteditor = lazy(() => import('./Ch9Ephraimrecruitmenteditor'));
const FE8Ch9AEventTileEditor = lazy(() => import('./Ch9AEventTileEditor'));
const FE8Ch9AReinforcementEditor = lazy(() => import('./Ch9AReinforcementEditor'));
const FE8Ch9BChestEditor = lazy(() => import('./Ch9BChestEditor'));
const FE8Ch9BReinforcementEditor = lazy(() => import('./Ch9BReinforcementEditor'));
const FE8ChFinalAChestEditor = lazy(() => import('./ChFinalAChestEditor'));
const FE8ChFinalAReinforcementEditor = lazy(() => import('./ChFinalAReinforcementEditor'));
const FE8ChFinalBChestEditor = lazy(() => import('./ChFinalBChestEditor'));
const FE8ChFinalBReinforcementEditor = lazy(() => import('./ChFinalBReinforcementEditor'));
const FE8ChFinalBossAEventTileEditor = lazy(() => import('./ChFinalBossAEventTileEditor'));
const FE8ChFinalBossBEventTileEditor = lazy(() => import('./ChFinalBossBEventTileEditor'));
const FE8ChapterDataEditor = lazy(() => import('./ChapterDataEditor'));
const FE8CharacterEditor = lazy(() => import('./CharacterEditor'));
const FE8ClassChangingTable = lazy(() => import('./ClassChangingTable'));
const FE8ClassEditor = lazy(() => import('./ClassEditor'));
const FE8CustomBattleAnimationEditor = lazy(() => import('./CustomBattleAnimationEditor'));
const FE8CustomItemAnimationList = lazy(() => import('./CustomItemAnimationList'));
const FE8CustomPromotionPointerEditor = lazy(() => import('./CustomPromotionPointerEditor'));
const FE8CustomSupportPointerEditor = lazy(() => import('./CustomSupportPointerEditor'));
const FE8ItemEditor = lazy(() => import('./ItemEditor'));
const FE8ItemEffectPointerEditor = lazy(() => import('./ItemEffectPointerEditor'));
const FE8ItemRandomizingTableEditor = lazy(() => import('./ItemRandomizingTableEditor'));
const FE8ItemTargetPointerEditor = lazy(() => import('./ItemTargetPointerEditor'));
const FE8ItemUsabilityPointerEditor = lazy(() => import('./ItemUsabilityPointerEditor'));
const FE8OceanSealPromotionEditor = lazy(() => import('./OceanSealPromotionEditor'));
const FE8PaletteAssociationEditor = lazy(() => import('./PaletteAssociationEditor'));
const FE8PortraitEditor = lazy(() => import('./PortraitEditor'));
const FE8PrologueEventTileEditor = lazy(() => import('./PrologueEventTileEditor'));
const FE8PromotionBranchEditor = lazy(() => import('./PromotionBranchEditor'));
const FE8PromotionItemEditor = lazy(() => import('./PromotionItemEditor'));
const FE8Promotionleveleditor = lazy(() => import('./Promotionleveleditor'));
const FE8RandomItemGroupsTable = lazy(() => import('./RandomItemGroupsTable'));
const FE8RandomItemProbabilityGroupTable = lazy(() => import('./RandomItemProbabilityGroupTable'));
const FE8SoundRoomEditor = lazy(() => import('./SoundRoomEditor'));
const FE8SpellAssociationEditor = lazy(() => import('./SpellAssociationEditor'));
const FE8Standingmapspriteeditor = lazy(() => import('./Standingmapspriteeditor'));
const FE8StatBonusesEditor = lazy(() => import('./StatBonusesEditor'));
const FE8Summoneditor = lazy(() => import('./Summoneditor'));
const FE8SupportPointerEditor = lazy(() => import('./SupportPointerEditor'));
const FE8TerrainStatEditor = lazy(() => import('./TerrainStatEditor'));
const FE8Unknown0EventTileEditor = lazy(() => import('./Unknown0EventTileEditor'));
const FE8Unknown1EventTileEditor = lazy(() => import('./Unknown1EventTileEditor'));
const FE8Unknown1ReinforcementEditor = lazy(() => import('./Unknown1ReinforcementEditor'));
const FE8Unknown10ChestEditor = lazy(() => import('./Unknown10ChestEditor'));
const FE8Unknown10ReinforcementEditor = lazy(() => import('./Unknown10ReinforcementEditor'));
const FE8Unknown11EventTileEditor = lazy(() => import('./Unknown11EventTileEditor'));
const FE8Unknown11ReinforcementEditor = lazy(() => import('./Unknown11ReinforcementEditor'));
const FE8Unknown12EventTileEditor = lazy(() => import('./Unknown12EventTileEditor'));
const FE8Unknown13EventTileEditor = lazy(() => import('./Unknown13EventTileEditor'));
const FE8Unknown13ReinforcementEditor = lazy(() => import('./Unknown13ReinforcementEditor'));
const FE8Unknown14EventTileEditor = lazy(() => import('./Unknown14EventTileEditor'));
const FE8Unknown14ReinforcementEditor = lazy(() => import('./Unknown14ReinforcementEditor'));
const FE8Unknown15EventTileEditor = lazy(() => import('./Unknown15EventTileEditor'));
const FE8Unknown15ReinforcementEditor = lazy(() => import('./Unknown15ReinforcementEditor'));
const FE8Unknown16EventTileEditor = lazy(() => import('./Unknown16EventTileEditor'));
const FE8Unknown16ReinforcementEditor = lazy(() => import('./Unknown16ReinforcementEditor'));
const FE8Unknown17EventTileEditor = lazy(() => import('./Unknown17EventTileEditor'));
const FE8Unknown18EventTileEditor = lazy(() => import('./Unknown18EventTileEditor'));
const FE8Unknown19EventTileEditor = lazy(() => import('./Unknown19EventTileEditor'));
const FE8Unknown2ChestEditor = lazy(() => import('./Unknown2ChestEditor'));
const FE8Unknown20EventTileEditor = lazy(() => import('./Unknown20EventTileEditor'));
const FE8Unknown20ReinforcementEditor = lazy(() => import('./Unknown20ReinforcementEditor'));
const FE8Unknown21EventTileEditor = lazy(() => import('./Unknown21EventTileEditor'));
const FE8Unknown3EventTileEditor = lazy(() => import('./Unknown3EventTileEditor'));
const FE8Unknown4EventTileEditor = lazy(() => import('./Unknown4EventTileEditor'));
const FE8Unknown4ReinforcementEditor = lazy(() => import('./Unknown4ReinforcementEditor'));
const FE8Unknown5ChestEditor = lazy(() => import('./Unknown5ChestEditor'));
const FE8Unknown6EventTileEditor = lazy(() => import('./Unknown6EventTileEditor'));
const FE8Unknown6ReinforcementEditor = lazy(() => import('./Unknown6ReinforcementEditor'));
const FE8Unknown7ChestEditor = lazy(() => import('./Unknown7ChestEditor'));
const FE8Unknown8EventTileEditor = lazy(() => import('./Unknown8EventTileEditor'));
const FE8Unknown8ReinforcementEditor = lazy(() => import('./Unknown8ReinforcementEditor'));
const FE8Unknown9EventTileEditor = lazy(() => import('./Unknown9EventTileEditor'));
const FE8FireEmblem8PairedEndingsEditor = lazy(() => import('./FireEmblem8PairedEndingsEditor'));
const FE8FireEmblem8SupportcompatibilityEditor = lazy(() => import('./FireEmblem8SupportcompatibilityEditor'));
const FE8FireEmblem8SupportConvoAvailabilityEditor = lazy(() => import('./FireEmblem8SupportConvoAvailabilityEditor'));
const FE8LagdouRuins2MelkaenCoastUnitEditor = lazy(() => import('./LagdouRuins2MelkaenCoastUnitEditor'));
const FE8LevelCapEditor = lazy(() => import('./LevelCapEditor'));
const FE8MapBethroenArmouryEditor = lazy(() => import('./MapBethroenArmouryEditor'));
const FE8MapBethroenShopEditor = lazy(() => import('./MapBethroenShopEditor'));
const FE8MapCaerPelynShopEditor = lazy(() => import('./MapCaerPelynShopEditor'));
const FE8MapGradoKeepSecretEditor = lazy(() => import('./MapGradoKeepSecretEditor'));
const FE8MapIdeArmouryEditor = lazy(() => import('./MapIdeArmouryEditor'));
const FE8MapJehannaHallSecretEditor = lazy(() => import('./MapJehannaHallSecretEditor'));
const FE8MapJehannaHallShopEditor = lazy(() => import('./MapJehannaHallShopEditor'));
const FE8MapNarubeRiverArmouryEditor = lazy(() => import('./MapNarubeRiverArmouryEditor'));
const FE8MapNarubeRiverShopEditor = lazy(() => import('./MapNarubeRiverShopEditor'));
const FE8MapPortKirisArmouryEditor = lazy(() => import('./MapPortKirisArmouryEditor'));
const FE8MapPortKirisShopEditor = lazy(() => import('./MapPortKirisShopEditor'));
const FE8MapRaustenCourtArmouryEditor = lazy(() => import('./MapRaustenCourtArmouryEditor'));
const FE8MapRaustenCourtSecretEditor = lazy(() => import('./MapRaustenCourtSecretEditor'));
const FE8MapRaustenCourtShopEditor = lazy(() => import('./MapRaustenCourtShopEditor'));
const FE8MapSerafewArmouryEditor = lazy(() => import('./MapSerafewArmouryEditor'));
const FE8MapSerafewShopEditor = lazy(() => import('./MapSerafewShopEditor'));
const FE8MapTaizelShopEditor = lazy(() => import('./MapTaizelShopEditor'));
const FE8PrologueCutsceneUnitEditor = lazy(() => import('./PrologueCutsceneUnitEditor'));
const FE8PrologueCutscene2UnitEditor = lazy(() => import('./PrologueCutscene2UnitEditor'));
const FE8PrologueUnitEditor = lazy(() => import('./PrologueUnitEditor'));
const FE8SRankBonusEditor = lazy(() => import('./SRankBonusEditor'));
const FE8Summoncharactereditor = lazy(() => import('./Summoncharactereditor'));
const FE8Supportbonuseditor = lazy(() => import('./Supportbonuseditor'));
const FE8TowerofValni2UnitEditor = lazy(() => import('./TowerofValni2UnitEditor'));
const FE8TowerofValni3UnitEditor = lazy(() => import('./TowerofValni3UnitEditor'));
const FE8TowerofValni4LagdouRuins1UnitEditor = lazy(() => import('./TowerofValni4LagdouRuins1UnitEditor'));
const FE8UnitMenutable = lazy(() => import('./UnitMenutable'));
const FE8Unknown5UnitEditor = lazy(() => import('./Unknown5UnitEditor'));
const FE8Unknown6UnitEditor = lazy(() => import('./Unknown6UnitEditor'));

export const FE8Routes = {
  path: 'FE8',
  element: <FE8 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE8HomePage /></Suspense> },
    { path: 'BattlePreparations', element: <Suspense fallback={loading}><FE8BattlePreparations /></Suspense> },
    { path: 'BattlePreperations', element: <Suspense fallback={loading}><FE8BattlePreperations /></Suspense> },
    { path: 'Battlescreeneditorpart1', element: <Suspense fallback={loading}><FE8Battlescreeneditorpart1 /></Suspense> },
    { path: 'Battlescreeneditorpart2', element: <Suspense fallback={loading}><FE8Battlescreeneditorpart2 /></Suspense> },
    { path: 'Battlescreeneditorpart3', element: <Suspense fallback={loading}><FE8Battlescreeneditorpart3 /></Suspense> },
    { path: 'Battlescreeneditorpart4', element: <Suspense fallback={loading}><FE8Battlescreeneditorpart4 /></Suspense> },
    { path: 'Battlescreeneditorpart5', element: <Suspense fallback={loading}><FE8Battlescreeneditorpart5 /></Suspense> },
    { path: 'Chapter1UnitEditor', element: <Suspense fallback={loading}><FE8Chapter1UnitEditor /></Suspense> },
    { path: 'Chapter10AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter10AUnitEditor /></Suspense> },
    { path: 'Chapter10BArmouryEditor', element: <Suspense fallback={loading}><FE8Chapter10BArmouryEditor /></Suspense> },
    { path: 'Chapter10BCutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter10BCutsceneUnitEditor /></Suspense> },
    { path: 'Chapter10BShopEditor', element: <Suspense fallback={loading}><FE8Chapter10BShopEditor /></Suspense> },
    { path: 'Chapter10BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter10BUnitEditor /></Suspense> },
    { path: 'Chapter11ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter11ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter11AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter11AUnitEditor /></Suspense> },
    { path: 'Chapter11BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter11BUnitEditor /></Suspense> },
    { path: 'Chapter12AShopEditor', element: <Suspense fallback={loading}><FE8Chapter12AShopEditor /></Suspense> },
    { path: 'Chapter12AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter12AUnitEditor /></Suspense> },
    { path: 'Chapter12BShopEditor', element: <Suspense fallback={loading}><FE8Chapter12BShopEditor /></Suspense> },
    { path: 'Chapter12BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter12BUnitEditor /></Suspense> },
    { path: 'Chapter13ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter13ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter13ACutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter13ACutscene2UnitEditor /></Suspense> },
    { path: 'Chapter13AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter13AUnitEditor /></Suspense> },
    { path: 'Chapter13BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter13BUnitEditor /></Suspense> },
    { path: 'Chapter14ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter14ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter14ACutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter14ACutscene2UnitEditor /></Suspense> },
    { path: 'Chapter14ACutscene3UnitEditor', element: <Suspense fallback={loading}><FE8Chapter14ACutscene3UnitEditor /></Suspense> },
    { path: 'Chapter14ASecretEditor', element: <Suspense fallback={loading}><FE8Chapter14ASecretEditor /></Suspense> },
    { path: 'Chapter14AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter14AUnitEditor /></Suspense> },
    { path: 'Chapter14BCutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter14BCutsceneUnitEditor /></Suspense> },
    { path: 'Chapter14BCutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter14BCutscene2UnitEditor /></Suspense> },
    { path: 'Chapter14BCutscene3UnitEditor', element: <Suspense fallback={loading}><FE8Chapter14BCutscene3UnitEditor /></Suspense> },
    { path: 'Chapter14BSecretEditor', element: <Suspense fallback={loading}><FE8Chapter14BSecretEditor /></Suspense> },
    { path: 'Chapter14BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter14BUnitEditor /></Suspense> },
    { path: 'Chapter15AShopEditor', element: <Suspense fallback={loading}><FE8Chapter15AShopEditor /></Suspense> },
    { path: 'Chapter15AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter15AUnitEditor /></Suspense> },
    { path: 'Chapter15BShopEditor', element: <Suspense fallback={loading}><FE8Chapter15BShopEditor /></Suspense> },
    { path: 'Chapter15BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter15BUnitEditor /></Suspense> },
    { path: 'Chapter16ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter16ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter16ACutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter16ACutscene2UnitEditor /></Suspense> },
    { path: 'Chapter16ACutscene3UnitEditor', element: <Suspense fallback={loading}><FE8Chapter16ACutscene3UnitEditor /></Suspense> },
    { path: 'Chapter16ACutscene4UnitEditor', element: <Suspense fallback={loading}><FE8Chapter16ACutscene4UnitEditor /></Suspense> },
    { path: 'Chapter16ACutscene5UnitEditor', element: <Suspense fallback={loading}><FE8Chapter16ACutscene5UnitEditor /></Suspense> },
    { path: 'Chapter16AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter16AUnitEditor /></Suspense> },
    { path: 'Chapter16BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter16BUnitEditor /></Suspense> },
    { path: 'Chapter17AArmouryEditor', element: <Suspense fallback={loading}><FE8Chapter17AArmouryEditor /></Suspense> },
    { path: 'Chapter17AShopEditor', element: <Suspense fallback={loading}><FE8Chapter17AShopEditor /></Suspense> },
    { path: 'Chapter17AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter17AUnitEditor /></Suspense> },
    { path: 'Chapter17BArmouryEditor', element: <Suspense fallback={loading}><FE8Chapter17BArmouryEditor /></Suspense> },
    { path: 'Chapter17BShopEditor', element: <Suspense fallback={loading}><FE8Chapter17BShopEditor /></Suspense> },
    { path: 'Chapter17BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter17BUnitEditor /></Suspense> },
    { path: 'Chapter18AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter18AUnitEditor /></Suspense> },
    { path: 'Chapter18BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter18BUnitEditor /></Suspense> },
    { path: 'Chapter19ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter19ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter19ASecretEditor', element: <Suspense fallback={loading}><FE8Chapter19ASecretEditor /></Suspense> },
    { path: 'Chapter19AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter19AUnitEditor /></Suspense> },
    { path: 'Chapter19BSecretEditor', element: <Suspense fallback={loading}><FE8Chapter19BSecretEditor /></Suspense> },
    { path: 'Chapter19BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter19BUnitEditor /></Suspense> },
    { path: 'Chapter2ArmouryEditor', element: <Suspense fallback={loading}><FE8Chapter2ArmouryEditor /></Suspense> },
    { path: 'Chapter2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter2UnitEditor /></Suspense> },
    { path: 'Chapter20ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter20ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter20AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter20AUnitEditor /></Suspense> },
    { path: 'Chapter20BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter20BUnitEditor /></Suspense> },
    { path: 'Chapter3CutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter3CutsceneUnitEditor /></Suspense> },
    { path: 'Chapter3UnitEditor', element: <Suspense fallback={loading}><FE8Chapter3UnitEditor /></Suspense> },
    { path: 'Chapter4UnitEditor', element: <Suspense fallback={loading}><FE8Chapter4UnitEditor /></Suspense> },
    { path: 'Chapter5ArmouryEditor', element: <Suspense fallback={loading}><FE8Chapter5ArmouryEditor /></Suspense> },
    { path: 'Chapter5ShopEditor', element: <Suspense fallback={loading}><FE8Chapter5ShopEditor /></Suspense> },
    { path: 'Chapter5UnitEditor', element: <Suspense fallback={loading}><FE8Chapter5UnitEditor /></Suspense> },
    { path: 'Chapter5xCutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter5xCutsceneUnitEditor /></Suspense> },
    { path: 'Chapter5xCutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter5xCutscene2UnitEditor /></Suspense> },
    { path: 'Chapter5xUnitEditor', element: <Suspense fallback={loading}><FE8Chapter5xUnitEditor /></Suspense> },
    { path: 'Chapter6UnitEditor', element: <Suspense fallback={loading}><FE8Chapter6UnitEditor /></Suspense> },
    { path: 'Chapter7UnitEditor', element: <Suspense fallback={loading}><FE8Chapter7UnitEditor /></Suspense> },
    { path: 'Chapter8Cutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter8Cutscene2UnitEditor /></Suspense> },
    { path: 'Chapter8CutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter8CutsceneUnitEditor /></Suspense> },
    { path: 'Chapter8UnitEditor', element: <Suspense fallback={loading}><FE8Chapter8UnitEditor /></Suspense> },
    { path: 'Chapter9AArmouryEditor', element: <Suspense fallback={loading}><FE8Chapter9AArmouryEditor /></Suspense> },
    { path: 'Chapter9ACutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter9ACutsceneUnitEditor /></Suspense> },
    { path: 'Chapter9AShopEditor', element: <Suspense fallback={loading}><FE8Chapter9AShopEditor /></Suspense> },
    { path: 'Chapter9AUnitEditor', element: <Suspense fallback={loading}><FE8Chapter9AUnitEditor /></Suspense> },
    { path: 'Chapter9BCutsceneUnitEditor', element: <Suspense fallback={loading}><FE8Chapter9BCutsceneUnitEditor /></Suspense> },
    { path: 'Chapter9BCutscene2UnitEditor', element: <Suspense fallback={loading}><FE8Chapter9BCutscene2UnitEditor /></Suspense> },
    { path: 'Chapter9BUnitEditor', element: <Suspense fallback={loading}><FE8Chapter9BUnitEditor /></Suspense> },
    { path: 'ChapterFinalAUnitEditor', element: <Suspense fallback={loading}><FE8ChapterFinalAUnitEditor /></Suspense> },
    { path: 'ChapterFinalBTowerofValni1UnitEditor', element: <Suspense fallback={loading}><FE8ChapterFinalBTowerofValni1UnitEditor /></Suspense> },
    { path: 'ChapterFinalBossUnitEditor', element: <Suspense fallback={loading}><FE8ChapterFinalBossUnitEditor /></Suspense> },
    { path: 'Critbonuseditor', element: <Suspense fallback={loading}><FE8Critbonuseditor /></Suspense> },
    { path: 'Eventtableeditor', element: <Suspense fallback={loading}><FE8Eventtableeditor /></Suspense> },
    { path: 'Mapspritepointertableeditor', element: <Suspense fallback={loading}><FE8Mapspritepointertableeditor /></Suspense> },
    { path: 'BattlePaletteReference', element: <Suspense fallback={loading}><FE8BattlePaletteReference /></Suspense> },
    { path: 'BossQuoteEditor', element: <Suspense fallback={loading}><FE8BossQuoteEditor /></Suspense> },
    { path: 'SpecialDeathQuoteEditor', element: <Suspense fallback={loading}><FE8SpecialDeathQuoteEditor /></Suspense> },
    { path: 'Ch1EventTileEditor', element: <Suspense fallback={loading}><FE8Ch1EventTileEditor /></Suspense> },
    { path: 'Ch1ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch1ReinforcementEditor /></Suspense> },
    { path: 'Ch10Ephraimrecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch10Ephraimrecruitmenteditor /></Suspense> },
    { path: 'Ch10irikarecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch10irikarecruitmenteditor /></Suspense> },
    { path: 'Ch10AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch10AEventTileEditor /></Suspense> },
    { path: 'Ch10AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch10AReinforcementEditor /></Suspense> },
    { path: 'Ch10BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch10BEventTileEditor /></Suspense> },
    { path: 'Ch10BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch10BReinforcementEditor /></Suspense> },
    { path: 'Ch11Eirikarecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch11Eirikarecruitmenteditor /></Suspense> },
    { path: 'Ch11Ephraimrecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch11Ephraimrecruitmenteditor /></Suspense> },
    { path: 'Ch11AChestEditor', element: <Suspense fallback={loading}><FE8Ch11AChestEditor /></Suspense> },
    { path: 'Ch11AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch11AReinforcementEditor /></Suspense> },
    { path: 'Ch11BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch11BEventTileEditor /></Suspense> },
    { path: 'Ch11BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch11BReinforcementEditor /></Suspense> },
    { path: 'Ch12Ephraimrecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch12Ephraimrecruitmenteditor /></Suspense> },
    { path: 'Ch12AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch12AEventTileEditor /></Suspense> },
    { path: 'Ch12AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch12AReinforcementEditor /></Suspense> },
    { path: 'Ch12BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch12BEventTileEditor /></Suspense> },
    { path: 'Ch12BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch12BReinforcementEditor /></Suspense> },
    { path: 'Ch13Eirikarecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch13Eirikarecruitmenteditor /></Suspense> },
    { path: 'Ch13AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch13AEventTileEditor /></Suspense> },
    { path: 'Ch13AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch13AReinforcementEditor /></Suspense> },
    { path: 'Ch13BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch13BEventTileEditor /></Suspense> },
    { path: 'Ch13BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch13BReinforcementEditor /></Suspense> },
    { path: 'Ch14Eirikarecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch14Eirikarecruitmenteditor /></Suspense> },
    { path: 'Ch14AChestEditor', element: <Suspense fallback={loading}><FE8Ch14AChestEditor /></Suspense> },
    { path: 'Ch14AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch14AReinforcementEditor /></Suspense> },
    { path: 'Ch14BChestEditor', element: <Suspense fallback={loading}><FE8Ch14BChestEditor /></Suspense> },
    { path: 'Ch14BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch14BReinforcementEditor /></Suspense> },
    { path: 'Ch15AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch15AEventTileEditor /></Suspense> },
    { path: 'Ch15AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch15AReinforcementEditor /></Suspense> },
    { path: 'Ch15BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch15BEventTileEditor /></Suspense> },
    { path: 'Ch15BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch15BReinforcementEditor /></Suspense> },
    { path: 'Ch16AChestEditor', element: <Suspense fallback={loading}><FE8Ch16AChestEditor /></Suspense> },
    { path: 'Ch16AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch16AReinforcementEditor /></Suspense> },
    { path: 'Ch16BChestEditor', element: <Suspense fallback={loading}><FE8Ch16BChestEditor /></Suspense> },
    { path: 'Ch16BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch16BReinforcementEditor /></Suspense> },
    { path: 'Ch17Eirikarecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch17Eirikarecruitmenteditor /></Suspense> },
    { path: 'Ch17AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch17AEventTileEditor /></Suspense> },
    { path: 'Ch17AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch17AReinforcementEditor /></Suspense> },
    { path: 'Ch17BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch17BEventTileEditor /></Suspense> },
    { path: 'Ch17BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch17BReinforcementEditor /></Suspense> },
    { path: 'Ch18AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch18AEventTileEditor /></Suspense> },
    { path: 'Ch18AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch18AReinforcementEditor /></Suspense> },
    { path: 'Ch18BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch18BEventTileEditor /></Suspense> },
    { path: 'Ch18BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch18BReinforcementEditor /></Suspense> },
    { path: 'Ch19AChestEditor', element: <Suspense fallback={loading}><FE8Ch19AChestEditor /></Suspense> },
    { path: 'Ch19AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch19AReinforcementEditor /></Suspense> },
    { path: 'Ch19BChestEditor', element: <Suspense fallback={loading}><FE8Ch19BChestEditor /></Suspense> },
    { path: 'Ch19BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch19BReinforcementEditor /></Suspense> },
    { path: 'Ch2EventTileEditor', element: <Suspense fallback={loading}><FE8Ch2EventTileEditor /></Suspense> },
    { path: 'Ch2recruitmenteditor', element: <Suspense fallback={loading}><FE8Ch2recruitmenteditor /></Suspense> },
    { path: 'Ch2ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch2ReinforcementEditor /></Suspense> },
    { path: 'Ch20AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch20AEventTileEditor /></Suspense> },
    { path: 'Ch20AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch20AReinforcementEditor /></Suspense> },
    { path: 'Ch20BEventTileEditor', element: <Suspense fallback={loading}><FE8Ch20BEventTileEditor /></Suspense> },
    { path: 'Ch20BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch20BReinforcementEditor /></Suspense> },
    { path: 'Ch3ChestEditor', element: <Suspense fallback={loading}><FE8Ch3ChestEditor /></Suspense> },
    { path: 'Ch3recruitmenteditor', element: <Suspense fallback={loading}><FE8Ch3recruitmenteditor /></Suspense> },
    { path: 'Ch3ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch3ReinforcementEditor /></Suspense> },
    { path: 'Ch4EventTileEditor', element: <Suspense fallback={loading}><FE8Ch4EventTileEditor /></Suspense> },
    { path: 'Ch4ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch4ReinforcementEditor /></Suspense> },
    { path: 'Ch5ChestEditor', element: <Suspense fallback={loading}><FE8Ch5ChestEditor /></Suspense> },
    { path: 'Ch5recruitmenteditor', element: <Suspense fallback={loading}><FE8Ch5recruitmenteditor /></Suspense> },
    { path: 'Ch5ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch5ReinforcementEditor /></Suspense> },
    { path: 'Ch5xChestEditor', element: <Suspense fallback={loading}><FE8Ch5xChestEditor /></Suspense> },
    { path: 'Ch6EventTileEditor', element: <Suspense fallback={loading}><FE8Ch6EventTileEditor /></Suspense> },
    { path: 'Ch6ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch6ReinforcementEditor /></Suspense> },
    { path: 'Ch7EventTileEditor', element: <Suspense fallback={loading}><FE8Ch7EventTileEditor /></Suspense> },
    { path: 'Ch7ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch7ReinforcementEditor /></Suspense> },
    { path: 'Ch8ChestEditor', element: <Suspense fallback={loading}><FE8Ch8ChestEditor /></Suspense> },
    { path: 'Ch8ReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch8ReinforcementEditor /></Suspense> },
    { path: 'Ch9Eirikarecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch9Eirikarecruitmenteditor /></Suspense> },
    { path: 'Ch9Ephraimrecruitmenteditor', element: <Suspense fallback={loading}><FE8Ch9Ephraimrecruitmenteditor /></Suspense> },
    { path: 'Ch9AEventTileEditor', element: <Suspense fallback={loading}><FE8Ch9AEventTileEditor /></Suspense> },
    { path: 'Ch9AReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch9AReinforcementEditor /></Suspense> },
    { path: 'Ch9BChestEditor', element: <Suspense fallback={loading}><FE8Ch9BChestEditor /></Suspense> },
    { path: 'Ch9BReinforcementEditor', element: <Suspense fallback={loading}><FE8Ch9BReinforcementEditor /></Suspense> },
    { path: 'ChFinalAChestEditor', element: <Suspense fallback={loading}><FE8ChFinalAChestEditor /></Suspense> },
    { path: 'ChFinalAReinforcementEditor', element: <Suspense fallback={loading}><FE8ChFinalAReinforcementEditor /></Suspense> },
    { path: 'ChFinalBChestEditor', element: <Suspense fallback={loading}><FE8ChFinalBChestEditor /></Suspense> },
    { path: 'ChFinalBReinforcementEditor', element: <Suspense fallback={loading}><FE8ChFinalBReinforcementEditor /></Suspense> },
    { path: 'ChFinalBossAEventTileEditor', element: <Suspense fallback={loading}><FE8ChFinalBossAEventTileEditor /></Suspense> },
    { path: 'ChFinalBossBEventTileEditor', element: <Suspense fallback={loading}><FE8ChFinalBossBEventTileEditor /></Suspense> },
    { path: 'ChapterDataEditor', element: <Suspense fallback={loading}><FE8ChapterDataEditor /></Suspense> },
    { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE8CharacterEditor /></Suspense> },
    { path: 'ClassChangingTable', element: <Suspense fallback={loading}><FE8ClassChangingTable /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE8ClassEditor /></Suspense> },
    { path: 'CustomBattleAnimationEditor', element: <Suspense fallback={loading}><FE8CustomBattleAnimationEditor /></Suspense> },
    { path: 'CustomItemAnimationList', element: <Suspense fallback={loading}><FE8CustomItemAnimationList /></Suspense> },
    { path: 'CustomPromotionPointerEditor', element: <Suspense fallback={loading}><FE8CustomPromotionPointerEditor /></Suspense> },
    { path: 'CustomSupportPointerEditor', element: <Suspense fallback={loading}><FE8CustomSupportPointerEditor /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE8ItemEditor /></Suspense> },
    { path: 'ItemEffectPointerEditor', element: <Suspense fallback={loading}><FE8ItemEffectPointerEditor /></Suspense> },
    { path: 'ItemRandomizingTableEditor', element: <Suspense fallback={loading}><FE8ItemRandomizingTableEditor /></Suspense> },
    { path: 'ItemTargetPointerEditor', element: <Suspense fallback={loading}><FE8ItemTargetPointerEditor /></Suspense> },
    { path: 'ItemUsabilityPointerEditor', element: <Suspense fallback={loading}><FE8ItemUsabilityPointerEditor /></Suspense> },
    { path: 'OceanSealPromotionEditor', element: <Suspense fallback={loading}><FE8OceanSealPromotionEditor /></Suspense> },
    { path: 'PaletteAssociationEditor', element: <Suspense fallback={loading}><FE8PaletteAssociationEditor /></Suspense> },
    { path: 'PortraitEditor', element: <Suspense fallback={loading}><FE8PortraitEditor /></Suspense> },
    { path: 'PrologueEventTileEditor', element: <Suspense fallback={loading}><FE8PrologueEventTileEditor /></Suspense> },
    { path: 'PromotionBranchEditor', element: <Suspense fallback={loading}><FE8PromotionBranchEditor /></Suspense> },
    { path: 'PromotionItemEditor', element: <Suspense fallback={loading}><FE8PromotionItemEditor /></Suspense> },
    { path: 'Promotionleveleditor', element: <Suspense fallback={loading}><FE8Promotionleveleditor /></Suspense> },
    { path: 'RandomItemGroupsTable', element: <Suspense fallback={loading}><FE8RandomItemGroupsTable /></Suspense> },
    { path: 'RandomItemProbabilityGroupTable', element: <Suspense fallback={loading}><FE8RandomItemProbabilityGroupTable /></Suspense> },
    { path: 'SoundRoomEditor', element: <Suspense fallback={loading}><FE8SoundRoomEditor /></Suspense> },
    { path: 'SpellAssociationEditor', element: <Suspense fallback={loading}><FE8SpellAssociationEditor /></Suspense> },
    { path: 'Standingmapspriteeditor', element: <Suspense fallback={loading}><FE8Standingmapspriteeditor /></Suspense> },
    { path: 'StatBonusesEditor', element: <Suspense fallback={loading}><FE8StatBonusesEditor /></Suspense> },
    { path: 'Summoneditor', element: <Suspense fallback={loading}><FE8Summoneditor /></Suspense> },
    { path: 'SupportPointerEditor', element: <Suspense fallback={loading}><FE8SupportPointerEditor /></Suspense> },
    { path: 'TerrainStatEditor', element: <Suspense fallback={loading}><FE8TerrainStatEditor /></Suspense> },
    { path: 'Unknown0EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown0EventTileEditor /></Suspense> },
    { path: 'Unknown1EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown1EventTileEditor /></Suspense> },
    { path: 'Unknown1ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown1ReinforcementEditor /></Suspense> },
    { path: 'Unknown10ChestEditor', element: <Suspense fallback={loading}><FE8Unknown10ChestEditor /></Suspense> },
    { path: 'Unknown10ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown10ReinforcementEditor /></Suspense> },
    { path: 'Unknown11EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown11EventTileEditor /></Suspense> },
    { path: 'Unknown11ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown11ReinforcementEditor /></Suspense> },
    { path: 'Unknown12EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown12EventTileEditor /></Suspense> },
    { path: 'Unknown13EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown13EventTileEditor /></Suspense> },
    { path: 'Unknown13ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown13ReinforcementEditor /></Suspense> },
    { path: 'Unknown14EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown14EventTileEditor /></Suspense> },
    { path: 'Unknown14ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown14ReinforcementEditor /></Suspense> },
    { path: 'Unknown15EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown15EventTileEditor /></Suspense> },
    { path: 'Unknown15ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown15ReinforcementEditor /></Suspense> },
    { path: 'Unknown16EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown16EventTileEditor /></Suspense> },
    { path: 'Unknown16ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown16ReinforcementEditor /></Suspense> },
    { path: 'Unknown17EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown17EventTileEditor /></Suspense> },
    { path: 'Unknown18EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown18EventTileEditor /></Suspense> },
    { path: 'Unknown19EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown19EventTileEditor /></Suspense> },
    { path: 'Unknown2ChestEditor', element: <Suspense fallback={loading}><FE8Unknown2ChestEditor /></Suspense> },
    { path: 'Unknown20EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown20EventTileEditor /></Suspense> },
    { path: 'Unknown20ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown20ReinforcementEditor /></Suspense> },
    { path: 'Unknown21EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown21EventTileEditor /></Suspense> },
    { path: 'Unknown3EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown3EventTileEditor /></Suspense> },
    { path: 'Unknown4EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown4EventTileEditor /></Suspense> },
    { path: 'Unknown4ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown4ReinforcementEditor /></Suspense> },
    { path: 'Unknown5ChestEditor', element: <Suspense fallback={loading}><FE8Unknown5ChestEditor /></Suspense> },
    { path: 'Unknown6EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown6EventTileEditor /></Suspense> },
    { path: 'Unknown6ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown6ReinforcementEditor /></Suspense> },
    { path: 'Unknown7ChestEditor', element: <Suspense fallback={loading}><FE8Unknown7ChestEditor /></Suspense> },
    { path: 'Unknown8EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown8EventTileEditor /></Suspense> },
    { path: 'Unknown8ReinforcementEditor', element: <Suspense fallback={loading}><FE8Unknown8ReinforcementEditor /></Suspense> },
    { path: 'Unknown9EventTileEditor', element: <Suspense fallback={loading}><FE8Unknown9EventTileEditor /></Suspense> },
    { path: 'FireEmblem8PairedEndingsEditor', element: <Suspense fallback={loading}><FE8FireEmblem8PairedEndingsEditor /></Suspense> },
    { path: 'FireEmblem8SupportcompatibilityEditor', element: <Suspense fallback={loading}><FE8FireEmblem8SupportcompatibilityEditor /></Suspense> },
    { path: 'FireEmblem8SupportConvoAvailabilityEditor', element: <Suspense fallback={loading}><FE8FireEmblem8SupportConvoAvailabilityEditor /></Suspense> },
    { path: 'LagdouRuins2MelkaenCoastUnitEditor', element: <Suspense fallback={loading}><FE8LagdouRuins2MelkaenCoastUnitEditor /></Suspense> },
    { path: 'LevelCapEditor', element: <Suspense fallback={loading}><FE8LevelCapEditor /></Suspense> },
    { path: 'MapBethroenArmouryEditor', element: <Suspense fallback={loading}><FE8MapBethroenArmouryEditor /></Suspense> },
    { path: 'MapBethroenShopEditor', element: <Suspense fallback={loading}><FE8MapBethroenShopEditor /></Suspense> },
    { path: 'MapCaerPelynShopEditor', element: <Suspense fallback={loading}><FE8MapCaerPelynShopEditor /></Suspense> },
    { path: 'MapGradoKeepSecretEditor', element: <Suspense fallback={loading}><FE8MapGradoKeepSecretEditor /></Suspense> },
    { path: 'MapIdeArmouryEditor', element: <Suspense fallback={loading}><FE8MapIdeArmouryEditor /></Suspense> },
    { path: 'MapJehannaHallSecretEditor', element: <Suspense fallback={loading}><FE8MapJehannaHallSecretEditor /></Suspense> },
    { path: 'MapJehannaHallShopEditor', element: <Suspense fallback={loading}><FE8MapJehannaHallShopEditor /></Suspense> },
    { path: 'MapNarubeRiverArmouryEditor', element: <Suspense fallback={loading}><FE8MapNarubeRiverArmouryEditor /></Suspense> },
    { path: 'MapNarubeRiverShopEditor', element: <Suspense fallback={loading}><FE8MapNarubeRiverShopEditor /></Suspense> },
    { path: 'MapPortKirisArmouryEditor', element: <Suspense fallback={loading}><FE8MapPortKirisArmouryEditor /></Suspense> },
    { path: 'MapPortKirisShopEditor', element: <Suspense fallback={loading}><FE8MapPortKirisShopEditor /></Suspense> },
    { path: 'MapRaustenCourtArmouryEditor', element: <Suspense fallback={loading}><FE8MapRaustenCourtArmouryEditor /></Suspense> },
    { path: 'MapRaustenCourtSecretEditor', element: <Suspense fallback={loading}><FE8MapRaustenCourtSecretEditor /></Suspense> },
    { path: 'MapRaustenCourtShopEditor', element: <Suspense fallback={loading}><FE8MapRaustenCourtShopEditor /></Suspense> },
    { path: 'MapSerafewArmouryEditor', element: <Suspense fallback={loading}><FE8MapSerafewArmouryEditor /></Suspense> },
    { path: 'MapSerafewShopEditor', element: <Suspense fallback={loading}><FE8MapSerafewShopEditor /></Suspense> },
    { path: 'MapTaizelShopEditor', element: <Suspense fallback={loading}><FE8MapTaizelShopEditor /></Suspense> },
    { path: 'PrologueCutsceneUnitEditor', element: <Suspense fallback={loading}><FE8PrologueCutsceneUnitEditor /></Suspense> },
    { path: 'PrologueCutscene2UnitEditor', element: <Suspense fallback={loading}><FE8PrologueCutscene2UnitEditor /></Suspense> },
    { path: 'PrologueUnitEditor', element: <Suspense fallback={loading}><FE8PrologueUnitEditor /></Suspense> },
    { path: 'SRankBonusEditor', element: <Suspense fallback={loading}><FE8SRankBonusEditor /></Suspense> },
    { path: 'Summoncharactereditor', element: <Suspense fallback={loading}><FE8Summoncharactereditor /></Suspense> },
    { path: 'Supportbonuseditor', element: <Suspense fallback={loading}><FE8Supportbonuseditor /></Suspense> },
    { path: 'TowerofValni2UnitEditor', element: <Suspense fallback={loading}><FE8TowerofValni2UnitEditor /></Suspense> },
    { path: 'TowerofValni3UnitEditor', element: <Suspense fallback={loading}><FE8TowerofValni3UnitEditor /></Suspense> },
    { path: 'TowerofValni4LagdouRuins1UnitEditor', element: <Suspense fallback={loading}><FE8TowerofValni4LagdouRuins1UnitEditor /></Suspense> },
    { path: 'UnitMenutable', element: <Suspense fallback={loading}><FE8UnitMenutable /></Suspense> },
    { path: 'Unknown5UnitEditor', element: <Suspense fallback={loading}><FE8Unknown5UnitEditor /></Suspense> },
    { path: 'Unknown6UnitEditor', element: <Suspense fallback={loading}><FE8Unknown6UnitEditor /></Suspense> },
  ],
};

export default FE8Routes;
