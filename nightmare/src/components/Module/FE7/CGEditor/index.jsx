import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7CGEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE7CGEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xCED888;
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
        message="FE7 CG Editor by Fire Blazer/Keriku"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE7CGEditorEntries}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Graphics Pointer"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="TSA Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Palette Pointer"
        offset={12}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
