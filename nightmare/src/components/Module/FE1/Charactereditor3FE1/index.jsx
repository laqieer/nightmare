import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1Charactereditor3FE1Entries, Chardata, Classlist, Itemlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE1Charactereditor3FE1() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x205FD;
  const size = 27;
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
        message="Character editor 3 (FE1) - By VincentASM and Celice - V 0.2"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1Charactereditor3FE1Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1Charactereditor3FE1Entries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chardata}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classlist}
        view={view}
        name="Class"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Level"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Current HP"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Maximum HP"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Experience"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Strength"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Skill"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Weapon Level"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Speed"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Luck"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Defence"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Movement"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Magic Defence"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Y Starting position"
        offset={16}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="X Starting position"
        offset={17}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item slot 1"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item slot 2"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item slot 3"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item slot 4"
        offset={22}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={23}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={24}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={25}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={26}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
