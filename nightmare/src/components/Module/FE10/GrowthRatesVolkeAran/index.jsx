import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE10GrowthRates21,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE10GrowthRatesVolkeAran() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1171;
  const size = 80;
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
        message="FE10 Growth Rates-Volke, Aran"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE10GrowthRates21.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE10GrowthRates21}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Stat Addition"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="STR Stat Addition"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="MGC Stat Addition"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SKL Stat Addition"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SPD Stat Addition"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="LUC Stat Addition"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="DEF Stat Addition"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="RES Stat Addition"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR Growth"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MGC Growth"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Growth"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Growth"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="LCK Growth"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Growth"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="RES Growth"
        offset={17}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
