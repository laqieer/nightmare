import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4EnemyEditor8Entries, FE4CharacterType, FE4CharacterNumbers, FE4CharacterNameNumbers,
  FE4Classes, FE4Gender, FE4WeaponList, FE4PlayerEquipment,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE4EnemyEditor8() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3C60D;
  const size = 13;
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
        message="FE4 Enemy Editor 8"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4EnemyEditor8Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4EnemyEditor8Entries}
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
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Chararacter Number"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNameNumbers}
        view={view}
        name="Chararacter Name"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Level"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Leadership"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Equipment 1"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Equipment 2"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Dropable Equipment"
        offset={12}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
