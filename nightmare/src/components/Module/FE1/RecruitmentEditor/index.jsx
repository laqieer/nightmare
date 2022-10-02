import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1RecruitmentEditorEntries, Chardata,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE1RecruitmentEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3EDC5;
  const size = 1;
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
        message="Recruitment Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1RecruitmentEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1RecruitmentEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chardata}
        view={view}
        name="Recruiter"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chardata}
        view={view}
        name="Recruited Enemy"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Recruitment Conversation"
        offset={29}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Chardata}
        view={view}
        name="Enemy's Player ID"
        offset={43}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
