import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7LuckCapEditorP2Entries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE7LuckCapEditorP2() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x29a5e;
  const size = 5;
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
        message="FE7 Luck Cap Editor [P2] by Zeld"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7LuckCapEditorP2Entries}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Cap #1"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Cap #2"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
