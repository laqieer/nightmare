import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ShopEditorChapter3Entries, FE4PlayerEquipment,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ShopEditorChapter3() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x6D8D3;
  const size = 5;
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
        message="FE4 Shop Editor - Chapter 3"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ShopEditorChapter3Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ShopEditorChapter3Entries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 2"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 3"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 4"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 5"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
