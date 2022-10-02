import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  TerrainData,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE12TerrainDataEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xEB80;
  const size = 4;
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
        message="FE12 Terrain Data Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={TerrainData.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={TerrainData}
        />
      </div>
      <InputDec
        type={DataType.S8}
        view={view}
        name="Avoid"
        offset={0}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Defense"
        offset={1}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Resistance"
        offset={2}
      />
      <InputDec
        type={DataType.S8}
        view={view}
        name="Heal"
        offset={3}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
