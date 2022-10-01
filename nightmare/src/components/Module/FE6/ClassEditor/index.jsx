import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE6ClassEditorEntries, ClassList, MapSpritesStanding, WalkingSpeed,
  PortraitList, Ability1, Ability2, Ability3,
  WeaponRank,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE6ClassEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x60A0E8;
  const size = 72;
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
        message="FE6 Class Editor by SpyroDi, updated by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE6ClassEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE6ClassEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Class Name"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Class Description"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class Number"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="This Class Promotes To"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MapSpritesStanding}
        view={view}
        name="Map Sprite# (standing)"
        offset={6}
      />
      <InputDropbox
        type={DataType.U8}
        options={WalkingSpeed}
        view={view}
        name="Walking Speed"
        offset={7}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="PortraitEditor"
        options={PortraitList}
        view={view}
        name="Default portrait"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base HP"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base STR/MGC"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base SKL"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base SPD"
        offset={14}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base DEF"
        offset={15}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base MDF"
        offset={16}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base CON"
        offset={17}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base MOV"
        offset={18}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max HP"
        offset={19}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max STR/MGC"
        offset={20}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max SKL"
        offset={21}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max SPD"
        offset={22}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max DEF"
        offset={23}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max MDF"
        offset={24}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max CON"
        offset={25}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Class relative power"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR/MGC Growth"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Growth"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Growth"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Growth"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MDF Growth"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="CON Growth (not used)"
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability1}
        view={view}
        name="Class Ability 1"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability2}
        view={view}
        name="Class Ability 2"
        offset={37}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability3}
        view={view}
        name="Class Ability 3"
        offset={38}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Class ability 4"
        offset={39}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Sword Level"
        offset={40}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Spear Level"
        offset={41}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Axe Level"
        offset={42}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Bow Level"
        offset={43}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Staff Level"
        offset={44}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Anima Level"
        offset={45}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Light Level"
        offset={46}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Dark Level"
        offset={47}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Battle Animation Pointer"
        offset={48}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Movement Type Pointer"
        offset={52}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Terrain defence Pointer"
        offset={56}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Terrain avoid Pointer"
        offset={60}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Terrain resistance Pointer"
        offset={64}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="***UNKNOWN*** Pointer"
        offset={68}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
