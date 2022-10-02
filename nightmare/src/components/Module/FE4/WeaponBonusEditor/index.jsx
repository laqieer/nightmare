import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4WeaponBonusEditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE4WeaponBonusEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x38BED;
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
        message="FE4 Weapon Bonus Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4WeaponBonusEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4WeaponBonusEditorEntries}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Magic Defense"
        offset={5}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
