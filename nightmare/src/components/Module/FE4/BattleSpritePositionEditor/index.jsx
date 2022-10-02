import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  BattleSpritePositionEditor, FE4Classes, FE4BattleSpriteWeaponType, BattlePositions1,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4BattleSpritePositionEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x17EAFB;
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
        message="FE4 Battle Sprite Position Editor by Lamia"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={BattleSpritePositionEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={BattleSpritePositionEditor}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
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
        options={BattlePositions1}
        view={view}
        name="Position"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4BattleSpriteWeaponType}
        view={view}
        name="Weapon Type"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions1}
        view={view}
        name="Position"
        offset={5}
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4BattleSpriteWeaponType}
        view={view}
        name="Weapon Type"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions1}
        view={view}
        name="Position"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4BattleSpriteWeaponType}
        view={view}
        name="Weapon Type"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions1}
        view={view}
        name="Position"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
