import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4CustomBattlePaletteEditorEntries, FE4CharacterNumbers, FE4Classes,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4CustomBattlePaletteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1788AD;
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
        message="FE4 Custom Battle Palette Editor by Lamia"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4CustomBattlePaletteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4CustomBattlePaletteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={2}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Palette"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={6}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Palette"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={10}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Palette"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={14}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Palette"
        offset={15}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
