import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Space } from 'antd';

export default function FE6HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: 'Battlescreeneditorpart1', state: { buffer } }}>Battle screen editor part 1</Link>
      <Link to={{ pathname: 'Battlescreeneditorpart2', state: { buffer } }}>Battle screen editor part 2</Link>
      <Link to={{ pathname: 'Battlescreeneditorpart3', state: { buffer } }}>Battle screen editor part 3</Link>
      <Link to={{ pathname: 'Battlescreeneditorpart4', state: { buffer } }}>Battle screen editor part 4</Link>
      <Link to={{ pathname: 'Battlescreeneditorpart5', state: { buffer } }}>Battle screen editor part 5</Link>
      <Link to={{ pathname: 'Chapter1ArmyEditor', state: { buffer } }}>Chapter 1 Army Editor</Link>
      <Link to={{ pathname: 'Chapter10AArmyEditor', state: { buffer } }}>Chapter 10A Army Editor</Link>
      <Link to={{ pathname: 'Chapter10BArmoryEditor', state: { buffer } }}>Chapter 10B Armory Editor</Link>
      <Link to={{ pathname: 'Chapter10BArmyEditor', state: { buffer } }}>Chapter 10B Army Editor</Link>
      <Link to={{ pathname: 'Chapter10BShopEvents', state: { buffer } }}>Chapter 10B Shop Events</Link>
      <Link to={{ pathname: 'Chapter11AArmyEditor', state: { buffer } }}>Chapter 11A Army Editor</Link>
      <Link to={{ pathname: 'Chapter11AShopEvents', state: { buffer } }}>Chapter 11A Shop Events</Link>
      <Link to={{ pathname: 'Chapter11BArmyEditor', state: { buffer } }}>Chapter 11B Army Editor</Link>
      <Link to={{ pathname: 'Chapter11BShopEvents', state: { buffer } }}>Chapter 11B Shop Events</Link>
      <Link to={{ pathname: 'Chapter12ArmyEditor', state: { buffer } }}>Chapter 12 Army Editor</Link>
      <Link to={{ pathname: 'Chapter12xArmyEditor', state: { buffer } }}>Chapter 12x Army Editor</Link>
      <Link to={{ pathname: 'Chapter13ArmyEditor', state: { buffer } }}>Chapter 13 Army Editor</Link>
      <Link to={{ pathname: 'Chapter13ShopEvents', state: { buffer } }}>Chapter 13 Shop Events</Link>
      <Link to={{ pathname: 'Chapter14ArmyEditor', state: { buffer } }}>Chapter 14 Army Editor</Link>
      <Link to={{ pathname: 'Chapter14ShopEvents', state: { buffer } }}>Chapter 14 Shop Events</Link>
      <Link to={{ pathname: 'Chapter14xArmyEditor', state: { buffer } }}>Chapter 14x Army Editor</Link>
      <Link to={{ pathname: 'Chapter15ArmyEditor', state: { buffer } }}>Chapter 15 Army Editor</Link>
      <Link to={{ pathname: 'Chapter15ShopEvents', state: { buffer } }}>Chapter 15 Shop Events</Link>
      <Link to={{ pathname: 'Chapter16ArmyEditor', state: { buffer } }}>Chapter 16 Army Editor</Link>
      <Link to={{ pathname: 'Chapter16ShopEvents', state: { buffer } }}>Chapter 16 Shop Events</Link>
      <Link to={{ pathname: 'Chapter16xArmyEditor', state: { buffer } }}>Chapter 16x Army Editor</Link>
      <Link to={{ pathname: 'Chapter17AArmyEditor', state: { buffer } }}>Chapter 17A Army Editor</Link>
      <Link to={{ pathname: 'Chapter17AShopEvents', state: { buffer } }}>Chapter 17A Shop Events</Link>
      <Link to={{ pathname: 'Chapter17BArmyEditor', state: { buffer } }}>Chapter 17B Army Editor</Link>
      <Link to={{ pathname: 'Chapter17BShopEvents', state: { buffer } }}>Chapter 17B Shop Events</Link>
      <Link to={{ pathname: 'Chapter18AArmyEditor', state: { buffer } }}>Chapter 18A Army Editor</Link>
      <Link to={{ pathname: 'Chapter18BArmyEditor', state: { buffer } }}>Chapter 18B Army Editor</Link>
      <Link to={{ pathname: 'Chapter18BShopEvents', state: { buffer } }}>Chapter 18B Shop Events</Link>
      <Link to={{ pathname: 'Chapter19AArmyEditor', state: { buffer } }}>Chapter 19A Army Editor</Link>
      <Link to={{ pathname: 'Chapter19AShopEvents', state: { buffer } }}>Chapter 19A Shop Events</Link>
      <Link to={{ pathname: 'Chapter19BArmyEditor', state: { buffer } }}>Chapter 19B Army Editor</Link>
      <Link to={{ pathname: 'Chapter19BShopEvents', state: { buffer } }}>Chapter 19B Shop Events</Link>
      <Link to={{ pathname: 'Chapter2ArmoryEditor', state: { buffer } }}>Chapter 2 Armory Editor</Link>
      <Link to={{ pathname: 'Chapter2ArmyEditor', state: { buffer } }}>Chapter 2 Army Editor</Link>
      <Link to={{ pathname: 'Chapter2ShopEvents', state: { buffer } }}>Chapter 2 Shop Events</Link>
      <Link to={{ pathname: 'Chapter2VendorEditor', state: { buffer } }}>Chapter 2 Vendor Editor</Link>
      <Link to={{ pathname: 'Chapter20AArmyEditor', state: { buffer } }}>Chapter 20A Army Editor</Link>
      <Link to={{ pathname: 'Chapter20AShopEvents', state: { buffer } }}>Chapter 20A Shop Events</Link>
      <Link to={{ pathname: 'Chapter20AxArmyEditor', state: { buffer } }}>Chapter 20Ax Army Editor</Link>
      <Link to={{ pathname: 'Chapter20BArmyEditor', state: { buffer } }}>Chapter 20B Army Editor</Link>
      <Link to={{ pathname: 'Chapter20BxArmyEditor', state: { buffer } }}>Chapter 20Bx Army Editor</Link>
      <Link to={{ pathname: 'Chapter21ArmyEditor', state: { buffer } }}>Chapter 21 Army Editor</Link>
      <Link to={{ pathname: 'Chapter21ShopEvents', state: { buffer } }}>Chapter 21 Shop Events</Link>
      <Link to={{ pathname: 'Chapter21xArmyEditor', state: { buffer } }}>Chapter 21x Army Editor</Link>
      <Link to={{ pathname: 'Chapter22ArmyEditor', state: { buffer } }}>Chapter 22 Army Editor</Link>
      <Link to={{ pathname: 'Chapter23ArmyEditor', state: { buffer } }}>Chapter 23 Army Editor</Link>
      <Link to={{ pathname: 'Chapter23ShopEvents', state: { buffer } }}>Chapter 23 Shop Events</Link>
      <Link to={{ pathname: 'Chapter24ArmyEditor', state: { buffer } }}>Chapter 24 Army Editor</Link>
      <Link to={{ pathname: 'Chapter3ArmyEditor', state: { buffer } }}>Chapter 3 Army Editor</Link>
      <Link to={{ pathname: 'Chapter4ArmoryEditor', state: { buffer } }}>Chapter 4 Armory Editor</Link>
      <Link to={{ pathname: 'Chapter4ArmyEditor', state: { buffer } }}>Chapter 4 Army Editor</Link>
      <Link to={{ pathname: 'Chapter4ShopEvents', state: { buffer } }}>Chapter 4 Shop Events</Link>
      <Link to={{ pathname: 'Chapter4VendorEditor', state: { buffer } }}>Chapter 4 Vendor Editor</Link>
      <Link to={{ pathname: 'Chapter5ArmyEditor', state: { buffer } }}>Chapter 5 Army Editor</Link>
      <Link to={{ pathname: 'Chapter5ShopEvents', state: { buffer } }}>Chapter 5 Shop Events</Link>
      <Link to={{ pathname: 'Chapter5VendorEditor', state: { buffer } }}>Chapter 5 Vendor Editor</Link>
      <Link to={{ pathname: 'Chapter6ArmyEditor', state: { buffer } }}>Chapter 6 Army Editor</Link>
      <Link to={{ pathname: 'Chapter7ArmyEditor', state: { buffer } }}>Chapter 7 Army Editor</Link>
      <Link to={{ pathname: 'Chapter7LeftArmoryEditor', state: { buffer } }}>Chapter 7 Left Armory Editor</Link>
      <Link to={{ pathname: 'Chapter7RightArmoryEditor', state: { buffer } }}>Chapter 7 Right Armory Editor</Link>
      <Link to={{ pathname: 'Chapter7ShopEvents', state: { buffer } }}>Chapter 7 Shop Events</Link>
      <Link to={{ pathname: 'Chapter7VendorEditor', state: { buffer } }}>Chapter 7 Vendor Editor</Link>
      <Link to={{ pathname: 'Chapter8ArmyEditor', state: { buffer } }}>Chapter 8 Army Editor</Link>
      <Link to={{ pathname: 'Chapter8xArmyEditor', state: { buffer } }}>Chapter 8x Army Editor</Link>
      <Link to={{ pathname: 'Chapter9ArmoryEditor', state: { buffer } }}>Chapter 9 Armory Editor</Link>
      <Link to={{ pathname: 'Chapter9ArmyEditor', state: { buffer } }}>Chapter 9 Army Editor</Link>
      <Link to={{ pathname: 'Chapter9ShopEvents', state: { buffer } }}>Chapter 9 Shop Events</Link>
      <Link to={{ pathname: 'Chapter9VendorEditor', state: { buffer } }}>Chapter 9 Vendor Editor</Link>
      <Link to={{ pathname: 'ChapterDataEditorFE6', state: { buffer } }}>Chapter Data Editor (FE6) -</Link>
      <Link to={{ pathname: 'ChapterTrialMap1ArmyEditor', state: { buffer } }}>Chapter Trial Map 1 Army Editor</Link>
      <Link to={{ pathname: 'ChapterTrialMap2ArmyEditor', state: { buffer } }}>Chapter Trial Map 2 Army Editor</Link>
      <Link to={{ pathname: 'ChapterTrialMap3ArmyEditor', state: { buffer } }}>Chapter Trial Map 3 Army Editor</Link>
      <Link to={{ pathname: 'ChapterTrialMap4ArmyEditor', state: { buffer } }}>Chapter Trial Map 4 Army Editor</Link>
      <Link to={{ pathname: 'ChapterTrialMap5ArmyEditor', state: { buffer } }}>Chapter Trial Map 5 Army Editor</Link>
      <Link to={{ pathname: 'CustomShopEditor', state: { buffer } }}>Custom Shop Editor</Link>
      <Link to={{ pathname: 'Critbonuseditor', state: { buffer } }}>FE 6 Crit bonus editor</Link>
      <Link to={{ pathname: 'EventTableReferences', state: { buffer } }}>FE 6 Event Table References</Link>
      <Link to={{ pathname: 'BattlePaletteReference', state: { buffer } }}>FE6 Battle Palette Reference</Link>
      <Link to={{ pathname: 'CharacterEditor', state: { buffer } }}>FE6 Character Editor</Link>
      <Link to={{ pathname: 'ClassEditor', state: { buffer } }}>FE6 Class Editor</Link>
      <Link to={{ pathname: 'CustomBattleAnimationEditor', state: { buffer } }}>FE6 Custom Battle Animation Editor</Link>
      <Link to={{ pathname: 'CustomPromotionPointerEditor', state: { buffer } }}>FE6 Custom Promotion Pointer Editor</Link>
      <Link to={{ pathname: 'Deathquoteeditor', state: { buffer } }}>FE6 Death quote editor</Link>
      <Link to={{ pathname: 'Enemybossbattlequoteeditor', state: { buffer } }}>FE6 Enemy boss battle quote editor</Link>
      <Link to={{ pathname: 'ItemEditor', state: { buffer } }}>FE6 Item Editor</Link>
      <Link to={{ pathname: 'PortraitEditor', state: { buffer } }}>FE6 Portrait Editor</Link>
      <Link to={{ pathname: 'PromotionItemEditor', state: { buffer } }}>FE6 Promotion Item Editor</Link>
      <Link to={{ pathname: 'Promotionleveleditor', state: { buffer } }}>FE6 Promotion level editor</Link>
      <Link to={{ pathname: 'SoundRoomEditor', state: { buffer } }}>FE6 Sound Room Editor</Link>
      <Link to={{ pathname: 'SpellAssociationEditor', state: { buffer } }}>FE6 Spell Association Editor</Link>
      <Link to={{ pathname: 'SupportEditor', state: { buffer } }}>FE6 Support Editor,</Link>
      <Link to={{ pathname: 'Triangleattackquoteeditor', state: { buffer } }}>FE6 Triangle attack quote editor</Link>
      <Link to={{ pathname: 'FinalChapterArmyEditor', state: { buffer } }}>Final Chapter Army Editor</Link>
      <Link to={{ pathname: 'LevelCapEditor', state: { buffer } }}>Level Cap Editor</Link>
      <Link to={{ pathname: 'Supportbonuseditor', state: { buffer } }}>Support bonus editor</Link>
      <Link to={{ pathname: 'TrialMapCharactersArmyEditor', state: { buffer } }}>Trial Map Characters Army Editor</Link>
      <Link to={{ pathname: 'TutorialArmyEditor', state: { buffer } }}>Tutorial Army Editor</Link>
    </Space>
  );
}
