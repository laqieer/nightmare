import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4HairColorEditorEntries, FE4CharacterNumbers, FE4HairColor,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4HairColorEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x198FF8;
  const size = 18;
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
        message="FE4 Hair Color Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4HairColorEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4HairColorEditorEntries}
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
        type={DataType.U8}
        options={FE4HairColor}
        view={view}
        name="Color"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={3}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4HairColor}
        view={view}
        name="Color"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={6}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4HairColor}
        view={view}
        name="Color"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={9}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4HairColor}
        view={view}
        name="Color"
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
        type={DataType.U8}
        options={FE4HairColor}
        view={view}
        name="Color"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Character"
        offset={15}
      />
      <InputDropbox
        type={DataType.U8}
        options={FE4HairColor}
        view={view}
        name="Color"
        offset={17}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
