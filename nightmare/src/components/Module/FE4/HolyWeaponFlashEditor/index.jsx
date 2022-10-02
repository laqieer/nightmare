import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4HolyWeaponFlashEditorEntries, FE4WeaponNames,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4HolyWeaponFlashEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x15A7E5;
  const size = 61;
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
        message="FE4 Holy Weapon Flash Editor by Lamia"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4HolyWeaponFlashEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4HolyWeaponFlashEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={45}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={55}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={60}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
