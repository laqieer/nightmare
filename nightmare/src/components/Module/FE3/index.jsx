import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE3() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE3', state: { buffer } }}>
        <Alert
          message="FE3: Mystery of the Emblem"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
