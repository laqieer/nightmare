import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7StuffEntries, Weaponlevel, Stat,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE7Stuff() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x28e98;
  const size = 20;
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
        message="Stuff"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE7StuffEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Weaponlevel}
        view={view}
        name="Weapon level"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Stat}
        view={view}
        name="1st stat"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="1st stat bonus"
        offset={10}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="2nd and 1st stat difference"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="2nd stat bonus"
        offset={18}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
