import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE2() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE2', state: { buffer } }}>
        <Alert
          message="FE2: Gaiden"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
