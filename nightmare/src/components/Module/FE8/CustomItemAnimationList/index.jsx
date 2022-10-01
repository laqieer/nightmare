import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8CustomItemAnimationListEntries, ItemList, FE8RangedAttackAnimations, OnOff,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';
import InputDec from '../../../Input/InputDec';

export default function FE8CustomItemAnimationList() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xE70700;
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
        message="FE8 Custom Item Animation List"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8CustomItemAnimationListEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8CustomItemAnimationListEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item/Weapon Number"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
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
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE8RangedAttackAnimations}
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
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Zero"
        offset={7}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Alternate Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Use 0x01 if unsure)"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Use 0x00 if unsure)"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="***UNKNOWN*** (Use 0x00 if unsure)"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
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
