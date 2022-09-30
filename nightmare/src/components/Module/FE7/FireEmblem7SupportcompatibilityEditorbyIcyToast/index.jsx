import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  SupportCharacterList, Characters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7FireEmblem7SupportcompatibilityEditorbyIcyToast() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xC98B18;
  const size = 24;
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
        message="Fire Emblem 7 Support compatibility Editor (by Icy Toast)"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={SupportCharacterList}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Total Number of Supports"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #1"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #1"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #1"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #2"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #2"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #2"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #3"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #3"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #3"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #4"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #4"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #4"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #5"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #5"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #5"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #6"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #6"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #6"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Support partner #7"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Initial Support Count #7"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Support Gain Per Turn #7"
        offset={20}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
