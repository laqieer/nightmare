import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7PrologueSeizeEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE7PrologueSeizeEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xca05cc;
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
        message="Prologue Seize Editor by Fire Blazer/Keriku"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE7PrologueSeizeEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE7PrologueSeizeEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="Beginning of Code (???)"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Beginning of Code (???)"
        offset={1}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Beginning of Code (???)"
        offset={2}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Beginning of Code (???)"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Middle Code (???)"
        offset={4}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Middle Code (???)"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Middle Code (???)"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Middle Code (???)"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X Coordinate"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y Coordinate"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Event Code (0x0F Seize)"
        offset={10}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="End of String 00"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
