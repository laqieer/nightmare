import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5SupportsEditorEntries, FE5CharacterList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE5SupportsEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x402CD;
  const size = 5;
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
        message="FE5 Supports Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5SupportsEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5SupportsEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="Character..."
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="gives a..."
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="CharacterEditor"
        options={FE5CharacterList}
        view={view}
        name="percent Hit/Crit/Evade bonus to..."
        offset={0}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
