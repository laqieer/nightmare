import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5StatBonusesEditor,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE5CustomStatBonusesEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x187860;
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
        message="FE5 Custom Stat Bonuses Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5StatBonusesEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5StatBonusesEditor}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR Bonus"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MGC Bonus"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Bonus"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Bonus"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="LCK Bonus"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Bonus"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
