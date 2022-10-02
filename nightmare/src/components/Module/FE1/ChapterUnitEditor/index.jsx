import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1ChapterUnitEditorEntries, Chardata, Classlist, Itemlist,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE1ChapterUnitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x20AE5;
  const size = 11;
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
        message="Chapter Unit Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1ChapterUnitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1ChapterUnitEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chardata}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classlist}
        view={view}
        name="Class"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Level"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Item"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={Itemlist}
        view={view}
        name="Dropped Item"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Y-coordinate"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="X-coordinate"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="AI settings?"
        offset={7}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Unknown"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Y-coordinate for guardAI?"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="X-coordinate for guardAI?"
        offset={10}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
