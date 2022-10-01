import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE8PromotionleveleditorEntries,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE8Promotionleveleditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x0291f6;
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
        message="FE8 Promotion level editor by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE8PromotionleveleditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE8PromotionleveleditorEntries}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Promotion level - 1"
        offset={0}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
