import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8Chapter2ArmouryEditorEntries, ItemList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Chapter2ArmouryEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9ED7CC;
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
        message="Chapter 2 Armoury Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8Chapter2ArmouryEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8Chapter2ArmouryEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 2"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 3"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 4"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={ItemList}
        view={view}
        name="Item 5"
        offset={8}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
