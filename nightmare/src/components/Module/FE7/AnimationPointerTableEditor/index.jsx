import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  AnimationPointerTableEditor,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputText from '../../../Input/InputText';
import InputHex from '../../../Input/InputHex';

export default function FE7AnimationPointerTableEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xE00008;
  const size = 32;
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
        message="FE 7 Animation Pointer Table Editor by Keriku, updated by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={AnimationPointerTableEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={AnimationPointerTableEditor}
        />
      </div>
      <InputText
        length={12}
        view={view}
        name="Header"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Mode divider"
        offset={12}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Frame data."
        offset={16}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Right X Y Position"
        offset={20}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Left X Y Position"
        offset={24}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Palette"
        offset={28}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
