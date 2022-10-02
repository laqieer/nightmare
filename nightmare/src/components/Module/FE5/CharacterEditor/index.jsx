import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5CharacterEditorEntries, MovementStars, CharacterWeaponRank, CharacterGender,
  SkillList1, SkillList2, SkillList3, ClassList,
  LeadershipStars, MapSpriteList, PortraitList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5CharacterEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x31C2D;
  const size = 48;
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
        message="FE5 Character Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5CharacterEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5CharacterEditorEntries}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base STR"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base MGC"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SKL"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SPD"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base DEF"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base BLD"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base LCK"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MOV Bonus"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MovementStars}
        view={view}
        name="Movement Stars"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Counter Critical Boost"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR Growth"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MGC Growth"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Growth"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Growth"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Growth"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="BLD Growth"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="LCK Growth"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MOV Growth"
        offset={19}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Sword Level"
        offset={20}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Spear Level"
        offset={21}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Axe Level"
        offset={22}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Bow Level"
        offset={23}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Staff Level"
        offset={24}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Fire Level"
        offset={25}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Thunder Level"
        offset={26}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Wind Level"
        offset={27}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Light Level"
        offset={28}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterWeaponRank}
        view={view}
        name="Base Dark Level"
        offset={29}
      />
      <InputDropbox
        type={DataType.U8}
        options={CharacterGender}
        view={view}
        name="Gender"
        offset={40}
      />
      <InputDropbox
        type={DataType.U8}
        options={SkillList1}
        view={view}
        name="Character Skills 1"
        offset={41}
      />
      <InputDropbox
        type={DataType.U8}
        options={SkillList2}
        view={view}
        name="Character Skills 2"
        offset={42}
      />
      <InputDropbox
        type={DataType.U8}
        options={SkillList3}
        view={view}
        name="Character Skills 3"
        offset={43}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class"
        offset={44}
      />
      <InputDropbox
        type={DataType.U8}
        options={LeadershipStars}
        view={view}
        name="Leadership Stars"
        offset={45}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MapSpriteList}
        view={view}
        name="Map Sprite"
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PortraitList}
        view={view}
        name="Portrait"
        offset={47}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
