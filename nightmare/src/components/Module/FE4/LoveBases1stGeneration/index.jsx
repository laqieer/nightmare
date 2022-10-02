import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4Love1,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE4LoveBases1stGeneration() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x38741;
  const size = 15;
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
        message="FE4 Love Bases - 1st Generation"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4Love1.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4Love1}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="Sigurd * 10"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Noish * 10"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Alec * 10"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Arden * 10"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Fin * 10"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Cuan * 10"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Midale * 10"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Levin * 10"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Holyn * 10"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Azel * 10"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Jamuka * 10"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Claude * 10"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Beowulf * 10"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Lex * 10"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Dew * 10"
        offset={14}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
