import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4Rings, FE4WeaponNames, FE4WeaponClass, FE4RingBonuses,
  FE4StaffEffects, FE4WeaponRank, FE4WeaponSkills1, FE4WeaponSkills2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE4RingEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3F4C2;
  const size = 10;
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
        message="FE4 Ring Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4Rings.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4Rings}
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
        type={DataType.U16}
        view={view}
        name="Price"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4RingBonuses}
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
        isHex
        type={DataType.U8}
        options={FE4WeaponSkills1}
        view={view}
        name="Skill Set 1"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponSkills2}
        view={view}
        name="Skill Set 2"
        offset={9}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
