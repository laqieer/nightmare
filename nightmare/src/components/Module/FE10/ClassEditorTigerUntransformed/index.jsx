import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE10ClassEditor37,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE10ClassEditorTigerUntransformed() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xc8d8;
  const size = 116;
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
        message="FE10 Class Editor-Tiger(Untransformed)"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE10ClassEditor37.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE10ClassEditor37}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max HP"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max STR"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max MGC"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max SKL"
        offset={35}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max SPD"
        offset={36}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max LUC"
        offset={37}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max DEF"
        offset={38}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max RES"
        offset={39}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={40}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base STR"
        offset={41}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base MGC"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SKL"
        offset={43}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SPD"
        offset={44}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base LUC"
        offset={45}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base DEF"
        offset={46}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base RES"
        offset={47}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={48}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR Growth"
        offset={49}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MGC Growth"
        offset={50}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Growth"
        offset={51}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Growth"
        offset={52}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="LUC Growth"
        offset={53}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Growth"
        offset={54}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="RES Growth"
        offset={55}
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
