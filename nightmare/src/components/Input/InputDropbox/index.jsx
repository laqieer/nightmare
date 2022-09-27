import { Select, Space, Typography } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { read, write } from '../../util';

const { Text } = Typography;

export default function InputDropbox(props) {
  const {
    view, name, offset, type, options, isHex,
  } = props;
  const { isHex: _, ...propsToPass } = props;

  const oldValue = read(view, offset, type);
  const oldOption = options.find((opt) => opt.value === oldValue);
  const oldValueLabel = isHex ? `0x${oldValue.toString(16)}` : oldValue;
  const oldLabel = oldOption === undefined ? oldValueLabel : oldOption.label;

  return (
    <Space>
      <Text
        disabled={view == null}
      >
        {`${name}:${view == null ? '' : ` ${oldLabel} →`}`}
      </Text>
      <Select
        disabled={view == null}
        showSearch
        placeholder="Search to Select"
        optionFilterProp="label"
        filterOption={(input, option) => option.label.includes(input)}
        onSelect={(value) => write(view, offset, type, value)}
        {...propsToPass}
      />
    </Space>
  );
}

InputDropbox.propTypes = {
  view: PropTypes.instanceOf(DataView),
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  isHex: PropTypes.bool,
};

InputDropbox.defaultProps = {
  view: null,
  isHex: false,
};
