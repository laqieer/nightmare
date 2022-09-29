import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  ChapterList, Pointerlist, ChapterOpenings, Weather,
  CombatTiles, FE6SongList, MiniPortraits,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE6ChapterDataEditorFE6() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0x6637A4;
  const size = 68;
  let view = null;

  try {
    view = new DataView(buffer, address + size * index, size);
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
        message="Chapter Data Editor (FE6) - By Kate & Arch - V 0.8.0"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={ChapterList}
      />
      <InputHex
        type={DataType.U32}
        view={view}
        name="Chapter Number Pointer"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Object Set part 1"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Object Set part 2"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Palette"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Tile Configuration"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Map"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Tile Animations Part 1"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Tile Animations Part 2"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Triggerable Map Changes"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fog Vision Distance (0 for no fog)"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ChapterOpenings}
        view={view}
        name="Chapter Opening"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Chapter Name"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 16 (Unknown)"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 17 (Unknown)"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Weather}
        view={view}
        name="Weather"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={CombatTiles}
        view={view}
        name="Combat Tiles"
        offset={18}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Hard Mode Enemy Stat Bonuses?"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE6SongList}
        view={view}
        name="Player Phase BGM"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE6SongList}
        view={view}
        name="Enemy Phase BGM"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE6SongList}
        view={view}
        name="NPC Phase BGM"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE6SongList}
        view={view}
        name="Chapter Introduction BGM"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={FE6SongList}
        view={view}
        name="Ch. Opening BGM"
        offset={24}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={25}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={26}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={28}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={30}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={32}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={34}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={36}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={38}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={40}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={42}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={44}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={45}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={46}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={47}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Goal Text (Data Screen)"
        offset={48}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Ally Army Title"
        offset={50}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Enemy Army Title"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MiniPortraits}
        view={view}
        name="Enemy Emblem (Data Screen)"
        offset={54}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={55}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={56}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={57}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Event Data Reference"
        offset={58}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Pointerlist}
        view={view}
        name="Worldmap Pre-Chapter Scene"
        offset={59}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="(Unknown)"
        offset={60}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={62}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={64}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="(Unknown)"
        offset={66}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
