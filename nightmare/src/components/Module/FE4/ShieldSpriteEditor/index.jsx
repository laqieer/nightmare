import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ShieldSpriteEditorEntries, FE4CharacterNumbers, ShieldTypes, ShieldColors,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ShieldSpriteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1983ED;
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
        message="FE4 Shield Sprite Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ShieldSpriteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ShieldSpriteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldTypes}
        view={view}
        name="Shield Type"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldColors}
        view={view}
        name="Shield Color"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldTypes}
        view={view}
        name="Shield Type"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldColors}
        view={view}
        name="Shield Color"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldTypes}
        view={view}
        name="Shield Type"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldColors}
        view={view}
        name="Shield Color"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldTypes}
        view={view}
        name="Shield Type"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ShieldColors}
        view={view}
        name="Shield Color"
        offset={15}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
