import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE6SupportbonuseditorEntries, Affinity,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE6Supportbonuseditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x66350c;
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
        message="Support bonus editor by Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE6SupportbonuseditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Affinity}
        view={view}
        name="Affinity"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Attack bonus"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defence bonus"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Accuracy bonus"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Avoid bonus"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical bonus"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical avoid bonus"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
