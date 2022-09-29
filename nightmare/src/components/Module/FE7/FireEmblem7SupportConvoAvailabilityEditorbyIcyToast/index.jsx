import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  SupportSlotList, Characters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE7FireEmblem7SupportConvoAvailabilityEditorbyIcyToast() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xC9F9F4;
  const size = 20;
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
        message="Fire Emblem 7 Support Convo Availability Editor (by Icy Toast)"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={SupportSlotList}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character 2"
        offset={1}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="C Support Convo"
        offset={4}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="B Support Convo"
        offset={8}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="A Support Convo"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="???"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="???"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="???"
        offset={16}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="???"
        offset={17}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="???"
        offset={18}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="???"
        offset={19}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
