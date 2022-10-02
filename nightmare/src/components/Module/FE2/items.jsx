import React from 'react';
import { FolderOutlined } from '@ant-design/icons';
import { getItem } from '../../util';

export const FE2Items = getItem('FE2', 'FE2', <FolderOutlined />, [
  getItem('Character Editor (FE2) -', 'FE2/CharacterEditorFE2'),
  getItem('Character Growth Rate Editor (FE2) -', 'FE2/CharacterGrowthRateEditorFE2'),
  getItem('Character Resistance Editor (FE2) -', 'FE2/CharacterResistanceEditorFE2'),
  getItem('Class Editor (FE2) -', 'FE2/ClassEditorFE2'),
  getItem('Class Movement Editor (FE2) -', 'FE2/ClassMovementEditorFE2'),
  getItem('Class Resistance Editor (FE2) -', 'FE2/ClassResistanceEditorFE2'),
  getItem('Item Accuracy Editor (FE2) -', 'FE2/ItemAccuracyEditorFE2'),
  getItem('Item Critical Editor (FE2) -', 'FE2/ItemCriticalEditorFE2'),
  getItem('Item Effectiveness Editor (FE2) -', 'FE2/ItemEffectivenessEditorFE2'),
  getItem('Item HP Cost Editor (FE2) -', 'FE2/ItemHPCostEditorFE2'),
  getItem('Item Might Editor (FE2) -', 'FE2/ItemMightEditorFE2'),
  getItem('Item Weight Editor (FE2) -', 'FE2/ItemWeightEditorFE2'),
]);

export default FE2Items;
