import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8SpecialDeathQuoteEditorEntries, Characters, Chapters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE8SpecialDeathQuoteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9ECD4C;
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
        message="FE8 Boss/Special Death Quote Editor by flyingace24"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8SpecialDeathQuoteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8SpecialDeathQuoteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={Characters}
        view={view}
        name="Character"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ChapterDataEditor"
        options={Chapters}
        view={view}
        name="Chapter"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Event ID"
        offset={4}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text ID"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
