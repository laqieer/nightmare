import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  PromotionBranchList, ClassList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8PromotionBranchEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x95DFA6;
  const size = 2;
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
        message="FE8 Promotion Branch Editor by SpyroDi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={PromotionBranchList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={PromotionBranchList}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class Selection 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class Selection 2"
        offset={1}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
