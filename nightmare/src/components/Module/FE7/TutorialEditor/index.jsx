import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7TutorialEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';

export default function FE7TutorialEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xC9EA2C;
  const size = 194;
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
        message="FE 7 Tutorial Editor by Fire Blazer/Keriku"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7TutorialEditorEntries}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={0}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={8}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={12}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={16}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={20}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={24}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={28}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={32}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={36}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={40}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={44}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={48}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={52}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={56}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={60}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={64}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={68}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={72}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={76}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={80}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={84}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={88}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={92}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={96}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={100}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={104}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={108}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={112}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={116}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={120}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={124}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={128}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={132}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={136}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={140}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={144}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={148}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={152}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={156}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={160}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={164}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={168}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={172}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={176}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={180}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={184}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Tutorial Stuff"
        offset={188}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
