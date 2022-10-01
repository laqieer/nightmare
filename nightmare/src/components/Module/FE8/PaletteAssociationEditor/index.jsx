import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8PaletteAssociationEditorEntries, PaletteList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8PaletteAssociationEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x95EEA4;
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
        message="FE8 Palette Association Editor by Zeld and Zephyr"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8PaletteAssociationEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8PaletteAssociationEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="Trainee Palette"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="Base Palette"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="Second Base Palette (For Trainees)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="First Promotion Palette"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="Second Promotion Palette"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="Third Promotion Palette"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="BattlePaletteReference"
        options={PaletteList}
        view={view}
        name="Fourth Promotion Palette"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
