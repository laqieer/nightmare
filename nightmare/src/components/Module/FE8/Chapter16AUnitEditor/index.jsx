import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8Chapter16AUnitEditorEntries, CharacterList, ClassHexList, StartingLevel,
  ItemList, NPCAI1, NPCAI2, NPCAI3,
  NPCAI4,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE8Chapter16AUnitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8BCE58;
  const size = 20;
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
        message="Chapter 16A Unit Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8Chapter16AUnitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8Chapter16AUnitEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character Reference Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassHexList}
        view={view}
        name="Starting Class"
        offset={1}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Usually Zero)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={StartingLevel}
        view={view}
        name="Starting Level/Alliance"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X Co-ordinate"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y Co-ordinate"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Reinforcement Placement?"
        offset={7}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Reinforcement Pointer?"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 1"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 2"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 3"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 4"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI1}
        view={view}
        name="AI 1"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI2}
        view={view}
        name="AI 2"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI3}
        view={view}
        name="AI 3"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI4}
        view={view}
        name="AI 4"
        offset={19}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
