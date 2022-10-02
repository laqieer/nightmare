import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Characterlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE2CharacterGrowthRateEditorFE2() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x24E3D;
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
        message="Character Growth Rate Editor (FE2) - By VincentASM - V 0.1"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Characterlist.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Characterlist}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defence"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP"
        offset={5}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
