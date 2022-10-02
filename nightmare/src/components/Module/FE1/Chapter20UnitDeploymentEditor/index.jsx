import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1Chapter20UnitDeploymentEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE1Chapter20UnitDeploymentEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x209f4;
  const size = 31;
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
        message="Chapter 20 Unit Deployment Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1Chapter20UnitDeploymentEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1Chapter20UnitDeploymentEditorEntries}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Units Allowed"
        offset={0}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 1"
        offset={1}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 2"
        offset={3}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 3"
        offset={5}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 4"
        offset={7}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 5"
        offset={9}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 6"
        offset={11}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 7"
        offset={13}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 8"
        offset={15}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 9"
        offset={17}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 10"
        offset={19}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 11"
        offset={21}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 12"
        offset={23}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 13"
        offset={25}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 14"
        offset={27}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 15"
        offset={29}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Deployment Slot 16"
        offset={31}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
