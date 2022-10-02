import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE10ClassEditor2Swordmaster,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE10ClassEditorSwordmaster() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x93EC;
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
        message="FE10 Class Editor-Swordmaster"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE10ClassEditor2Swordmaster.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE10ClassEditor2Swordmaster}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max HP"
        offset={36}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max STR"
        offset={37}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max MGC"
        offset={38}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max SKL"
        offset={39}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max SPD"
        offset={40}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max LUC"
        offset={41}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max DEF"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Max RES"
        offset={43}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base HP"
        offset={44}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base STR"
        offset={45}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base MGC"
        offset={46}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SKL"
        offset={47}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base SPD"
        offset={48}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base LUC"
        offset={49}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base DEF"
        offset={50}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Base RES"
        offset={51}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HP Growth"
        offset={52}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="STR Growth"
        offset={53}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="MGC Growth"
        offset={54}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SKL Growth"
        offset={55}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="SPD Growth"
        offset={56}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="LUC Growth"
        offset={57}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="DEF Growth"
        offset={58}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="RES Growth"
        offset={59}
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
