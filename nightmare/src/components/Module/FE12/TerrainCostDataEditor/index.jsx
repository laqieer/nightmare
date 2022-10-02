import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  TerrainCostData,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE12TerrainCostDataEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xEBF0;
  const size = 28;
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
        message="FE12 Terrain Cost Data Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={TerrainCostData.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={TerrainCostData}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="___ / Wall"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Plain / Bridge / Bone"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Forest"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Desert"
        offset={3}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Ledge"
        offset={4}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Village"
        offset={5}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Closed Village"
        offset={6}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Ruined Village"
        offset={7}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="House / Armory / Vendor / Arena"
        offset={8}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Fence"
        offset={9}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Fort"
        offset={10}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Castle Gate"
        offset={11}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Castle"
        offset={12}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Mountain"
        offset={13}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Cave"
        offset={14}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Peak"
        offset={15}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="River"
        offset={16}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Sea"
        offset={17}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Lava"
        offset={18}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Floor / Stairs"
        offset={19}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Pillar"
        offset={20}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Throne"
        offset={21}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Chest"
        offset={22}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Door"
        offset={23}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Drawbridge"
        offset={24}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Altar"
        offset={25}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="???"
        offset={26}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="???"
        offset={27}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
