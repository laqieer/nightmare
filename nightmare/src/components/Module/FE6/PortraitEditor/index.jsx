import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE6PortraitEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE6PortraitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x66075C;
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
        message="FE6 Portrait Editor by flyingace24"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE6PortraitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE6PortraitEditorEntries}
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
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mouth X-Position"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mouth Y-Position"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={15}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
