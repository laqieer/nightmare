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

export default function FE6Battlescreeneditorpart2() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x112a1c;
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
        message="Battle screen editor part 2 by Nintenlord"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={Coordinates}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (16,Y)"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (16,Y)"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (17,Y)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (17,Y)"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (18,Y)"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (18,Y)"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (19,Y)"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (19,Y)"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (20,Y)"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (20,Y)"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (21,Y)"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (21,Y)"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (22,Y)"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (22,Y)"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (23,Y)"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (23,Y)"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (24,Y)"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (24,Y)"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (25,Y)"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (25,Y)"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (26,Y)"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (26,Y)"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (27,Y)"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (27,Y)"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (28,Y)"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (28,Y)"
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (29,Y)"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (29,Y)"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (30,Y)"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (30,Y)"
        offset={29}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
