import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5BattleAnimationEditorEntries, ClassList, WeaponType, FE5CharacterList,
  Gender, BattleAnimations,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE5BattleAnimationEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x561F6;
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
        message="FE5 Battle Animation Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5BattleAnimationEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5BattleAnimationEditorEntries}
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
        options={WeaponType}
        view={view}
        name="Weapon Type"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Character (for custom)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Gender}
        view={view}
        name="Gender"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Battle Sprite"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattleAnimations}
        view={view}
        name="Battle Animation"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Secondary Sprite"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Palette"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponType}
        view={view}
        name="Weapon Type"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Character (for custom)"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Gender}
        view={view}
        name="Gender"
        offset={11}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Battle Sprite"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattleAnimations}
        view={view}
        name="Battle Animation"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Secondary Sprite"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
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
