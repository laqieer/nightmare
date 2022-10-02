import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3CharacterList, FE3Gender,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE3CharacterGrowthBaseEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x41401;
  const size = 17;
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
        message="FE3 Character Growth & Base Editor by Camus"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3CharacterList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3CharacterList}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Strength"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Skill"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Speed"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Luck"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Defense"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Resistance"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base Weapon Lvl."
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE3Gender}
        view={view}
        name="Gender"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Growth"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Luck Growth"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Resistance Growth"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Skill Growth"
        offset={16}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
