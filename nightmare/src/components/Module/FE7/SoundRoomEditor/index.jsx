import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7SoundRoomEditorEntries, Music,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE7SoundRoomEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xCE4D28;
  const size = 16;
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
        message="FE7 Sound Room Editor by Blazer"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7SoundRoomEditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Music}
        view={view}
        name="Song"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Song Length (0x30=~1 Second)"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="ASM Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Text Pointer"
        offset={12}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
