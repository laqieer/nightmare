import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ChapterMusicEditorEntries, MusicList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ChapterMusicEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x1AC4D;
  const size = 130;
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
        message="FE4 Chapter Music Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ChapterMusicEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ChapterMusicEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Prologue Chapter Music"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 1 Music"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 2 Music"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 3 Music"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 4 Music"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 5 Music"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 6 Music"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 7 Music"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 8 Music"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 9 Music"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Chapter 10 Music"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Final Chapter Music"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={48}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={54}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={56}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={58}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={60}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Orgahil Phase"
        offset={62}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Silesia Phase"
        offset={64}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Silesia Phase"
        offset={66}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Silesia Phase"
        offset={68}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Silesia Phase"
        offset={70}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={72}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Isaac Phase"
        offset={74}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Isaac Phase"
        offset={76}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Isaac Phase"
        offset={78}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Isaac Phase"
        offset={80}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Isaac Phase"
        offset={82}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={84}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={86}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={88}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Verdane Phase (Ch.1)"
        offset={90}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Evans Phase (Ch.P)"
        offset={92}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Genoa Phase (Ch.1)"
        offset={94}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Marpha Phase (Ch.1)"
        offset={96}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={98}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={100}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={102}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={104}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={106}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={108}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={110}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={112}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={114}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={116}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={118}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={120}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={122}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={124}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={126}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="??? Phase"
        offset={128}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
