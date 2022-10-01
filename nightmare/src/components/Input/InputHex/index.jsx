import { Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DataLength, read, write } from '../../util';

const { Text } = Typography;

export default function InputHex(props) {
  const [value, setValue] = useState('');
  const {
    view, name, offset, type,
  } = props;

  const currentValue = view == null ? 0 : read(view, offset, type);
  const [oldValue, setOldValue] = useState(currentValue);
  if (oldValue !== currentValue) {
    setOldValue(currentValue);
  }

  return (
    <Space>
      <Text
        disabled={view == null}
      >
        {`${name}:${view == null ? '' : ` 0x${oldValue.toString(16)} →`}`}
      </Text>
      <Input
        disabled={view == null}
        allowClear
        maxLength={2 * DataLength[type]}
        prefix="0x"
        value={value}
        onChange={(e) => {
          const input = e.currentTarget.value;
          if (/^[0-9a-f]+$/.test(input) || input === '') {
            setValue(input);
          }
        }}
        onPressEnter={(e) => {
          const v = parseInt(e.target.value, 16);
          write(view, offset, type, v);
          setOldValue(v);
        }}
        {...props}
      />
    </Space>
  );
}

InputHex.propTypes = {
  view: PropTypes.instanceOf(DataView),
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
};

InputHex.defaultProps = {
  view: null,
};
