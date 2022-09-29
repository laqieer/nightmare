import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE6ItemEditorEntries, ItemList, WeaponType, WeaponAbility1,
  WeaponAbility2, WeaponRanges, WeaponRank, IconList,
  WeaponEffect,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE6ItemEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x60B648;
  const size = 32;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
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
        message="FE6 Item Editor by SpyroDi, modified by Arch"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE6ItemEditorEntries}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Item Name"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Item Description"
        offset={2}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Use Item Description"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Item Number"
        offset={6}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponType}
        view={view}
        name="Weapon Type"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponAbility1}
        view={view}
        name="Weapon Ability 1"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponAbility2}
        view={view}
        name="Weapon Ability 2"
        offset={9}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Stat Bonuses Pointer"
        offset={12}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Effectiveness Pointer"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Durability"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Power"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hit%"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical%"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponRanges}
        view={view}
        name="Minimum - Maximum Range"
        offset={25}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="Cost Per Use (0 = Unsellable)"
        offset={26}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Weapon Rank"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={IconList}
        view={view}
        name="Item Icon #"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Staff/Use Effect"
        offset={30}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponEffect}
        view={view}
        name="Weapon Effect"
        offset={31}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
