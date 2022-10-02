import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Alert, Space } from 'antd';

export default function FE4() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: '/FE4', state: { buffer } }}>
        <Alert
          message="FE4: Genealogy of the Holy War"
          type="info"
        />
      </Link>
      <Outlet context={[buffer]} />
    </Space>
  );
}
