import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4LoveConversationsEntries, FE4LoveTalks,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4LoveConversations() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x6E184;
  const size = 36;
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
        message="FE4 Love Conversations"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4LoveConversationsEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4LoveConversationsEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4LoveTalks}
        view={view}
        name="Conversation 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4LoveTalks}
        view={view}
        name="Conversation 2"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4LoveTalks}
        view={view}
        name="Conversation 3"
        offset={24}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
