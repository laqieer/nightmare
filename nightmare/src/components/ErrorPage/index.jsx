import { Alert, Result, Space } from 'antd';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Result
      status="error"
      title="Error"
      subTitle="Sorry, an unexpected error has occurred:"
      extra={(
        <Space
          direction="vertical"
        >
          <Alert
            description={error.message}
            message={error.statusText}
            type="error"
          />
          <Link to="/">Back Home</Link>
        </Space>
      )}
    />
  );
}
