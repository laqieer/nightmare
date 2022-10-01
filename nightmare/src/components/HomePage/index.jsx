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
      <Link to={{ pathname: 'FE6', state: { buffer } }}>FE6: Binding Blade</Link>
      <Link to={{ pathname: 'FE7', state: { buffer } }}>FE7: Blazing Sword</Link>
      <Link to={{ pathname: 'FE8', state: { buffer } }}>FE8: The Sacred Stones</Link>
    </Space>
  );
}
