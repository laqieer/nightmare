import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5WeaponLockEditor, FE5CharacterList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5CustomWeaponLockEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x187760;
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
        message="FE5 Custom Weapon Lock Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5WeaponLockEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5WeaponLockEditor}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Locked to Character..."
        offset={14}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
