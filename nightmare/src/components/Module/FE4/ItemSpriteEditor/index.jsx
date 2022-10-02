import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4WeaponEditor, FE4ItemSprites,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4ItemSpriteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x198925;
  const size = 2;
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
        message="FE4 Item Sprite Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4WeaponEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4WeaponEditor}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4ItemSprites}
        view={view}
        name="Sprite"
        offset={0}
      />
      <InputHexArray
        length={1}
        view={view}
        name="Palette"
        offset={1}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
