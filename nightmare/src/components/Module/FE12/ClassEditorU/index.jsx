import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ClassList, MovementTypes, WeaponUsage, WeaponLevels,
  ReclassSets, ReclassLines, UnitTypes, WeaponLocks,
  Gender, Experience, ClassAbilities, ClassAbilities2,
  ClassListPointers, MoveSound,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE12ClassEditorU() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x90f8;
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
        message="FE12 Class Editor (U) by Purple Mage"
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
        type={DataType.U32}
        view={view}
        name="JID Pointer (Class ID)"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="MJID Pointer (Class Name)"
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
        name="Base HP Growth (Note: Growths encrypted)"
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
      <InputHex
        type={DataType.S8}
        view={view}
        name="Two"
        offset={42}
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
      <InputHex
        type={DataType.U16}
        view={view}
        name="Zero"
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ReclassSets}
        view={view}
        name="Reclass Set"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ReclassLines}
        view={view}
        name="Reclass Line"
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
        isHex
        type={DataType.U8}
        options={WeaponLocks}
        view={view}
        name="Class Weapon Locks"
        offset={55}
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
        name="Class Ability 1"
        offset={57}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassAbilities}
        view={view}
        name="Class Ability 2"
        offset={58}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassAbilities2}
        view={view}
        name="Class Ability 3"
        offset={59}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={ClassListPointers}
        view={view}
        name="Promoted from Class?"
        offset={60}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={ClassListPointers}
        view={view}
        name="Promote to Class"
        offset={64}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="MSJI Pointer (Class Description?)"
        offset={68}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="FID Pointer (Class Card)"
        offset={72}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Move Animation Speed"
        offset={76}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Movement Speed"
        offset={77}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MoveSound}
        view={view}
        name="Movement Sound"
        offset={78}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Unknown"
        offset={79}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
