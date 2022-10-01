import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  PortraitEditor, EyeControl,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7PortraitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xC965A0;
  const size = 28;
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
        message="FE7 Portrait Editor by flyingace24"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={PortraitEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={PortraitEditor}
        />
      </div>
      <InputHex
        type={DataType.U32}
        view={view}
        name="Main Portrait Pointer"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Mini Portrait Pointer"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Palette Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Mouth Pointer"
        offset={12}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Generic Portrait Pointer (usually 00s)"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mouth X-Position"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mouth Y-Position"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Eye X-Position"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Eye Y-Position"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={EyeControl}
        view={view}
        name="Eye Control"
        offset={24}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
