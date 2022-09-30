import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7ClassEditorEntries, ClassList, MapSpritesStanding, WalkingSpeed,
  PortraitList, Ability1, Ability2, Ability3,
  Ability4, WeaponRank,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE7ClassEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xBE015C;
  const size = 84;
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
        message="FE7 Class Editor by SpyroDi, modified by Arch the GK and Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE7ClassEditorEntries}
      />
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
        options={ClassList}
        view={view}
        name="Class Number"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PortraitList}
        view={view}
        name="Default Portrait"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
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
      <InputHex
        type={DataType.U8}
        view={view}
        name="Class Relative Power"
        offset={26}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Growth"
        offset={27}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Str Growth"
        offset={28}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skl Growth"
        offset={29}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Spd Growth"
        offset={30}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Def Growth"
        offset={31}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Res Growth"
        offset={32}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Luck Growth"
        offset={33}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Promotion Bonus"
        offset={34}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="STR/MGC Promotion Bonus"
        offset={35}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SKL Promotion Bonus"
        offset={36}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="SPD Promotion Bonus"
        offset={37}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="DEF Promotion Bonus"
        offset={38}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="RES Promotion Bonus"
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability1}
        view={view}
        name="Class Ability 1"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability2}
        view={view}
        name="Class Ability 2"
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability3}
        view={view}
        name="Class Ability 3"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability4}
        view={view}
        name="Class Ability 4"
        offset={43}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Sword Level"
        offset={44}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Spear Level"
        offset={45}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Axe Level"
        offset={46}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Bow Level"
        offset={47}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Staff Level"
        offset={48}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Anima Level"
        offset={49}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Light Level"
        offset={50}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Base Dark Level"
        offset={51}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Battle Animation Pointer"
        offset={52}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Movement Cost Pointer"
        offset={56}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Movement Cost(rain) Pointer"
        offset={60}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Movement Cost(snow) Pointer"
        offset={64}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Terrain Defense Bonus Pointer"
        offset={68}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Terrain Avoid Bonus Pointer"
        offset={72}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Terrain Resistance Bonus Pointer"
        offset={76}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="***UNKNOWN*** Pointer"
        offset={80}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
