import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ShopPointers, ItemList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6CustomShopEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x818500;
  const size = 32;
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
        message="Custom Shop Editor by flyingace24"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={ShopPointers}
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item"
        offset={30}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
