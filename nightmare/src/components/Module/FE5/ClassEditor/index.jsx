import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5ClassList, ClassRelativePower, FE5ClassWeaponRank, SkillList1,
  SkillList2, SkillList3, MapSpriteList, TerrainMovement,
  TerrainEvasion, TerrainDefense, UnknownPointer, UnknownByte,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5ClassEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x30200;
  const size = 36;
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
        message="FE5 Class Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5ClassList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5ClassList}
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
        name="Base MOV"
        offset={7}
      />
      <InputDropbox
        type={DataType.U8}
        options={ClassRelativePower}
        view={view}
        name="Class Relative Power (Affects EXP)"
        offset={8}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Sword Level"
        offset={9}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Spear Level"
        offset={10}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Axe Level"
        offset={11}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Bow Level"
        offset={12}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Staff Level"
        offset={13}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Fire Level"
        offset={14}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Thunder Level"
        offset={15}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Wind Level"
        offset={16}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Light Level"
        offset={17}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5ClassWeaponRank}
        view={view}
        name="Base Dark Level"
        offset={18}
      />
      <InputDropbox
        type={DataType.U8}
        options={SkillList1}
        view={view}
        name="Class Skills 1 (bitwise)"
        offset={19}
      />
      <InputDropbox
        type={DataType.U8}
        options={SkillList2}
        view={view}
        name="Class Skills 2 (bitwise)"
        offset={20}
      />
      <InputDropbox
        type={DataType.U8}
        options={SkillList3}
        view={view}
        name="Class Skills 3 (bitwise)"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MapSpriteList}
        view={view}
        name="Default Map Sprite"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={TerrainMovement}
        view={view}
        name="Movement Type Pointer"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={TerrainEvasion}
        view={view}
        name="Terrain Evasion Type Pointer"
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={TerrainDefense}
        view={view}
        name="Terrain Defense Type Pointer"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={UnknownPointer}
        view={view}
        name="Unknown Pointer"
        offset={29}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={UnknownByte}
        view={view}
        name="Unknown (promoted only?)"
        offset={35}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
