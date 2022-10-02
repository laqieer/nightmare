import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  WeaponTypes, WeaponTypesList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5WeaponTriangleEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x01DBEF;
  const size = 3;
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
        message="FE5 Weapon Triangle Editor by Shinpichu"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={WeaponTypes.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={WeaponTypes}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponTypesList}
        view={view}
        name="Entry 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponTypesList}
        view={view}
        name="Entry 2"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={WeaponTypesList}
        view={view}
        name="Entry 3"
        offset={2}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
