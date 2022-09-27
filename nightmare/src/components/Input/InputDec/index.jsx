import { InputNumber, Space, Typography } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { DataRange, read, write } from '../../util';

const { Text } = Typography;

export default function InputDec(props) {
  const {
    view, name, offset, type,
  } = props;

  return (
    <Space>
      <Text
        disabled={view == null}
      >
        {`${name}:${view == null ? '' : ` ${read(view, offset, type)} →`}`}
      </Text>
      <InputNumber
        disabled={view == null}
        min={DataRange[type][0]}
        max={DataRange[type][1]}
        onPressEnter={(e) => write(view, offset, type, parseInt(e.target.value, 10))}
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
