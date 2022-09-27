import { Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DataType, read, write } from '../../util';

const { Text } = Typography;

export default function InputText(props) {
  const [value, setValue] = useState('');
  const {
    view, name, offset, length,
  } = props;

  return (
    <Space>
      <Text
        disabled={view == null}
      >
        {`${name}:${view == null ? '' : ` ${read(view, offset, DataType.TEXT, length)} →`}`}
      </Text>
      <Input
        disabled={view == null}
        allowClear
        value={value}
        maxLength={length - 1}
        onChange={(e) => {
          const input = e.currentTarget.value;
          if (/^[\x20-\x7F]*$/.test(input) || input === '') {
            setValue(input);
          }
        }}
        onPressEnter={(e) => write(view, offset, DataType.TEXT, e.target.value)}
        {...props}
      />
    </Space>
  );
}

InputText.propTypes = {
  view: PropTypes.instanceOf(DataView),
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

InputText.defaultProps = {
  view: null,
};
