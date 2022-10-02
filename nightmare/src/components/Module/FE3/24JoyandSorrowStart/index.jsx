import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE324JoyandSorrowStartEntries, FE3Characters, FE3Classes, FE3Names,
  FE3Portraits, FE3Items,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE324JoyandSorrowStart() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x49FD4;
  const size = 19;
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
        message="2-4: Joy and Sorrow (Start)"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE324JoyandSorrowStartEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE324JoyandSorrowStartEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterGrowthBaseEditor"
        options={FE3Characters}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Class"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Level"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Name"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X Position"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y Position"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="FF"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Portraits}
        view={view}
        name="Portrait"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Weapon 1"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Weapon 2"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Weapon 3"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Weapon 4"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Item 1"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE3Items}
        view={view}
        name="Item 2"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="FF"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="FF"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Enemy AI"
        offset={16}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Enemy AI"
        offset={17}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Enemy AI"
        offset={18}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
