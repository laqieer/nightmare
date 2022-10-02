import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ItemList, ItemTypes, UseEffect, WeaponLevels,
  Ability1, Ability2, Ability3, Ability4,
  Ability5, Ability6, Ability7, Ability8,
  Effectiveness, MapAnimationPointer, RangedAttackAnimation, ItemPower,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE12ItemEditorU() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xa308;
  const size = 60;
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
        message="FE12 Item Editor (U) by Blazer, et al"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={ItemList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={ItemList}
        />
      </div>
      <InputHex
        type={DataType.U32}
        view={view}
        name="IID Pointer (Item ID)"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="MIID Pointer (Item Name)"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="MI_H Pointer (Item Description)"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Weapon Icon"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={13}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="Price Per Use"
        offset={14}
      />
      <InputDropbox
        type={DataType.U8}
        options={ItemTypes}
        view={view}
        name="Item Type"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={UseEffect}
        view={view}
        name="Item Use Effect"
        offset={17}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Weapon Level"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Experience"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Uses (0=INF)"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Might"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hit"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Minimum Range"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max Range"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Movement Increase"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Healed/Increase"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Increase"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Increase"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Increase"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Increase"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Increase"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defence Increase"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Resistance Increase"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability1}
        view={view}
        name="Ability 1"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability2}
        view={view}
        name="Ability 2"
        offset={37}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability3}
        view={view}
        name="Ability 3"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability4}
        view={view}
        name="Ability 4"
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability5}
        view={view}
        name="Ability 5"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability6}
        view={view}
        name="Ability 6"
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability7}
        view={view}
        name="Ability 7"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Ability8}
        view={view}
        name="Ability 8"
        offset={43}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Effectiveness}
        view={view}
        name="Effectiveness"
        offset={44}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Zero"
        offset={45}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={MapAnimationPointer}
        view={view}
        name="Map Animation Pointer"
        offset={47}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={RangedAttackAnimation}
        view={view}
        name="Ranged Animation Pointer"
        offset={51}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Separator"
        offset={55}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Alternative Item ID?"
        offset={56}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Staff EXP"
        offset={57}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemPower}
        view={view}
        name="Item Difficulty Adjustment"
        offset={58}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="One"
        offset={59}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
