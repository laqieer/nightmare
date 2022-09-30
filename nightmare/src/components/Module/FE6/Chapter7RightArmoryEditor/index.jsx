import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE6Chapter7RightArmoryEditorEntries, ItemList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6Chapter7RightArmoryEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x66A85E;
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
        message="Chapter 7 Right Armory Editor by flyingace24"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE6Chapter7RightArmoryEditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={10}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
