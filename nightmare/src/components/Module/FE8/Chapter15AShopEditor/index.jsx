import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8Chapter15AShopEditorEntries, ItemList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Chapter15AShopEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9ED860;
  const size = 26;
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
        message="Chapter 15A Shop Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8Chapter15AShopEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8Chapter15AShopEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 2"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 3"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 4"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 5"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 6"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 7"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 8"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 9"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 10"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 11"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 12"
        offset={22}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
