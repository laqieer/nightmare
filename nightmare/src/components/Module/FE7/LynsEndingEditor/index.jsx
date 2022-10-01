import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7LynsEndingEditorEntries, CharacterList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7LynsEndingEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xCEDD40;
  const size = 200;
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
        message="Lyn's Ending Editor by Fire Blazer/Keriku"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE7LynsEndingEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE7LynsEndingEditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U16}
        view={view}
        name="Lyn Hilltop Text"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={8}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={12}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={20}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={24}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={32}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={36}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={44}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={48}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={56}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={60}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={64}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={68}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={72}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={76}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={80}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={84}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={88}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={92}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={96}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={100}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={104}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={108}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={112}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={116}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={120}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={124}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={128}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={132}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={136}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={140}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={144}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={148}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={152}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={156}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={160}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={164}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={168}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={172}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={176}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={180}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={184}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Character"
        offset={188}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text"
        offset={192}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Text Injured"
        offset={196}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
