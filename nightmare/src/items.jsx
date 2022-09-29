import React from 'react';
import { FolderOutlined, HomeOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const items = [
  getItem('Home', '/', <HomeOutlined />),
  getItem('FE6', 'FE6', <FolderOutlined />, [
    getItem('Character Editor', 'FE6/CharacterEditor'),
    getItem('Class Editor', 'FE6/ClassEditor'),
  ]),
  getItem('FE7', 'FE7', <FolderOutlined />, [
    getItem('Animation Pointer Table Editor', 'FE7/AnimationPointerTableEditor'),
    getItem('Animation Reference', 'FE7/AnimationReference'),
    getItem('Battle Animation Editor', 'FE7/BattleAnimationEditor'),
    getItem('Copy of Custom Battle Animation Editor', 'FE7/CopyofCustomBattleAnimationEditor'),
    getItem('Custom Battle Animation Editor', 'FE7/CustomBattleAnimationEditor'),
    getItem('Custom Item Animation List', 'FE7/CustomItemAnimationList'),
    getItem('Battle Palette Reference', 'FE7/BattlePaletteReference'),
  ]),
];

export default items;
