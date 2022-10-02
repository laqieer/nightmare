import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4HolyBloodList, FE4WeaponType, FE4WeaponList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE4HolyBloodEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x38BE3;
  const size = 16;
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
        message="FE4 Holy Blood Editor by Camus"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4HolyBloodList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4HolyBloodList}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponType}
        view={view}
        name="Weapon Type"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Unlock Weapon"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth Bonus"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Growth Bonus"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Growth Bonus"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth Bonus"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth Bonus"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth Bonus"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Defense Growth Bonus"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Growth Bonus"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Holy Weapon Strength Bonus"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Holy Weapon Magic Bonus"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Holy Weapon Skill Bonus"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Holy Weapon Speed Bonus"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Holy Weapon Defense Bonus"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Holy Weapon Magic Defense Bonus"
        offset={15}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
