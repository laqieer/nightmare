import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE8() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE8', state: { buffer } }}>
        <Alert
          message="FE8: The Sacred Stones"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
