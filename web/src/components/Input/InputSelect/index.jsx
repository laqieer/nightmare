import { Select } from 'antd';
import React from 'react';

export default function InputSelect(props) {
  return (
    <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Search to Select"
      optionFilterProp="label"
      filterOption={(input, option) => option.label.includes(input)}
      {...props}
    />
  );
}
