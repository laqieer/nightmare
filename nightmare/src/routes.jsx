import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import App from './App';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import FE6 from './components/Module/FE6';
import FE7 from './components/Module/FE7';
import FE6HomePage from './components/Module/FE6/HomePage';
import FE7HomePage from './components/Module/FE7/HomePage';

export const loading = <Spin tip="Loading..." />;

const FE6CustomBattleAnimationEditor = lazy(() => import('./components/Module/FE6/CustomBattleAnimationEditor'));
const FE6BattlePaletteReference = lazy(() => import('./components/Module/FE6/BattlePaletteReference'));
const FE6Chapter1ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter1ArmyEditor'));
const FE6Chapter10BArmyEditor = lazy(() => import('./components/Module/FE6/Chapter10BArmyEditor'));
const FE6Chapter10AArmyEditor = lazy(() => import('./components/Module/FE6/Chapter10AArmyEditor'));
const FE6Chapter11AArmyEditor = lazy(() => import('./components/Module/FE6/Chapter11AArmyEditor'));
const FE6Chapter11BArmyEditor = lazy(() => import('./components/Module/FE6/Chapter11BArmyEditor'));
const FE6Chapter12ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter12ArmyEditor'));
const FE6Chapter12xArmyEditor = lazy(() => import('./components/Module/FE6/Chapter12xArmyEditor'));
const FE6Chapter13ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter13ArmyEditor'));
const FE6Chapter14ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter14ArmyEditor'));
const FE6Chapter14xArmyEditor = lazy(() => import('./components/Module/FE6/Chapter14xArmyEditor'));
const FE6Chapter15ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter15ArmyEditor'));
const FE6Chapter16ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter16ArmyEditor'));
const FE6Chapter16xArmyEditor = lazy(() => import('./components/Module/FE6/Chapter16xArmyEditor'));
const FE6Chapter17AArmyEditor = lazy(() => import('./components/Module/FE6/Chapter17AArmyEditor'));
const FE6Chapter17BArmyEditor = lazy(() => import('./components/Module/FE6/Chapter17BArmyEditor'));
const FE6Chapter18BArmyEditor = lazy(() => import('./components/Module/FE6/Chapter18BArmyEditor'));
const FE6Chapter19AArmyEditor = lazy(() => import('./components/Module/FE6/Chapter19AArmyEditor'));
const FE6Chapter18AArmyEditor = lazy(() => import('./components/Module/FE6/Chapter18AArmyEditor'));
const FE6Chapter19BArmyEditor = lazy(() => import('./components/Module/FE6/Chapter19BArmyEditor'));
const FE6Chapter20AArmyEditor = lazy(() => import('./components/Module/FE6/Chapter20AArmyEditor'));
const FE6Chapter2ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter2ArmyEditor'));
const FE6Chapter20AxArmyEditor = lazy(() => import('./components/Module/FE6/Chapter20AxArmyEditor'));
const FE6Chapter21ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter21ArmyEditor'));
const FE6Chapter20BArmyEditor = lazy(() => import('./components/Module/FE6/Chapter20BArmyEditor'));
const FE6Chapter20BxArmyEditor = lazy(() => import('./components/Module/FE6/Chapter20BxArmyEditor'));
const FE6Chapter21xArmyEditor = lazy(() => import('./components/Module/FE6/Chapter21xArmyEditor'));
const FE6Chapter22ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter22ArmyEditor'));
const FE6Chapter24ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter24ArmyEditor'));
const FE6Chapter3ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter3ArmyEditor'));
const FE6Chapter23ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter23ArmyEditor'));
const FE6Chapter4ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter4ArmyEditor'));
const FE6Chapter5ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter5ArmyEditor'));
const FE6Chapter7ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter7ArmyEditor'));
const FE6Chapter6ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter6ArmyEditor'));
const FE6Chapter8xArmyEditor = lazy(() => import('./components/Module/FE6/Chapter8xArmyEditor'));
const FE6Chapter8ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter8ArmyEditor'));
const FE6Chapter9ArmyEditor = lazy(() => import('./components/Module/FE6/Chapter9ArmyEditor'));
const FE6ChapterTrialMap3ArmyEditor = lazy(() => import('./components/Module/FE6/ChapterTrialMap3ArmyEditor'));
const FE6ChapterTrialMap1ArmyEditor = lazy(() => import('./components/Module/FE6/ChapterTrialMap1ArmyEditor'));
const FE6ChapterTrialMap2ArmyEditor = lazy(() => import('./components/Module/FE6/ChapterTrialMap2ArmyEditor'));
const FE6ChapterTrialMap5ArmyEditor = lazy(() => import('./components/Module/FE6/ChapterTrialMap5ArmyEditor'));
const FE6ChapterTrialMap4ArmyEditor = lazy(() => import('./components/Module/FE6/ChapterTrialMap4ArmyEditor'));
const FE6TutorialArmyEditor = lazy(() => import('./components/Module/FE6/TutorialArmyEditor'));
const FE6TrialMapCharactersArmyEditor = lazy(() => import('./components/Module/FE6/TrialMapCharactersArmyEditor'));
const FE6Battlescreeneditorpart1 = lazy(() => import('./components/Module/FE6/Battlescreeneditorpart1'));
const FE6Battlescreeneditorpart3 = lazy(() => import('./components/Module/FE6/Battlescreeneditorpart3'));
const FE6Battlescreeneditorpart2 = lazy(() => import('./components/Module/FE6/Battlescreeneditorpart2'));
const FE6Battlescreeneditorpart4 = lazy(() => import('./components/Module/FE6/Battlescreeneditorpart4'));
const FE6Battlescreeneditorpart5 = lazy(() => import('./components/Module/FE6/Battlescreeneditorpart5'));
const FE6FinalChapterArmyEditor = lazy(() => import('./components/Module/FE6/FinalChapterArmyEditor'));
const FE6ChapterDataEditorFE6 = lazy(() => import('./components/Module/FE6/ChapterDataEditorFE6'));
const FE6EventTableReferences = lazy(() => import('./components/Module/FE6/EventTableReferences'));
const FE6CharacterEditor = lazy(() => import('./components/Module/FE6/CharacterEditor'));
const FE6ClassEditor = lazy(() => import('./components/Module/FE6/ClassEditor'));
const FE6ItemEditor = lazy(() => import('./components/Module/FE6/ItemEditor'));
const FE6PortraitEditor = lazy(() => import('./components/Module/FE6/PortraitEditor'));
const FE6CustomPromotionPointerEditor = lazy(() => import('./components/Module/FE6/CustomPromotionPointerEditor'));
const FE6PromotionItemEditor = lazy(() => import('./components/Module/FE6/PromotionItemEditor'));
const FE6Enemybossbattlequoteeditor = lazy(() => import('./components/Module/FE6/Enemybossbattlequoteeditor'));
const FE6Deathquoteeditor = lazy(() => import('./components/Module/FE6/Deathquoteeditor'));
const FE6Triangleattackquoteeditor = lazy(() => import('./components/Module/FE6/Triangleattackquoteeditor'));
const FE6Critbonuseditor = lazy(() => import('./components/Module/FE6/Critbonuseditor'));
const FE6Promotionleveleditor = lazy(() => import('./components/Module/FE6/Promotionleveleditor'));
const FE6LevelCapEditor = lazy(() => import('./components/Module/FE6/LevelCapEditor'));

const FE7AnimationPointerTableEditor = lazy(() => import('./components/Module/FE7/AnimationPointerTableEditor'));
const FE7ItemAnimationReferencePointerExpandedROMrequired = lazy(() => import('./components/Module/FE7/ItemAnimationReferencePointerExpandedROMrequired'));
const FE7BattleAnimationEditor = lazy(() => import('./components/Module/FE7/BattleAnimationEditor'));
const FE7AssassinLegaultCustomAnimationEditor = lazy(() => import('./components/Module/FE7/AssassinLegaultCustomAnimationEditor'));
const FE7LuciusBishopCustomAnimationEditor = lazy(() => import('./components/Module/FE7/LuciusBishopCustomAnimationEditor'));
const FE7CustomBattleSpriteTableEditor = lazy(() => import('./components/Module/FE7/CustomBattleSpriteTableEditor'));
const FE7HawkeyeCustomAnimationEditor = lazy(() => import('./components/Module/FE7/HawkeyeCustomAnimationEditor'));
const FE7HeroRavenCustomAnimationEditor = lazy(() => import('./components/Module/FE7/HeroRavenCustomAnimationEditor'));
const FE7Linus1CustomAnimationEditor = lazy(() => import('./components/Module/FE7/Linus1CustomAnimationEditor'));
const FE7IsadoraCustomAnimationEditor = lazy(() => import('./components/Module/FE7/IsadoraCustomAnimationEditor'));
const FE7Linus3CustomAnimationEditor = lazy(() => import('./components/Module/FE7/Linus3CustomAnimationEditor'));
const FE7Linus2CustomAnimationEditor = lazy(() => import('./components/Module/FE7/Linus2CustomAnimationEditor'));
const FE7Lloyd1CustomAnimationEditor = lazy(() => import('./components/Module/FE7/Lloyd1CustomAnimationEditor'));
const FE7Lloyd2CustomAnimationEditor = lazy(() => import('./components/Module/FE7/Lloyd2CustomAnimationEditor'));
const FE7Lloyd3CustomAnimationEditor = lazy(() => import('./components/Module/FE7/Lloyd3CustomAnimationEditor'));
const FE7LuciusMonkCustomAnimationEditor = lazy(() => import('./components/Module/FE7/LuciusMonkCustomAnimationEditor'));
const FE7MyrmidonGuyCustomAnimationEditor = lazy(() => import('./components/Module/FE7/MyrmidonGuyCustomAnimationEditor'));
const FE7SwordmasterGuyCustomAnimationEditor = lazy(() => import('./components/Module/FE7/SwordmasterGuyCustomAnimationEditor'));
const FE7NinoSageCustomAnimationEditor = lazy(() => import('./components/Module/FE7/NinoSageCustomAnimationEditor'));
const FE7ThiefLegaultCustomAnimationEditor = lazy(() => import('./components/Module/FE7/ThiefLegaultCustomAnimationEditor'));
const FE7CustomBattleAnimationEditor = lazy(() => import('./components/Module/FE7/CustomBattleAnimationEditor'));
const FE7CustomItemAnimationListWorksonlywithanexpandedROM = lazy(() => import('./components/Module/FE7/CustomItemAnimationListWorksonlywithanexpandedROM'));
const FE7BattlePaletteReference = lazy(() => import('./components/Module/FE7/BattlePaletteReference'));
const FE7Arenaclasseditor = lazy(() => import('./components/Module/FE7/Arenaclasseditor'));
const FE7BattleBGEditor = lazy(() => import('./components/Module/FE7/BattleBGEditor'));
const FE7ConvoBGEditor = lazy(() => import('./components/Module/FE7/ConvoBGEditor'));
const FE7Battlescreeneditorpart1 = lazy(() => import('./components/Module/FE7/Battlescreeneditorpart1'));
const FE7Battlescreeneditorpart4 = lazy(() => import('./components/Module/FE7/Battlescreeneditorpart4'));
const FE7Battlescreeneditorpart2 = lazy(() => import('./components/Module/FE7/Battlescreeneditorpart2'));
const FE7Battlescreeneditorpart3 = lazy(() => import('./components/Module/FE7/Battlescreeneditorpart3'));
const FE7Battlescreeneditorpart5 = lazy(() => import('./components/Module/FE7/Battlescreeneditorpart5'));
const FE7BetaClassEditor = lazy(() => import('./components/Module/FE7/BetaClassEditor'));
const FE7BetaCharacterEditor = lazy(() => import('./components/Module/FE7/BetaCharacterEditor'));
const FE7BetaItemEditor = lazy(() => import('./components/Module/FE7/BetaItemEditor'));
const FE7CGEditor = lazy(() => import('./components/Module/FE7/CGEditor'));
const FE7ChapterDataEditorFE7 = lazy(() => import('./components/Module/FE7/ChapterDataEditorFE7'));
const FE7EscapeTilePointerEditor = lazy(() => import('./components/Module/FE7/EscapeTilePointerEditor'));
const FE7Chapter10UnitEditor = lazy(() => import('./components/Module/FE7/Chapter10UnitEditor'));
const FE7Chapter1UnitEditor = lazy(() => import('./components/Module/FE7/Chapter1UnitEditor'));
const FE7ChapterUnitEditor = lazy(() => import('./components/Module/FE7/ChapterUnitEditor'));
const FE7Chapter11UnitEditor = lazy(() => import('./components/Module/FE7/Chapter11UnitEditor'));
const FE7Chapter11HUnitEditor = lazy(() => import('./components/Module/FE7/Chapter11HUnitEditor'));
const FE7Chapter13UnitEditor = lazy(() => import('./components/Module/FE7/Chapter13UnitEditor'));
const FE7Chapter12UnitEditor = lazy(() => import('./components/Module/FE7/Chapter12UnitEditor'));
const FE7Chapter13xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter13xUnitEditor'));
const FE7Chapter14UnitEditor = lazy(() => import('./components/Module/FE7/Chapter14UnitEditor'));
const FE7Chapter15UnitEditor = lazy(() => import('./components/Module/FE7/Chapter15UnitEditor'));
const FE7Chapter16UnitEditor = lazy(() => import('./components/Module/FE7/Chapter16UnitEditor'));
const FE7Chapter17UnitEditor = lazy(() => import('./components/Module/FE7/Chapter17UnitEditor'));
const FE7Chapter19UnitEditor = lazy(() => import('./components/Module/FE7/Chapter19UnitEditor'));
const FE7Chapter17xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter17xUnitEditor'));
const FE7Chapter18UnitEditor = lazy(() => import('./components/Module/FE7/Chapter18UnitEditor'));
const FE7Chapter19xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter19xUnitEditor'));
const FE7Chapter19xxUnitEditor = lazy(() => import('./components/Module/FE7/Chapter19xxUnitEditor'));
const FE7Chapter2UnitEditor = lazy(() => import('./components/Module/FE7/Chapter2UnitEditor'));
const FE7Chapter20UnitEditor = lazy(() => import('./components/Module/FE7/Chapter20UnitEditor'));
const FE7Chapter21UnitEditor = lazy(() => import('./components/Module/FE7/Chapter21UnitEditor'));
const FE7Chapter22UnitEditor = lazy(() => import('./components/Module/FE7/Chapter22UnitEditor'));
const FE7Chapter23UnitEditor = lazy(() => import('./components/Module/FE7/Chapter23UnitEditor'));
const FE7Chapter23xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter23xUnitEditor'));
const FE7Chapter24LinusUnitEditor = lazy(() => import('./components/Module/FE7/Chapter24LinusUnitEditor'));
const FE7Chapter24LloydUnitEditor = lazy(() => import('./components/Module/FE7/Chapter24LloydUnitEditor'));
const FE7Chapter25CutsceneUnitEditor = lazy(() => import('./components/Module/FE7/Chapter25CutsceneUnitEditor'));
const FE7Chapter25UnitEditor = lazy(() => import('./components/Module/FE7/Chapter25UnitEditor'));
const FE7Chapter27JermeUnitEditor = lazy(() => import('./components/Module/FE7/Chapter27JermeUnitEditor'));
const FE7Chapter26UnitEditor = lazy(() => import('./components/Module/FE7/Chapter26UnitEditor'));
const FE7Chapter27KennethUnitEditor = lazy(() => import('./components/Module/FE7/Chapter27KennethUnitEditor'));
const FE7Chapter28UnitEditor = lazy(() => import('./components/Module/FE7/Chapter28UnitEditor'));
const FE7Chapter29UnitEditor = lazy(() => import('./components/Module/FE7/Chapter29UnitEditor'));
const FE7Chapter3UnitEditor = lazy(() => import('./components/Module/FE7/Chapter3UnitEditor'));
const FE7Chapter28xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter28xUnitEditor'));
const FE7Chapter30EliwoodUnitEditor = lazy(() => import('./components/Module/FE7/Chapter30EliwoodUnitEditor'));
const FE7Chapter30HectorUnitEditor = lazy(() => import('./components/Module/FE7/Chapter30HectorUnitEditor'));
const FE7Chapter31UnitEditor = lazy(() => import('./components/Module/FE7/Chapter31UnitEditor'));
const FE7Chapter32UnitEditor = lazy(() => import('./components/Module/FE7/Chapter32UnitEditor'));
const FE7Chapter31xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter31xUnitEditor'));
const FE7Chapter32xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter32xUnitEditor'));
const FE7Chapter4UnitEditor = lazy(() => import('./components/Module/FE7/Chapter4UnitEditor'));
const FE7Chapter5UnitEditor = lazy(() => import('./components/Module/FE7/Chapter5UnitEditor'));
const FE7Chapter6UnitEditor = lazy(() => import('./components/Module/FE7/Chapter6UnitEditor'));
const FE7Chapter7UnitEditor = lazy(() => import('./components/Module/FE7/Chapter7UnitEditor'));
const FE7Chapter7xUnitEditor = lazy(() => import('./components/Module/FE7/Chapter7xUnitEditor'));
const FE7Chapter9UnitEditor = lazy(() => import('./components/Module/FE7/Chapter9UnitEditor'));
const FE7Chapter8UnitEditor = lazy(() => import('./components/Module/FE7/Chapter8UnitEditor'));
const FE7ChapterFinalBossUnitEditor = lazy(() => import('./components/Module/FE7/ChapterFinalBossUnitEditor'));
const FE7ChapterFinalUnitEditor = lazy(() => import('./components/Module/FE7/ChapterFinalUnitEditor'));
const FE7PrologueUnitEditor = lazy(() => import('./components/Module/FE7/PrologueUnitEditor'));
const FE7Unknown18UnitEditor = lazy(() => import('./components/Module/FE7/Unknown18UnitEditor'));
const FE7CharacterEditor = lazy(() => import('./components/Module/FE7/CharacterEditor'));
const FE7SupportPointerEditor = lazy(() => import('./components/Module/FE7/SupportPointerEditor'));
const FE7FireEmblem7PairedEndingsEditorbyIcyToast = lazy(() => import('./components/Module/FE7/FireEmblem7PairedEndingsEditorbyIcyToast'));
const FE7Deathquoteeditorpart1 = lazy(() => import('./components/Module/FE7/Deathquoteeditorpart1'));
const FE7Deathquoteeditorpart2 = lazy(() => import('./components/Module/FE7/Deathquoteeditorpart2'));
const FE7SpecifiedBattleConvoEditorFE7 = lazy(() => import('./components/Module/FE7/SpecifiedBattleConvoEditorFE7'));
const FE7UnspecifiedBattleConvoEditorFE7 = lazy(() => import('./components/Module/FE7/UnspecifiedBattleConvoEditorFE7'));
const FE7SupportBonusEditor = lazy(() => import('./components/Module/FE7/SupportBonusEditor'));
const FE7TriangleattackConvo = lazy(() => import('./components/Module/FE7/TriangleattackConvo'));
const FE7FireEmblem7SupportcompatibilityEditorbyIcyToast = lazy(() => import('./components/Module/FE7/FireEmblem7SupportcompatibilityEditorbyIcyToast'));
const FE7FireEmblem7SupportConvoAvailabilityEditorbyIcyToast = lazy(() => import('./components/Module/FE7/FireEmblem7SupportConvoAvailabilityEditorbyIcyToast'));
const FE7ClassEditor = lazy(() => import('./components/Module/FE7/ClassEditor'));
const FE7Mapspritepointertableeditor = lazy(() => import('./components/Module/FE7/Mapspritepointertableeditor'));
const FE7MovementTypeEditorFE7CredittoFireBlazer = lazy(() => import('./components/Module/FE7/MovementTypeEditorFE7CredittoFireBlazer'));
const FE7Standingmapspriteeditor = lazy(() => import('./components/Module/FE7/Standingmapspriteeditor'));
const FE7AIRecruitmentEditor = lazy(() => import('./components/Module/FE7/AIRecruitmentEditor'));
const FE7AIRecruitmentEditorP2 = lazy(() => import('./components/Module/FE7/AIRecruitmentEditorP2'));
const FE7WorldMapDataReferences = lazy(() => import('./components/Module/FE7/WorldMapDataReferences'));
const FE7Eventtablereferences = lazy(() => import('./components/Module/FE7/Eventtablereferences'));
const FE7LynsEndingEditor = lazy(() => import('./components/Module/FE7/LynsEndingEditor'));
const FE7Chapter11HTableEditor = lazy(() => import('./components/Module/FE7/Chapter11HTableEditor'));
const FE7Chapter1TableEditor = lazy(() => import('./components/Module/FE7/Chapter1TableEditor'));
const FE7Chapter10TableEditor = lazy(() => import('./components/Module/FE7/Chapter10TableEditor'));
const FE7Chapter12TableEditor = lazy(() => import('./components/Module/FE7/Chapter12TableEditor'));
const FE7Chapter11TableEditor = lazy(() => import('./components/Module/FE7/Chapter11TableEditor'));
const FE7Chapter13xTableEditor = lazy(() => import('./components/Module/FE7/Chapter13xTableEditor'));
const FE7Chapter13TableEditor = lazy(() => import('./components/Module/FE7/Chapter13TableEditor'));
const FE7Chapter15TableEditor = lazy(() => import('./components/Module/FE7/Chapter15TableEditor'));
const FE7Chapter16TableEditor = lazy(() => import('./components/Module/FE7/Chapter16TableEditor'));
const FE7Chapter17xTableEditor = lazy(() => import('./components/Module/FE7/Chapter17xTableEditor'));
const FE7Chapter17TableEditor = lazy(() => import('./components/Module/FE7/Chapter17TableEditor'));
const FE7Chapter19TableEditor = lazy(() => import('./components/Module/FE7/Chapter19TableEditor'));
const FE7Chapter20TableEditor = lazy(() => import('./components/Module/FE7/Chapter20TableEditor'));
const FE7Chapter19xTableEditor = lazy(() => import('./components/Module/FE7/Chapter19xTableEditor'));
const FE7Chapter19xxTableEditor = lazy(() => import('./components/Module/FE7/Chapter19xxTableEditor'));
const FE7Chapter18TableEditor = lazy(() => import('./components/Module/FE7/Chapter18TableEditor'));
const FE721TableEditor = lazy(() => import('./components/Module/FE7/21TableEditor'));
const FE722TableEditor = lazy(() => import('./components/Module/FE7/22TableEditor'));
const FE723TableEditor = lazy(() => import('./components/Module/FE7/23TableEditor'));
const FE723xTableEditor = lazy(() => import('./components/Module/FE7/23xTableEditor'));
const FE724LloydTableEditor = lazy(() => import('./components/Module/FE7/24LloydTableEditor'));
const FE724LinusTableEditor = lazy(() => import('./components/Module/FE7/24LinusTableEditor'));
const FE726TableEditor = lazy(() => import('./components/Module/FE7/26TableEditor'));
const FE7Chapter2527JermeTableEditor = lazy(() => import('./components/Module/FE7/Chapter2527JermeTableEditor'));
const FE7Chapter2527KennethTableEditor = lazy(() => import('./components/Module/FE7/Chapter2527KennethTableEditor'));
const FE728TableEditor = lazy(() => import('./components/Module/FE7/28TableEditor'));
const FE7Chapter25HTableEditor = lazy(() => import('./components/Module/FE7/Chapter25HTableEditor'));
const FE728xTableEditor = lazy(() => import('./components/Module/FE7/28xTableEditor'));
const FE729TableEditor = lazy(() => import('./components/Module/FE7/29TableEditor'));
const FE7Chapter28EliwoodTableEditor = lazy(() => import('./components/Module/FE7/Chapter28EliwoodTableEditor'));
const FE731xTableEditor = lazy(() => import('./components/Module/FE7/31xTableEditor'));
const FE731TableEditor = lazy(() => import('./components/Module/FE7/31TableEditor'));
const FE7Chapter3TableEditor = lazy(() => import('./components/Module/FE7/Chapter3TableEditor'));
const FE732TableEditor = lazy(() => import('./components/Module/FE7/32TableEditor'));
const FE7Chapter30HectorTableEditor = lazy(() => import('./components/Module/FE7/Chapter30HectorTableEditor'));
const FE7Chapter32xTableEditor = lazy(() => import('./components/Module/FE7/Chapter32xTableEditor'));
const FE7Chapter4TableEditor = lazy(() => import('./components/Module/FE7/Chapter4TableEditor'));
const FE7Chapter5TableEditor = lazy(() => import('./components/Module/FE7/Chapter5TableEditor'));
const FE7Chapter6TableEditor = lazy(() => import('./components/Module/FE7/Chapter6TableEditor'));
const FE7Chapter7xTableEditor = lazy(() => import('./components/Module/FE7/Chapter7xTableEditor'));
const FE7Chapter7TableEditor = lazy(() => import('./components/Module/FE7/Chapter7TableEditor'));
const FE7Chapter9TableEditor = lazy(() => import('./components/Module/FE7/Chapter9TableEditor'));
const FE7Chapter8TableEditor = lazy(() => import('./components/Module/FE7/Chapter8TableEditor'));
const FE7FinalChapter2TableEditor = lazy(() => import('./components/Module/FE7/FinalChapter2TableEditor'));
const FE7FinalChapterTableEditor = lazy(() => import('./components/Module/FE7/FinalChapterTableEditor'));
const FE7TutorialEditor = lazy(() => import('./components/Module/FE7/TutorialEditor'));
const FE7PortraitEditor = lazy(() => import('./components/Module/FE7/PortraitEditor'));
const FE7BlessingoftheEightGeneralsEditor = lazy(() => import('./components/Module/FE7/BlessingoftheEightGeneralsEditor'));
const FE7ItemEditor = lazy(() => import('./components/Module/FE7/ItemEditor'));
const FE7FallenContractPromotionEditor = lazy(() => import('./components/Module/FE7/FallenContractPromotionEditor'));
const FE7HeavenSealPromotionEditor = lazy(() => import('./components/Module/FE7/HeavenSealPromotionEditor'));
const FE7OceanSealPromotionEditor = lazy(() => import('./components/Module/FE7/OceanSealPromotionEditor'));
const FE7PromotionItemEditor = lazy(() => import('./components/Module/FE7/PromotionItemEditor'));
const FE7CustomPromotionPointerEditor = lazy(() => import('./components/Module/FE7/CustomPromotionPointerEditor'));
const FE7StatBonusesEditor = lazy(() => import('./components/Module/FE7/StatBonusesEditor'));
const FE7SpellAssociationEditor = lazy(() => import('./components/Module/FE7/SpellAssociationEditor'));
const FE7Ch15ChestEditor = lazy(() => import('./components/Module/FE7/Ch15ChestEditor'));
const FE7Ch11HChestEditor = lazy(() => import('./components/Module/FE7/Ch11HChestEditor'));
const FE7Ch17ChestEditor = lazy(() => import('./components/Module/FE7/Ch17ChestEditor'));
const FE7Ch19xChestEditor = lazy(() => import('./components/Module/FE7/Ch19xChestEditor'));
const FE7Ch19xxChestEditor = lazy(() => import('./components/Module/FE7/Ch19xxChestEditor'));
const FE7Ch20ChestEditor = lazy(() => import('./components/Module/FE7/Ch20ChestEditor'));
const FE7Ch23xChestEditor = lazy(() => import('./components/Module/FE7/Ch23xChestEditor'));
const FE7Ch22ChestEditor = lazy(() => import('./components/Module/FE7/Ch22ChestEditor'));
const FE7Ch26ChestEditor = lazy(() => import('./components/Module/FE7/Ch26ChestEditor'));
const FE7Ch27AChestEditor = lazy(() => import('./components/Module/FE7/Ch27AChestEditor'));
const FE7Ch28ChestEditor = lazy(() => import('./components/Module/FE7/Ch28ChestEditor'));
const FE7Ch27BChestEditor = lazy(() => import('./components/Module/FE7/Ch27BChestEditor'));
const FE7Ch28xChestEditor = lazy(() => import('./components/Module/FE7/Ch28xChestEditor'));
const FE7Ch29ChestEditor = lazy(() => import('./components/Module/FE7/Ch29ChestEditor'));
const FE7Ch30HChestEditor = lazy(() => import('./components/Module/FE7/Ch30HChestEditor'));
const FE7Ch31ChestEditor = lazy(() => import('./components/Module/FE7/Ch31ChestEditor'));
const FE7Ch32xChestEditor = lazy(() => import('./components/Module/FE7/Ch32xChestEditor'));
const FE7Ch6ChestEditor = lazy(() => import('./components/Module/FE7/Ch6ChestEditor'));
const FE7ChFinalChestEditor = lazy(() => import('./components/Module/FE7/ChFinalChestEditor'));
const FE7Ch7xChestEditor = lazy(() => import('./components/Module/FE7/Ch7xChestEditor'));
const FE7ChUnknown2ChestEditor = lazy(() => import('./components/Module/FE7/ChUnknown2ChestEditor'));
const FE7Chapter13SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter13SeizeEditor'));
const FE7Chapter10SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter10SeizeEditor'));
const FE7Chapter15SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter15SeizeEditor'));
const FE7Chapter11SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter11SeizeEditor'));
const FE7Chapter16SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter16SeizeEditor'));
const FE7Chapter18xSeizeEditor = lazy(() => import('./components/Module/FE7/Chapter18xSeizeEditor'));
const FE7Chapter2SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter2SeizeEditor'));
const FE7Chapter9SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter9SeizeEditor'));
const FE7Chapter19SeizeEditor = lazy(() => import('./components/Module/FE7/Chapter19SeizeEditor'));
const FE7PrologueSeizeEditor = lazy(() => import('./components/Module/FE7/PrologueSeizeEditor'));
const FE7CustomShopEditor = lazy(() => import('./components/Module/FE7/CustomShopEditor'));
const FE7Chapter11ShopEditor = lazy(() => import('./components/Module/FE7/Chapter11ShopEditor'));
const FE7Chapter10ShopEditor = lazy(() => import('./components/Module/FE7/Chapter10ShopEditor'));
const FE7Chapter10ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter10ArmouryEditor'));
const FE7Chapter12ShopEditor = lazy(() => import('./components/Module/FE7/Chapter12ShopEditor'));
const FE7Chapter13ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter13ArmouryEditor'));
const FE7Chapter14ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter14ArmouryEditor'));
const FE7Chapter12ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter12ArmouryEditor'));
const FE7Chapter14ShopEditor = lazy(() => import('./components/Module/FE7/Chapter14ShopEditor'));
const FE7Chapter13ShopEditor = lazy(() => import('./components/Module/FE7/Chapter13ShopEditor'));
const FE7Chapter16LeftArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter16LeftArmouryEditor'));
const FE7Chapter17xShopEditor = lazy(() => import('./components/Module/FE7/Chapter17xShopEditor'));
const FE7Chapter16RightArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter16RightArmouryEditor'));
const FE7Chapter16ShopEditor = lazy(() => import('./components/Module/FE7/Chapter16ShopEditor'));
const FE7Chapter18ShopEditor = lazy(() => import('./components/Module/FE7/Chapter18ShopEditor'));
const FE7Chapter18ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter18ArmouryEditor'));
const FE7Chapter20Secret1Editor = lazy(() => import('./components/Module/FE7/Chapter20Secret1Editor'));
const FE7Chapter21LeftShopEditor = lazy(() => import('./components/Module/FE7/Chapter21LeftShopEditor'));
const FE7Chapter20Secret2Editor = lazy(() => import('./components/Module/FE7/Chapter20Secret2Editor'));
const FE7Chapter21LeftArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter21LeftArmouryEditor'));
const FE7Chapter21RightArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter21RightArmouryEditor'));
const FE7Chapter22SecretEditor = lazy(() => import('./components/Module/FE7/Chapter22SecretEditor'));
const FE7Chapter24ALeftShopEditor = lazy(() => import('./components/Module/FE7/Chapter24ALeftShopEditor'));
const FE7Chapter24ALeftArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter24ALeftArmouryEditor'));
const FE7Chapter21RightShopEditor = lazy(() => import('./components/Module/FE7/Chapter21RightShopEditor'));
const FE7Chapter24ARightShopEditor = lazy(() => import('./components/Module/FE7/Chapter24ARightShopEditor'));
const FE7Chapter24BLeftArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter24BLeftArmouryEditor'));
const FE7Chapter24ARightArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter24ARightArmouryEditor'));
const FE7Chapter24BRightArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter24BRightArmouryEditor'));
const FE7Chapter24BLeftShopEditor = lazy(() => import('./components/Module/FE7/Chapter24BLeftShopEditor'));
const FE7Chapter24BRightShopEditor = lazy(() => import('./components/Module/FE7/Chapter24BRightShopEditor'));
const FE7Chapter24BSecretEditor = lazy(() => import('./components/Module/FE7/Chapter24BSecretEditor'));
const FE7Chapter25ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter25ArmouryEditor'));
const FE7Chapter25ShopEditor = lazy(() => import('./components/Module/FE7/Chapter25ShopEditor'));
const FE7Chapter26ShopEditor = lazy(() => import('./components/Module/FE7/Chapter26ShopEditor'));
const FE7Chapter24ASecretEditor = lazy(() => import('./components/Module/FE7/Chapter24ASecretEditor'));
const FE7Chapter26ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter26ArmouryEditor'));
const FE7Chapter29ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter29ArmouryEditor'));
const FE7Chapter29ShopEditor = lazy(() => import('./components/Module/FE7/Chapter29ShopEditor'));
const FE7Chapter3ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter3ArmouryEditor'));
const FE7Chapter31xLeftShopEditor = lazy(() => import('./components/Module/FE7/Chapter31xLeftShopEditor'));
const FE7Chapter31SecretEditor = lazy(() => import('./components/Module/FE7/Chapter31SecretEditor'));
const FE7Chapter31xRightShopEditor = lazy(() => import('./components/Module/FE7/Chapter31xRightShopEditor'));
const FE7Chapter31xtMiddleArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter31xtMiddleArmouryEditor'));
const FE7Chapter31xBottomArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter31xBottomArmouryEditor'));
const FE7Chapter31xtLeftArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter31xtLeftArmouryEditor'));
const FE7Chapter31xtRightArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter31xtRightArmouryEditor'));
const FE7Chapter5ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter5ArmouryEditor'));
const FE7Chapter7ShopEditor = lazy(() => import('./components/Module/FE7/Chapter7ShopEditor'));
const FE7Chapter8ArmouryEditor = lazy(() => import('./components/Module/FE7/Chapter8ArmouryEditor'));
const FE7Chapter32SecretEditor = lazy(() => import('./components/Module/FE7/Chapter32SecretEditor'));
const FE7TerrainStatEditor = lazy(() => import('./components/Module/FE7/TerrainStatEditor'));
const FE7TurnMenutable = lazy(() => import('./components/Module/FE7/TurnMenutable'));
const FE7UnitMenutable = lazy(() => import('./components/Module/FE7/UnitMenutable'));
const FE7BossMusicEditor = lazy(() => import('./components/Module/FE7/BossMusicEditor'));
const FE7SoundRoomEditor = lazy(() => import('./components/Module/FE7/SoundRoomEditor'));
const FE7MusicArrayEditor = lazy(() => import('./components/Module/FE7/MusicArrayEditor'));

export const routes = [
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
          { path: 'CustomBattleAnimationEditor', element: <Suspense fallback={loading}><FE6CustomBattleAnimationEditor /></Suspense> },
          { path: 'BattlePaletteReference', element: <Suspense fallback={loading}><FE6BattlePaletteReference /></Suspense> },
          { path: 'Chapter1ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter1ArmyEditor /></Suspense> },
          { path: 'Chapter10BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter10BArmyEditor /></Suspense> },
          { path: 'Chapter10AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter10AArmyEditor /></Suspense> },
          { path: 'Chapter11AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter11AArmyEditor /></Suspense> },
          { path: 'Chapter11BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter11BArmyEditor /></Suspense> },
          { path: 'Chapter12ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter12ArmyEditor /></Suspense> },
          { path: 'Chapter12xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter12xArmyEditor /></Suspense> },
          { path: 'Chapter13ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter13ArmyEditor /></Suspense> },
          { path: 'Chapter14ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter14ArmyEditor /></Suspense> },
          { path: 'Chapter14xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter14xArmyEditor /></Suspense> },
          { path: 'Chapter15ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter15ArmyEditor /></Suspense> },
          { path: 'Chapter16ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter16ArmyEditor /></Suspense> },
          { path: 'Chapter16xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter16xArmyEditor /></Suspense> },
          { path: 'Chapter17AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter17AArmyEditor /></Suspense> },
          { path: 'Chapter17BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter17BArmyEditor /></Suspense> },
          { path: 'Chapter18BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter18BArmyEditor /></Suspense> },
          { path: 'Chapter19AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter19AArmyEditor /></Suspense> },
          { path: 'Chapter18AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter18AArmyEditor /></Suspense> },
          { path: 'Chapter19BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter19BArmyEditor /></Suspense> },
          { path: 'Chapter20AArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20AArmyEditor /></Suspense> },
          { path: 'Chapter2ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter2ArmyEditor /></Suspense> },
          { path: 'Chapter20AxArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20AxArmyEditor /></Suspense> },
          { path: 'Chapter21ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter21ArmyEditor /></Suspense> },
          { path: 'Chapter20BArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20BArmyEditor /></Suspense> },
          { path: 'Chapter20BxArmyEditor', element: <Suspense fallback={loading}><FE6Chapter20BxArmyEditor /></Suspense> },
          { path: 'Chapter21xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter21xArmyEditor /></Suspense> },
          { path: 'Chapter22ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter22ArmyEditor /></Suspense> },
          { path: 'Chapter24ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter24ArmyEditor /></Suspense> },
          { path: 'Chapter3ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter3ArmyEditor /></Suspense> },
          { path: 'Chapter23ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter23ArmyEditor /></Suspense> },
          { path: 'Chapter4ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter4ArmyEditor /></Suspense> },
          { path: 'Chapter5ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter5ArmyEditor /></Suspense> },
          { path: 'Chapter7ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter7ArmyEditor /></Suspense> },
          { path: 'Chapter6ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter6ArmyEditor /></Suspense> },
          { path: 'Chapter8xArmyEditor', element: <Suspense fallback={loading}><FE6Chapter8xArmyEditor /></Suspense> },
          { path: 'Chapter8ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter8ArmyEditor /></Suspense> },
          { path: 'Chapter9ArmyEditor', element: <Suspense fallback={loading}><FE6Chapter9ArmyEditor /></Suspense> },
          { path: 'ChapterTrialMap3ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap3ArmyEditor /></Suspense> },
          { path: 'ChapterTrialMap1ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap1ArmyEditor /></Suspense> },
          { path: 'ChapterTrialMap2ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap2ArmyEditor /></Suspense> },
          { path: 'ChapterTrialMap5ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap5ArmyEditor /></Suspense> },
          { path: 'ChapterTrialMap4ArmyEditor', element: <Suspense fallback={loading}><FE6ChapterTrialMap4ArmyEditor /></Suspense> },
          { path: 'TutorialArmyEditor', element: <Suspense fallback={loading}><FE6TutorialArmyEditor /></Suspense> },
          { path: 'TrialMapCharactersArmyEditor', element: <Suspense fallback={loading}><FE6TrialMapCharactersArmyEditor /></Suspense> },
          { path: 'Battlescreeneditorpart1', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart1 /></Suspense> },
          { path: 'Battlescreeneditorpart3', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart3 /></Suspense> },
          { path: 'Battlescreeneditorpart2', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart2 /></Suspense> },
          { path: 'Battlescreeneditorpart4', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart4 /></Suspense> },
          { path: 'Battlescreeneditorpart5', element: <Suspense fallback={loading}><FE6Battlescreeneditorpart5 /></Suspense> },
          { path: 'FinalChapterArmyEditor', element: <Suspense fallback={loading}><FE6FinalChapterArmyEditor /></Suspense> },
          { path: 'ChapterDataEditorFE6', element: <Suspense fallback={loading}><FE6ChapterDataEditorFE6 /></Suspense> },
          { path: 'EventTableReferences', element: <Suspense fallback={loading}><FE6EventTableReferences /></Suspense> },
          { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE6CharacterEditor /></Suspense> },
          { path: 'ClassEditor', element: <Suspense fallback={loading}><FE6ClassEditor /></Suspense> },
          { path: 'ItemEditor', element: <Suspense fallback={loading}><FE6ItemEditor /></Suspense> },
          { path: 'PortraitEditor', element: <Suspense fallback={loading}><FE6PortraitEditor /></Suspense> },
          { path: 'CustomPromotionPointerEditor', element: <Suspense fallback={loading}><FE6CustomPromotionPointerEditor /></Suspense> },
          { path: 'PromotionItemEditor', element: <Suspense fallback={loading}><FE6PromotionItemEditor /></Suspense> },
          { path: 'Enemybossbattlequoteeditor', element: <Suspense fallback={loading}><FE6Enemybossbattlequoteeditor /></Suspense> },
          { path: 'Deathquoteeditor', element: <Suspense fallback={loading}><FE6Deathquoteeditor /></Suspense> },
          { path: 'Triangleattackquoteeditor', element: <Suspense fallback={loading}><FE6Triangleattackquoteeditor /></Suspense> },
          { path: 'Critbonuseditor', element: <Suspense fallback={loading}><FE6Critbonuseditor /></Suspense> },
          { path: 'Promotionleveleditor', element: <Suspense fallback={loading}><FE6Promotionleveleditor /></Suspense> },
          { path: 'LevelCapEditor', element: <Suspense fallback={loading}><FE6LevelCapEditor /></Suspense> },
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
          { path: 'AnimationPointerTableEditor', element: <Suspense fallback={loading}><FE7AnimationPointerTableEditor /></Suspense> },
          { path: 'ItemAnimationReferencePointerExpandedROMrequired', element: <Suspense fallback={loading}><FE7ItemAnimationReferencePointerExpandedROMrequired /></Suspense> },
          { path: 'BattleAnimationEditor', element: <Suspense fallback={loading}><FE7BattleAnimationEditor /></Suspense> },
          { path: 'AssassinLegaultCustomAnimationEditor', element: <Suspense fallback={loading}><FE7AssassinLegaultCustomAnimationEditor /></Suspense> },
          { path: 'LuciusBishopCustomAnimationEditor', element: <Suspense fallback={loading}><FE7LuciusBishopCustomAnimationEditor /></Suspense> },
          { path: 'CustomBattleSpriteTableEditor', element: <Suspense fallback={loading}><FE7CustomBattleSpriteTableEditor /></Suspense> },
          { path: 'HawkeyeCustomAnimationEditor', element: <Suspense fallback={loading}><FE7HawkeyeCustomAnimationEditor /></Suspense> },
          { path: 'HeroRavenCustomAnimationEditor', element: <Suspense fallback={loading}><FE7HeroRavenCustomAnimationEditor /></Suspense> },
          { path: 'Linus1CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Linus1CustomAnimationEditor /></Suspense> },
          { path: 'IsadoraCustomAnimationEditor', element: <Suspense fallback={loading}><FE7IsadoraCustomAnimationEditor /></Suspense> },
          { path: 'Linus3CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Linus3CustomAnimationEditor /></Suspense> },
          { path: 'Linus2CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Linus2CustomAnimationEditor /></Suspense> },
          { path: 'Lloyd1CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Lloyd1CustomAnimationEditor /></Suspense> },
          { path: 'Lloyd2CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Lloyd2CustomAnimationEditor /></Suspense> },
          { path: 'Lloyd3CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Lloyd3CustomAnimationEditor /></Suspense> },
          { path: 'LuciusMonkCustomAnimationEditor', element: <Suspense fallback={loading}><FE7LuciusMonkCustomAnimationEditor /></Suspense> },
          { path: 'MyrmidonGuyCustomAnimationEditor', element: <Suspense fallback={loading}><FE7MyrmidonGuyCustomAnimationEditor /></Suspense> },
          { path: 'SwordmasterGuyCustomAnimationEditor', element: <Suspense fallback={loading}><FE7SwordmasterGuyCustomAnimationEditor /></Suspense> },
          { path: 'NinoSageCustomAnimationEditor', element: <Suspense fallback={loading}><FE7NinoSageCustomAnimationEditor /></Suspense> },
          { path: 'ThiefLegaultCustomAnimationEditor', element: <Suspense fallback={loading}><FE7ThiefLegaultCustomAnimationEditor /></Suspense> },
          { path: 'CustomBattleAnimationEditor', element: <Suspense fallback={loading}><FE7CustomBattleAnimationEditor /></Suspense> },
          { path: 'CustomItemAnimationListWorksonlywithanexpandedROM', element: <Suspense fallback={loading}><FE7CustomItemAnimationListWorksonlywithanexpandedROM /></Suspense> },
          { path: 'BattlePaletteReference', element: <Suspense fallback={loading}><FE7BattlePaletteReference /></Suspense> },
          { path: 'Arenaclasseditor', element: <Suspense fallback={loading}><FE7Arenaclasseditor /></Suspense> },
          { path: 'BattleBGEditor', element: <Suspense fallback={loading}><FE7BattleBGEditor /></Suspense> },
          { path: 'ConvoBGEditor', element: <Suspense fallback={loading}><FE7ConvoBGEditor /></Suspense> },
          { path: 'Battlescreeneditorpart1', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart1 /></Suspense> },
          { path: 'Battlescreeneditorpart4', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart4 /></Suspense> },
          { path: 'Battlescreeneditorpart2', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart2 /></Suspense> },
          { path: 'Battlescreeneditorpart3', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart3 /></Suspense> },
          { path: 'Battlescreeneditorpart5', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart5 /></Suspense> },
          { path: 'BetaClassEditor', element: <Suspense fallback={loading}><FE7BetaClassEditor /></Suspense> },
          { path: 'BetaCharacterEditor', element: <Suspense fallback={loading}><FE7BetaCharacterEditor /></Suspense> },
          { path: 'BetaItemEditor', element: <Suspense fallback={loading}><FE7BetaItemEditor /></Suspense> },
          { path: 'CGEditor', element: <Suspense fallback={loading}><FE7CGEditor /></Suspense> },
          { path: 'ChapterDataEditorFE7', element: <Suspense fallback={loading}><FE7ChapterDataEditorFE7 /></Suspense> },
          { path: 'EscapeTilePointerEditor', element: <Suspense fallback={loading}><FE7EscapeTilePointerEditor /></Suspense> },
          { path: 'Chapter10UnitEditor', element: <Suspense fallback={loading}><FE7Chapter10UnitEditor /></Suspense> },
          { path: 'Chapter1UnitEditor', element: <Suspense fallback={loading}><FE7Chapter1UnitEditor /></Suspense> },
          { path: 'ChapterUnitEditor', element: <Suspense fallback={loading}><FE7ChapterUnitEditor /></Suspense> },
          { path: 'Chapter11UnitEditor', element: <Suspense fallback={loading}><FE7Chapter11UnitEditor /></Suspense> },
          { path: 'Chapter11HUnitEditor', element: <Suspense fallback={loading}><FE7Chapter11HUnitEditor /></Suspense> },
          { path: 'Chapter13UnitEditor', element: <Suspense fallback={loading}><FE7Chapter13UnitEditor /></Suspense> },
          { path: 'Chapter12UnitEditor', element: <Suspense fallback={loading}><FE7Chapter12UnitEditor /></Suspense> },
          { path: 'Chapter13xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter13xUnitEditor /></Suspense> },
          { path: 'Chapter14UnitEditor', element: <Suspense fallback={loading}><FE7Chapter14UnitEditor /></Suspense> },
          { path: 'Chapter15UnitEditor', element: <Suspense fallback={loading}><FE7Chapter15UnitEditor /></Suspense> },
          { path: 'Chapter16UnitEditor', element: <Suspense fallback={loading}><FE7Chapter16UnitEditor /></Suspense> },
          { path: 'Chapter17UnitEditor', element: <Suspense fallback={loading}><FE7Chapter17UnitEditor /></Suspense> },
          { path: 'Chapter19UnitEditor', element: <Suspense fallback={loading}><FE7Chapter19UnitEditor /></Suspense> },
          { path: 'Chapter17xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter17xUnitEditor /></Suspense> },
          { path: 'Chapter18UnitEditor', element: <Suspense fallback={loading}><FE7Chapter18UnitEditor /></Suspense> },
          { path: 'Chapter19xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter19xUnitEditor /></Suspense> },
          { path: 'Chapter19xxUnitEditor', element: <Suspense fallback={loading}><FE7Chapter19xxUnitEditor /></Suspense> },
          { path: 'Chapter2UnitEditor', element: <Suspense fallback={loading}><FE7Chapter2UnitEditor /></Suspense> },
          { path: 'Chapter20UnitEditor', element: <Suspense fallback={loading}><FE7Chapter20UnitEditor /></Suspense> },
          { path: 'Chapter21UnitEditor', element: <Suspense fallback={loading}><FE7Chapter21UnitEditor /></Suspense> },
          { path: 'Chapter22UnitEditor', element: <Suspense fallback={loading}><FE7Chapter22UnitEditor /></Suspense> },
          { path: 'Chapter23UnitEditor', element: <Suspense fallback={loading}><FE7Chapter23UnitEditor /></Suspense> },
          { path: 'Chapter23xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter23xUnitEditor /></Suspense> },
          { path: 'Chapter24LinusUnitEditor', element: <Suspense fallback={loading}><FE7Chapter24LinusUnitEditor /></Suspense> },
          { path: 'Chapter24LloydUnitEditor', element: <Suspense fallback={loading}><FE7Chapter24LloydUnitEditor /></Suspense> },
          { path: 'Chapter25CutsceneUnitEditor', element: <Suspense fallback={loading}><FE7Chapter25CutsceneUnitEditor /></Suspense> },
          { path: 'Chapter25UnitEditor', element: <Suspense fallback={loading}><FE7Chapter25UnitEditor /></Suspense> },
          { path: 'Chapter27JermeUnitEditor', element: <Suspense fallback={loading}><FE7Chapter27JermeUnitEditor /></Suspense> },
          { path: 'Chapter26UnitEditor', element: <Suspense fallback={loading}><FE7Chapter26UnitEditor /></Suspense> },
          { path: 'Chapter27KennethUnitEditor', element: <Suspense fallback={loading}><FE7Chapter27KennethUnitEditor /></Suspense> },
          { path: 'Chapter28UnitEditor', element: <Suspense fallback={loading}><FE7Chapter28UnitEditor /></Suspense> },
          { path: 'Chapter29UnitEditor', element: <Suspense fallback={loading}><FE7Chapter29UnitEditor /></Suspense> },
          { path: 'Chapter3UnitEditor', element: <Suspense fallback={loading}><FE7Chapter3UnitEditor /></Suspense> },
          { path: 'Chapter28xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter28xUnitEditor /></Suspense> },
          { path: 'Chapter30EliwoodUnitEditor', element: <Suspense fallback={loading}><FE7Chapter30EliwoodUnitEditor /></Suspense> },
          { path: 'Chapter30HectorUnitEditor', element: <Suspense fallback={loading}><FE7Chapter30HectorUnitEditor /></Suspense> },
          { path: 'Chapter31UnitEditor', element: <Suspense fallback={loading}><FE7Chapter31UnitEditor /></Suspense> },
          { path: 'Chapter32UnitEditor', element: <Suspense fallback={loading}><FE7Chapter32UnitEditor /></Suspense> },
          { path: 'Chapter31xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter31xUnitEditor /></Suspense> },
          { path: 'Chapter32xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter32xUnitEditor /></Suspense> },
          { path: 'Chapter4UnitEditor', element: <Suspense fallback={loading}><FE7Chapter4UnitEditor /></Suspense> },
          { path: 'Chapter5UnitEditor', element: <Suspense fallback={loading}><FE7Chapter5UnitEditor /></Suspense> },
          { path: 'Chapter6UnitEditor', element: <Suspense fallback={loading}><FE7Chapter6UnitEditor /></Suspense> },
          { path: 'Chapter7UnitEditor', element: <Suspense fallback={loading}><FE7Chapter7UnitEditor /></Suspense> },
          { path: 'Chapter7xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter7xUnitEditor /></Suspense> },
          { path: 'Chapter9UnitEditor', element: <Suspense fallback={loading}><FE7Chapter9UnitEditor /></Suspense> },
          { path: 'Chapter8UnitEditor', element: <Suspense fallback={loading}><FE7Chapter8UnitEditor /></Suspense> },
          { path: 'ChapterFinalBossUnitEditor', element: <Suspense fallback={loading}><FE7ChapterFinalBossUnitEditor /></Suspense> },
          { path: 'ChapterFinalUnitEditor', element: <Suspense fallback={loading}><FE7ChapterFinalUnitEditor /></Suspense> },
          { path: 'PrologueUnitEditor', element: <Suspense fallback={loading}><FE7PrologueUnitEditor /></Suspense> },
          { path: 'Unknown18UnitEditor', element: <Suspense fallback={loading}><FE7Unknown18UnitEditor /></Suspense> },
          { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE7CharacterEditor /></Suspense> },
          { path: 'SupportPointerEditor', element: <Suspense fallback={loading}><FE7SupportPointerEditor /></Suspense> },
          { path: 'FireEmblem7PairedEndingsEditorbyIcyToast', element: <Suspense fallback={loading}><FE7FireEmblem7PairedEndingsEditorbyIcyToast /></Suspense> },
          { path: 'Deathquoteeditorpart1', element: <Suspense fallback={loading}><FE7Deathquoteeditorpart1 /></Suspense> },
          { path: 'Deathquoteeditorpart2', element: <Suspense fallback={loading}><FE7Deathquoteeditorpart2 /></Suspense> },
          { path: 'SpecifiedBattleConvoEditorFE7', element: <Suspense fallback={loading}><FE7SpecifiedBattleConvoEditorFE7 /></Suspense> },
          { path: 'UnspecifiedBattleConvoEditorFE7', element: <Suspense fallback={loading}><FE7UnspecifiedBattleConvoEditorFE7 /></Suspense> },
          { path: 'SupportBonusEditor', element: <Suspense fallback={loading}><FE7SupportBonusEditor /></Suspense> },
          { path: 'TriangleattackConvo', element: <Suspense fallback={loading}><FE7TriangleattackConvo /></Suspense> },
          { path: 'FireEmblem7SupportcompatibilityEditorbyIcyToast', element: <Suspense fallback={loading}><FE7FireEmblem7SupportcompatibilityEditorbyIcyToast /></Suspense> },
          { path: 'FireEmblem7SupportConvoAvailabilityEditorbyIcyToast', element: <Suspense fallback={loading}><FE7FireEmblem7SupportConvoAvailabilityEditorbyIcyToast /></Suspense> },
          { path: 'ClassEditor', element: <Suspense fallback={loading}><FE7ClassEditor /></Suspense> },
          { path: 'Mapspritepointertableeditor', element: <Suspense fallback={loading}><FE7Mapspritepointertableeditor /></Suspense> },
          { path: 'MovementTypeEditorFE7CredittoFireBlazer', element: <Suspense fallback={loading}><FE7MovementTypeEditorFE7CredittoFireBlazer /></Suspense> },
          { path: 'Standingmapspriteeditor', element: <Suspense fallback={loading}><FE7Standingmapspriteeditor /></Suspense> },
          { path: 'AIRecruitmentEditor', element: <Suspense fallback={loading}><FE7AIRecruitmentEditor /></Suspense> },
          { path: 'AIRecruitmentEditorP2', element: <Suspense fallback={loading}><FE7AIRecruitmentEditorP2 /></Suspense> },
          { path: 'WorldMapDataReferences', element: <Suspense fallback={loading}><FE7WorldMapDataReferences /></Suspense> },
          { path: 'Eventtablereferences', element: <Suspense fallback={loading}><FE7Eventtablereferences /></Suspense> },
          { path: 'LynsEndingEditor', element: <Suspense fallback={loading}><FE7LynsEndingEditor /></Suspense> },
          { path: 'Chapter11HTableEditor', element: <Suspense fallback={loading}><FE7Chapter11HTableEditor /></Suspense> },
          { path: 'Chapter1TableEditor', element: <Suspense fallback={loading}><FE7Chapter1TableEditor /></Suspense> },
          { path: 'Chapter10TableEditor', element: <Suspense fallback={loading}><FE7Chapter10TableEditor /></Suspense> },
          { path: 'Chapter12TableEditor', element: <Suspense fallback={loading}><FE7Chapter12TableEditor /></Suspense> },
          { path: 'Chapter11TableEditor', element: <Suspense fallback={loading}><FE7Chapter11TableEditor /></Suspense> },
          { path: 'Chapter13xTableEditor', element: <Suspense fallback={loading}><FE7Chapter13xTableEditor /></Suspense> },
          { path: 'Chapter13TableEditor', element: <Suspense fallback={loading}><FE7Chapter13TableEditor /></Suspense> },
          { path: 'Chapter15TableEditor', element: <Suspense fallback={loading}><FE7Chapter15TableEditor /></Suspense> },
          { path: 'Chapter16TableEditor', element: <Suspense fallback={loading}><FE7Chapter16TableEditor /></Suspense> },
          { path: 'Chapter17xTableEditor', element: <Suspense fallback={loading}><FE7Chapter17xTableEditor /></Suspense> },
          { path: 'Chapter17TableEditor', element: <Suspense fallback={loading}><FE7Chapter17TableEditor /></Suspense> },
          { path: 'Chapter19TableEditor', element: <Suspense fallback={loading}><FE7Chapter19TableEditor /></Suspense> },
          { path: 'Chapter20TableEditor', element: <Suspense fallback={loading}><FE7Chapter20TableEditor /></Suspense> },
          { path: 'Chapter19xTableEditor', element: <Suspense fallback={loading}><FE7Chapter19xTableEditor /></Suspense> },
          { path: 'Chapter19xxTableEditor', element: <Suspense fallback={loading}><FE7Chapter19xxTableEditor /></Suspense> },
          { path: 'Chapter18TableEditor', element: <Suspense fallback={loading}><FE7Chapter18TableEditor /></Suspense> },
          { path: '21TableEditor', element: <Suspense fallback={loading}><FE721TableEditor /></Suspense> },
          { path: '22TableEditor', element: <Suspense fallback={loading}><FE722TableEditor /></Suspense> },
          { path: '23TableEditor', element: <Suspense fallback={loading}><FE723TableEditor /></Suspense> },
          { path: '23xTableEditor', element: <Suspense fallback={loading}><FE723xTableEditor /></Suspense> },
          { path: '24LloydTableEditor', element: <Suspense fallback={loading}><FE724LloydTableEditor /></Suspense> },
          { path: '24LinusTableEditor', element: <Suspense fallback={loading}><FE724LinusTableEditor /></Suspense> },
          { path: '26TableEditor', element: <Suspense fallback={loading}><FE726TableEditor /></Suspense> },
          { path: 'Chapter2527JermeTableEditor', element: <Suspense fallback={loading}><FE7Chapter2527JermeTableEditor /></Suspense> },
          { path: 'Chapter2527KennethTableEditor', element: <Suspense fallback={loading}><FE7Chapter2527KennethTableEditor /></Suspense> },
          { path: '28TableEditor', element: <Suspense fallback={loading}><FE728TableEditor /></Suspense> },
          { path: 'Chapter25HTableEditor', element: <Suspense fallback={loading}><FE7Chapter25HTableEditor /></Suspense> },
          { path: '28xTableEditor', element: <Suspense fallback={loading}><FE728xTableEditor /></Suspense> },
          { path: '29TableEditor', element: <Suspense fallback={loading}><FE729TableEditor /></Suspense> },
          { path: 'Chapter28EliwoodTableEditor', element: <Suspense fallback={loading}><FE7Chapter28EliwoodTableEditor /></Suspense> },
          { path: '31xTableEditor', element: <Suspense fallback={loading}><FE731xTableEditor /></Suspense> },
          { path: '31TableEditor', element: <Suspense fallback={loading}><FE731TableEditor /></Suspense> },
          { path: 'Chapter3TableEditor', element: <Suspense fallback={loading}><FE7Chapter3TableEditor /></Suspense> },
          { path: '32TableEditor', element: <Suspense fallback={loading}><FE732TableEditor /></Suspense> },
          { path: 'Chapter30HectorTableEditor', element: <Suspense fallback={loading}><FE7Chapter30HectorTableEditor /></Suspense> },
          { path: 'Chapter32xTableEditor', element: <Suspense fallback={loading}><FE7Chapter32xTableEditor /></Suspense> },
          { path: 'Chapter4TableEditor', element: <Suspense fallback={loading}><FE7Chapter4TableEditor /></Suspense> },
          { path: 'Chapter5TableEditor', element: <Suspense fallback={loading}><FE7Chapter5TableEditor /></Suspense> },
          { path: 'Chapter6TableEditor', element: <Suspense fallback={loading}><FE7Chapter6TableEditor /></Suspense> },
          { path: 'Chapter7xTableEditor', element: <Suspense fallback={loading}><FE7Chapter7xTableEditor /></Suspense> },
          { path: 'Chapter7TableEditor', element: <Suspense fallback={loading}><FE7Chapter7TableEditor /></Suspense> },
          { path: 'Chapter9TableEditor', element: <Suspense fallback={loading}><FE7Chapter9TableEditor /></Suspense> },
          { path: 'Chapter8TableEditor', element: <Suspense fallback={loading}><FE7Chapter8TableEditor /></Suspense> },
          { path: 'FinalChapter2TableEditor', element: <Suspense fallback={loading}><FE7FinalChapter2TableEditor /></Suspense> },
          { path: 'FinalChapterTableEditor', element: <Suspense fallback={loading}><FE7FinalChapterTableEditor /></Suspense> },
          { path: 'TutorialEditor', element: <Suspense fallback={loading}><FE7TutorialEditor /></Suspense> },
          { path: 'PortraitEditor', element: <Suspense fallback={loading}><FE7PortraitEditor /></Suspense> },
          { path: 'BlessingoftheEightGeneralsEditor', element: <Suspense fallback={loading}><FE7BlessingoftheEightGeneralsEditor /></Suspense> },
          { path: 'ItemEditor', element: <Suspense fallback={loading}><FE7ItemEditor /></Suspense> },
          { path: 'FallenContractPromotionEditor', element: <Suspense fallback={loading}><FE7FallenContractPromotionEditor /></Suspense> },
          { path: 'HeavenSealPromotionEditor', element: <Suspense fallback={loading}><FE7HeavenSealPromotionEditor /></Suspense> },
          { path: 'OceanSealPromotionEditor', element: <Suspense fallback={loading}><FE7OceanSealPromotionEditor /></Suspense> },
          { path: 'PromotionItemEditor', element: <Suspense fallback={loading}><FE7PromotionItemEditor /></Suspense> },
          { path: 'CustomPromotionPointerEditor', element: <Suspense fallback={loading}><FE7CustomPromotionPointerEditor /></Suspense> },
          { path: 'StatBonusesEditor', element: <Suspense fallback={loading}><FE7StatBonusesEditor /></Suspense> },
          { path: 'SpellAssociationEditor', element: <Suspense fallback={loading}><FE7SpellAssociationEditor /></Suspense> },
          { path: 'Ch15ChestEditor', element: <Suspense fallback={loading}><FE7Ch15ChestEditor /></Suspense> },
          { path: 'Ch11HChestEditor', element: <Suspense fallback={loading}><FE7Ch11HChestEditor /></Suspense> },
          { path: 'Ch17ChestEditor', element: <Suspense fallback={loading}><FE7Ch17ChestEditor /></Suspense> },
          { path: 'Ch19xChestEditor', element: <Suspense fallback={loading}><FE7Ch19xChestEditor /></Suspense> },
          { path: 'Ch19xxChestEditor', element: <Suspense fallback={loading}><FE7Ch19xxChestEditor /></Suspense> },
          { path: 'Ch20ChestEditor', element: <Suspense fallback={loading}><FE7Ch20ChestEditor /></Suspense> },
          { path: 'Ch23xChestEditor', element: <Suspense fallback={loading}><FE7Ch23xChestEditor /></Suspense> },
          { path: 'Ch22ChestEditor', element: <Suspense fallback={loading}><FE7Ch22ChestEditor /></Suspense> },
          { path: 'Ch26ChestEditor', element: <Suspense fallback={loading}><FE7Ch26ChestEditor /></Suspense> },
          { path: 'Ch27AChestEditor', element: <Suspense fallback={loading}><FE7Ch27AChestEditor /></Suspense> },
          { path: 'Ch28ChestEditor', element: <Suspense fallback={loading}><FE7Ch28ChestEditor /></Suspense> },
          { path: 'Ch27BChestEditor', element: <Suspense fallback={loading}><FE7Ch27BChestEditor /></Suspense> },
          { path: 'Ch28xChestEditor', element: <Suspense fallback={loading}><FE7Ch28xChestEditor /></Suspense> },
          { path: 'Ch29ChestEditor', element: <Suspense fallback={loading}><FE7Ch29ChestEditor /></Suspense> },
          { path: 'Ch30HChestEditor', element: <Suspense fallback={loading}><FE7Ch30HChestEditor /></Suspense> },
          { path: 'Ch31ChestEditor', element: <Suspense fallback={loading}><FE7Ch31ChestEditor /></Suspense> },
          { path: 'Ch32xChestEditor', element: <Suspense fallback={loading}><FE7Ch32xChestEditor /></Suspense> },
          { path: 'Ch6ChestEditor', element: <Suspense fallback={loading}><FE7Ch6ChestEditor /></Suspense> },
          { path: 'ChFinalChestEditor', element: <Suspense fallback={loading}><FE7ChFinalChestEditor /></Suspense> },
          { path: 'Ch7xChestEditor', element: <Suspense fallback={loading}><FE7Ch7xChestEditor /></Suspense> },
          { path: 'ChUnknown2ChestEditor', element: <Suspense fallback={loading}><FE7ChUnknown2ChestEditor /></Suspense> },
          { path: 'Chapter13SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter13SeizeEditor /></Suspense> },
          { path: 'Chapter10SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter10SeizeEditor /></Suspense> },
          { path: 'Chapter15SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter15SeizeEditor /></Suspense> },
          { path: 'Chapter11SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter11SeizeEditor /></Suspense> },
          { path: 'Chapter16SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter16SeizeEditor /></Suspense> },
          { path: 'Chapter18xSeizeEditor', element: <Suspense fallback={loading}><FE7Chapter18xSeizeEditor /></Suspense> },
          { path: 'Chapter2SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter2SeizeEditor /></Suspense> },
          { path: 'Chapter9SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter9SeizeEditor /></Suspense> },
          { path: 'Chapter19SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter19SeizeEditor /></Suspense> },
          { path: 'PrologueSeizeEditor', element: <Suspense fallback={loading}><FE7PrologueSeizeEditor /></Suspense> },
          { path: 'CustomShopEditor', element: <Suspense fallback={loading}><FE7CustomShopEditor /></Suspense> },
          { path: 'Chapter11ShopEditor', element: <Suspense fallback={loading}><FE7Chapter11ShopEditor /></Suspense> },
          { path: 'Chapter10ShopEditor', element: <Suspense fallback={loading}><FE7Chapter10ShopEditor /></Suspense> },
          { path: 'Chapter10ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter10ArmouryEditor /></Suspense> },
          { path: 'Chapter12ShopEditor', element: <Suspense fallback={loading}><FE7Chapter12ShopEditor /></Suspense> },
          { path: 'Chapter13ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter13ArmouryEditor /></Suspense> },
          { path: 'Chapter14ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter14ArmouryEditor /></Suspense> },
          { path: 'Chapter12ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter12ArmouryEditor /></Suspense> },
          { path: 'Chapter14ShopEditor', element: <Suspense fallback={loading}><FE7Chapter14ShopEditor /></Suspense> },
          { path: 'Chapter13ShopEditor', element: <Suspense fallback={loading}><FE7Chapter13ShopEditor /></Suspense> },
          { path: 'Chapter16LeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter16LeftArmouryEditor /></Suspense> },
          { path: 'Chapter17xShopEditor', element: <Suspense fallback={loading}><FE7Chapter17xShopEditor /></Suspense> },
          { path: 'Chapter16RightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter16RightArmouryEditor /></Suspense> },
          { path: 'Chapter16ShopEditor', element: <Suspense fallback={loading}><FE7Chapter16ShopEditor /></Suspense> },
          { path: 'Chapter18ShopEditor', element: <Suspense fallback={loading}><FE7Chapter18ShopEditor /></Suspense> },
          { path: 'Chapter18ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter18ArmouryEditor /></Suspense> },
          { path: 'Chapter20Secret1Editor', element: <Suspense fallback={loading}><FE7Chapter20Secret1Editor /></Suspense> },
          { path: 'Chapter21LeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter21LeftShopEditor /></Suspense> },
          { path: 'Chapter20Secret2Editor', element: <Suspense fallback={loading}><FE7Chapter20Secret2Editor /></Suspense> },
          { path: 'Chapter21LeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter21LeftArmouryEditor /></Suspense> },
          { path: 'Chapter21RightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter21RightArmouryEditor /></Suspense> },
          { path: 'Chapter22SecretEditor', element: <Suspense fallback={loading}><FE7Chapter22SecretEditor /></Suspense> },
          { path: 'Chapter24ALeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter24ALeftShopEditor /></Suspense> },
          { path: 'Chapter24ALeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24ALeftArmouryEditor /></Suspense> },
          { path: 'Chapter21RightShopEditor', element: <Suspense fallback={loading}><FE7Chapter21RightShopEditor /></Suspense> },
          { path: 'Chapter24ARightShopEditor', element: <Suspense fallback={loading}><FE7Chapter24ARightShopEditor /></Suspense> },
          { path: 'Chapter24BLeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24BLeftArmouryEditor /></Suspense> },
          { path: 'Chapter24ARightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24ARightArmouryEditor /></Suspense> },
          { path: 'Chapter24BRightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24BRightArmouryEditor /></Suspense> },
          { path: 'Chapter24BLeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter24BLeftShopEditor /></Suspense> },
          { path: 'Chapter24BRightShopEditor', element: <Suspense fallback={loading}><FE7Chapter24BRightShopEditor /></Suspense> },
          { path: 'Chapter24BSecretEditor', element: <Suspense fallback={loading}><FE7Chapter24BSecretEditor /></Suspense> },
          { path: 'Chapter25ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter25ArmouryEditor /></Suspense> },
          { path: 'Chapter25ShopEditor', element: <Suspense fallback={loading}><FE7Chapter25ShopEditor /></Suspense> },
          { path: 'Chapter26ShopEditor', element: <Suspense fallback={loading}><FE7Chapter26ShopEditor /></Suspense> },
          { path: 'Chapter24ASecretEditor', element: <Suspense fallback={loading}><FE7Chapter24ASecretEditor /></Suspense> },
          { path: 'Chapter26ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter26ArmouryEditor /></Suspense> },
          { path: 'Chapter29ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter29ArmouryEditor /></Suspense> },
          { path: 'Chapter29ShopEditor', element: <Suspense fallback={loading}><FE7Chapter29ShopEditor /></Suspense> },
          { path: 'Chapter3ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter3ArmouryEditor /></Suspense> },
          { path: 'Chapter31xLeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter31xLeftShopEditor /></Suspense> },
          { path: 'Chapter31SecretEditor', element: <Suspense fallback={loading}><FE7Chapter31SecretEditor /></Suspense> },
          { path: 'Chapter31xRightShopEditor', element: <Suspense fallback={loading}><FE7Chapter31xRightShopEditor /></Suspense> },
          { path: 'Chapter31xtMiddleArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xtMiddleArmouryEditor /></Suspense> },
          { path: 'Chapter31xBottomArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xBottomArmouryEditor /></Suspense> },
          { path: 'Chapter31xtLeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xtLeftArmouryEditor /></Suspense> },
          { path: 'Chapter31xtRightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xtRightArmouryEditor /></Suspense> },
          { path: 'Chapter5ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter5ArmouryEditor /></Suspense> },
          { path: 'Chapter7ShopEditor', element: <Suspense fallback={loading}><FE7Chapter7ShopEditor /></Suspense> },
          { path: 'Chapter8ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter8ArmouryEditor /></Suspense> },
          { path: 'Chapter32SecretEditor', element: <Suspense fallback={loading}><FE7Chapter32SecretEditor /></Suspense> },
          { path: 'TerrainStatEditor', element: <Suspense fallback={loading}><FE7TerrainStatEditor /></Suspense> },
          { path: 'TurnMenutable', element: <Suspense fallback={loading}><FE7TurnMenutable /></Suspense> },
          { path: 'UnitMenutable', element: <Suspense fallback={loading}><FE7UnitMenutable /></Suspense> },
          { path: 'BossMusicEditor', element: <Suspense fallback={loading}><FE7BossMusicEditor /></Suspense> },
          { path: 'SoundRoomEditor', element: <Suspense fallback={loading}><FE7SoundRoomEditor /></Suspense> },
          { path: 'MusicArrayEditor', element: <Suspense fallback={loading}><FE7MusicArrayEditor /></Suspense> },
        ],
      },
    ],
  },
];

export default routes;
