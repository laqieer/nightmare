import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7CustomItemAnimationListWorksonlywithanexpandedROMEntries, FE7MagicWeapons, EndofList, Zero,
  FE7SpellAnimations, OnOff,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE7CustomItemAnimationListWorksonlywithanexpandedROM() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1000000;
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
        message="FE7 Custom Item Animation List - Works only with an expanded ROM!"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE7CustomItemAnimationListWorksonlywithanexpandedROMEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE7CustomItemAnimationListWorksonlywithanexpandedROMEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
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

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
