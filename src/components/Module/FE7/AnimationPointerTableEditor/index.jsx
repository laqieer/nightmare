import { Space, Alert } from 'antd';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import InputText from '../../../Input/InputText';
import InputHex from '../../../Input/InputHex';
import InputSelect from '../../../Input/InputSelect';
import { DataType } from '../../../util';
import { AnimationPointerTable } from '../options';

export default function FE7AnimationPointerTableEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xE00008;
  const size = 32;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
  } catch (error) {
    view = null;
  }

  return (
    <Space
      direction="vertical"
    >
      <Alert
        message="FE7 Animation Pointer Table Editor"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={AnimationPointerTable}
      />
      <InputText
        view={view}
        name="Header"
        offset={0}
        length={12}
      />
      <InputHex
        view={view}
        name="Mode divider"
        offset={12}
        type={DataType.U32}
      />
      <InputHex
        view={view}
        name="Frame data"
        offset={16}
        type={DataType.U32}
      />
      <InputHex
        view={view}
        name="Right X Y Position"
        offset={20}
        type={DataType.U32}
      />
      <InputHex
        view={view}
        name="Left X Y Position"
        offset={24}
        type={DataType.U32}
      />
      <InputHex
        view={view}
        name="Palette"
        offset={28}
        type={DataType.U32}
      />
    </Space>
  );
}
