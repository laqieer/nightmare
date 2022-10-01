import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  SoundRoomDefinitions,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE8SoundRoomEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xA20E74;
  const size = 16;
  let view = null;

  try {
    view = new DataView(buffer, address + size * id, size);
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
        message="FE8 Sound Room Editor by Sme"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={SoundRoomDefinitions.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={SoundRoomDefinitions}
        />
      </div>
      <InputHex
        type={DataType.U32}
        view={view}
        name="Song ID"
        offset={0}
      />
      <InputDec
        type={DataType.U32}
        view={view}
        name="Song Length (Only Used for Shuffle Mode)"
        offset={4}
      />
      <InputDec
        type={DataType.U32}
        view={view}
        name="Song Unlock ASM Condition (Unused in FE8)"
        offset={8}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Song Name Text ID"
        offset={12}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
