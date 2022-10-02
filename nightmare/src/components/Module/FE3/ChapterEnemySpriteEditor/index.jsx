import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3ChapterList, FE3Classes,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE3ChapterEnemySpriteEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x50200;
  const size = 8;
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
        message="FE3 Chapter Enemy Sprite Editor by Robert"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3ChapterList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3ChapterList}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Class 1"
        offset={4}
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
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Class 3"
        offset={6}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
