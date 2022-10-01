import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8Ch11EphraimrecruitmenteditorEntries, CharacterList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Ch11Ephraimrecruitmenteditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x9EA568;
  const size = 16;
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
        message="FE8 Ch 11 Ephraim recruitment editor by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8Ch11EphraimrecruitmenteditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8Ch11EphraimrecruitmenteditorEntries}
        />
      </div>
      <InputHex
        type={DataType.U8}
        view={view}
        name="Event number"
        offset={2}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Pointer to event"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Recruiter"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Recruited"
        offset={9}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
