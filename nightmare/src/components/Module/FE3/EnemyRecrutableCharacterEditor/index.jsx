import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3EnemyRecrutableCharacterEditorEntries, Chapters, FE3Names,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE3EnemyRecrutableCharacterEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x58BC6;
  const size = 6;
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
        message="Enemy Recrutable Character Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3EnemyRecrutableCharacterEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3EnemyRecrutableCharacterEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="MapDataEditor"
        options={Chapters}
        view={view}
        name="Map Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Character used to recruit"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Character recruited"
        offset={2}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Event flag condition"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Event number"
        offset={4}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Always 00"
        offset={5}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
