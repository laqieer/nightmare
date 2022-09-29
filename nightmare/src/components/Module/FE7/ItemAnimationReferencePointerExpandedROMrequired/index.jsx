import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  FE7ItemAnimationReferencePointerExpandedROMrequiredEntries, AnimationAddress,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7ItemAnimationReferencePointerExpandedROMrequired() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x52B24;
  const size = 102084;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
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
        message="FE7 Item Animation Reference Pointer - Expanded ROM required"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={FE7ItemAnimationReferencePointerExpandedROMrequiredEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={AnimationAddress}
        view={view}
        name="Animations to Use"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={AnimationAddress}
        view={view}
        name="Another Animations to Use?"
        offset={102080}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
