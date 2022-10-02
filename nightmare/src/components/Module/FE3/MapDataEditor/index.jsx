import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Chapters, FE3Classes, Map,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE3MapDataEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x50200;
  const size = 8;
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
        message="Map Data Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Chapters.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Chapters}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="Tileset"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Color"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X size"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y size"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Enemy class 1"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Enemy class 2"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Enemy class 3"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Map}
        view={view}
        name="Indoor/Outdoor"
        offset={7}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
