import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5DeathQuoteEditorEntries, Chapters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5DeathQuoteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x065BC9;
  const size = 7;
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
        message="FE5 Death Quote Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5DeathQuoteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5DeathQuoteEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chapters}
        view={view}
        name="Chapter"
        offset={2}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="ID"
        offset={3}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Pointer"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
