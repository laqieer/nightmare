import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE6() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE6', state: { buffer } }}>
        <Alert
          message="FE6: Binding Blade"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
