import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE11Chapter8UnitEditorEntries, Characters, Classes, Enemy1,
  Enemy2, Items, Droppable,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE11Chapter8UnitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8C;
  const size = 80;
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
        message="Chapter 8 Unit Editor by Blazer/Mariode"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE11Chapter8UnitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE11Chapter8UnitEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="FEDSCharacterEditorU"
        options={Characters}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="FEDSClassEditorUpdate"
        options={Classes}
        view={view}
        name="Class"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Loading X Co-ordinate"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Loading Y-Co-ordinate"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Starting X Co-ordinate"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Starting Y-Co-ordinate"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Enemy1}
        view={view}
        name="Unknown Allegiance Byte (?)"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Level"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Starting Level"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Enemy2}
        view={view}
        name="Unknown Allegiance Byte (?)"
        offset={11}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown (Ability Byte?)"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="FEDSItemEditorUpdate"
        options={Items}
        view={view}
        name="Inventory Slot #1"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Droppable}
        view={view}
        name="Droppable Item Option"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="FEDSItemEditorUpdate"
        options={Items}
        view={view}
        name="Inventory Slot #2"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Droppable}
        view={view}
        name="Droppable Item Option"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="FEDSItemEditorUpdate"
        options={Items}
        view={view}
        name="Inventory Slot #3"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Droppable}
        view={view}
        name="Droppable Item Option"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="FEDSItemEditorUpdate"
        options={Items}
        view={view}
        name="Inventory Slot #4"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Droppable}
        view={view}
        name="Droppable Item Option"
        offset={23}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Unit Flags?"
        offset={36}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI Pointer 1"
        offset={40}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI Pointer 2"
        offset={44}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI Pointer 3"
        offset={48}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI Pointer 4"
        offset={52}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
