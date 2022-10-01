import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8ItemEditorEntries, WeaponType, WeaponAbility1, WeaponAbility2,
  WeaponAbility3, WeaponRank, WeaponIcon, WeaponEffect,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE8ItemEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x809B34;
  const size = 36;
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
        message="FE8 Item Editor by SpyroDi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8ItemEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8ItemEditorEntries}
        />
      </div>
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
      <InputHex
        type={DataType.U8}
        view={view}
        name="Item Number"
        offset={6}
      />
      <InputDropbox
        isHex
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponAbility3}
        view={view}
        name="Weapon Ability 3"
        offset={10}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Weapon Ability 4"
        offset={11}
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
      <InputHex
        type={DataType.U8}
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
        options={WeaponIcon}
        view={view}
        name="Item Icon #"
        offset={29}
      />
      <InputHex
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
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Experience"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={35}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
