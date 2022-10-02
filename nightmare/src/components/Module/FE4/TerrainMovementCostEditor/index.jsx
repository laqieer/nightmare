import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4TerrainMovement,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE4TerrainMovementCostEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x39A9B;
  const size = 26;
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
        message="FE4 Terrain Movement Cost Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4TerrainMovement.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4TerrainMovement}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tall Mountain"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Deep Forest"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Cliff"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Plain"
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
        name="Desert"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Castle"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fortress"
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
        name="Castle Gate"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Rampart"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sand"
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
        name="Swamp"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Castle"
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
        name="Ruins"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Warehouse"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ruins"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Church"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Temple"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Blagi Tower"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Road"
        offset={25}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
