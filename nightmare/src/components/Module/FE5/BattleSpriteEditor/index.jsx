import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5BattleSpriteEditorEntries, ClassList, WeaponTypes, CharacterList,
  FE5Gender, Animations,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE5BattleSpriteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x055FF6;
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
        message="FE5 Battle Sprite Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5BattleSpriteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5BattleSpriteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponTypes}
        view={view}
        name="Weapon Type"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5Gender}
        view={view}
        name="Gender"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Animations}
        view={view}
        name="Animation"
        offset={4}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Horse (if mounted) / Body (on foot)"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Body (if mounted) / Hair"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Palette"
        offset={7}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
