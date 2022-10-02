import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5ClassTerrainMovement,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE5TerrainMovementCostEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x312BD;
  const size = 44;
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
        message="FE5 Terrain Movement Cost Editor by Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5ClassTerrainMovement.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5ClassTerrainMovement}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Peaks"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Thicket"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Cliffs"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Plains"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Forest"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sea"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="River"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mountain"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Marsh"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fort"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Town"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gate"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Castle"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bridge"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Lake"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Village"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Storage House"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="House"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Armory"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Item Shop"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Arena"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Pillar"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={35}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={36}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={37}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={38}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={39}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={40}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={41}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="???"
        offset={43}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
