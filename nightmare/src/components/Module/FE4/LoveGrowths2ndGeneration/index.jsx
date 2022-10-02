import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4Love2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE4LoveGrowths2ndGeneration() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x389F1;
  const size = 23;
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
        message="FE4 Love Growths -  2nd Generation"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4Love2.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4Love2}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="Celice"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Shannan"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Roldolban"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Asaello"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Leaf"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Johan"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Sharlow"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Hawk"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Tristan"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Fin"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Dimna"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Hannibal"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Aless"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Amid"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Oifaye"
        offset={14}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Johalva"
        offset={15}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skasaher"
        offset={16}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Faval"
        offset={17}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Corple"
        offset={18}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Sety"
        offset={19}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Delmud"
        offset={20}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Lester"
        offset={21}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Arthur"
        offset={22}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
