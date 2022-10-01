import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Coordinates, Block, PaletteFlip,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE8Battlescreeneditorpart1() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x80210C;
  const size = 30;
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
        message="Battle screen editor part 1 by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Coordinates.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Coordinates}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (1,Y)"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (1,Y)"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (Y,2,Y)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (2,Y)"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (3,Y)"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (3,Y)"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (4,Y)"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (4,Y)"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (5,Y)"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (5,Y)"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (6,Y)"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (6,Y)"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (7,Y)"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (7,Y)"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (8,Y)"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (8,Y)"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (9,Y)"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (9,Y)"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (10,Y)"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (10,Y)"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (11,Y)"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (11,Y)"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (12,Y)"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (12,Y)"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (13,Y)"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (13,Y)"
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (14,Y)"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (14,Y)"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (15,Y)"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (15,Y)"
        offset={29}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
