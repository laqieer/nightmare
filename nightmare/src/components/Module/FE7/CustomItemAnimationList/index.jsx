import { Space, Alert } from 'antd';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7CustomItemAnimationListEntries, FE7MagicWeapons, EndofList, Zero,
  FE7SpellAnimations, OnOff,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE7CustomItemAnimationList() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x1000000;
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
        message="FE7 Custom Item Animation List - Works only with an expanded ROM!"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7CustomItemAnimationListEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE7MagicWeapons}
        view={view}
        name="Item/Weapon Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={EndofList}
        view={view}
        name="End of List?"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="No. of Chars to Display (1 or 2)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Zero}
        view={view}
        name="Zero"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE7SpellAnimations}
        view={view}
        name="Ranged Animation to Use"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={OnOff}
        view={view}
        name="Ranged Animation Enabled"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Zero}
        view={view}
        name="Zero"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Zero}
        view={view}
        name="Zero"
        offset={7}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Alternate Pointer?"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN***"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Zero}
        view={view}
        name="Zero"
        offset={15}
      />

    </Space>
  );
}
