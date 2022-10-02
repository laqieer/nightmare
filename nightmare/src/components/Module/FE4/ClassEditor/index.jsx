import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ClassList, ClassWeaponRank, FE4ClassSkills1, FE4ClassSkills2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ClassEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x391C5;
  const size = 31;
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
        message="FE4 Class Editor by Camus"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ClassList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ClassList}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Lv Needed to Promote to This"
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
        name="Base Defense"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Magic Defense"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Growth"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Growth"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Defense Growth"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Sword Rank"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Lance Rank"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Axe Rank"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Bow Rank"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Staff Rank"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Fire Rank"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Water Rank"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Arcane Rank"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Force Rank"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassWeaponRank}
        view={view}
        name="Spirit Rank"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Movement"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Movement Type"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={27}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4ClassSkills1}
        view={view}
        name="Class Skills 1"
        offset={28}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4ClassSkills2}
        view={view}
        name="Class Skills 2"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gold x 100"
        offset={30}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
