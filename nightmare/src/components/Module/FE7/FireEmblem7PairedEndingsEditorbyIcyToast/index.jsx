import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  EndingsList, EndingTypeList, Characters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE7FireEmblem7PairedEndingsEditorbyIcyToast() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xCEE160;
  const size = 8;
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
        message="Fire Emblem 7 (Paired) Endings Editor (by Icy Toast)"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={EndingsList}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={EndingTypeList}
        view={view}
        name="Ending Type"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character 1"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Character 2"
        offset={2}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Ending Text Value"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
