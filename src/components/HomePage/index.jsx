import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Empty, Space } from 'antd';
import Logo from '../../logo.png';

export default function HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
    >
      <Empty
        description={false}
        image={Logo}
      />
      <Link to={{ pathname: 'FE6', state: { buffer } }}>FE6: Binding Blade</Link>
      <Link to={{ pathname: 'FE7', state: { buffer } }}>FE7: Blazing Sword</Link>
    </Space>
  );
}
