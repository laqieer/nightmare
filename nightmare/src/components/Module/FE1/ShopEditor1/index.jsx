import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1ShopEditor1Entries, Itemlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE1ShopEditor1() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x2E6FA;
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
        message="FE1 Shop Editor 1"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1ShopEditor1Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1ShopEditor1Entries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item 2"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item 3"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item 4"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item 5"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item 6"
        offset={5}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
