import { Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DataType, read, write } from '../../util';

const { Text } = Typography;

export default function InputHexArray(props) {
  const [value, setValue] = useState('');
  const {
    view, name, offset, length,
  } = props;

  return (
    <Space>
      <Text
        disabled={view == null}
      >
        {`${name}:${view == null ? '' : ` ${read(view, offset, DataType.HEXA, length)} →`}`}
      </Text>
      <Input
        disabled={view == null}
        allowClear
        value={value}
        maxLength={3 * length - 1}
        onChange={(e) => {
          const input = e.currentTarget.value;
          if (input === '' || (/^[0-9a-f ]+$/.test(input) && !/[0-9a-f]{3,}/.test(input) && !/ {2,}/.test(input) && !/ [0-9a-f] /.test(input) && !/^[0-9a-f] /.test(input))) {
            setValue(input.trimStart());
          }
        }}
        onPressEnter={(e) => write(view, offset, DataType.HEXA, e.target.value.trim())}
        {...props}
      />
    </Space>
  );
}

InputHexArray.propTypes = {
  view: PropTypes.instanceOf(DataView),
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

InputHexArray.defaultProps = {
  view: null,
};
