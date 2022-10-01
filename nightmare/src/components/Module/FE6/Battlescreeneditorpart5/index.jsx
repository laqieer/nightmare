import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE6Battlescreeneditorpart5Entries, Block, PaletteFlip,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6Battlescreeneditorpart5() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x112C84;
  const size = 80;
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
        message="Battle screen editor part 5 by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE6Battlescreeneditorpart5Entries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE6Battlescreeneditorpart5Entries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,0)"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,0)"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,0)"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,0)"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block  (31,1)"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,1)"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,1)"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,1)"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,2)"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,2)"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,2)"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,2)"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,3)"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,3)"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,3)"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,3)"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,4)"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,4)"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,4)"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,4)"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,5)"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,5)"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,5)"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,5)"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,6)"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,6)"
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,6)"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,6)"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,7)"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,7)"
        offset={29}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,7)"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,7)"
        offset={31}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,8)"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,8)"
        offset={33}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,8)"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,8)"
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,9)"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,9)"
        offset={37}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,9)"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,9)"
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,10)"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,10)"
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,10)"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,10)"
        offset={43}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,11)"
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,1)"
        offset={45}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,11)"
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,11)"
        offset={47}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,12)"
        offset={48}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,12)"
        offset={49}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,12)"
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,12)"
        offset={51}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,13)"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,13)"
        offset={53}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,13)"
        offset={54}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,13)"
        offset={55}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,14)"
        offset={56}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,14)"
        offset={57}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,14)"
        offset={58}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,14)"
        offset={59}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,15)"
        offset={60}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,15)"
        offset={61}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,15)"
        offset={62}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,15)"
        offset={63}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,16)"
        offset={64}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,16)"
        offset={65}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,16)"
        offset={66}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,16)"
        offset={67}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,17)"
        offset={68}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,17)"
        offset={69}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,17)"
        offset={70}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,17)"
        offset={71}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,18)"
        offset={72}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,18)"
        offset={73}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,18)"
        offset={74}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,18)"
        offset={75}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (31,19)"
        offset={76}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (31,19)"
        offset={77}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Block}
        view={view}
        name="Block (-1,19)"
        offset={78}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PaletteFlip}
        view={view}
        name="Palette and Flipping (-1,19)"
        offset={79}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
