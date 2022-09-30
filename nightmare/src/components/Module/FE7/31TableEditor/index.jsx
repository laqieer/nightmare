import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE731TableEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE731TableEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xca5f10;
  const size = 64;
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
        message="Chapter 29/31 Table Editor by Fire Blazer/Keriku"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE731TableEditorEntries}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Turn Count Events"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Character-Related Events"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Location-Based Events"
        offset={8}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Other (Unknown) Events"
        offset={12}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Ballista Data (Eliwood)"
        offset={16}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Ballista Data (Hector)"
        offset={20}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Enemy Unit Data (Eliwood Normal)"
        offset={24}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Enemy Unit Data (Eliwood Hard)"
        offset={28}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Enemy Unit Data (Hector Normal)"
        offset={32}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Enemy Unit Data (Hector Hard)"
        offset={36}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Player Unit Data (Eliwood Normal)"
        offset={40}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Player Unit Data (Eliwood Hard)"
        offset={44}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Player Unit Data (Hector Normal)"
        offset={48}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Player Unit Data (Hector Hard)"
        offset={52}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Chapter Beginning Scene"
        offset={56}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Chapter End Scene"
        offset={60}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
