import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4TriangleAttackEditorEntries, FE4CharacterNumbers,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4TriangleAttackEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x7BF93;
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
        message="FE4 Triangle Attack Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4TriangleAttackEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4TriangleAttackEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character 2"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character 3"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
