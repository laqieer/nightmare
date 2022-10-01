import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8RandomItemProbabilityGroupTableEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE8RandomItemProbabilityGroupTable() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8D22C7;
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
        message="FE8 Random Item Probability Group Table"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8RandomItemProbabilityGroupTableEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8RandomItemProbabilityGroupTableEntries}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item 1"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item 2"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item 3"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item 4"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item 5"
        offset={4}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
