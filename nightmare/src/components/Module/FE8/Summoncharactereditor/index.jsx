import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8SummoncharactereditorEntries, Characterlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Summoncharactereditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x95f5a4;
  const size = 2;
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
        message="Summon character editor by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8SummoncharactereditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8SummoncharactereditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characterlist}
        view={view}
        name="Summoner"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characterlist}
        view={view}
        name="To summon"
        offset={1}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
