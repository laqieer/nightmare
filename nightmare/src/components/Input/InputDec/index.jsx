import { InputNumber, Space, Typography } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DataRange, read, write } from '../../util';

const { Text } = Typography;

export default function InputDec(props) {
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
        {`${name}:${view == null ? '' : ` ${oldValue} →`}`}
      </Text>
      <InputNumber
        disabled={view == null}
        min={DataRange[type][0]}
        max={DataRange[type][1]}
        onPressEnter={(e) => {
          const v = parseInt(e.target.value, 10);
          write(view, offset, type, v);
          setOldValue(v);
        }}
        {...props}
      />
    </Space>
  );
}

InputDec.propTypes = {
  view: PropTypes.instanceOf(DataView),
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
};

InputDec.defaultProps = {
  view: null,
};
