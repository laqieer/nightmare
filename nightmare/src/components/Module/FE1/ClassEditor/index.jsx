import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Classnames2,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE1ClassEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3EC40;
  const size = 9;
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
        message="FE1 Class Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Classnames2.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Classnames2}
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
        name="Skill"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weapon Level"
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
        name="Luck"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Defense"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Movement"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Hit Points"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Experience Points"
        offset={8}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
