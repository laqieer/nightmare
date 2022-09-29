import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  TurnMenuFE7, MenuTextColors,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7TurnMenutable() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xB9574C;
  const size = 36;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
  } catch (error) {
    view = null;
  }

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Alert
        message="Turn Menu table by Crazycolorz5"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={TurnMenuFE7}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Unknown Pointer (not ASM code)"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={4}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Description"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MenuTextColors}
        view={view}
        name="Text Color"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Command ID? (No effect?)"
        offset={9}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Unknown (Always 0?)"
        offset={10}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Usability Pointer"
        offset={12}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Unknown (guide?)"
        offset={16}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Routine/Effect"
        offset={20}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Unknown (zero)"
        offset={24}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Unknown Pointer (weapon rank?)"
        offset={28}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Unknown Pointer (weapon rank?)"
        offset={32}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
