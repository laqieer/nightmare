import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8SummoneditorEntries, Classlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Summoneditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x7ADD0;
  const size = 1;
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
        message="FE8 Summon editor by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8SummoneditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8SummoneditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Classlist}
        view={view}
        name="Class"
        offset={0}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
