import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  SupportPointer, Characters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE7SupportPointerEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xFFF800;
  const size = 24;
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
        message="FE7 Support Pointer Editor"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={SupportPointer}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Number of Supported Characters"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 1"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 1"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 1"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 2"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 2"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 2"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 3"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 3"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 3"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 4"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 4"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 4"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 5"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 5"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 5"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 6"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 6"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 6"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Person 7"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Level 7"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Growth Rate 7"
        offset={20}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Separator (Use 0x00)"
        offset={22}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Separator (Use 0x00)"
        offset={23}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
