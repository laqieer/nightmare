import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5ArmyDataCh2RonanEntries, FE5CharacterList, FE5ItemData,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE5ArmyDataCh2Ronan() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x18FCE4;
  const size = 24;
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
        message="Army Data - Ch2 Ronan"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5ArmyDataCh2RonanEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5ArmyDataCh2RonanEntries}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="UNKNOWN"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Character Number"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Event Movement Starting X"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Event Movement Starting Y"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X-Coordinate"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y-Coordinate"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Lo Army Origin"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hi Army Origin"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 1"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 2"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 3"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 4"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 5"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 6"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Inventory Slot 7"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Level"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={23}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
