import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4HolyWeaponFlashEditorModifiedEntries, FE4WeaponNames,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4HolyWeaponFlashEditorModified() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x15A803;
  const size = 17;
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
        message="FE4 Holy Weapon Flash Editor (Modified) by Lamia"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4HolyWeaponFlashEditorModifiedEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4HolyWeaponFlashEditorModifiedEntries}
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
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={4}
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
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={9}
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
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4WeaponNames}
        view={view}
        name="Weapon"
        offset={14}
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
        offset={16}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
