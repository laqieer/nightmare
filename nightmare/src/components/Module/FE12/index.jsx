import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE12() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE12', state: { buffer } }}>
        <Alert
          message="FE12: New Mystery of the Emblem"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
