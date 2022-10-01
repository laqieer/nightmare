import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8BossQuoteEditorEntries, Characters, Chapters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE8BossQuoteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9EC6BC;
  const size = 16;
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
        message="FE8 Boss Quote Editor by flyingace24"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8BossQuoteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8BossQuoteEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={Characters}
        view={view}
        name="Initiator"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={Characters}
        view={view}
        name="Receiver"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ChapterDataEditor"
        options={Chapters}
        view={view}
        name="Chapter/Map"
        offset={4}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Trigger ID"
        offset={6}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text ID"
        offset={8}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
