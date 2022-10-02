import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  CharacterList, WeaponLevels, HairColour, WeaponLocks,
  WeaponLocks2, Ability1, SupportPointers,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE12CharacterEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x20;
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
        message="FE12 Character Editor by Darrman"
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
        type={DataType.U32}
        view={view}
        name="PID Pointer (Character ID)"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="FID Pointer (Name/Portrait)"
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
      <InputHex
        type={DataType.U8}
        view={view}
        name="HP Growth (note encryption)"
        offset={20}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Strength Growth"
        offset={21}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Magic Growth"
        offset={22}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={23}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={24}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Luck Growth"
        offset={25}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={26}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Resistance Growth"
        offset={27}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="HP Growth 2"
        offset={28}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Strength Growth 2"
        offset={29}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Magic Growth 2"
        offset={30}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Skill Growth 2"
        offset={31}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Speed Growth 2"
        offset={32}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Luck Growth 2"
        offset={33}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Defense Growth 2"
        offset={34}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Resistance Growth 2"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Sword Skill Level"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Lance Skill Level"
        offset={37}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Axe Skill Level"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Bow Skill Level"
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Magic Skill Level"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Staff Skill Level"
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={HairColour}
        view={view}
        name="Hair Colour"
        offset={42}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={43}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLocks}
        view={view}
        name="Weapon Lock 1"
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponLocks2}
        view={view}
        name="Weapon Lock 2"
        offset={45}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Always Zero"
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability1}
        view={view}
        name="Ability 1"
        offset={47}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
        view={view}
        name="Pointer to Support 1"
        offset={48}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={52}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 1 Points for C"
        offset={53}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 1 Points for B"
        offset={54}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 1 Points for A"
        offset={55}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
        view={view}
        name="Pointer to Support 2"
        offset={56}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={60}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 2 Points for C"
        offset={61}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 2 Points for B"
        offset={62}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 2 Points for A"
        offset={63}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
        view={view}
        name="Pointer to Support 3"
        offset={64}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={68}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 3 Points for C"
        offset={69}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 3 Points for B"
        offset={70}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 3 Points for A"
        offset={71}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
        view={view}
        name="Pointer to Support 4"
        offset={72}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={76}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 4 Points for C"
        offset={77}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 4 Points for B"
        offset={78}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 4 Points for A"
        offset={79}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
        view={view}
        name="Pointer to Support 5"
        offset={80}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={84}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 5 Points for C"
        offset={85}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 5 Points for B"
        offset={86}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support 5 Points for A"
        offset={87}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SupportPointers}
        view={view}
        name="Ending Changes if This Unit Dies"
        offset={88}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
