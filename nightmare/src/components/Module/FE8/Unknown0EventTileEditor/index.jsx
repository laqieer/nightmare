import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8Unknown0EventTileEditorEntries, TypeList, ItemList, TypeList2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE8Unknown0EventTileEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9EB548;
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
        message="FE8 Unknown0 Event Tile Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8Unknown0EventTileEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8Unknown0EventTileEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={TypeList}
        view={view}
        name="Type?"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Content/Last Pointer Piece"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Rest of Pointer (if any)"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="X Coordinate"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Y Coordinate"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={TypeList2}
        view={view}
        name="Type"
        offset={10}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
