import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7CharacterList, Characters, ClassList, PortraitList,
  MiniProtrait, Affinity, WeaponRank, CharacterPalettes,
  CustomBattleSprites, Ability1, Ability2, Ability3,
  Ability4,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE7CharacterEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xBDCE18;
  const size = 52;
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
        message="FE7 Character Editor by SpyroDi, modified by Arch and Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7CharacterList}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Character Name"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Character Description"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character Number"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassList}
        view={view}
        name="Class (support viewer only)"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={PortraitList}
        view={view}
        name="Portrait"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MiniProtrait}
        view={view}
        name="Mini Portrait"
        offset={8}
      />
      <InputDropbox
        type={DataType.U8}
        options={Affinity}
        view={view}
        name="Affinity"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character Number 2?"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Level"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base HP"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Strength/Magic"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Skill"
        offset={14}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Speed"
        offset={15}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Defense"
        offset={16}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Resistance"
        offset={17}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Luck"
        offset={18}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Constitution Bonus"
        offset={19}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Sword Level"
        offset={20}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Spear Level"
        offset={21}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Axe Level"
        offset={22}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Bow Level"
        offset={23}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Staff Level"
        offset={24}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Anima Level"
        offset={25}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Light Level"
        offset={26}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponRank}
        view={view}
        name="Dark Level"
        offset={27}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Growth"
        offset={28}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Strength/Magic Growth"
        offset={29}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skill Growth"
        offset={30}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Speed Growth"
        offset={31}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Defense Growth"
        offset={32}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Resistance Growth"
        offset={33}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Luck Growth"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CharacterPalettes}
        view={view}
        name="Palette - Unpromoted"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CharacterPalettes}
        view={view}
        name="Palette - Promoted"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CustomBattleSprites}
        view={view}
        name="Custom Battle Sprite - Unpromoted"
        offset={37}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CustomBattleSprites}
        view={view}
        name="Custom Battle Sprite - Promoted"
        offset={38}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability1}
        view={view}
        name="Character Ability 1"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability2}
        view={view}
        name="Character Ability 2"
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability3}
        view={view}
        name="Character Ability 3"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability4}
        view={view}
        name="Character Ability 4"
        offset={43}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Supports Data Pointer"
        offset={44}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={48}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={49}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={50}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={51}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
