import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4BattleMusicEditorEntries, MusicList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4BattleMusicEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x4B743;
  const size = 8619;
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
        message="FE4 Battle Music Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4BattleMusicEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4BattleMusicEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Arena"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Attack"
        offset={8582}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Defend"
        offset={8587}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Recruitable Fight"
        offset={8592}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Boss 1"
        offset={8597}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Boss 2"
        offset={8602}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="vs. Alvis"
        offset={8607}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="Lopto Cult Theme"
        offset={8612}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={MusicList}
        view={view}
        name="vs. Yurius"
        offset={8617}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
