import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8Ch17BReinforcementEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE8Ch17BReinforcementEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9EAE7C;
  const size = 12;
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
        message="FE8 Ch 17B Reinforcement Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8Ch17BReinforcementEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8Ch17BReinforcementEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN"
        offset={2}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Pointer?"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Starts Turn # (Turn # + 1)"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ends Turn # (Turn # + 1)"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN"
        offset={10}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
