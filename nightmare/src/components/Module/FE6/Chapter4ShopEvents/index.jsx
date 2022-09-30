import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE6Chapter4ShopEventsEntries, ShopType,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6Chapter4ShopEvents() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x667A38;
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
        message="Chapter 4 Shop Events by flyingace24"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE6Chapter4ShopEventsEntries}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Shop Pointer"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Shop X Coordinate"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Shop Y Coordinate"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShopType}
        view={view}
        name="Shop Type"
        offset={10}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
