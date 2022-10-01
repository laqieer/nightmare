import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Classlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE8Mapspritepointertableeditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9A2E00;
  const size = 8;
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
        message="FE 8 Map sprite pointer table editor by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Classlist.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Classlist}
        />
      </div>
      <InputHex
        type={DataType.U32}
        view={view}
        name="Animation pointer"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Another pointer"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
