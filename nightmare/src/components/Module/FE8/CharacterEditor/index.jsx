import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8CharacterEditorEntries, ClassList, PortraitList, CharacterAffinity,
  WeaponRank, Ability1, Ability2, Ability3,
  Ability4, SupportPointers,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE8CharacterEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x803D30;
  const size = 52;
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
        message="FE8 Character Editor by SpyroDi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8CharacterEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8CharacterEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Name value"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Description value"
        offset={2}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Character Number"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class (support viewer only)"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="PortraitEditor"
        options={PortraitList}
        view={view}
        name="Portrait (Zero is Default)"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={7}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Mini Portrait (Zero is Default)"
        offset={8}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterAffinity}
        view={view}
        name="Affinity"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
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
        name="Base Luck"
        offset={18}
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
        name="Base Magic Defense"
        offset={17}
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
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength/Magic Growth"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Growth"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Defense Growth"
        offset={33}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={35}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={36}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
        offset={37}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Zero)"
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
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
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
