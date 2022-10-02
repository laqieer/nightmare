import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4Fe4MapSpriteEditorEntries, FE4Gender, FE4MapSpriteEditor,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHexArray from '../../../Input/InputHexArray';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4Fe4MapSpriteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x0382EE;
  const size = 20;
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
        message="Fe4 Map Sprite Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4Fe4MapSpriteEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4Fe4MapSpriteEditorEntries}
        />
      </div>
      <InputHexArray
        length={2}
        view={view}
        name="Char no 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4MapSpriteEditor}
        view={view}
        name="Sprite"
        offset={3}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Char no 2"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4MapSpriteEditor}
        view={view}
        name="Sprite"
        offset={8}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Char no 3"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4MapSpriteEditor}
        view={view}
        name="Sprite"
        offset={13}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Char no 4"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4MapSpriteEditor}
        view={view}
        name="Sprite"
        offset={18}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
