import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE6SpellAssociationEditorEntries, ItemList, SpellAnimations, Returning,
  Facing, MapAnimationHitColor,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE6SpellAssociationEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x662E4C;
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
        message="FE6 Spell Association Editor by flyingace24, updated by Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE6SpellAssociationEditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ItemList}
        view={view}
        name="Weapon"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="No. of Chars to Display (1 or 2)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SpellAnimations}
        view={view}
        name="Spell animation to use"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Alternate Pointer"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Returning}
        view={view}
        name="Return to original position (map)"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Facing}
        view={view}
        name="Facing position (map)"
        offset={13}
      />
      <InputDropbox
        type={DataType.U8}
        options={MapAnimationHitColor}
        view={view}
        name="Map Animation Hit Color"
        offset={14}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
