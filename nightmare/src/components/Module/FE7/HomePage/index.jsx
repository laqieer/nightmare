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
      <Link to={{ pathname: 'AnimationPointerTable', state: { buffer } }}>Animation Pointer Table</Link>
    </Space>
  );
}
