import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3SupportEditorEntries, FE3Names,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE3SupportEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x44F31;
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
        message="Support Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3SupportEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3SupportEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Supporter Unit"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Names}
        view={view}
        name="Supported Unit"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bonus"
        offset={2}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
