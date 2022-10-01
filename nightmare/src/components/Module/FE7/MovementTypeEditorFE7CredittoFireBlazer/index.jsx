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

export default function FE7MovementTypeEditorFE7CredittoFireBlazer() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xBE3888;
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
        message="Movement Type Editor (FE7) - Credit to Fire Blazer"
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
        name="Tile Movement Point Cost"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Plain Tile Movement Point Cost"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Road Tile Movement Point Cost"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Village Tile Movement Point Cost"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Village Tile Movement Point Cost"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="House Tile Movement Point Cost"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Armory Tile Movement Point Cost"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Vendor Tile Movement Point Cost"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Arena Tile Movement Point Cost"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="C. Room Tile Movement Point Cost"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fort Tile Movement Point Cost"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gate Tile Movement Point Cost"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Forest Tile Movement Point Cost"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Thicket Tile Movement Point Cost"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sand Tile Movement Point Cost"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Desert Tile Movement Point Cost"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="River Tile Movement Point Cost"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mntn Tile Movement Point Cost"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Peak Tile Movement Point Cost"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bridge Tile Movement Point Cost"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bridge Tile Movement Point Cost"
        offset={20}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sea Tile Movement Point Cost"
        offset={21}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Lake Tile Movement Point Cost"
        offset={22}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Floor Tile Movement Point Cost"
        offset={23}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Floor Tile Movement Point Cost"
        offset={24}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fence Tile Movement Point Cost"
        offset={25}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Wall Tile Movement Point Cost"
        offset={26}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Wall Tile Movement Point Cost"
        offset={27}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Rubble Tile Movement Point Cost"
        offset={28}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Pillar Tile Movement Point Cost"
        offset={29}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Door Tile Movement Point Cost"
        offset={30}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Throne Tile Movement Point Cost"
        offset={31}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Chest Tile Movement Point Cost"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Chest Tile Movement Point Cost"
        offset={33}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Roof Tile Movement Point Cost"
        offset={34}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gate Tile Movement Point Cost"
        offset={35}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Church Tile Movement Point Cost"
        offset={36}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ruins Tile Movement Point Cost"
        offset={37}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Cliff Tile Movement Point Cost"
        offset={38}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ballista Tile Movement Point Cost"
        offset={39}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Long B Tile Movement Point Cost"
        offset={40}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Killer B Tile Movement Point Cost"
        offset={41}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Flat Tile Movement Point Cost"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Wreck Tile Movement Point Cost"
        offset={43}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Movement Point Cost"
        offset={44}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Stairs Tile Movement Point Cost"
        offset={45}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Movement Point Cost"
        offset={46}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Glacier Tile Movement Point Cost"
        offset={47}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Arena Tile Movement Point Cost"
        offset={48}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Valley Tile Movement Point Cost"
        offset={49}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fence Tile Movement Point Cost"
        offset={50}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Snag Tile Movement Point Cost"
        offset={51}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bridge Tile Movement Point Cost"
        offset={52}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Sky Tile Movement Point Cost"
        offset={53}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Deeps Tile Movement Point Cost"
        offset={54}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Ruins Tile Movement Point Cost"
        offset={55}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Inn Tile Movement Point Cost"
        offset={56}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Barrel Tile Movement Point Cost"
        offset={57}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Bone Tile Movement Point Cost"
        offset={58}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Dark Tile Movement Point Cost"
        offset={59}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Water Tile Movement Point Cost"
        offset={60}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Gunnel Tile Movement Point Cost"
        offset={61}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Deck Tile Movement Point Cost"
        offset={62}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Brace Tile Movement Point Cost"
        offset={63}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Mast Tile Movement Point Cost"
        offset={64}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
