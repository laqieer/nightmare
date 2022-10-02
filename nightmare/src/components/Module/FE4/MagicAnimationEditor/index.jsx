import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4MagicAnimationEditorEntries, FE4WeaponList, FE4AnimationList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4MagicAnimationEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x19852D;
  const size = 3;
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
        message="FE4 Magic Animation Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4MagicAnimationEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4MagicAnimationEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE4WeaponList}
        view={view}
        name="Item Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4AnimationList}
        view={view}
        name="Close Range Animation"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4AnimationList}
        view={view}
        name="Long Range Animation"
        offset={2}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
