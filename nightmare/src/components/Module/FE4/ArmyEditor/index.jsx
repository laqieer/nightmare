import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ArmyEditorEntries, FE4CharacterNumbers,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4ArmyEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1C274;
  const size = 16;
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
        message="FE4 Army Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ArmyEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ArmyEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Char no 1"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Leader"
        offset={4}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Squad and Army"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unit number"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Char no 2"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Leader"
        offset={12}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Squad and Army"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unit number"
        offset={15}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
