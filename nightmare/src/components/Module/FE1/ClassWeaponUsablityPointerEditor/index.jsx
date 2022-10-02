import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1ClassWeaponUsablityPointerEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE1ClassWeaponUsablityPointerEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1A3EA;
  const size = 9;
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
        message="Class Weapon Usablity Pointer Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1ClassWeaponUsablityPointerEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1ClassWeaponUsablityPointerEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Sword Pointer"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Lance Pointer"
        offset={2}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Bow Pointer"
        offset={4}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Ballista Pointer"
        offset={6}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Axe Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Dragonstone Pointer"
        offset={10}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Tome Pointer"
        offset={12}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Staff A Pointer"
        offset={14}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Staff B Pointer"
        offset={16}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
