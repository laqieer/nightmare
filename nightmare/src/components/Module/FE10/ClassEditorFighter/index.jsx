import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE10ClassEditor6,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE10ClassEditorFighter() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x98c4;
  const size = 112;
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
        message="FE10 Class Editor-Fighter"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE10ClassEditor6.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE10ClassEditor6}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max HP"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max STR"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max MGC"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max SKL"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max SPD"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max LUC"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max DEF"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max RES"
        offset={35}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={36}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base STR"
        offset={37}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base MGC"
        offset={38}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SKL"
        offset={39}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SPD"
        offset={40}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base LUC"
        offset={41}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base DEF"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base RES"
        offset={43}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={44}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR Growth"
        offset={45}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MGC Growth"
        offset={46}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Growth"
        offset={47}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Growth"
        offset={48}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="LUC Growth"
        offset={49}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Growth"
        offset={50}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="RES Growth"
        offset={51}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Movement"
        offset={9}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
