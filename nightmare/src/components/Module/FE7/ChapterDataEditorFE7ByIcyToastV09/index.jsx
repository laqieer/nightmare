import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Chapters, ChapterRef, ObjectSets, Palette1,
  SetConfig, Maps, TileAnim, TileChange,
  Preps, Weather, Battletileset, Music,
  MEdata, Prologues, Portraits, PrepNumbers,
  TitleFade, GoalWindow, Characters,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputDec from '../../../Input/InputDec';
import InputHex from '../../../Input/InputHex';

export default function FE7ChapterDataEditorFE7ByIcyToastV09() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xC9A200;
  const size = 152;
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
        message="Chapter Data Editor (FE7) - By Icy Toast - V 0.9.3"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={Chapters}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={ChapterRef}
        view={view}
        name="Chapter Reference Pointer"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ObjectSets}
        view={view}
        name="Object Set 1"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={ObjectSets}
        view={view}
        name="Object Set 2"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Palette1}
        view={view}
        name="Palette"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={SetConfig}
        view={view}
        name="Tile Configuration"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Maps}
        view={view}
        name="Map"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={TileAnim}
        view={view}
        name="Tile Animations"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={TileChange}
        view={view}
        name="Triggerable Map Changes"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Vision Distance (0 for infinite)"
        offset={12}
      />
      <InputDropbox
        type={DataType.U8}
        options={Preps}
        view={view}
        name="Preparations Screen"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 15 - EM Chapter ref.?"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 16 - HM Chapter ref.?"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 17"
        offset={16}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 18"
        offset={17}
      />
      <InputDropbox
        type={DataType.U8}
        options={Weather}
        view={view}
        name="Weather"
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
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 21 - Hard mode bonus levels?"
        offset={20}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 22"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="EM Player Phase BGM"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="EM Enemy Phase BGM"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="EM NPC Phase BGM"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="HM Player Phase BGM"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="HM Enemy Phase BGM"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="HM NPC Phase BGM"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="Secondary Player Phase BGM"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="Secondary Enemy Phase BGM"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="Worldmap Chapter Prologue BGM"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="EM Chapter Opening BGM/SFX"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={Music}
        view={view}
        name="HM Chapter Opening BGM/SFX"
        offset={42}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Destructible Walls HP"
        offset={44}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="ENM Tactics 5-Stars Turn Limit"
        offset={45}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="EHM Tactics 5-Stars Turn Limit"
        offset={46}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HNM Tactics 5-Stars Turn Limit"
        offset={47}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HHM Tactics 5-Stars Turn Limit"
        offset={48}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="ENM Tactics 4-Stars Turn Limit"
        offset={49}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="EHM Tactics 4-Stars Turn Limit"
        offset={50}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HNM Tactics 4-Stars Turn Limit"
        offset={51}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HHM Tactics 4-Stars Turn Limit"
        offset={52}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="ENM Tactics 3-Stars Turn Limit"
        offset={53}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="EHM Tactics 3-Stars Turn Limit"
        offset={54}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HNM Tactics 3-Stars Turn Limit"
        offset={55}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HHM Tactics 3-Stars Turn Limit"
        offset={56}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="ENM Tactics 2-Stars Turn Limit"
        offset={57}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="EHM Tactics 2-Stars Turn Limit"
        offset={58}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HNM Tactics 2-Stars Turn Limit"
        offset={59}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HHM Tactics 2-Stars Turn Limit"
        offset={60}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="ENM 5-Stars Exp Requirement"
        offset={62}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="EHM 5-Stars Exp Requirement"
        offset={64}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HNM 5-Stars Exp Requirement"
        offset={66}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HHM 5-Stars Exp Requirement"
        offset={68}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="ENM 4-Stars Exp Requirement"
        offset={70}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="EHM 4-Stars Exp Requirement"
        offset={72}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HNM 4-Stars Exp Requirement"
        offset={74}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HHM 4-Stars Exp Requirement"
        offset={76}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="ENM 3-Stars Exp Requirement"
        offset={78}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="EHM 3-Stars Exp Requirement"
        offset={80}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HNM 3-Stars Exp Requirement"
        offset={82}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HHM 3-Stars Exp Requirement"
        offset={84}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="ENM 2-Stars Exp Requirement"
        offset={86}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="EHM 2-Stars Exp Requirement"
        offset={88}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HNM 2-Stars Exp Requirement"
        offset={90}
      />
      <InputDec
        type={DataType.U16}
        view={view}
        name="HHM 2-Stars Exp Requirement"
        offset={92}
      />
      <InputDec
        type={DataType.U24}
        view={view}
        name="ENM Maximum Acquirable Funds"
        offset={96}
      />
      <InputDec
        type={DataType.U24}
        view={view}
        name="EHM Maximum Acquirable Funds"
        offset={100}
      />
      <InputDec
        type={DataType.U24}
        view={view}
        name="HNM Maximum Acquirable Funds"
        offset={104}
      />
      <InputDec
        type={DataType.U24}
        view={view}
        name="HHM Maximum Acquirable Funds"
        offset={108}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="EM Chapter Number Text"
        offset={112}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="EM Chapter Number Text Bank"
        offset={113}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="HM Chapter Number Text"
        offset={114}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="HM Chapter Number Text Bank"
        offset={115}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="EM Chapter Name Text"
        offset={116}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="EM Chapter Name Text Bank"
        offset={117}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="HM Chapter Name Text"
        offset={118}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="HM Chapter Name Text Bank"
        offset={119}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={MEdata}
        view={view}
        name="Event Data Reference"
        offset={120}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Prologues}
        view={view}
        name="Worldmap Chapter Prologue Scene"
        offset={121}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Pre-Augury Text"
        offset={122}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Pre-Augury Text Bank"
        offset={123}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="EM Augury Text"
        offset={124}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="EM Augury Text Bank"
        offset={125}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="HM Augury Text"
        offset={126}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Hm Augury Text Bank"
        offset={127}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Post-Augury Text"
        offset={128}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Post Augury Text Bank"
        offset={129}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Portraits}
        view={view}
        name="Augury Portrait"
        offset={130}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Augury Price"
        offset={131}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PrepNumbers}
        view={view}
        name="EM Preparation Screen Ch. No."
        offset={132}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={PrepNumbers}
        view={view}
        name="HM Preparation Screen Ch. No."
        offset={133}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="EM Merlinus X-Coordinate"
        offset={134}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="EM Merlinus Y-Coordinate"
        offset={136}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HM Merlinus X-Coordinate"
        offset={135}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="HM Merlinus Y-Coordinate"
        offset={137}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Enemy count for 'Winning Road'"
        offset={138}
      />
      <InputDropbox
        type={DataType.U8}
        options={TitleFade}
        view={view}
        name="Chapter Title Display Fade-out"
        offset={139}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Status - Objective Text"
        offset={140}
      />
      <InputHex
        type={DataType.U16}
        view={view}
        name="Goal Window Text"
        offset={142}
      />
      <InputDropbox
        type={DataType.U8}
        options={GoalWindow}
        view={view}
        name="Goal Window Information"
        offset={144}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Turns to count down to +1"
        offset={145}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={Characters}
        view={view}
        name="Protect Character Marker"
        offset={146}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Marker - X-Coordinate"
        offset={147}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Tile Marker - Y-Coordinate"
        offset={148}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 150"
        offset={149}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 151"
        offset={150}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Byte 152"
        offset={151}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
