import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  CharacterGrowthsList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE1GrowthRatesEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3E25A;
  const size = 7;
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
        message="FE1 Growth Rates Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={CharacterGrowthsList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={CharacterGrowthsList}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Growth"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Wpn Lvl Growth"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Growth"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
