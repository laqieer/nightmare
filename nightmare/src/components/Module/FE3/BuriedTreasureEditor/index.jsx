import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3BuriedTreasureEditorEntries, Chapters, FE3Items,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE3BuriedTreasureEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x621DB;
  const size = 7;
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
        message="Buried Treasure Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3BuriedTreasureEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3BuriedTreasureEditorEntries}
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
      <InputDec
        type={DataType.U8}
        view={view}
        name="Coordinate X"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Coordinate Y"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unkown"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Item"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Event Flag"
        offset={5}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
