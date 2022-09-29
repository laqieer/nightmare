import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE6Chapter17AShopEventsEntries, ShopType,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6Chapter17AShopEvents() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x668D48;
  const size = 12;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
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
        message="Chapter 17A Shop Events by flyingace24"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE6Chapter17AShopEventsEntries}
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
