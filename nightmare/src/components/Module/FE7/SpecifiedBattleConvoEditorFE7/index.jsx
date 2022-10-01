import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7SpecifiedBattleConvoEditorFE7Entries, Characters, Chapters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE7SpecifiedBattleConvoEditorFE7() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xC9EDA0;
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
        message="Specified Battle Convo Editor (FE7) - By Icy Toast"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE7SpecifiedBattleConvoEditorFE7Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE7SpecifiedBattleConvoEditorFE7Entries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={Characters}
        view={view}
        name="Character #1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={Characters}
        view={view}
        name="Character #2"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ChapterDataEditorFE7"
        options={Chapters}
        view={view}
        name="Chapter"
        offset={2}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Convo Text"
        offset={4}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Event Data Pointer"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Trigger ID (See Readme)"
        offset={12}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
