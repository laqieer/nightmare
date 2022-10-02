import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4WeaponEditor, FE4WeaponNames, FE4WeaponClass, FE4WeaponBonus,
  FE4StaffEffects, FE4WeaponRank, FE4WeaponSkills1, FE4WeaponSkills2,
  FE4WeaponType, FE4WeaponCritical, FE4WeaponAttributes1, FE4WeaponAttributes2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE4StaffEditor1() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3ECE4;
  const size = 19;
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
        message="FE4 Weapon/Staff Editor 1"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4WeaponEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4WeaponEditor}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Name"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponClass}
        view={view}
        name="Type"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max Uses"
        offset={2}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="Price"
        offset={3}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4WeaponBonus}
        view={view}
        name="Stat Bonus"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4StaffEffects}
        view={view}
        name="Staff Effect"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponRank}
        view={view}
        name="Rank"
        offset={7}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4WeaponSkills1}
        view={view}
        name="Skill Set 1"
        offset={8}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4WeaponSkills2}
        view={view}
        name="Skill Set 2"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponType}
        view={view}
        name="Weapon Type"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Power"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Accuracy"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Minimum Range"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Maximum Range"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponCritical}
        view={view}
        name="Critical"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponAttributes1}
        view={view}
        name="Attributes #1"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponAttributes2}
        view={view}
        name="Attributes #2"
        offset={18}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
