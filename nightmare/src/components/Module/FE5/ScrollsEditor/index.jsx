import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5ScrollsEditorEntries, FE5ItemData,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE5ScrollsEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x40254;
  const size = 10;
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
        message="FE5 Scrolls Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5ScrollsEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5ScrollsEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Item Number"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Growth Bonus"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="STR Growth Bonus"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="MGC Growth Bonus"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SKL Growth Bonus"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SPD Growth Bonus"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="DEF Growth Bonus"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="BLD Growth Bonus"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="LCK Growth Bonus"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="MOV Growth Bonus"
        offset={9}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
