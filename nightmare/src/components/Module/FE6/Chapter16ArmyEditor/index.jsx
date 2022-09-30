import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE6Chapter16ArmyEditorEntries, CharacterList, ClassList, Level,
  ItemList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE6Chapter16ArmyEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x67EBA4;
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
        message="Chapter 16 Army Editor by Camus"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE6Chapter16ArmyEditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CharacterList}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassList}
        view={view}
        name="Class"
        offset={1}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN (Usually Zero)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Level}
        view={view}
        name="Starting Level/Alliance"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Reinforcement Placement?"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Reinforcement Placement?"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X Co-ordinate"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y Co-ordinate"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Slot Item 1"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Slot Item 2"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Slot Item 3"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Slot Item 4"
        offset={11}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="AI 1"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="AI 2"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="AI 3"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
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
