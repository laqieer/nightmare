import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5ItemList, FE5ItemTypes, WeaponRange, FE5WeaponRank,
  FE5WeaponEffectiveness, FE5StatBonuses, FE5ItemUseEffect, FE5WeaponBladeEffect,
  FE5WeaponSkills1, FE5WeaponSkills2, FE5WeaponCapabilities, FE5ItemIcons,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE5ItemEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1802C2;
  const size = 23;
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
        message="FE5 Item Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5ItemList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5ItemList}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5ItemTypes}
        view={view}
        name="Item Type"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Power"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Accuracy"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Maximum Uses"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical%"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponRange}
        view={view}
        name="Range"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE5WeaponRank}
        view={view}
        name="Weapon Rank/Lock Pointer"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE5WeaponEffectiveness}
        view={view}
        name="Effectiveness Pointer"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE5StatBonuses}
        view={view}
        name="Stat Bonuses Pointer"
        offset={11}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="Cost Per Use + 200"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Description (Lo Pointer)"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Description (Hi Pointer)"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5ItemUseEffect}
        view={view}
        name="Use/Staff Effect"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5WeaponBladeEffect}
        view={view}
        name="Blade Effect"
        offset={18}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5WeaponSkills1}
        view={view}
        name="Weapon Skills 1"
        offset={19}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE5WeaponSkills2}
        view={view}
        name="Weapon Skills 2"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5WeaponCapabilities}
        view={view}
        name="Capabilities"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5ItemIcons}
        view={view}
        name="Weapon Icon"
        offset={22}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
