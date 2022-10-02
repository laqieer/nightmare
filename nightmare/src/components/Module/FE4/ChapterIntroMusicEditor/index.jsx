import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ChapterIntroMusicEditorEntries, MusicList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ChapterIntroMusicEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x11F9B7;
  const size = 24;
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
        message="FE4 Chapter Intro Music Editor by Lamia"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ChapterIntroMusicEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ChapterIntroMusicEditorEntries}
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

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
