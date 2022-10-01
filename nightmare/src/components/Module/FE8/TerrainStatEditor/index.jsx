import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  MovementTypes,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';

export default function FE8TerrainStatEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x80B808;
  const size = 65;
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
        message="FE8 Terrain Stat Editor by Vennobennu - With thanks to Blazer and Keriku"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={MovementTypes.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={MovementTypes}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Movement Cost"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Plains Movement Cost"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Road Movement Cost"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Village Entrance 1 Movement Cost"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Village Entrance 2 Movement Cost"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="House Movement Cost"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Armory Movement Cost"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Vendor Movement Cost"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Arena 1 Movement Cost"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Unknown Movement Cost"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fort Movement Cost"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gate (Normal) Movement Cost"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Forest Movement Cost"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Thicket Movement Cost"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sand Movement Cost"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Desert Movement Cost"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="River Movement Cost"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mountain Movement Cost"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Peak Movement Cost"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bridge Movement Cost"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bridge 2 Movement Cost"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sea Movement Cost"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Lake Movement Cost"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Floor Movement Cost"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Floor 2 Movement Cost"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fence 1 Movement Cost"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Wall Movement Cost"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Cracked Wall Movement Cost"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Rubble Movement Cost"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Pillar Movement Cost"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Door Movement Cost"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Throne Movement Cost"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Chest 1 Movement Cost"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Chest 2 Movement Cost"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Roof Movement Cost"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gate 2 Movement Cost"
        offset={35}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Church Movement Cost"
        offset={36}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ruins 1 Movement Cost"
        offset={37}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Cliff Movement Cost"
        offset={38}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ballista  Movement Cost"
        offset={39}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Long Ballista  Movement Cost"
        offset={40}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Killer Ballista  Movement Cost"
        offset={41}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Flat Movement Cost"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Wreck Movement Cost"
        offset={43}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Building 1 Movement Cost"
        offset={44}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Stairs Movement Cost"
        offset={45}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Building 2 Movement Cost"
        offset={46}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Glacier  Movement Cost"
        offset={47}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Arena  Movement Cost"
        offset={48}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Valley Movement Cost"
        offset={49}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fence 2 Movement Cost"
        offset={50}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Snag Movement Cost"
        offset={51}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Snag Bridge Movement Cost"
        offset={52}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sky Movement Cost"
        offset={53}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Deeps Movement Cost"
        offset={54}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ruins 2 Movement Cost"
        offset={55}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Inn Movement Cost"
        offset={56}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Barrel Movement Cost"
        offset={57}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bone Movement Cost"
        offset={58}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Dark Movement Cost"
        offset={59}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Water Movement Cost"
        offset={60}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gunnels Movement Cost"
        offset={61}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Deck Movement Cost"
        offset={62}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Brace Movement Cost"
        offset={63}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mast Movement Cost"
        offset={64}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
