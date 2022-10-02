import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3ClassList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE3ClassBasesEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x4126C;
  const size = 9;
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
        message="FE3 Class Bases Editor by Camus"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3ClassList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3ClassList}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Strength"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Skill"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Speed"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Movement"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Defense"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Resistance"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Experience"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Level"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={8}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
