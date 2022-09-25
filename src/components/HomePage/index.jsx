import React from 'react';
import { Empty } from 'antd';
import Logo from '../../logo.png';

export default function HomePage() {
  return (
    <Empty
      description={false}
      image={Logo}
    />
  );
}
