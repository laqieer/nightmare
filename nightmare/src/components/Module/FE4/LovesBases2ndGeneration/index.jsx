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

export default function FE4LovesBases2ndGeneration() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x387C8;
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
        message="FE4 Loves Bases -  2nd Generation"
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
        type={DataType.U8}
        view={view}
        name="Celice * 10"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Shannan * 10"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Roldolban * 10"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Asaello * 10"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Leaf * 10"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Johan * 10"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sharlow * 10"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hawk * 10"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tristan * 10"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fin * 10"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Dimna * 10"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hannibal * 10"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Aless * 10"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Amid * 10"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Oifaye * 10"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Johalva * 10"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skasaher * 10"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Faval * 10"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Corple * 10"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sety * 10"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Delmud * 10"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Lester * 10"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Arthur * 10"
        offset={22}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
