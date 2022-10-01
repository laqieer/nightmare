import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Standinglist, Size,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Standingmapspriteeditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8AF880;
  const size = 8;
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
        message="FE8 Standing map sprite editor by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Standinglist.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Standinglist}
        />
      </div>
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
