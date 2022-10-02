import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  BattleSpritePositionEditor2, FE4WeaponList, BattlePositions2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4BattleSpritePositionEditor2() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1984E3;
  const size = 18;
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
        message="FE4 Battle Sprite Position Editor 2 by Lamia"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={BattleSpritePositionEditor2.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={BattleSpritePositionEditor2}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Weapon"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Weapon"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Weapon"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Weapon"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Weapon"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Weapon"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={BattlePositions2}
        view={view}
        name="Position"
        offset={16}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
