import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7Deathquoteeditorpart2Entries, Characters, Chapters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE7Deathquoteeditorpart2() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xC9F2EC;
  const size = 16;
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
        message="Death quote editor part 2 by Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE7Deathquoteeditorpart2Entries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chapters}
        view={view}
        name="Chapter"
        offset={1}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text value"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Pointer to event(Convo is 00)"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Trigger ID"
        offset={12}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
