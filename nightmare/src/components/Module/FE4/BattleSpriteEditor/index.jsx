import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4BattleSpriteEditorEntries, FE4Classes, FE4BattleSpriteWeaponType, FE4CharacterNumbers,
  FE4Gender,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4BattleSpriteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x178AC9;
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
        message="FE4 Battle Sprite Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4BattleSpriteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4BattleSpriteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4BattleSpriteWeaponType}
        view={view}
        name="Weapon Type"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterNumbers}
        view={view}
        name="Char"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={3}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Battle Animation"
        offset={4}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Battle Sprite"
        offset={5}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Secondary Sprite"
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
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class 2"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4BattleSpriteWeaponType}
        view={view}
        name="Weapon Type"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterNumbers}
        view={view}
        name="Char"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={11}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Battle Animation"
        offset={12}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Battle Sprite"
        offset={13}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Secondary Sprite"
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
