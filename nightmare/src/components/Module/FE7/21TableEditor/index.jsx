import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE721TableEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE721TableEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xca3798;
  const size = 64;
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
        message="Chapter 20/21 Table Editor by Fire Blazer/Keriku"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE721TableEditorEntries}
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
