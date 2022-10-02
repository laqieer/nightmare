import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE12Chapter16UnitEditorEntries, Charlist, Classlist, Itemlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE12Chapter16UnitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xa4;
  const size = 88;
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
        message="Chapter 16 Unit Editor by VincentASM"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE12Chapter16UnitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE12Chapter16UnitEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={Charlist}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditorU"
        options={Classlist}
        view={view}
        name="Class"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Starting X co-ordinate"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Starting Y co-ordinate"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Ending X co-ordinate"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Ending Y co-ordinate"
        offset={7}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Player or enemy"
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
        name="Final Level?"
        offset={10}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Army allegiance"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditorU"
        options={Itemlist}
        view={view}
        name="Inventory slot 1"
        offset={16}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Item option"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditorU"
        options={Itemlist}
        view={view}
        name="Inventory slot 2"
        offset={20}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Item option"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditorU"
        options={Itemlist}
        view={view}
        name="Inventory slot 3"
        offset={24}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Item option"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditorU"
        options={Itemlist}
        view={view}
        name="Inventory slot 4"
        offset={28}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Item option"
        offset={30}
      />
      <InputHexArray
        length={4}
        view={view}
        name="Unknown"
        offset={44}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI pointer 1"
        offset={48}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI pointer 2"
        offset={52}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI pointer 3"
        offset={56}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="AI pointer 4"
        offset={60}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
