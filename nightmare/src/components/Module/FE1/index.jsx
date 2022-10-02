import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE1() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE1', state: { buffer } }}>
        <Alert
          message="FE1: Shadow Dragon and the Blade of Light"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
