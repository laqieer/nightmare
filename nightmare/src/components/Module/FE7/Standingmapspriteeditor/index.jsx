import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7StandingmapspriteeditorEntries, Size,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7Standingmapspriteeditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xC99700;
  const size = 8;
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
        message="FE7 Standing map sprite editor by Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7StandingmapspriteeditorEntries}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Size}
        view={view}
        name="Size"
        offset={2}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Poiner to graphics"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
