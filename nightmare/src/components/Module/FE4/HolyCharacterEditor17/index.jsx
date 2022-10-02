import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4HolyCharacterEditor17Entries, FE4CharacterType, FE4Classes, FE4CharacterNumbers,
  FE4CharacterNameNumbers, FE4Gender, FE4CharacterSkills1, FE4CharacterSkills2,
  FE4CharacterSkills3, FE4HolyBlood1, FE4HolyBlood2, FE4HolyBlood3,
  FE4HolyBlood4, FE4WeaponList, FE4PlayerEquipment,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4HolyCharacterEditor17() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3D30D;
  const size = 51;
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
        message="FE4 Holy Character Editor 17"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4HolyCharacterEditor17Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4HolyCharacterEditor17Entries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterType}
        view={view}
        name="Character Type"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Strength"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Magic"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Skill"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Speed"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Luck"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Defense"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Magic Defense"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Level"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Leadership"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character Number"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNameNumbers}
        view={view}
        name="Character Name"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={18}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Unknown"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Growth"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Growth"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Growth"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Defense Growth"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterSkills1}
        view={view}
        name="Skills 1"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterSkills2}
        view={view}
        name="Skills 2"
        offset={29}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterSkills3}
        view={view}
        name="Skills 3"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4HolyBlood1}
        view={view}
        name="Blood 1"
        offset={31}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4HolyBlood2}
        view={view}
        name="Blood 2"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4HolyBlood3}
        view={view}
        name="Blood 3"
        offset={33}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4HolyBlood4}
        view={view}
        name="Blood 4"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Equipment 1"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Equipment 2"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 3"
        offset={37}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
