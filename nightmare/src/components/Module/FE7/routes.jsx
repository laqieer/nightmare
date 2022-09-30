import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE7 from '.';

const FE7HomePage = lazy(() => import('./HomePage'));
const FE7AIRecruitmentEditor = lazy(() => import('./AIRecruitmentEditor'));
const FE7AIRecruitmentEditorP2 = lazy(() => import('./AIRecruitmentEditorP2'));
const FE7AssassinLegaultCustomAnimationEditor = lazy(() => import('./AssassinLegaultCustomAnimationEditor'));
const FE7Battlescreeneditorpart1 = lazy(() => import('./Battlescreeneditorpart1'));
const FE7Battlescreeneditorpart2 = lazy(() => import('./Battlescreeneditorpart2'));
const FE7Battlescreeneditorpart3 = lazy(() => import('./Battlescreeneditorpart3'));
const FE7Battlescreeneditorpart4 = lazy(() => import('./Battlescreeneditorpart4'));
const FE7Battlescreeneditorpart5 = lazy(() => import('./Battlescreeneditorpart5'));
const FE7BlessingoftheEightGeneralsEditor = lazy(() => import('./BlessingoftheEightGeneralsEditor'));
const FE7Chapter1TableEditor = lazy(() => import('./Chapter1TableEditor'));
const FE7Chapter1UnitEditor = lazy(() => import('./Chapter1UnitEditor'));
const FE7Chapter10ArmouryEditor = lazy(() => import('./Chapter10ArmouryEditor'));
const FE7Chapter10SeizeEditor = lazy(() => import('./Chapter10SeizeEditor'));
const FE7Chapter10ShopEditor = lazy(() => import('./Chapter10ShopEditor'));
const FE7Chapter10TableEditor = lazy(() => import('./Chapter10TableEditor'));
const FE7Chapter10UnitEditor = lazy(() => import('./Chapter10UnitEditor'));
const FE7Chapter11SeizeEditor = lazy(() => import('./Chapter11SeizeEditor'));
const FE7Chapter11ShopEditor = lazy(() => import('./Chapter11ShopEditor'));
const FE7Chapter11TableEditor = lazy(() => import('./Chapter11TableEditor'));
const FE7Chapter11UnitEditor = lazy(() => import('./Chapter11UnitEditor'));
const FE7Chapter11HTableEditor = lazy(() => import('./Chapter11HTableEditor'));
const FE7Chapter11HUnitEditor = lazy(() => import('./Chapter11HUnitEditor'));
const FE7Chapter12ArmouryEditor = lazy(() => import('./Chapter12ArmouryEditor'));
const FE7Chapter12ShopEditor = lazy(() => import('./Chapter12ShopEditor'));
const FE7Chapter12TableEditor = lazy(() => import('./Chapter12TableEditor'));
const FE7Chapter12UnitEditor = lazy(() => import('./Chapter12UnitEditor'));
const FE7Chapter13ArmouryEditor = lazy(() => import('./Chapter13ArmouryEditor'));
const FE7Chapter13SeizeEditor = lazy(() => import('./Chapter13SeizeEditor'));
const FE7Chapter13ShopEditor = lazy(() => import('./Chapter13ShopEditor'));
const FE7Chapter13TableEditor = lazy(() => import('./Chapter13TableEditor'));
const FE7Chapter13UnitEditor = lazy(() => import('./Chapter13UnitEditor'));
const FE7Chapter13xTableEditor = lazy(() => import('./Chapter13xTableEditor'));
const FE7Chapter13xUnitEditor = lazy(() => import('./Chapter13xUnitEditor'));
const FE7Chapter14ArmouryEditor = lazy(() => import('./Chapter14ArmouryEditor'));
const FE7Chapter14ShopEditor = lazy(() => import('./Chapter14ShopEditor'));
const FE7Chapter14UnitEditor = lazy(() => import('./Chapter14UnitEditor'));
const FE7Chapter15SeizeEditor = lazy(() => import('./Chapter15SeizeEditor'));
const FE7Chapter15TableEditor = lazy(() => import('./Chapter15TableEditor'));
const FE7Chapter15UnitEditor = lazy(() => import('./Chapter15UnitEditor'));
const FE7Chapter16LeftArmouryEditor = lazy(() => import('./Chapter16LeftArmouryEditor'));
const FE7Chapter16RightArmouryEditor = lazy(() => import('./Chapter16RightArmouryEditor'));
const FE7Chapter16SeizeEditor = lazy(() => import('./Chapter16SeizeEditor'));
const FE7Chapter16ShopEditor = lazy(() => import('./Chapter16ShopEditor'));
const FE7Chapter16TableEditor = lazy(() => import('./Chapter16TableEditor'));
const FE7Chapter16UnitEditor = lazy(() => import('./Chapter16UnitEditor'));
const FE7Chapter17TableEditor = lazy(() => import('./Chapter17TableEditor'));
const FE7Chapter17UnitEditor = lazy(() => import('./Chapter17UnitEditor'));
const FE7Chapter17xShopEditor = lazy(() => import('./Chapter17xShopEditor'));
const FE7Chapter17xTableEditor = lazy(() => import('./Chapter17xTableEditor'));
const FE7Chapter17xUnitEditor = lazy(() => import('./Chapter17xUnitEditor'));
const FE7Chapter18ArmouryEditor = lazy(() => import('./Chapter18ArmouryEditor'));
const FE7Chapter18ShopEditor = lazy(() => import('./Chapter18ShopEditor'));
const FE7Chapter18TableEditor = lazy(() => import('./Chapter18TableEditor'));
const FE7Chapter18UnitEditor = lazy(() => import('./Chapter18UnitEditor'));
const FE7Chapter18xSeizeEditor = lazy(() => import('./Chapter18xSeizeEditor'));
const FE7Chapter19SeizeEditor = lazy(() => import('./Chapter19SeizeEditor'));
const FE7Chapter19TableEditor = lazy(() => import('./Chapter19TableEditor'));
const FE7Chapter19UnitEditor = lazy(() => import('./Chapter19UnitEditor'));
const FE7Chapter19xTableEditor = lazy(() => import('./Chapter19xTableEditor'));
const FE7Chapter19xUnitEditor = lazy(() => import('./Chapter19xUnitEditor'));
const FE7Chapter19xxTableEditor = lazy(() => import('./Chapter19xxTableEditor'));
const FE7Chapter19xxUnitEditor = lazy(() => import('./Chapter19xxUnitEditor'));
const FE7Chapter2SeizeEditor = lazy(() => import('./Chapter2SeizeEditor'));
const FE7Chapter2UnitEditor = lazy(() => import('./Chapter2UnitEditor'));
const FE7Chapter20Secret1Editor = lazy(() => import('./Chapter20Secret1Editor'));
const FE7Chapter20Secret2Editor = lazy(() => import('./Chapter20Secret2Editor'));
const FE7Chapter20TableEditor = lazy(() => import('./Chapter20TableEditor'));
const FE7Chapter20UnitEditor = lazy(() => import('./Chapter20UnitEditor'));
const FE721TableEditor = lazy(() => import('./21TableEditor'));
const FE7Chapter21LeftArmouryEditor = lazy(() => import('./Chapter21LeftArmouryEditor'));
const FE7Chapter21LeftShopEditor = lazy(() => import('./Chapter21LeftShopEditor'));
const FE7Chapter21RightArmouryEditor = lazy(() => import('./Chapter21RightArmouryEditor'));
const FE7Chapter21RightShopEditor = lazy(() => import('./Chapter21RightShopEditor'));
const FE7Chapter21UnitEditor = lazy(() => import('./Chapter21UnitEditor'));
const FE722TableEditor = lazy(() => import('./22TableEditor'));
const FE7Chapter22SecretEditor = lazy(() => import('./Chapter22SecretEditor'));
const FE7Chapter22UnitEditor = lazy(() => import('./Chapter22UnitEditor'));
const FE723TableEditor = lazy(() => import('./23TableEditor'));
const FE723xTableEditor = lazy(() => import('./23xTableEditor'));
const FE7Chapter23UnitEditor = lazy(() => import('./Chapter23UnitEditor'));
const FE724LinusTableEditor = lazy(() => import('./24LinusTableEditor'));
const FE724LloydTableEditor = lazy(() => import('./24LloydTableEditor'));
const FE7Chapter23xUnitEditor = lazy(() => import('./Chapter23xUnitEditor'));
const FE7Chapter24LinusUnitEditor = lazy(() => import('./Chapter24LinusUnitEditor'));
const FE7Chapter24LloydUnitEditor = lazy(() => import('./Chapter24LloydUnitEditor'));
const FE726TableEditor = lazy(() => import('./26TableEditor'));
const FE7Chapter24ALeftArmouryEditor = lazy(() => import('./Chapter24ALeftArmouryEditor'));
const FE7Chapter24ALeftShopEditor = lazy(() => import('./Chapter24ALeftShopEditor'));
const FE7Chapter24ARightArmouryEditor = lazy(() => import('./Chapter24ARightArmouryEditor'));
const FE7Chapter24ARightShopEditor = lazy(() => import('./Chapter24ARightShopEditor'));
const FE7Chapter24ASecretEditor = lazy(() => import('./Chapter24ASecretEditor'));
const FE7Chapter24BLeftArmouryEditor = lazy(() => import('./Chapter24BLeftArmouryEditor'));
const FE7Chapter24BLeftShopEditor = lazy(() => import('./Chapter24BLeftShopEditor'));
const FE7Chapter24BRightArmouryEditor = lazy(() => import('./Chapter24BRightArmouryEditor'));
const FE7Chapter24BRightShopEditor = lazy(() => import('./Chapter24BRightShopEditor'));
const FE7Chapter24BSecretEditor = lazy(() => import('./Chapter24BSecretEditor'));
const FE7Chapter25ArmouryEditor = lazy(() => import('./Chapter25ArmouryEditor'));
const FE7Chapter25CutsceneUnitEditor = lazy(() => import('./Chapter25CutsceneUnitEditor'));
const FE7Chapter25ShopEditor = lazy(() => import('./Chapter25ShopEditor'));
const FE7Chapter25UnitEditor = lazy(() => import('./Chapter25UnitEditor'));
const FE7Chapter2527JermeTableEditor = lazy(() => import('./Chapter2527JermeTableEditor'));
const FE7Chapter2527KennethTableEditor = lazy(() => import('./Chapter2527KennethTableEditor'));
const FE7Chapter25HTableEditor = lazy(() => import('./Chapter25HTableEditor'));
const FE7Chapter26ArmouryEditor = lazy(() => import('./Chapter26ArmouryEditor'));
const FE7Chapter26ShopEditor = lazy(() => import('./Chapter26ShopEditor'));
const FE7Chapter26UnitEditor = lazy(() => import('./Chapter26UnitEditor'));
const FE728TableEditor = lazy(() => import('./28TableEditor'));
const FE728xTableEditor = lazy(() => import('./28xTableEditor'));
const FE7Chapter27JermeUnitEditor = lazy(() => import('./Chapter27JermeUnitEditor'));
const FE7Chapter27KennethUnitEditor = lazy(() => import('./Chapter27KennethUnitEditor'));
const FE729TableEditor = lazy(() => import('./29TableEditor'));
const FE7Chapter28EliwoodTableEditor = lazy(() => import('./Chapter28EliwoodTableEditor'));
const FE7Chapter28UnitEditor = lazy(() => import('./Chapter28UnitEditor'));
const FE7Chapter28xUnitEditor = lazy(() => import('./Chapter28xUnitEditor'));
const FE7Chapter29ArmouryEditor = lazy(() => import('./Chapter29ArmouryEditor'));
const FE7Chapter29ShopEditor = lazy(() => import('./Chapter29ShopEditor'));
const FE7Chapter29UnitEditor = lazy(() => import('./Chapter29UnitEditor'));
const FE731TableEditor = lazy(() => import('./31TableEditor'));
const FE731xTableEditor = lazy(() => import('./31xTableEditor'));
const FE7Chapter3ArmouryEditor = lazy(() => import('./Chapter3ArmouryEditor'));
const FE7Chapter3TableEditor = lazy(() => import('./Chapter3TableEditor'));
const FE7Chapter3UnitEditor = lazy(() => import('./Chapter3UnitEditor'));
const FE7Chapter30EliwoodUnitEditor = lazy(() => import('./Chapter30EliwoodUnitEditor'));
const FE7Chapter30HectorTableEditor = lazy(() => import('./Chapter30HectorTableEditor'));
const FE7Chapter30HectorUnitEditor = lazy(() => import('./Chapter30HectorUnitEditor'));
const FE732TableEditor = lazy(() => import('./32TableEditor'));
const FE7Chapter31SecretEditor = lazy(() => import('./Chapter31SecretEditor'));
const FE7Chapter31UnitEditor = lazy(() => import('./Chapter31UnitEditor'));
const FE7Chapter31xBottomArmouryEditor = lazy(() => import('./Chapter31xBottomArmouryEditor'));
const FE7Chapter31xLeftShopEditor = lazy(() => import('./Chapter31xLeftShopEditor'));
const FE7Chapter31xRightShopEditor = lazy(() => import('./Chapter31xRightShopEditor'));
const FE7Chapter31xtLeftArmouryEditor = lazy(() => import('./Chapter31xtLeftArmouryEditor'));
const FE7Chapter31xtMiddleArmouryEditor = lazy(() => import('./Chapter31xtMiddleArmouryEditor'));
const FE7Chapter31xtRightArmouryEditor = lazy(() => import('./Chapter31xtRightArmouryEditor'));
const FE7Chapter31xUnitEditor = lazy(() => import('./Chapter31xUnitEditor'));
const FE7Chapter32SecretEditor = lazy(() => import('./Chapter32SecretEditor'));
const FE7Chapter32UnitEditor = lazy(() => import('./Chapter32UnitEditor'));
const FE7Chapter32xTableEditor = lazy(() => import('./Chapter32xTableEditor'));
const FE7Chapter32xUnitEditor = lazy(() => import('./Chapter32xUnitEditor'));
const FE7Chapter4TableEditor = lazy(() => import('./Chapter4TableEditor'));
const FE7Chapter4UnitEditor = lazy(() => import('./Chapter4UnitEditor'));
const FE7Chapter5ArmouryEditor = lazy(() => import('./Chapter5ArmouryEditor'));
const FE7Chapter5TableEditor = lazy(() => import('./Chapter5TableEditor'));
const FE7Chapter5UnitEditor = lazy(() => import('./Chapter5UnitEditor'));
const FE7Chapter6TableEditor = lazy(() => import('./Chapter6TableEditor'));
const FE7Chapter6UnitEditor = lazy(() => import('./Chapter6UnitEditor'));
const FE7Chapter7ShopEditor = lazy(() => import('./Chapter7ShopEditor'));
const FE7Chapter7TableEditor = lazy(() => import('./Chapter7TableEditor'));
const FE7Chapter7UnitEditor = lazy(() => import('./Chapter7UnitEditor'));
const FE7Chapter7xTableEditor = lazy(() => import('./Chapter7xTableEditor'));
const FE7Chapter7xUnitEditor = lazy(() => import('./Chapter7xUnitEditor'));
const FE7Chapter8ArmouryEditor = lazy(() => import('./Chapter8ArmouryEditor'));
const FE7Chapter8TableEditor = lazy(() => import('./Chapter8TableEditor'));
const FE7Chapter8UnitEditor = lazy(() => import('./Chapter8UnitEditor'));
const FE7Chapter9SeizeEditor = lazy(() => import('./Chapter9SeizeEditor'));
const FE7Chapter9TableEditor = lazy(() => import('./Chapter9TableEditor'));
const FE7Chapter9UnitEditor = lazy(() => import('./Chapter9UnitEditor'));
const FE7ChapterDataEditorFE7 = lazy(() => import('./ChapterDataEditorFE7'));
const FE7ChapterFinalBossUnitEditor = lazy(() => import('./ChapterFinalBossUnitEditor'));
const FE7ChapterFinalUnitEditor = lazy(() => import('./ChapterFinalUnitEditor'));
const FE7ChapterUnitEditor = lazy(() => import('./ChapterUnitEditor'));
const FE7CustomBattleSpriteTableEditor = lazy(() => import('./CustomBattleSpriteTableEditor'));
const FE7CustomShopEditor = lazy(() => import('./CustomShopEditor'));
const FE7Deathquoteeditorpart1 = lazy(() => import('./Deathquoteeditorpart1'));
const FE7Deathquoteeditorpart2 = lazy(() => import('./Deathquoteeditorpart2'));
const FE7EscapeTilePointerEditor = lazy(() => import('./EscapeTilePointerEditor'));
const FE7AnimationPointerTableEditor = lazy(() => import('./AnimationPointerTableEditor'));
const FE7Arenaclasseditor = lazy(() => import('./Arenaclasseditor'));
const FE7Critbonuseditor = lazy(() => import('./Critbonuseditor'));
const FE7Eventtablereferences = lazy(() => import('./Eventtablereferences'));
const FE7Mapspritepointertableeditor = lazy(() => import('./Mapspritepointertableeditor'));
const FE7PromotionLevelEditor = lazy(() => import('./PromotionLevelEditor'));
const FE7TutorialEditor = lazy(() => import('./TutorialEditor'));
const FE7WorldMapDataReferences = lazy(() => import('./WorldMapDataReferences'));
const FE7AfaDropsBoostEditor = lazy(() => import('./AfaDropsBoostEditor'));
const FE7BattleAnimationEditor = lazy(() => import('./BattleAnimationEditor'));
const FE7BattleBGEditor = lazy(() => import('./BattleBGEditor'));
const FE7BattlePaletteReference = lazy(() => import('./BattlePaletteReference'));
const FE7BetaCharacterEditor = lazy(() => import('./BetaCharacterEditor'));
const FE7BetaClassEditor = lazy(() => import('./BetaClassEditor'));
const FE7BetaItemEditor = lazy(() => import('./BetaItemEditor'));
const FE7BossMusicEditor = lazy(() => import('./BossMusicEditor'));
const FE7CGEditor = lazy(() => import('./CGEditor'));
const FE7Ch11HChestEditor = lazy(() => import('./Ch11HChestEditor'));
const FE7Ch15ChestEditor = lazy(() => import('./Ch15ChestEditor'));
const FE7Ch17ChestEditor = lazy(() => import('./Ch17ChestEditor'));
const FE7Ch19xChestEditor = lazy(() => import('./Ch19xChestEditor'));
const FE7Ch19xxChestEditor = lazy(() => import('./Ch19xxChestEditor'));
const FE7Ch20ChestEditor = lazy(() => import('./Ch20ChestEditor'));
const FE7Ch22ChestEditor = lazy(() => import('./Ch22ChestEditor'));
const FE7Ch23xChestEditor = lazy(() => import('./Ch23xChestEditor'));
const FE7Ch26ChestEditor = lazy(() => import('./Ch26ChestEditor'));
const FE7Ch27AChestEditor = lazy(() => import('./Ch27AChestEditor'));
const FE7Ch27BChestEditor = lazy(() => import('./Ch27BChestEditor'));
const FE7Ch28ChestEditor = lazy(() => import('./Ch28ChestEditor'));
const FE7Ch28xChestEditor = lazy(() => import('./Ch28xChestEditor'));
const FE7Ch29ChestEditor = lazy(() => import('./Ch29ChestEditor'));
const FE7Ch30HChestEditor = lazy(() => import('./Ch30HChestEditor'));
const FE7Ch31ChestEditor = lazy(() => import('./Ch31ChestEditor'));
const FE7Ch32xChestEditor = lazy(() => import('./Ch32xChestEditor'));
const FE7Ch6ChestEditor = lazy(() => import('./Ch6ChestEditor'));
const FE7Ch7xChestEditor = lazy(() => import('./Ch7xChestEditor'));
const FE7ChFinalChestEditor = lazy(() => import('./ChFinalChestEditor'));
const FE7ChUnknown2ChestEditor = lazy(() => import('./ChUnknown2ChestEditor'));
const FE7CharacterEditor = lazy(() => import('./CharacterEditor'));
const FE7ClassEditor = lazy(() => import('./ClassEditor'));
const FE7ConvoBGEditor = lazy(() => import('./ConvoBGEditor'));
const FE7CustomBattleAnimationEditor = lazy(() => import('./CustomBattleAnimationEditor'));
const FE7CustomItemAnimationListWorksonlywithanexpandedROM = lazy(() => import('./CustomItemAnimationListWorksonlywithanexpandedROM'));
const FE7CustomPromotionPointerEditor = lazy(() => import('./CustomPromotionPointerEditor'));
const FE7FallenContractPromotionEditor = lazy(() => import('./FallenContractPromotionEditor'));
const FE7HeavenSealPromotionEditor = lazy(() => import('./HeavenSealPromotionEditor'));
const FE7ItemAnimationReferencePointerExpandedROMrequired = lazy(() => import('./ItemAnimationReferencePointerExpandedROMrequired'));
const FE7ItemEditor = lazy(() => import('./ItemEditor'));
const FE7LuckCapEditorP1 = lazy(() => import('./LuckCapEditorP1'));
const FE7LuckCapEditorP2 = lazy(() => import('./LuckCapEditorP2'));
const FE7MusicArrayEditor = lazy(() => import('./MusicArrayEditor'));
const FE7OceanSealPromotionEditor = lazy(() => import('./OceanSealPromotionEditor'));
const FE7PortraitEditor = lazy(() => import('./PortraitEditor'));
const FE7PromotionItemEditor = lazy(() => import('./PromotionItemEditor'));
const FE7SoundRoomEditor = lazy(() => import('./SoundRoomEditor'));
const FE7SpellAssociationEditor = lazy(() => import('./SpellAssociationEditor'));
const FE7Standingmapspriteeditor = lazy(() => import('./Standingmapspriteeditor'));
const FE7StatBonusesEditor = lazy(() => import('./StatBonusesEditor'));
const FE7SupportPointerEditor = lazy(() => import('./SupportPointerEditor'));
const FE7TerrainStatEditor = lazy(() => import('./TerrainStatEditor'));
const FE7VulneraryEditor = lazy(() => import('./VulneraryEditor'));
const FE7FinalChapter2TableEditor = lazy(() => import('./FinalChapter2TableEditor'));
const FE7FinalChapterTableEditor = lazy(() => import('./FinalChapterTableEditor'));
const FE7FireEmblem7PairedEndingsEditorbyIcyToast = lazy(() => import('./FireEmblem7PairedEndingsEditorbyIcyToast'));
const FE7FireEmblem7SupportcompatibilityEditorbyIcyToast = lazy(() => import('./FireEmblem7SupportcompatibilityEditorbyIcyToast'));
const FE7FireEmblem7SupportConvoAvailabilityEditorbyIcyToast = lazy(() => import('./FireEmblem7SupportConvoAvailabilityEditorbyIcyToast'));
const FE7HawkeyeCustomAnimationEditor = lazy(() => import('./HawkeyeCustomAnimationEditor'));
const FE7HeroRavenCustomAnimationEditor = lazy(() => import('./HeroRavenCustomAnimationEditor'));
const FE7IsadoraCustomAnimationEditor = lazy(() => import('./IsadoraCustomAnimationEditor'));
const FE7LevelCapEditor = lazy(() => import('./LevelCapEditor'));
const FE7Linus1CustomAnimationEditor = lazy(() => import('./Linus1CustomAnimationEditor'));
const FE7Linus2CustomAnimationEditor = lazy(() => import('./Linus2CustomAnimationEditor'));
const FE7Linus3CustomAnimationEditor = lazy(() => import('./Linus3CustomAnimationEditor'));
const FE7Lloyd1CustomAnimationEditor = lazy(() => import('./Lloyd1CustomAnimationEditor'));
const FE7Lloyd2CustomAnimationEditor = lazy(() => import('./Lloyd2CustomAnimationEditor'));
const FE7Lloyd3CustomAnimationEditor = lazy(() => import('./Lloyd3CustomAnimationEditor'));
const FE7LuciusBishopCustomAnimationEditor = lazy(() => import('./LuciusBishopCustomAnimationEditor'));
const FE7LuciusMonkCustomAnimationEditor = lazy(() => import('./LuciusMonkCustomAnimationEditor'));
const FE7LynsEndingEditor = lazy(() => import('./LynsEndingEditor'));
const FE7MovementTypeEditorFE7CredittoFireBlazer = lazy(() => import('./MovementTypeEditorFE7CredittoFireBlazer'));
const FE7MyrmidonGuyCustomAnimationEditor = lazy(() => import('./MyrmidonGuyCustomAnimationEditor'));
const FE7NinoSageCustomAnimationEditor = lazy(() => import('./NinoSageCustomAnimationEditor'));
const FE7PrologueSeizeEditor = lazy(() => import('./PrologueSeizeEditor'));
const FE7PrologueUnitEditor = lazy(() => import('./PrologueUnitEditor'));
const FE7SpecifiedBattleConvoEditorFE7 = lazy(() => import('./SpecifiedBattleConvoEditorFE7'));
const FE7Stuff = lazy(() => import('./Stuff'));
const FE7SupportBonusEditor = lazy(() => import('./SupportBonusEditor'));
const FE7SwordmasterGuyCustomAnimationEditor = lazy(() => import('./SwordmasterGuyCustomAnimationEditor'));
const FE7ThiefLegaultCustomAnimationEditor = lazy(() => import('./ThiefLegaultCustomAnimationEditor'));
const FE7TriangleattackConvo = lazy(() => import('./TriangleattackConvo'));
const FE7TurnMenutable = lazy(() => import('./TurnMenutable'));
const FE7UnitMenutable = lazy(() => import('./UnitMenutable'));
const FE7Unknown18UnitEditor = lazy(() => import('./Unknown18UnitEditor'));
const FE7UnspecifiedBattleConvoEditorFE7 = lazy(() => import('./UnspecifiedBattleConvoEditorFE7'));

export const FE7Routes = {
  path: 'FE7',
  element: <FE7 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE7HomePage /></Suspense> },
    { path: 'AIRecruitmentEditor', element: <Suspense fallback={loading}><FE7AIRecruitmentEditor /></Suspense> },
    { path: 'AIRecruitmentEditorP2', element: <Suspense fallback={loading}><FE7AIRecruitmentEditorP2 /></Suspense> },
    { path: 'AssassinLegaultCustomAnimationEditor', element: <Suspense fallback={loading}><FE7AssassinLegaultCustomAnimationEditor /></Suspense> },
    { path: 'Battlescreeneditorpart1', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart1 /></Suspense> },
    { path: 'Battlescreeneditorpart2', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart2 /></Suspense> },
    { path: 'Battlescreeneditorpart3', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart3 /></Suspense> },
    { path: 'Battlescreeneditorpart4', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart4 /></Suspense> },
    { path: 'Battlescreeneditorpart5', element: <Suspense fallback={loading}><FE7Battlescreeneditorpart5 /></Suspense> },
    { path: 'BlessingoftheEightGeneralsEditor', element: <Suspense fallback={loading}><FE7BlessingoftheEightGeneralsEditor /></Suspense> },
    { path: 'Chapter1TableEditor', element: <Suspense fallback={loading}><FE7Chapter1TableEditor /></Suspense> },
    { path: 'Chapter1UnitEditor', element: <Suspense fallback={loading}><FE7Chapter1UnitEditor /></Suspense> },
    { path: 'Chapter10ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter10ArmouryEditor /></Suspense> },
    { path: 'Chapter10SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter10SeizeEditor /></Suspense> },
    { path: 'Chapter10ShopEditor', element: <Suspense fallback={loading}><FE7Chapter10ShopEditor /></Suspense> },
    { path: 'Chapter10TableEditor', element: <Suspense fallback={loading}><FE7Chapter10TableEditor /></Suspense> },
    { path: 'Chapter10UnitEditor', element: <Suspense fallback={loading}><FE7Chapter10UnitEditor /></Suspense> },
    { path: 'Chapter11SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter11SeizeEditor /></Suspense> },
    { path: 'Chapter11ShopEditor', element: <Suspense fallback={loading}><FE7Chapter11ShopEditor /></Suspense> },
    { path: 'Chapter11TableEditor', element: <Suspense fallback={loading}><FE7Chapter11TableEditor /></Suspense> },
    { path: 'Chapter11UnitEditor', element: <Suspense fallback={loading}><FE7Chapter11UnitEditor /></Suspense> },
    { path: 'Chapter11HTableEditor', element: <Suspense fallback={loading}><FE7Chapter11HTableEditor /></Suspense> },
    { path: 'Chapter11HUnitEditor', element: <Suspense fallback={loading}><FE7Chapter11HUnitEditor /></Suspense> },
    { path: 'Chapter12ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter12ArmouryEditor /></Suspense> },
    { path: 'Chapter12ShopEditor', element: <Suspense fallback={loading}><FE7Chapter12ShopEditor /></Suspense> },
    { path: 'Chapter12TableEditor', element: <Suspense fallback={loading}><FE7Chapter12TableEditor /></Suspense> },
    { path: 'Chapter12UnitEditor', element: <Suspense fallback={loading}><FE7Chapter12UnitEditor /></Suspense> },
    { path: 'Chapter13ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter13ArmouryEditor /></Suspense> },
    { path: 'Chapter13SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter13SeizeEditor /></Suspense> },
    { path: 'Chapter13ShopEditor', element: <Suspense fallback={loading}><FE7Chapter13ShopEditor /></Suspense> },
    { path: 'Chapter13TableEditor', element: <Suspense fallback={loading}><FE7Chapter13TableEditor /></Suspense> },
    { path: 'Chapter13UnitEditor', element: <Suspense fallback={loading}><FE7Chapter13UnitEditor /></Suspense> },
    { path: 'Chapter13xTableEditor', element: <Suspense fallback={loading}><FE7Chapter13xTableEditor /></Suspense> },
    { path: 'Chapter13xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter13xUnitEditor /></Suspense> },
    { path: 'Chapter14ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter14ArmouryEditor /></Suspense> },
    { path: 'Chapter14ShopEditor', element: <Suspense fallback={loading}><FE7Chapter14ShopEditor /></Suspense> },
    { path: 'Chapter14UnitEditor', element: <Suspense fallback={loading}><FE7Chapter14UnitEditor /></Suspense> },
    { path: 'Chapter15SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter15SeizeEditor /></Suspense> },
    { path: 'Chapter15TableEditor', element: <Suspense fallback={loading}><FE7Chapter15TableEditor /></Suspense> },
    { path: 'Chapter15UnitEditor', element: <Suspense fallback={loading}><FE7Chapter15UnitEditor /></Suspense> },
    { path: 'Chapter16LeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter16LeftArmouryEditor /></Suspense> },
    { path: 'Chapter16RightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter16RightArmouryEditor /></Suspense> },
    { path: 'Chapter16SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter16SeizeEditor /></Suspense> },
    { path: 'Chapter16ShopEditor', element: <Suspense fallback={loading}><FE7Chapter16ShopEditor /></Suspense> },
    { path: 'Chapter16TableEditor', element: <Suspense fallback={loading}><FE7Chapter16TableEditor /></Suspense> },
    { path: 'Chapter16UnitEditor', element: <Suspense fallback={loading}><FE7Chapter16UnitEditor /></Suspense> },
    { path: 'Chapter17TableEditor', element: <Suspense fallback={loading}><FE7Chapter17TableEditor /></Suspense> },
    { path: 'Chapter17UnitEditor', element: <Suspense fallback={loading}><FE7Chapter17UnitEditor /></Suspense> },
    { path: 'Chapter17xShopEditor', element: <Suspense fallback={loading}><FE7Chapter17xShopEditor /></Suspense> },
    { path: 'Chapter17xTableEditor', element: <Suspense fallback={loading}><FE7Chapter17xTableEditor /></Suspense> },
    { path: 'Chapter17xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter17xUnitEditor /></Suspense> },
    { path: 'Chapter18ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter18ArmouryEditor /></Suspense> },
    { path: 'Chapter18ShopEditor', element: <Suspense fallback={loading}><FE7Chapter18ShopEditor /></Suspense> },
    { path: 'Chapter18TableEditor', element: <Suspense fallback={loading}><FE7Chapter18TableEditor /></Suspense> },
    { path: 'Chapter18UnitEditor', element: <Suspense fallback={loading}><FE7Chapter18UnitEditor /></Suspense> },
    { path: 'Chapter18xSeizeEditor', element: <Suspense fallback={loading}><FE7Chapter18xSeizeEditor /></Suspense> },
    { path: 'Chapter19SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter19SeizeEditor /></Suspense> },
    { path: 'Chapter19TableEditor', element: <Suspense fallback={loading}><FE7Chapter19TableEditor /></Suspense> },
    { path: 'Chapter19UnitEditor', element: <Suspense fallback={loading}><FE7Chapter19UnitEditor /></Suspense> },
    { path: 'Chapter19xTableEditor', element: <Suspense fallback={loading}><FE7Chapter19xTableEditor /></Suspense> },
    { path: 'Chapter19xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter19xUnitEditor /></Suspense> },
    { path: 'Chapter19xxTableEditor', element: <Suspense fallback={loading}><FE7Chapter19xxTableEditor /></Suspense> },
    { path: 'Chapter19xxUnitEditor', element: <Suspense fallback={loading}><FE7Chapter19xxUnitEditor /></Suspense> },
    { path: 'Chapter2SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter2SeizeEditor /></Suspense> },
    { path: 'Chapter2UnitEditor', element: <Suspense fallback={loading}><FE7Chapter2UnitEditor /></Suspense> },
    { path: 'Chapter20Secret1Editor', element: <Suspense fallback={loading}><FE7Chapter20Secret1Editor /></Suspense> },
    { path: 'Chapter20Secret2Editor', element: <Suspense fallback={loading}><FE7Chapter20Secret2Editor /></Suspense> },
    { path: 'Chapter20TableEditor', element: <Suspense fallback={loading}><FE7Chapter20TableEditor /></Suspense> },
    { path: 'Chapter20UnitEditor', element: <Suspense fallback={loading}><FE7Chapter20UnitEditor /></Suspense> },
    { path: '21TableEditor', element: <Suspense fallback={loading}><FE721TableEditor /></Suspense> },
    { path: 'Chapter21LeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter21LeftArmouryEditor /></Suspense> },
    { path: 'Chapter21LeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter21LeftShopEditor /></Suspense> },
    { path: 'Chapter21RightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter21RightArmouryEditor /></Suspense> },
    { path: 'Chapter21RightShopEditor', element: <Suspense fallback={loading}><FE7Chapter21RightShopEditor /></Suspense> },
    { path: 'Chapter21UnitEditor', element: <Suspense fallback={loading}><FE7Chapter21UnitEditor /></Suspense> },
    { path: '22TableEditor', element: <Suspense fallback={loading}><FE722TableEditor /></Suspense> },
    { path: 'Chapter22SecretEditor', element: <Suspense fallback={loading}><FE7Chapter22SecretEditor /></Suspense> },
    { path: 'Chapter22UnitEditor', element: <Suspense fallback={loading}><FE7Chapter22UnitEditor /></Suspense> },
    { path: '23TableEditor', element: <Suspense fallback={loading}><FE723TableEditor /></Suspense> },
    { path: '23xTableEditor', element: <Suspense fallback={loading}><FE723xTableEditor /></Suspense> },
    { path: 'Chapter23UnitEditor', element: <Suspense fallback={loading}><FE7Chapter23UnitEditor /></Suspense> },
    { path: '24LinusTableEditor', element: <Suspense fallback={loading}><FE724LinusTableEditor /></Suspense> },
    { path: '24LloydTableEditor', element: <Suspense fallback={loading}><FE724LloydTableEditor /></Suspense> },
    { path: 'Chapter23xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter23xUnitEditor /></Suspense> },
    { path: 'Chapter24LinusUnitEditor', element: <Suspense fallback={loading}><FE7Chapter24LinusUnitEditor /></Suspense> },
    { path: 'Chapter24LloydUnitEditor', element: <Suspense fallback={loading}><FE7Chapter24LloydUnitEditor /></Suspense> },
    { path: '26TableEditor', element: <Suspense fallback={loading}><FE726TableEditor /></Suspense> },
    { path: 'Chapter24ALeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24ALeftArmouryEditor /></Suspense> },
    { path: 'Chapter24ALeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter24ALeftShopEditor /></Suspense> },
    { path: 'Chapter24ARightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24ARightArmouryEditor /></Suspense> },
    { path: 'Chapter24ARightShopEditor', element: <Suspense fallback={loading}><FE7Chapter24ARightShopEditor /></Suspense> },
    { path: 'Chapter24ASecretEditor', element: <Suspense fallback={loading}><FE7Chapter24ASecretEditor /></Suspense> },
    { path: 'Chapter24BLeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24BLeftArmouryEditor /></Suspense> },
    { path: 'Chapter24BLeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter24BLeftShopEditor /></Suspense> },
    { path: 'Chapter24BRightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter24BRightArmouryEditor /></Suspense> },
    { path: 'Chapter24BRightShopEditor', element: <Suspense fallback={loading}><FE7Chapter24BRightShopEditor /></Suspense> },
    { path: 'Chapter24BSecretEditor', element: <Suspense fallback={loading}><FE7Chapter24BSecretEditor /></Suspense> },
    { path: 'Chapter25ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter25ArmouryEditor /></Suspense> },
    { path: 'Chapter25CutsceneUnitEditor', element: <Suspense fallback={loading}><FE7Chapter25CutsceneUnitEditor /></Suspense> },
    { path: 'Chapter25ShopEditor', element: <Suspense fallback={loading}><FE7Chapter25ShopEditor /></Suspense> },
    { path: 'Chapter25UnitEditor', element: <Suspense fallback={loading}><FE7Chapter25UnitEditor /></Suspense> },
    { path: 'Chapter2527JermeTableEditor', element: <Suspense fallback={loading}><FE7Chapter2527JermeTableEditor /></Suspense> },
    { path: 'Chapter2527KennethTableEditor', element: <Suspense fallback={loading}><FE7Chapter2527KennethTableEditor /></Suspense> },
    { path: 'Chapter25HTableEditor', element: <Suspense fallback={loading}><FE7Chapter25HTableEditor /></Suspense> },
    { path: 'Chapter26ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter26ArmouryEditor /></Suspense> },
    { path: 'Chapter26ShopEditor', element: <Suspense fallback={loading}><FE7Chapter26ShopEditor /></Suspense> },
    { path: 'Chapter26UnitEditor', element: <Suspense fallback={loading}><FE7Chapter26UnitEditor /></Suspense> },
    { path: '28TableEditor', element: <Suspense fallback={loading}><FE728TableEditor /></Suspense> },
    { path: '28xTableEditor', element: <Suspense fallback={loading}><FE728xTableEditor /></Suspense> },
    { path: 'Chapter27JermeUnitEditor', element: <Suspense fallback={loading}><FE7Chapter27JermeUnitEditor /></Suspense> },
    { path: 'Chapter27KennethUnitEditor', element: <Suspense fallback={loading}><FE7Chapter27KennethUnitEditor /></Suspense> },
    { path: '29TableEditor', element: <Suspense fallback={loading}><FE729TableEditor /></Suspense> },
    { path: 'Chapter28EliwoodTableEditor', element: <Suspense fallback={loading}><FE7Chapter28EliwoodTableEditor /></Suspense> },
    { path: 'Chapter28UnitEditor', element: <Suspense fallback={loading}><FE7Chapter28UnitEditor /></Suspense> },
    { path: 'Chapter28xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter28xUnitEditor /></Suspense> },
    { path: 'Chapter29ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter29ArmouryEditor /></Suspense> },
    { path: 'Chapter29ShopEditor', element: <Suspense fallback={loading}><FE7Chapter29ShopEditor /></Suspense> },
    { path: 'Chapter29UnitEditor', element: <Suspense fallback={loading}><FE7Chapter29UnitEditor /></Suspense> },
    { path: '31TableEditor', element: <Suspense fallback={loading}><FE731TableEditor /></Suspense> },
    { path: '31xTableEditor', element: <Suspense fallback={loading}><FE731xTableEditor /></Suspense> },
    { path: 'Chapter3ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter3ArmouryEditor /></Suspense> },
    { path: 'Chapter3TableEditor', element: <Suspense fallback={loading}><FE7Chapter3TableEditor /></Suspense> },
    { path: 'Chapter3UnitEditor', element: <Suspense fallback={loading}><FE7Chapter3UnitEditor /></Suspense> },
    { path: 'Chapter30EliwoodUnitEditor', element: <Suspense fallback={loading}><FE7Chapter30EliwoodUnitEditor /></Suspense> },
    { path: 'Chapter30HectorTableEditor', element: <Suspense fallback={loading}><FE7Chapter30HectorTableEditor /></Suspense> },
    { path: 'Chapter30HectorUnitEditor', element: <Suspense fallback={loading}><FE7Chapter30HectorUnitEditor /></Suspense> },
    { path: '32TableEditor', element: <Suspense fallback={loading}><FE732TableEditor /></Suspense> },
    { path: 'Chapter31SecretEditor', element: <Suspense fallback={loading}><FE7Chapter31SecretEditor /></Suspense> },
    { path: 'Chapter31UnitEditor', element: <Suspense fallback={loading}><FE7Chapter31UnitEditor /></Suspense> },
    { path: 'Chapter31xBottomArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xBottomArmouryEditor /></Suspense> },
    { path: 'Chapter31xLeftShopEditor', element: <Suspense fallback={loading}><FE7Chapter31xLeftShopEditor /></Suspense> },
    { path: 'Chapter31xRightShopEditor', element: <Suspense fallback={loading}><FE7Chapter31xRightShopEditor /></Suspense> },
    { path: 'Chapter31xtLeftArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xtLeftArmouryEditor /></Suspense> },
    { path: 'Chapter31xtMiddleArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xtMiddleArmouryEditor /></Suspense> },
    { path: 'Chapter31xtRightArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter31xtRightArmouryEditor /></Suspense> },
    { path: 'Chapter31xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter31xUnitEditor /></Suspense> },
    { path: 'Chapter32SecretEditor', element: <Suspense fallback={loading}><FE7Chapter32SecretEditor /></Suspense> },
    { path: 'Chapter32UnitEditor', element: <Suspense fallback={loading}><FE7Chapter32UnitEditor /></Suspense> },
    { path: 'Chapter32xTableEditor', element: <Suspense fallback={loading}><FE7Chapter32xTableEditor /></Suspense> },
    { path: 'Chapter32xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter32xUnitEditor /></Suspense> },
    { path: 'Chapter4TableEditor', element: <Suspense fallback={loading}><FE7Chapter4TableEditor /></Suspense> },
    { path: 'Chapter4UnitEditor', element: <Suspense fallback={loading}><FE7Chapter4UnitEditor /></Suspense> },
    { path: 'Chapter5ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter5ArmouryEditor /></Suspense> },
    { path: 'Chapter5TableEditor', element: <Suspense fallback={loading}><FE7Chapter5TableEditor /></Suspense> },
    { path: 'Chapter5UnitEditor', element: <Suspense fallback={loading}><FE7Chapter5UnitEditor /></Suspense> },
    { path: 'Chapter6TableEditor', element: <Suspense fallback={loading}><FE7Chapter6TableEditor /></Suspense> },
    { path: 'Chapter6UnitEditor', element: <Suspense fallback={loading}><FE7Chapter6UnitEditor /></Suspense> },
    { path: 'Chapter7ShopEditor', element: <Suspense fallback={loading}><FE7Chapter7ShopEditor /></Suspense> },
    { path: 'Chapter7TableEditor', element: <Suspense fallback={loading}><FE7Chapter7TableEditor /></Suspense> },
    { path: 'Chapter7UnitEditor', element: <Suspense fallback={loading}><FE7Chapter7UnitEditor /></Suspense> },
    { path: 'Chapter7xTableEditor', element: <Suspense fallback={loading}><FE7Chapter7xTableEditor /></Suspense> },
    { path: 'Chapter7xUnitEditor', element: <Suspense fallback={loading}><FE7Chapter7xUnitEditor /></Suspense> },
    { path: 'Chapter8ArmouryEditor', element: <Suspense fallback={loading}><FE7Chapter8ArmouryEditor /></Suspense> },
    { path: 'Chapter8TableEditor', element: <Suspense fallback={loading}><FE7Chapter8TableEditor /></Suspense> },
    { path: 'Chapter8UnitEditor', element: <Suspense fallback={loading}><FE7Chapter8UnitEditor /></Suspense> },
    { path: 'Chapter9SeizeEditor', element: <Suspense fallback={loading}><FE7Chapter9SeizeEditor /></Suspense> },
    { path: 'Chapter9TableEditor', element: <Suspense fallback={loading}><FE7Chapter9TableEditor /></Suspense> },
    { path: 'Chapter9UnitEditor', element: <Suspense fallback={loading}><FE7Chapter9UnitEditor /></Suspense> },
    { path: 'ChapterDataEditorFE7', element: <Suspense fallback={loading}><FE7ChapterDataEditorFE7 /></Suspense> },
    { path: 'ChapterFinalBossUnitEditor', element: <Suspense fallback={loading}><FE7ChapterFinalBossUnitEditor /></Suspense> },
    { path: 'ChapterFinalUnitEditor', element: <Suspense fallback={loading}><FE7ChapterFinalUnitEditor /></Suspense> },
    { path: 'ChapterUnitEditor', element: <Suspense fallback={loading}><FE7ChapterUnitEditor /></Suspense> },
    { path: 'CustomBattleSpriteTableEditor', element: <Suspense fallback={loading}><FE7CustomBattleSpriteTableEditor /></Suspense> },
    { path: 'CustomShopEditor', element: <Suspense fallback={loading}><FE7CustomShopEditor /></Suspense> },
    { path: 'Deathquoteeditorpart1', element: <Suspense fallback={loading}><FE7Deathquoteeditorpart1 /></Suspense> },
    { path: 'Deathquoteeditorpart2', element: <Suspense fallback={loading}><FE7Deathquoteeditorpart2 /></Suspense> },
    { path: 'EscapeTilePointerEditor', element: <Suspense fallback={loading}><FE7EscapeTilePointerEditor /></Suspense> },
    { path: 'AnimationPointerTableEditor', element: <Suspense fallback={loading}><FE7AnimationPointerTableEditor /></Suspense> },
    { path: 'Arenaclasseditor', element: <Suspense fallback={loading}><FE7Arenaclasseditor /></Suspense> },
    { path: 'Critbonuseditor', element: <Suspense fallback={loading}><FE7Critbonuseditor /></Suspense> },
    { path: 'Eventtablereferences', element: <Suspense fallback={loading}><FE7Eventtablereferences /></Suspense> },
    { path: 'Mapspritepointertableeditor', element: <Suspense fallback={loading}><FE7Mapspritepointertableeditor /></Suspense> },
    { path: 'PromotionLevelEditor', element: <Suspense fallback={loading}><FE7PromotionLevelEditor /></Suspense> },
    { path: 'TutorialEditor', element: <Suspense fallback={loading}><FE7TutorialEditor /></Suspense> },
    { path: 'WorldMapDataReferences', element: <Suspense fallback={loading}><FE7WorldMapDataReferences /></Suspense> },
    { path: 'AfaDropsBoostEditor', element: <Suspense fallback={loading}><FE7AfaDropsBoostEditor /></Suspense> },
    { path: 'BattleAnimationEditor', element: <Suspense fallback={loading}><FE7BattleAnimationEditor /></Suspense> },
    { path: 'BattleBGEditor', element: <Suspense fallback={loading}><FE7BattleBGEditor /></Suspense> },
    { path: 'BattlePaletteReference', element: <Suspense fallback={loading}><FE7BattlePaletteReference /></Suspense> },
    { path: 'BetaCharacterEditor', element: <Suspense fallback={loading}><FE7BetaCharacterEditor /></Suspense> },
    { path: 'BetaClassEditor', element: <Suspense fallback={loading}><FE7BetaClassEditor /></Suspense> },
    { path: 'BetaItemEditor', element: <Suspense fallback={loading}><FE7BetaItemEditor /></Suspense> },
    { path: 'BossMusicEditor', element: <Suspense fallback={loading}><FE7BossMusicEditor /></Suspense> },
    { path: 'CGEditor', element: <Suspense fallback={loading}><FE7CGEditor /></Suspense> },
    { path: 'Ch11HChestEditor', element: <Suspense fallback={loading}><FE7Ch11HChestEditor /></Suspense> },
    { path: 'Ch15ChestEditor', element: <Suspense fallback={loading}><FE7Ch15ChestEditor /></Suspense> },
    { path: 'Ch17ChestEditor', element: <Suspense fallback={loading}><FE7Ch17ChestEditor /></Suspense> },
    { path: 'Ch19xChestEditor', element: <Suspense fallback={loading}><FE7Ch19xChestEditor /></Suspense> },
    { path: 'Ch19xxChestEditor', element: <Suspense fallback={loading}><FE7Ch19xxChestEditor /></Suspense> },
    { path: 'Ch20ChestEditor', element: <Suspense fallback={loading}><FE7Ch20ChestEditor /></Suspense> },
    { path: 'Ch22ChestEditor', element: <Suspense fallback={loading}><FE7Ch22ChestEditor /></Suspense> },
    { path: 'Ch23xChestEditor', element: <Suspense fallback={loading}><FE7Ch23xChestEditor /></Suspense> },
    { path: 'Ch26ChestEditor', element: <Suspense fallback={loading}><FE7Ch26ChestEditor /></Suspense> },
    { path: 'Ch27AChestEditor', element: <Suspense fallback={loading}><FE7Ch27AChestEditor /></Suspense> },
    { path: 'Ch27BChestEditor', element: <Suspense fallback={loading}><FE7Ch27BChestEditor /></Suspense> },
    { path: 'Ch28ChestEditor', element: <Suspense fallback={loading}><FE7Ch28ChestEditor /></Suspense> },
    { path: 'Ch28xChestEditor', element: <Suspense fallback={loading}><FE7Ch28xChestEditor /></Suspense> },
    { path: 'Ch29ChestEditor', element: <Suspense fallback={loading}><FE7Ch29ChestEditor /></Suspense> },
    { path: 'Ch30HChestEditor', element: <Suspense fallback={loading}><FE7Ch30HChestEditor /></Suspense> },
    { path: 'Ch31ChestEditor', element: <Suspense fallback={loading}><FE7Ch31ChestEditor /></Suspense> },
    { path: 'Ch32xChestEditor', element: <Suspense fallback={loading}><FE7Ch32xChestEditor /></Suspense> },
    { path: 'Ch6ChestEditor', element: <Suspense fallback={loading}><FE7Ch6ChestEditor /></Suspense> },
    { path: 'Ch7xChestEditor', element: <Suspense fallback={loading}><FE7Ch7xChestEditor /></Suspense> },
    { path: 'ChFinalChestEditor', element: <Suspense fallback={loading}><FE7ChFinalChestEditor /></Suspense> },
    { path: 'ChUnknown2ChestEditor', element: <Suspense fallback={loading}><FE7ChUnknown2ChestEditor /></Suspense> },
    { path: 'CharacterEditor', element: <Suspense fallback={loading}><FE7CharacterEditor /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE7ClassEditor /></Suspense> },
    { path: 'ConvoBGEditor', element: <Suspense fallback={loading}><FE7ConvoBGEditor /></Suspense> },
    { path: 'CustomBattleAnimationEditor', element: <Suspense fallback={loading}><FE7CustomBattleAnimationEditor /></Suspense> },
    { path: 'CustomItemAnimationListWorksonlywithanexpandedROM', element: <Suspense fallback={loading}><FE7CustomItemAnimationListWorksonlywithanexpandedROM /></Suspense> },
    { path: 'CustomPromotionPointerEditor', element: <Suspense fallback={loading}><FE7CustomPromotionPointerEditor /></Suspense> },
    { path: 'FallenContractPromotionEditor', element: <Suspense fallback={loading}><FE7FallenContractPromotionEditor /></Suspense> },
    { path: 'HeavenSealPromotionEditor', element: <Suspense fallback={loading}><FE7HeavenSealPromotionEditor /></Suspense> },
    { path: 'ItemAnimationReferencePointerExpandedROMrequired', element: <Suspense fallback={loading}><FE7ItemAnimationReferencePointerExpandedROMrequired /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE7ItemEditor /></Suspense> },
    { path: 'LuckCapEditorP1', element: <Suspense fallback={loading}><FE7LuckCapEditorP1 /></Suspense> },
    { path: 'LuckCapEditorP2', element: <Suspense fallback={loading}><FE7LuckCapEditorP2 /></Suspense> },
    { path: 'MusicArrayEditor', element: <Suspense fallback={loading}><FE7MusicArrayEditor /></Suspense> },
    { path: 'OceanSealPromotionEditor', element: <Suspense fallback={loading}><FE7OceanSealPromotionEditor /></Suspense> },
    { path: 'PortraitEditor', element: <Suspense fallback={loading}><FE7PortraitEditor /></Suspense> },
    { path: 'PromotionItemEditor', element: <Suspense fallback={loading}><FE7PromotionItemEditor /></Suspense> },
    { path: 'SoundRoomEditor', element: <Suspense fallback={loading}><FE7SoundRoomEditor /></Suspense> },
    { path: 'SpellAssociationEditor', element: <Suspense fallback={loading}><FE7SpellAssociationEditor /></Suspense> },
    { path: 'Standingmapspriteeditor', element: <Suspense fallback={loading}><FE7Standingmapspriteeditor /></Suspense> },
    { path: 'StatBonusesEditor', element: <Suspense fallback={loading}><FE7StatBonusesEditor /></Suspense> },
    { path: 'SupportPointerEditor', element: <Suspense fallback={loading}><FE7SupportPointerEditor /></Suspense> },
    { path: 'TerrainStatEditor', element: <Suspense fallback={loading}><FE7TerrainStatEditor /></Suspense> },
    { path: 'VulneraryEditor', element: <Suspense fallback={loading}><FE7VulneraryEditor /></Suspense> },
    { path: 'FinalChapter2TableEditor', element: <Suspense fallback={loading}><FE7FinalChapter2TableEditor /></Suspense> },
    { path: 'FinalChapterTableEditor', element: <Suspense fallback={loading}><FE7FinalChapterTableEditor /></Suspense> },
    { path: 'FireEmblem7PairedEndingsEditorbyIcyToast', element: <Suspense fallback={loading}><FE7FireEmblem7PairedEndingsEditorbyIcyToast /></Suspense> },
    { path: 'FireEmblem7SupportcompatibilityEditorbyIcyToast', element: <Suspense fallback={loading}><FE7FireEmblem7SupportcompatibilityEditorbyIcyToast /></Suspense> },
    { path: 'FireEmblem7SupportConvoAvailabilityEditorbyIcyToast', element: <Suspense fallback={loading}><FE7FireEmblem7SupportConvoAvailabilityEditorbyIcyToast /></Suspense> },
    { path: 'HawkeyeCustomAnimationEditor', element: <Suspense fallback={loading}><FE7HawkeyeCustomAnimationEditor /></Suspense> },
    { path: 'HeroRavenCustomAnimationEditor', element: <Suspense fallback={loading}><FE7HeroRavenCustomAnimationEditor /></Suspense> },
    { path: 'IsadoraCustomAnimationEditor', element: <Suspense fallback={loading}><FE7IsadoraCustomAnimationEditor /></Suspense> },
    { path: 'LevelCapEditor', element: <Suspense fallback={loading}><FE7LevelCapEditor /></Suspense> },
    { path: 'Linus1CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Linus1CustomAnimationEditor /></Suspense> },
    { path: 'Linus2CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Linus2CustomAnimationEditor /></Suspense> },
    { path: 'Linus3CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Linus3CustomAnimationEditor /></Suspense> },
    { path: 'Lloyd1CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Lloyd1CustomAnimationEditor /></Suspense> },
    { path: 'Lloyd2CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Lloyd2CustomAnimationEditor /></Suspense> },
    { path: 'Lloyd3CustomAnimationEditor', element: <Suspense fallback={loading}><FE7Lloyd3CustomAnimationEditor /></Suspense> },
    { path: 'LuciusBishopCustomAnimationEditor', element: <Suspense fallback={loading}><FE7LuciusBishopCustomAnimationEditor /></Suspense> },
    { path: 'LuciusMonkCustomAnimationEditor', element: <Suspense fallback={loading}><FE7LuciusMonkCustomAnimationEditor /></Suspense> },
    { path: 'LynsEndingEditor', element: <Suspense fallback={loading}><FE7LynsEndingEditor /></Suspense> },
    { path: 'MovementTypeEditorFE7CredittoFireBlazer', element: <Suspense fallback={loading}><FE7MovementTypeEditorFE7CredittoFireBlazer /></Suspense> },
    { path: 'MyrmidonGuyCustomAnimationEditor', element: <Suspense fallback={loading}><FE7MyrmidonGuyCustomAnimationEditor /></Suspense> },
    { path: 'NinoSageCustomAnimationEditor', element: <Suspense fallback={loading}><FE7NinoSageCustomAnimationEditor /></Suspense> },
    { path: 'PrologueSeizeEditor', element: <Suspense fallback={loading}><FE7PrologueSeizeEditor /></Suspense> },
    { path: 'PrologueUnitEditor', element: <Suspense fallback={loading}><FE7PrologueUnitEditor /></Suspense> },
    { path: 'SpecifiedBattleConvoEditorFE7', element: <Suspense fallback={loading}><FE7SpecifiedBattleConvoEditorFE7 /></Suspense> },
    { path: 'Stuff', element: <Suspense fallback={loading}><FE7Stuff /></Suspense> },
    { path: 'SupportBonusEditor', element: <Suspense fallback={loading}><FE7SupportBonusEditor /></Suspense> },
    { path: 'SwordmasterGuyCustomAnimationEditor', element: <Suspense fallback={loading}><FE7SwordmasterGuyCustomAnimationEditor /></Suspense> },
    { path: 'ThiefLegaultCustomAnimationEditor', element: <Suspense fallback={loading}><FE7ThiefLegaultCustomAnimationEditor /></Suspense> },
    { path: 'TriangleattackConvo', element: <Suspense fallback={loading}><FE7TriangleattackConvo /></Suspense> },
    { path: 'TurnMenutable', element: <Suspense fallback={loading}><FE7TurnMenutable /></Suspense> },
    { path: 'UnitMenutable', element: <Suspense fallback={loading}><FE7UnitMenutable /></Suspense> },
    { path: 'Unknown18UnitEditor', element: <Suspense fallback={loading}><FE7Unknown18UnitEditor /></Suspense> },
    { path: 'UnspecifiedBattleConvoEditorFE7', element: <Suspense fallback={loading}><FE7UnspecifiedBattleConvoEditorFE7 /></Suspense> },
  ],
};

export default FE7Routes;
