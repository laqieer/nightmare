import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4CharNameEditorbase39C59Entries,
} from './options';
import InputSelect from '../../../Input/InputSelect';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4CharNameEditorbase39C59() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x39C59;
  const size = 32;
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
        message="FE4 Char Name Editor (base $39C59)"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4CharNameEditorbase39C59Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4CharNameEditorbase39C59Entries}
        />
      </div>
      <InputHexArray
        length={2}
        view={view}
        name="00"
        offset={0}
      />
      <InputHexArray
        length={2}
        view={view}
        name="01"
        offset={2}
      />
      <InputHexArray
        length={2}
        view={view}
        name="02"
        offset={4}
      />
      <InputHexArray
        length={2}
        view={view}
        name="03"
        offset={6}
      />
      <InputHexArray
        length={2}
        view={view}
        name="04"
        offset={8}
      />
      <InputHexArray
        length={2}
        view={view}
        name="05"
        offset={10}
      />
      <InputHexArray
        length={2}
        view={view}
        name="06"
        offset={12}
      />
      <InputHexArray
        length={2}
        view={view}
        name="07"
        offset={14}
      />
      <InputHexArray
        length={2}
        view={view}
        name="08"
        offset={16}
      />
      <InputHexArray
        length={2}
        view={view}
        name="09"
        offset={18}
      />
      <InputHexArray
        length={2}
        view={view}
        name="0A"
        offset={20}
      />
      <InputHexArray
        length={2}
        view={view}
        name="0B"
        offset={22}
      />
      <InputHexArray
        length={2}
        view={view}
        name="0C"
        offset={24}
      />
      <InputHexArray
        length={2}
        view={view}
        name="0D"
        offset={26}
      />
      <InputHexArray
        length={2}
        view={view}
        name="0E"
        offset={28}
      />
      <InputHexArray
        length={2}
        view={view}
        name="0F"
        offset={30}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
