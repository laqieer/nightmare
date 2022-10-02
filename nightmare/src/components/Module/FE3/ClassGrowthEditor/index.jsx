import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3ClassList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE3ClassGrowthEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xA00D7;
  const size = 6;
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
        message="FE3 Class Growth Editor by Camus"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3ClassList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3ClassList}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Strength Growth"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Skill Growth"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Speed Growth"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense Growth"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Resistance Growth"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={5}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
