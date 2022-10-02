import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3ChestItemEditor2Entries, FE3Items,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE3ChestItemEditor2() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x60FCC;
  const size = 6;
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
        message="Chest Item Editor 2"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3ChestItemEditor2Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3ChestItemEditor2Entries}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="Always 0"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Always 0"
        offset={1}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Always 16"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Item"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Always 0"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
