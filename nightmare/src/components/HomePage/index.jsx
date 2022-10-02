import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Empty, Space } from 'antd';
import Logo from '../../logo.png';

export default function HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Empty
        description={false}
        image={Logo}
      />
      <Link to={{ pathname: 'FE1', state: { buffer } }}>FE1: Shadow Dragon and the Blade of Light</Link>
      <Link to={{ pathname: 'FE2', state: { buffer } }}>FE2: Gaiden</Link>
      <Link to={{ pathname: 'FE3', state: { buffer } }}>FE3: Mystery of the Emblem</Link>
      <Link to={{ pathname: 'FE4', state: { buffer } }}>FE4: Genealogy of the Holy War</Link>
      <Link to={{ pathname: 'FE5', state: { buffer } }}>FE5: Thracia 776</Link>
      <Link to={{ pathname: 'FE6', state: { buffer } }}>FE6: Binding Blade</Link>
      <Link to={{ pathname: 'FE7', state: { buffer } }}>FE7: Blazing Sword</Link>
      <Link to={{ pathname: 'FE8', state: { buffer } }}>FE8: The Sacred Stones</Link>
      <Link to={{ pathname: 'FE10', state: { buffer } }}>FE10: Radiant Dawn</Link>
      <Link to={{ pathname: 'FE11', state: { buffer } }}>FE11: Shadow Dragon</Link>
      <Link to={{ pathname: 'FE12', state: { buffer } }}>FE12: New Mystery of the Emblem</Link>
    </Space>
  );
}
