import React, { Suspense, lazy } from 'react';
import loading from '../../Loading';
import FE4 from '.';

const FE4HomePage = lazy(() => import('./HomePage'));
const FE41stGenEditor = lazy(() => import('./1stGenEditor'));
const FE42ndGenerationStaticCharacterEditor1 = lazy(() => import('./2ndGenerationStaticCharacterEditor1'));
const FE42ndGenerationStaticCharacterEditor2 = lazy(() => import('./2ndGenerationStaticCharacterEditor2'));
const FE42ndGenerationStaticCharacterEditor3 = lazy(() => import('./2ndGenerationStaticCharacterEditor3'));
const FE4ArmyEditor = lazy(() => import('./ArmyEditor'));
const FE4ArmyPointerEditor = lazy(() => import('./ArmyPointerEditor'));
const FE4BattleMusicEditor = lazy(() => import('./BattleMusicEditor'));
const FE4BattleSpriteEditor = lazy(() => import('./BattleSpriteEditor'));
const FE4BattleSpritePositionEditor = lazy(() => import('./BattleSpritePositionEditor'));
const FE4BattleSpritePositionEditor2 = lazy(() => import('./BattleSpritePositionEditor2'));
const FE4BrokenWeaponEditor = lazy(() => import('./BrokenWeaponEditor'));
const FE4ChapterIntroMusicEditor = lazy(() => import('./ChapterIntroMusicEditor'));
const FE4ChapterMusicEditor = lazy(() => import('./ChapterMusicEditor'));
const FE4ChapterMusicEditor2 = lazy(() => import('./ChapterMusicEditor2'));
const FE4CharNameEditorbase39C59 = lazy(() => import('./CharNameEditorbase39C59'));
const FE4CharPortraitEditor = lazy(() => import('./CharPortraitEditor'));
const FE4CharacterSkillTableEditor = lazy(() => import('./CharacterSkillTableEditor'));
const FE4ChildrenDefinition = lazy(() => import('./ChildrenDefinition'));
const FE4Leaf = lazy(() => import('./Leaf'));
const FE4ChildrenEditor2Altenna = lazy(() => import('./ChildrenEditor2Altenna'));
const FE4ChildrenEditor3 = lazy(() => import('./ChildrenEditor3'));
const FE4CircletEditor = lazy(() => import('./CircletEditor'));
const FE4ClassEditor = lazy(() => import('./ClassEditor'));
const FE4ClassNameEditorbase38CB3 = lazy(() => import('./ClassNameEditorbase38CB3'));
const FE4ClassSkillTableEditor = lazy(() => import('./ClassSkillTableEditor'));
const FE4ClassesPortraitEditor = lazy(() => import('./ClassesPortraitEditor'));
const FE4CustomBattlePaletteEditor = lazy(() => import('./CustomBattlePaletteEditor'));
const FE4EnemyEditor1 = lazy(() => import('./EnemyEditor1'));
const FE4EnemyEditor10 = lazy(() => import('./EnemyEditor10'));
const FE4EnemyEditor11 = lazy(() => import('./EnemyEditor11'));
const FE4EnemyEditor12 = lazy(() => import('./EnemyEditor12'));
const FE4EnemyEditor13 = lazy(() => import('./EnemyEditor13'));
const FE4EnemyEditor14 = lazy(() => import('./EnemyEditor14'));
const FE4EnemyEditor15 = lazy(() => import('./EnemyEditor15'));
const FE4EnemyEditor16 = lazy(() => import('./EnemyEditor16'));
const FE4EnemyEditor17 = lazy(() => import('./EnemyEditor17'));
const FE4EnemyEditor18 = lazy(() => import('./EnemyEditor18'));
const FE4EnemyEditor19 = lazy(() => import('./EnemyEditor19'));
const FE4EnemyEditor2 = lazy(() => import('./EnemyEditor2'));
const FE4EnemyEditor20 = lazy(() => import('./EnemyEditor20'));
const FE4EnemyEditor21 = lazy(() => import('./EnemyEditor21'));
const FE4EnemyEditor22 = lazy(() => import('./EnemyEditor22'));
const FE4EnemyEditor23 = lazy(() => import('./EnemyEditor23'));
const FE4EnemyEditor24 = lazy(() => import('./EnemyEditor24'));
const FE4EnemyEditor25 = lazy(() => import('./EnemyEditor25'));
const FE4EnemyEditor26 = lazy(() => import('./EnemyEditor26'));
const FE4EnemyEditor27 = lazy(() => import('./EnemyEditor27'));
const FE4EnemyEditor28 = lazy(() => import('./EnemyEditor28'));
const FE4EnemyEditor29 = lazy(() => import('./EnemyEditor29'));
const FE4EnemyEditor3 = lazy(() => import('./EnemyEditor3'));
const FE4EnemyEditor4 = lazy(() => import('./EnemyEditor4'));
const FE4EnemyEditor5 = lazy(() => import('./EnemyEditor5'));
const FE4EnemyEditor6 = lazy(() => import('./EnemyEditor6'));
const FE4EnemyEditor7 = lazy(() => import('./EnemyEditor7'));
const FE4EnemyEditor8 = lazy(() => import('./EnemyEditor8'));
const FE4EnemyEditor9 = lazy(() => import('./EnemyEditor9'));
const FE4HairColorEditor = lazy(() => import('./HairColorEditor'));
const FE4HolyBloodEditor = lazy(() => import('./HolyBloodEditor'));
const FE4HolyCharacterEditor1 = lazy(() => import('./HolyCharacterEditor1'));
const FE4HolyCharacterEditor10 = lazy(() => import('./HolyCharacterEditor10'));
const FE4HolyCharacterEditor11 = lazy(() => import('./HolyCharacterEditor11'));
const FE4HolyCharacterEditor12 = lazy(() => import('./HolyCharacterEditor12'));
const FE4HolyCharacterEditor13 = lazy(() => import('./HolyCharacterEditor13'));
const FE4HolyCharacterEditor14 = lazy(() => import('./HolyCharacterEditor14'));
const FE4HolyCharacterEditor15 = lazy(() => import('./HolyCharacterEditor15'));
const FE4HolyCharacterEditor16 = lazy(() => import('./HolyCharacterEditor16'));
const FE4HolyCharacterEditor17 = lazy(() => import('./HolyCharacterEditor17'));
const FE4HolyCharacterEditor18 = lazy(() => import('./HolyCharacterEditor18'));
const FE4HolyCharacterEditor19 = lazy(() => import('./HolyCharacterEditor19'));
const FE4HolyCharacterEditor2 = lazy(() => import('./HolyCharacterEditor2'));
const FE4HolyCharacterEditor3 = lazy(() => import('./HolyCharacterEditor3'));
const FE4HolyCharacterEditor4 = lazy(() => import('./HolyCharacterEditor4'));
const FE4HolyCharacterEditor5 = lazy(() => import('./HolyCharacterEditor5'));
const FE4HolyCharacterEditor6 = lazy(() => import('./HolyCharacterEditor6'));
const FE4HolyCharacterEditor7 = lazy(() => import('./HolyCharacterEditor7'));
const FE4HolyCharacterEditor8 = lazy(() => import('./HolyCharacterEditor8'));
const FE4HolyCharacterEditor9 = lazy(() => import('./HolyCharacterEditor9'));
const FE4HolyCharacterLeptor = lazy(() => import('./HolyCharacterLeptor'));
const FE4HolyWeaponFlashEditor = lazy(() => import('./HolyWeaponFlashEditor'));
const FE4HolyWeaponFlashEditorModified = lazy(() => import('./HolyWeaponFlashEditorModified'));
const FE4ItemEditor = lazy(() => import('./ItemEditor'));
const FE4ItemNameEditorbase3DE12 = lazy(() => import('./ItemNameEditorbase3DE12'));
const FE4ItemSkillTableEditor = lazy(() => import('./ItemSkillTableEditor'));
const FE4ItemSpriteEditor = lazy(() => import('./ItemSpriteEditor'));
const FE4LoveBases1stGeneration = lazy(() => import('./LoveBases1stGeneration'));
const FE4LoveConversations = lazy(() => import('./LoveConversations'));
const FE4LoveGrowths2ndGeneration = lazy(() => import('./LoveGrowths2ndGeneration'));
const FE4LoveGrowths1stGeneration = lazy(() => import('./LoveGrowths1stGeneration'));
const FE4LovesBases2ndGeneration = lazy(() => import('./LovesBases2ndGeneration'));
const FE4MagicAnimationEditor = lazy(() => import('./MagicAnimationEditor'));
const FE4MagicAnimationPointerEditorbase17917Dupto0x4C = lazy(() => import('./MagicAnimationPointerEditorbase17917Dupto0x4C'));
const FE4Fe4MapSpriteEditor = lazy(() => import('./Fe4MapSpriteEditor'));
const FE4PlayerWeaponEditor = lazy(() => import('./PlayerWeaponEditor'));
const FE4PromotionEditor = lazy(() => import('./PromotionEditor'));
const FE4RingEditor = lazy(() => import('./RingEditor'));
const FE4ShieldDefinitionEditor = lazy(() => import('./ShieldDefinitionEditor'));
const FE4ShieldSpriteEditor = lazy(() => import('./ShieldSpriteEditor'));
const FE4ShopEditorChapter12 = lazy(() => import('./ShopEditorChapter12'));
const FE4ShopEditorChapter10 = lazy(() => import('./ShopEditorChapter10'));
const FE4ShopEditorChapter3 = lazy(() => import('./ShopEditorChapter3'));
const FE4ShopEditorChapter4 = lazy(() => import('./ShopEditorChapter4'));
const FE4ShopEditorChapter6 = lazy(() => import('./ShopEditorChapter6'));
const FE4ShopEditorChapter7 = lazy(() => import('./ShopEditorChapter7'));
const FE4ShopEditorChapter8 = lazy(() => import('./ShopEditorChapter8'));
const FE4ShopEditorChapter9 = lazy(() => import('./ShopEditorChapter9'));
const FE4SiblingBonusEditor = lazy(() => import('./SiblingBonusEditor'));
const FE4SkillDisplayEditor1StatScreen = lazy(() => import('./SkillDisplayEditor1StatScreen'));
const FE4SkillDisplayEditor2StatScreenDescription = lazy(() => import('./SkillDisplayEditor2StatScreenDescription'));
const FE4SkillDisplayEditor3SkillListDescription = lazy(() => import('./SkillDisplayEditor3SkillListDescription'));
const FE4TerrainMovementCostEditor = lazy(() => import('./TerrainMovementCostEditor'));
const FE4TriangleAttackEditor = lazy(() => import('./TriangleAttackEditor'));
const FE4WeaponBonusEditor = lazy(() => import('./WeaponBonusEditor'));
const FE4StaffEditor1 = lazy(() => import('./StaffEditor1'));
const FE4StaffEditor2 = lazy(() => import('./StaffEditor2'));

export const FE4Routes = {
  path: 'FE4',
  element: <FE4 />,
  children: [
    { path: '', element: <Suspense fallback={loading}><FE4HomePage /></Suspense> },
    { path: '1stGenEditor', element: <Suspense fallback={loading}><FE41stGenEditor /></Suspense> },
    { path: '2ndGenerationStaticCharacterEditor1', element: <Suspense fallback={loading}><FE42ndGenerationStaticCharacterEditor1 /></Suspense> },
    { path: '2ndGenerationStaticCharacterEditor2', element: <Suspense fallback={loading}><FE42ndGenerationStaticCharacterEditor2 /></Suspense> },
    { path: '2ndGenerationStaticCharacterEditor3', element: <Suspense fallback={loading}><FE42ndGenerationStaticCharacterEditor3 /></Suspense> },
    { path: 'ArmyEditor', element: <Suspense fallback={loading}><FE4ArmyEditor /></Suspense> },
    { path: 'ArmyPointerEditor', element: <Suspense fallback={loading}><FE4ArmyPointerEditor /></Suspense> },
    { path: 'BattleMusicEditor', element: <Suspense fallback={loading}><FE4BattleMusicEditor /></Suspense> },
    { path: 'BattleSpriteEditor', element: <Suspense fallback={loading}><FE4BattleSpriteEditor /></Suspense> },
    { path: 'BattleSpritePositionEditor', element: <Suspense fallback={loading}><FE4BattleSpritePositionEditor /></Suspense> },
    { path: 'BattleSpritePositionEditor2', element: <Suspense fallback={loading}><FE4BattleSpritePositionEditor2 /></Suspense> },
    { path: 'BrokenWeaponEditor', element: <Suspense fallback={loading}><FE4BrokenWeaponEditor /></Suspense> },
    { path: 'ChapterIntroMusicEditor', element: <Suspense fallback={loading}><FE4ChapterIntroMusicEditor /></Suspense> },
    { path: 'ChapterMusicEditor', element: <Suspense fallback={loading}><FE4ChapterMusicEditor /></Suspense> },
    { path: 'ChapterMusicEditor2', element: <Suspense fallback={loading}><FE4ChapterMusicEditor2 /></Suspense> },
    { path: 'CharNameEditorbase39C59', element: <Suspense fallback={loading}><FE4CharNameEditorbase39C59 /></Suspense> },
    { path: 'CharPortraitEditor', element: <Suspense fallback={loading}><FE4CharPortraitEditor /></Suspense> },
    { path: 'CharacterSkillTableEditor', element: <Suspense fallback={loading}><FE4CharacterSkillTableEditor /></Suspense> },
    { path: 'ChildrenDefinition', element: <Suspense fallback={loading}><FE4ChildrenDefinition /></Suspense> },
    { path: 'Leaf', element: <Suspense fallback={loading}><FE4Leaf /></Suspense> },
    { path: 'ChildrenEditor2Altenna', element: <Suspense fallback={loading}><FE4ChildrenEditor2Altenna /></Suspense> },
    { path: 'ChildrenEditor3', element: <Suspense fallback={loading}><FE4ChildrenEditor3 /></Suspense> },
    { path: 'CircletEditor', element: <Suspense fallback={loading}><FE4CircletEditor /></Suspense> },
    { path: 'ClassEditor', element: <Suspense fallback={loading}><FE4ClassEditor /></Suspense> },
    { path: 'ClassNameEditorbase38CB3', element: <Suspense fallback={loading}><FE4ClassNameEditorbase38CB3 /></Suspense> },
    { path: 'ClassSkillTableEditor', element: <Suspense fallback={loading}><FE4ClassSkillTableEditor /></Suspense> },
    { path: 'ClassesPortraitEditor', element: <Suspense fallback={loading}><FE4ClassesPortraitEditor /></Suspense> },
    { path: 'CustomBattlePaletteEditor', element: <Suspense fallback={loading}><FE4CustomBattlePaletteEditor /></Suspense> },
    { path: 'EnemyEditor1', element: <Suspense fallback={loading}><FE4EnemyEditor1 /></Suspense> },
    { path: 'EnemyEditor10', element: <Suspense fallback={loading}><FE4EnemyEditor10 /></Suspense> },
    { path: 'EnemyEditor11', element: <Suspense fallback={loading}><FE4EnemyEditor11 /></Suspense> },
    { path: 'EnemyEditor12', element: <Suspense fallback={loading}><FE4EnemyEditor12 /></Suspense> },
    { path: 'EnemyEditor13', element: <Suspense fallback={loading}><FE4EnemyEditor13 /></Suspense> },
    { path: 'EnemyEditor14', element: <Suspense fallback={loading}><FE4EnemyEditor14 /></Suspense> },
    { path: 'EnemyEditor15', element: <Suspense fallback={loading}><FE4EnemyEditor15 /></Suspense> },
    { path: 'EnemyEditor16', element: <Suspense fallback={loading}><FE4EnemyEditor16 /></Suspense> },
    { path: 'EnemyEditor17', element: <Suspense fallback={loading}><FE4EnemyEditor17 /></Suspense> },
    { path: 'EnemyEditor18', element: <Suspense fallback={loading}><FE4EnemyEditor18 /></Suspense> },
    { path: 'EnemyEditor19', element: <Suspense fallback={loading}><FE4EnemyEditor19 /></Suspense> },
    { path: 'EnemyEditor2', element: <Suspense fallback={loading}><FE4EnemyEditor2 /></Suspense> },
    { path: 'EnemyEditor20', element: <Suspense fallback={loading}><FE4EnemyEditor20 /></Suspense> },
    { path: 'EnemyEditor21', element: <Suspense fallback={loading}><FE4EnemyEditor21 /></Suspense> },
    { path: 'EnemyEditor22', element: <Suspense fallback={loading}><FE4EnemyEditor22 /></Suspense> },
    { path: 'EnemyEditor23', element: <Suspense fallback={loading}><FE4EnemyEditor23 /></Suspense> },
    { path: 'EnemyEditor24', element: <Suspense fallback={loading}><FE4EnemyEditor24 /></Suspense> },
    { path: 'EnemyEditor25', element: <Suspense fallback={loading}><FE4EnemyEditor25 /></Suspense> },
    { path: 'EnemyEditor26', element: <Suspense fallback={loading}><FE4EnemyEditor26 /></Suspense> },
    { path: 'EnemyEditor27', element: <Suspense fallback={loading}><FE4EnemyEditor27 /></Suspense> },
    { path: 'EnemyEditor28', element: <Suspense fallback={loading}><FE4EnemyEditor28 /></Suspense> },
    { path: 'EnemyEditor29', element: <Suspense fallback={loading}><FE4EnemyEditor29 /></Suspense> },
    { path: 'EnemyEditor3', element: <Suspense fallback={loading}><FE4EnemyEditor3 /></Suspense> },
    { path: 'EnemyEditor4', element: <Suspense fallback={loading}><FE4EnemyEditor4 /></Suspense> },
    { path: 'EnemyEditor5', element: <Suspense fallback={loading}><FE4EnemyEditor5 /></Suspense> },
    { path: 'EnemyEditor6', element: <Suspense fallback={loading}><FE4EnemyEditor6 /></Suspense> },
    { path: 'EnemyEditor7', element: <Suspense fallback={loading}><FE4EnemyEditor7 /></Suspense> },
    { path: 'EnemyEditor8', element: <Suspense fallback={loading}><FE4EnemyEditor8 /></Suspense> },
    { path: 'EnemyEditor9', element: <Suspense fallback={loading}><FE4EnemyEditor9 /></Suspense> },
    { path: 'HairColorEditor', element: <Suspense fallback={loading}><FE4HairColorEditor /></Suspense> },
    { path: 'HolyBloodEditor', element: <Suspense fallback={loading}><FE4HolyBloodEditor /></Suspense> },
    { path: 'HolyCharacterEditor1', element: <Suspense fallback={loading}><FE4HolyCharacterEditor1 /></Suspense> },
    { path: 'HolyCharacterEditor10', element: <Suspense fallback={loading}><FE4HolyCharacterEditor10 /></Suspense> },
    { path: 'HolyCharacterEditor11', element: <Suspense fallback={loading}><FE4HolyCharacterEditor11 /></Suspense> },
    { path: 'HolyCharacterEditor12', element: <Suspense fallback={loading}><FE4HolyCharacterEditor12 /></Suspense> },
    { path: 'HolyCharacterEditor13', element: <Suspense fallback={loading}><FE4HolyCharacterEditor13 /></Suspense> },
    { path: 'HolyCharacterEditor14', element: <Suspense fallback={loading}><FE4HolyCharacterEditor14 /></Suspense> },
    { path: 'HolyCharacterEditor15', element: <Suspense fallback={loading}><FE4HolyCharacterEditor15 /></Suspense> },
    { path: 'HolyCharacterEditor16', element: <Suspense fallback={loading}><FE4HolyCharacterEditor16 /></Suspense> },
    { path: 'HolyCharacterEditor17', element: <Suspense fallback={loading}><FE4HolyCharacterEditor17 /></Suspense> },
    { path: 'HolyCharacterEditor18', element: <Suspense fallback={loading}><FE4HolyCharacterEditor18 /></Suspense> },
    { path: 'HolyCharacterEditor19', element: <Suspense fallback={loading}><FE4HolyCharacterEditor19 /></Suspense> },
    { path: 'HolyCharacterEditor2', element: <Suspense fallback={loading}><FE4HolyCharacterEditor2 /></Suspense> },
    { path: 'HolyCharacterEditor3', element: <Suspense fallback={loading}><FE4HolyCharacterEditor3 /></Suspense> },
    { path: 'HolyCharacterEditor4', element: <Suspense fallback={loading}><FE4HolyCharacterEditor4 /></Suspense> },
    { path: 'HolyCharacterEditor5', element: <Suspense fallback={loading}><FE4HolyCharacterEditor5 /></Suspense> },
    { path: 'HolyCharacterEditor6', element: <Suspense fallback={loading}><FE4HolyCharacterEditor6 /></Suspense> },
    { path: 'HolyCharacterEditor7', element: <Suspense fallback={loading}><FE4HolyCharacterEditor7 /></Suspense> },
    { path: 'HolyCharacterEditor8', element: <Suspense fallback={loading}><FE4HolyCharacterEditor8 /></Suspense> },
    { path: 'HolyCharacterEditor9', element: <Suspense fallback={loading}><FE4HolyCharacterEditor9 /></Suspense> },
    { path: 'HolyCharacterLeptor', element: <Suspense fallback={loading}><FE4HolyCharacterLeptor /></Suspense> },
    { path: 'HolyWeaponFlashEditor', element: <Suspense fallback={loading}><FE4HolyWeaponFlashEditor /></Suspense> },
    { path: 'HolyWeaponFlashEditorModified', element: <Suspense fallback={loading}><FE4HolyWeaponFlashEditorModified /></Suspense> },
    { path: 'ItemEditor', element: <Suspense fallback={loading}><FE4ItemEditor /></Suspense> },
    { path: 'ItemNameEditorbase3DE12', element: <Suspense fallback={loading}><FE4ItemNameEditorbase3DE12 /></Suspense> },
    { path: 'ItemSkillTableEditor', element: <Suspense fallback={loading}><FE4ItemSkillTableEditor /></Suspense> },
    { path: 'ItemSpriteEditor', element: <Suspense fallback={loading}><FE4ItemSpriteEditor /></Suspense> },
    { path: 'LoveBases1stGeneration', element: <Suspense fallback={loading}><FE4LoveBases1stGeneration /></Suspense> },
    { path: 'LoveConversations', element: <Suspense fallback={loading}><FE4LoveConversations /></Suspense> },
    { path: 'LoveGrowths2ndGeneration', element: <Suspense fallback={loading}><FE4LoveGrowths2ndGeneration /></Suspense> },
    { path: 'LoveGrowths1stGeneration', element: <Suspense fallback={loading}><FE4LoveGrowths1stGeneration /></Suspense> },
    { path: 'LovesBases2ndGeneration', element: <Suspense fallback={loading}><FE4LovesBases2ndGeneration /></Suspense> },
    { path: 'MagicAnimationEditor', element: <Suspense fallback={loading}><FE4MagicAnimationEditor /></Suspense> },
    { path: 'MagicAnimationPointerEditorbase17917Dupto0x4C', element: <Suspense fallback={loading}><FE4MagicAnimationPointerEditorbase17917Dupto0x4C /></Suspense> },
    { path: 'Fe4MapSpriteEditor', element: <Suspense fallback={loading}><FE4Fe4MapSpriteEditor /></Suspense> },
    { path: 'PlayerWeaponEditor', element: <Suspense fallback={loading}><FE4PlayerWeaponEditor /></Suspense> },
    { path: 'PromotionEditor', element: <Suspense fallback={loading}><FE4PromotionEditor /></Suspense> },
    { path: 'RingEditor', element: <Suspense fallback={loading}><FE4RingEditor /></Suspense> },
    { path: 'ShieldDefinitionEditor', element: <Suspense fallback={loading}><FE4ShieldDefinitionEditor /></Suspense> },
    { path: 'ShieldSpriteEditor', element: <Suspense fallback={loading}><FE4ShieldSpriteEditor /></Suspense> },
    { path: 'ShopEditorChapter12', element: <Suspense fallback={loading}><FE4ShopEditorChapter12 /></Suspense> },
    { path: 'ShopEditorChapter10', element: <Suspense fallback={loading}><FE4ShopEditorChapter10 /></Suspense> },
    { path: 'ShopEditorChapter3', element: <Suspense fallback={loading}><FE4ShopEditorChapter3 /></Suspense> },
    { path: 'ShopEditorChapter4', element: <Suspense fallback={loading}><FE4ShopEditorChapter4 /></Suspense> },
    { path: 'ShopEditorChapter6', element: <Suspense fallback={loading}><FE4ShopEditorChapter6 /></Suspense> },
    { path: 'ShopEditorChapter7', element: <Suspense fallback={loading}><FE4ShopEditorChapter7 /></Suspense> },
    { path: 'ShopEditorChapter8', element: <Suspense fallback={loading}><FE4ShopEditorChapter8 /></Suspense> },
    { path: 'ShopEditorChapter9', element: <Suspense fallback={loading}><FE4ShopEditorChapter9 /></Suspense> },
    { path: 'SiblingBonusEditor', element: <Suspense fallback={loading}><FE4SiblingBonusEditor /></Suspense> },
    { path: 'SkillDisplayEditor1StatScreen', element: <Suspense fallback={loading}><FE4SkillDisplayEditor1StatScreen /></Suspense> },
    { path: 'SkillDisplayEditor2StatScreenDescription', element: <Suspense fallback={loading}><FE4SkillDisplayEditor2StatScreenDescription /></Suspense> },
    { path: 'SkillDisplayEditor3SkillListDescription', element: <Suspense fallback={loading}><FE4SkillDisplayEditor3SkillListDescription /></Suspense> },
    { path: 'TerrainMovementCostEditor', element: <Suspense fallback={loading}><FE4TerrainMovementCostEditor /></Suspense> },
    { path: 'TriangleAttackEditor', element: <Suspense fallback={loading}><FE4TriangleAttackEditor /></Suspense> },
    { path: 'WeaponBonusEditor', element: <Suspense fallback={loading}><FE4WeaponBonusEditor /></Suspense> },
    { path: 'StaffEditor1', element: <Suspense fallback={loading}><FE4StaffEditor1 /></Suspense> },
    { path: 'StaffEditor2', element: <Suspense fallback={loading}><FE4StaffEditor2 /></Suspense> },
  ],
};

export default FE4Routes;
