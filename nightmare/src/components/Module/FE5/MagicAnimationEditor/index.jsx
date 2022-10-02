import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5MagicAnimationEditorEntries, FE5ItemData, FE5AnimationList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5MagicAnimationEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x491EC;
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
        message="FE5 Magic Animation Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5MagicAnimationEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5MagicAnimationEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
        options={FE5ItemData}
        view={view}
        name="Item Number"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5AnimationList}
        view={view}
        name="Close Range Animation"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE5AnimationList}
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
