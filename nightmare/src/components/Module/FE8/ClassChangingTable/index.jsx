import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  RandoClasses, ClassList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE8ClassChangingTable() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8D2060;
  const size = 12;
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
        message="FE8 Class Changing Table"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={RandoClasses.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={RandoClasses}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class 2"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class 3"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class 4"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class 5"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Class 1 Probability"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Class 2 Probability"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Class 3 Probability"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Class 4 Probability"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Class 5 Probability"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 11"
        offset={10}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 12"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
