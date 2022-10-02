import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3EventTileEditorEntries, Chapters, FE3Names, Restrictions,
  Building,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE3EventTileEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x61379;
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
        message="Event Tile Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3EventTileEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3EventTileEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="MapDataEditor"
        options={Chapters}
        view={view}
        name="Map Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Character that can visit it"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Coordinate X"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Coordinate Y"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Restrictions}
        view={view}
        name="Visit Restrictions"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Building}
        view={view}
        name="Building Type"
        offset={5}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Event Number (2 bytes)"
        offset={6}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Graphic Change after event (2 bytes)"
        offset={7}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
