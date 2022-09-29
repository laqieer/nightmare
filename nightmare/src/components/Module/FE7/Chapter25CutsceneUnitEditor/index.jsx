import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7Chapter25CutsceneUnitEditorEntries, CharacterList, ClassList, StartingLevel,
  ItemList, NPCAI1, NPCAI2, NPCAI3,
  NPCAI4,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE7Chapter25CutsceneUnitEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xCD5234;
  const size = 16;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
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
        message="Chapter 25 Cutscene Unit Editor"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7Chapter25CutsceneUnitEditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CharacterList}
        view={view}
        name="Character Reference Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ClassList}
        view={view}
        name="Starting Class"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
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
