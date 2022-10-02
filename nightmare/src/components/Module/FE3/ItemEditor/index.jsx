import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3ItemList, FE3ItemType, FE3WeaponRange,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE3ItemEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x428E9;
  const size = 14;
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
        message="FE3 Item Editor by Camus, Peerless and mysticShadow"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3ItemList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3ItemList}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3ItemType}
        view={view}
        name="Item Type"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item Icon"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Level"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Might"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hit Rate"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical Rate"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Seperator?"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Uses"
        offset={8}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="Cost (x10)"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3WeaponRange}
        view={view}
        name="Range"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item No."
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item No."
        offset={13}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
