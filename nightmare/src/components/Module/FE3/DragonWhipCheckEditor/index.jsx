import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3DragonWhipCheckEditorEntries, FE3Classes, List2, List3,
  List4,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE3DragonWhipCheckEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x01F211;
  const size = 14;
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
        message="FE3 Dragon Whip Check Editor by Robert"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3DragonWhipCheckEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3DragonWhipCheckEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Class 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={List2}
        view={view}
        name="Action"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Class 2"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={List3}
        view={view}
        name="Action"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Class 3"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={List4}
        view={view}
        name="Action"
        offset={13}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
