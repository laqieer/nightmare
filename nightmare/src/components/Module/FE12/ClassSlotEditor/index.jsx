import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ClassSlotsEditor,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE12ClassSlotEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xDC9C;
  const size = 44;
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
        message="FE12 Class Slot Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={ClassSlotsEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={ClassSlotsEditor}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="Flier Slot"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Cav Slot"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Knight Slot"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Archer Slot"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Merc Slot"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Myrm Slot"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Fighter Slot"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Hunter Slot"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Pirate Slot"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Dark Mage Slot"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Mage Slot"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Cleric Slot"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
