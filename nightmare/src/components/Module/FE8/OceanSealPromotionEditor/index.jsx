import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8OceanSealPromotionEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE8OceanSealPromotionEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x29405;
  const size = 8;
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
        message="FE8 Ocean Seal Promotion Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8OceanSealPromotionEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8OceanSealPromotionEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={1}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={2}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Promotion Pointer"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="0x70 is default"
        offset={7}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
