import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ClassList, MovementTypes, WeaponUsage, WeaponLevels,
  ReclassSets, UnitTypes, Gender, Experience,
  ClassAbilities,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE11FEDSClassEditorU() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x7500;
  const size = 92;
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
        message="FEDS Class Editor (U) by Blazer"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={ClassList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={ClassList}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Class ID? (Don't change!)"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Class Text Pointer"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base HP"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Strength"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Magic"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Skill"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Speed"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Luck"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Defense"
        offset={14}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Resistance"
        offset={15}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base HP Growth"
        offset={16}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Strength Growth"
        offset={17}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Magic Growth"
        offset={18}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Skill Growth"
        offset={19}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Speed Growth"
        offset={20}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Luck Growth"
        offset={21}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Defense Growth"
        offset={22}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Base Resistance Growth"
        offset={23}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy HP Growth"
        offset={24}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Strength Growth"
        offset={25}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Magic Growth"
        offset={26}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Skill Growth"
        offset={27}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Speed Growth"
        offset={28}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Luck Growth"
        offset={29}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Defense Growth"
        offset={30}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Enemy Resistance Growth"
        offset={31}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max HP"
        offset={32}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Strength"
        offset={33}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Magic"
        offset={34}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Skill"
        offset={35}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Speed"
        offset={36}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Luck"
        offset={37}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Defense"
        offset={38}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Max Resistance"
        offset={39}
      />
      <InputDropbox
        type={DataType.U8}
        options={MovementTypes}
        view={view}
        name="Movement Type"
        offset={40}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Move (Stat)"
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponUsage}
        view={view}
        name="Weapon Usage"
        offset={43}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Sword Level"
        offset={44}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Lance Level"
        offset={45}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Axe Level"
        offset={46}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Bow Level"
        offset={47}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Magic Level"
        offset={48}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Staff Level"
        offset={49}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ReclassSets}
        view={view}
        name="Reclass Set"
        offset={52}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={53}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={UnitTypes}
        view={view}
        name="Unit Type"
        offset={54}
      />
      <InputDropbox
        type={DataType.U8}
        options={Gender}
        view={view}
        name="Gender"
        offset={56}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Experience}
        view={view}
        name="Experience Control"
        offset={57}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassAbilities}
        view={view}
        name="Class Abilities/Bonuses"
        offset={58}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Dragon Ability Flag (?)"
        offset={59}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Unknown Referential Pointer"
        offset={60}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Promote to Class"
        offset={64}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Unknown Referential Pointer"
        offset={68}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Unknown Referential Pointer"
        offset={72}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Unknown"
        offset={76}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
