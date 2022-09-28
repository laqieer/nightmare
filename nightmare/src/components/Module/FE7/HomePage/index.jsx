import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE7HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Alert
        message="FE7: Blazing Sword"
        type="info"
      />
      <Link to={{ pathname: 'AnimationPointerTableEditor', state: { buffer } }}>Animation Pointer Table Editor</Link>
      <Link to={{ pathname: 'AnimationReference', state: { buffer } }}>Animation Reference</Link>
      <Link to={{ pathname: 'BattleAnimationEditor', state: { buffer } }}>Battle Animation Editor</Link>
      <Link to={{ pathname: 'CopyofCustomBattleAnimationEditor', state: { buffer } }}>Copy of Custom Battle Animation Editor</Link>
      <Link to={{ pathname: 'CustomBattleAnimationEditor', state: { buffer } }}>Custom Battle Animation Editor</Link>
      <Link to={{ pathname: 'CustomItemAnimationList', state: { buffer } }}>Custom Item Animation List</Link>
      <Link to={{ pathname: 'BattlePaletteReference', state: { buffer } }}>Battle Palette Reference</Link>
    </Space>
  );
}
