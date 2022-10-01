import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7Chapter19UnitEditorEntries, CharacterList, ClassList, StartingLevel,
  ItemList, NPCAI1, NPCAI2, NPCAI3,
  NPCAI4,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE7Chapter19UnitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xCCCEB4;
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
        message="Chapter 19 Unit Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE7Chapter19UnitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE7Chapter19UnitEditorEntries}
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
        options={ClassList}
        view={view}
        name="Starting Class"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character's Leader"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={StartingLevel}
        view={view}
        name="Starting Level"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Loading X Co-ordinate"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Loading Y Co-ordinate"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Start X Co-Ordinate"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Start Y Co-Ordinate"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 1"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 2"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 3"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Slot Item 4"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI1}
        view={view}
        name="AI 1"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI2}
        view={view}
        name="AI 2"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI3}
        view={view}
        name="AI 3"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={NPCAI4}
        view={view}
        name="AI 4"
        offset={15}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
