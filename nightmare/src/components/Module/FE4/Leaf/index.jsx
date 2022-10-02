import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ChildrenEditor1, FE4CharacterType, FE4Classes, FE4CharacterNumbers,
  FE4CharacterNameNumbers, FE4Gender, FE4PlayerEquipment, FE4Influence,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE4Leaf() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3B7F7;
  const size = 126;
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
        message="FE4 Children Editor 1 (Celice/Leaf)"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ChildrenEditor1.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ChildrenEditor1}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4CharacterType}
        view={view}
        name="Character Type"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={FE4Classes}
        view={view}
        name="Class"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Level"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNumbers}
        view={view}
        name="Char no."
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4CharacterNameNumbers}
        view={view}
        name="Char Name"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unit Number"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Gender}
        view={view}
        name="Gender"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 1"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4PlayerEquipment}
        view={view}
        name="Equipment 2"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE4Influence}
        view={view}
        name="Major Influnce"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
