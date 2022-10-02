import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3AstralShardList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE3AstralShardEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1BFB7;
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
        message="FE3 Astral Shard Editor by Camus"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3AstralShardList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3AstralShardList}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="Strength Bonus"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Defense Bonus"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skill Bonus"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Speed Bonus"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Luck Bonus"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Magic Def. Bonus"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Bonus"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Weapon Skill Bonus"
        offset={7}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
