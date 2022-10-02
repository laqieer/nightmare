import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE10() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE10', state: { buffer } }}>
        <Alert
          message="FE10: Radiant Dawn"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
