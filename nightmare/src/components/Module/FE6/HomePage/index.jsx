import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE6HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Alert
        message="FE6: Binding Blade"
        type="info"
      />
      <Link to={{ pathname: 'CharacterEditor', state: { buffer } }}>Character Editor</Link>
      <Link to={{ pathname: 'ClassEditor', state: { buffer } }}>Class Editor</Link>
    </Space>
  );
}
