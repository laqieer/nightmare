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

export default function FE4LoveGrowths1stGeneration() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3896A;
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
        message="FE4 Love Growths - 1st Generation"
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
        name="Sigurd"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Noish"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Alec"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Arden"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Fin"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Cuan"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Midale"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Levin"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Holyn"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Azel"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Jamuka"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Claude"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Beowulf"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Lex"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Dew"
        offset={14}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
