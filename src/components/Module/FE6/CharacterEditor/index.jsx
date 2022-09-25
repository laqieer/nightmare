import { Space, Alert } from 'antd';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';
import InputSelect from '../../../Input/InputSelect';
import { DataType } from '../../../util';
import { FE6CharacterList, CharacterList } from '../options';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6CharacterEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x6076A0;
  const size = 48;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
  } catch (error) {
    view = null;
  }

  return (
    <Space
      direction="vertical"
    >
      <Alert
        message="FE6 Character Editor"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE6CharacterList}
      />
      <InputHex
        view={view}
        name="Name Pointer"
        offset={0}
        type={DataType.U16}
      />
      <InputHex
        view={view}
        name="Description Pointer"
        offset={2}
        type={DataType.U16}
      />
      <InputDropbox
        view={view}
        name="Character Number"
        offset={4}
        type={DataType.U8}
        options={CharacterList}
      />
      <InputDec
        view={view}
        name="Level"
        offset={11}
        type={DataType.U8}
      />
      <InputDec
        view={view}
        name="Base HP"
        offset={12}
        type={DataType.S8}
      />
    </Space>
  );
}
