import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Characterlist, Classlist, Itemlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE2CharacterEditorFE2() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x210F2;
  const size = 12;
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
        message="Character Editor (FE2) - By VincentASM - V 0.1"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Characterlist.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Characterlist}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="Char No."
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditorFE2"
        options={Classlist}
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
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Exp"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defence"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Magic spell"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Itemlist}
        view={view}
        name="Equipment"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
