import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8ItemList2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE8ItemTargetPointerEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x28E8C;
  const size = 4;
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
        message="FE8 Item Target Pointer Editor by Circleseverywhere"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8ItemList2.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8ItemList2}
        />
      </div>
      <InputHex
        type={DataType.U32}
        view={view}
        name="Item Target Pointer"
        offset={0}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
