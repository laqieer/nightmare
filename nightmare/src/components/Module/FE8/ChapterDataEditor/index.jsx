import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  ChapterList, Pointers, BattlePreparations, WeatherConditions,
  Battletileset, MusicList, Worldmapprologue, Fadeout,
  GoalWindow, CharacterList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputHex from '../../../Input/InputHex';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';

export default function FE8ChapterDataEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8B0890;
  const size = 148;
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
        message="FE8 Chapter Data Editor by SpyroDi, updated by Nintenlord"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={ChapterList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={ChapterList}
        />
      </div>
      <InputHex
        type={DataType.U32}
        view={view}
        name="Chapter Number Pointer"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Object Type"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Palette"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Tile Configuration"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Map"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Tile Animation 1"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Tile Animation 2"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Triggerable Map Changes"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Fog of War sight level (0 = No fog)"
        offset={12}
      />
      <InputDropbox
        type={DataType.U8}
        options={BattlePreparations}
        view={view}
        name="Battle Preparations"
        offset={13}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeatherConditions}
        view={view}
        name="Weather Condition"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Battletileset}
        view={view}
        name="Battle tileset"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Player Phase music"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Enemy Phase music"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="NPC Phase music"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Player Phase music 2"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Enemy Phase music 2"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="NPC Phase music 2"
        offset={32}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Destructible Walls HP"
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="Eventtableeditor"
        options={Pointers}
        view={view}
        name="Event Data Reference"
        offset={116}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Worldmapprologue}
        view={view}
        name="Worldmap Chapter Prologue Scene"
        offset={117}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="No. of enemies left for Grasping at Victory"
        offset={134}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Fadeout}
        view={view}
        name="Chapter Title Display Fade-out"
        offset={135}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Status - Objective Text"
        offset={136}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Goal Window Text"
        offset={138}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={GoalWindow}
        view={view}
        name="Goal Window Information"
        offset={140}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Turns to count down to +1"
        offset={141}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="Protect Character Marker"
        offset={142}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Marker - X-Coordinate"
        offset={143}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Marker - Y-Coordinate"
        offset={144}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
