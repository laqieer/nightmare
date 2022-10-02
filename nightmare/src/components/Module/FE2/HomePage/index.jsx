import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Space } from 'antd';

export default function FE2HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: 'CharacterEditorFE2', state: { buffer } }}>Character Editor (FE2) -</Link>
      <Link to={{ pathname: 'CharacterGrowthRateEditorFE2', state: { buffer } }}>Character Growth Rate Editor (FE2) -</Link>
      <Link to={{ pathname: 'CharacterResistanceEditorFE2', state: { buffer } }}>Character Resistance Editor (FE2) -</Link>
      <Link to={{ pathname: 'ClassEditorFE2', state: { buffer } }}>Class Editor (FE2) -</Link>
      <Link to={{ pathname: 'ClassMovementEditorFE2', state: { buffer } }}>Class Movement Editor (FE2) -</Link>
      <Link to={{ pathname: 'ClassResistanceEditorFE2', state: { buffer } }}>Class Resistance Editor (FE2) -</Link>
      <Link to={{ pathname: 'ItemAccuracyEditorFE2', state: { buffer } }}>Item Accuracy Editor (FE2) -</Link>
      <Link to={{ pathname: 'ItemCriticalEditorFE2', state: { buffer } }}>Item Critical Editor (FE2) -</Link>
      <Link to={{ pathname: 'ItemEffectivenessEditorFE2', state: { buffer } }}>Item Effectiveness Editor (FE2) -</Link>
      <Link to={{ pathname: 'ItemHPCostEditorFE2', state: { buffer } }}>Item HP Cost Editor (FE2) -</Link>
      <Link to={{ pathname: 'ItemMightEditorFE2', state: { buffer } }}>Item Might Editor (FE2) -</Link>
      <Link to={{ pathname: 'ItemWeightEditorFE2', state: { buffer } }}>Item Weight Editor (FE2) -</Link>
    </Space>
  );
}
