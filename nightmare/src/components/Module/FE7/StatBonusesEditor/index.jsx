import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  StatBonusPointers,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE7StatBonusesEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xFFF2A0;
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
        message="FE7 Stat Bonuses Editor by SpyroDi (please consult Stat Bonuses.txt)"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={StatBonusPointers.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={StatBonusPointers}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Bonus"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="STR/MGC Bonus"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SKL Bonus"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SPD Bonus"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="DEF Bonus"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="MDF Bonus"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="LCK Bonus"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
