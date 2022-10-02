import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  CharacterList, WeaponLevels, SpecialWeaponAbilities, SpecialBonuses,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE11FEDSCharacterEditorU() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x20;
  const size = 80;
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
        message="FEDS Character Editor (U) by Blazer"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={CharacterList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={CharacterList}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Character ID (?)"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Name/Portrait"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Generic Enemy Name"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Strength"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Magic"
        offset={14}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skill"
        offset={15}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Speed"
        offset={16}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Luck"
        offset={17}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Defense"
        offset={18}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Resistance"
        offset={19}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="HP Growth"
        offset={20}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Strength Growth"
        offset={21}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Magic Growth"
        offset={22}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skill Growth"
        offset={23}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Speed Growth"
        offset={24}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Luck Growth"
        offset={25}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Defense Growth"
        offset={26}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Resistance Growth"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Sword Skill Level"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Lance Skill Level"
        offset={29}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Axe Skill Level"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Bow Skill Level"
        offset={31}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Magic Skill Level"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Staff Skill Level"
        offset={33}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SpecialWeaponAbilities}
        view={view}
        name="Weapon Lock"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={SpecialBonuses}
        view={view}
        name="Character Bonuses"
        offset={38}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
