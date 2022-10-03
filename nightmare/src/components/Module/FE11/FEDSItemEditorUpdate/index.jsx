import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ItemList, ItemTypes, WeaponLevels, Effect3,
  Effectiveness, MapAnimationPointer, RangedAttackAnimation,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE11FEDSItemEditorUpdate() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x878c;
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
        message="FEDS Item Editor (Update) by Blazer (Updated by Mariode)"
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
        type={DataType.U8}
        view={view}
        name="Item Chrono-Byte"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Item ID (?)"
        offset={4}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Name Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Description Pointer"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Weapon Icon"
        offset={16}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Price"
        offset={18}
      />
      <InputDropbox
        type={DataType.U8}
        options={ItemTypes}
        view={view}
        name="Item Type"
        offset={20}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponLevels}
        view={view}
        name="Weapon Level"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Experience"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Uses (0=INF)"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Might"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hit"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Minimum Range"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max Range"
        offset={30}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Effect 1"
        offset={31}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Effect 2"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={Effect3}
        view={view}
        name="Effect 3"
        offset={39}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Effect 4"
        offset={43}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={Effectiveness}
        view={view}
        name="Effectiveness"
        offset={47}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={MapAnimationPointer}
        view={view}
        name="Map Animation Pointer"
        offset={51}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={RangedAttackAnimation}
        view={view}
        name="Ranged Attack Animation Pointer"
        offset={55}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Delimiter (0x00)"
        offset={59}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
