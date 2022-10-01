import { Select, Space, Typography } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { read, write } from '../../util';

const { Text } = Typography;

export default function InputDropbox(props) {
  const {
    isHex, reference, view, name, offset, type, options, ...propsToPass
  } = props;

  const currentValue = view == null ? 0 : read(view, offset, type);
  const [oldValue, setOldValue] = useState(currentValue);
  if (oldValue !== currentValue) {
    setOldValue(currentValue);
  }
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
        options={options}
        placeholder="Search to Select"
        optionFilterProp="label"
        filterOption={(input, option) => option.label.includes(input)}
        onSelect={(value) => {
          write(view, offset, type, value);
          setOldValue(value);
        }}
        {...propsToPass}
      />
      {reference === '' || view == null ? ''
        : (
          <Link
            to={{
              pathname: `../${reference}?id=${oldValue}`,
              state: view.buffer,
            }}
          >
            ➤
          </Link>
        )}
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
  reference: PropTypes.string,
};

InputDropbox.defaultProps = {
  view: null,
  isHex: false,
  reference: '',
};
