import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3DeathQuoteEditorEntries, FE3Names,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE3DeathQuoteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x59185;
  const size = 4;
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
        message="Death Quote Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3DeathQuoteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3DeathQuoteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Name"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Flag Check"
        offset={1}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Dialogue (2 bytes)"
        offset={2}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
