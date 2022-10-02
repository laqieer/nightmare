import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ShopEditorChapter10Entries, FE4PlayerEquipment,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ShopEditorChapter10() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x308596;
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
        message="FE4 Shop Editor - Chapter 10"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ShopEditorChapter10Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ShopEditorChapter10Entries}
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 6"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 7"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
