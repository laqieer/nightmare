import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE7BattleAnimationEditorEntries, AnimationTypes, WeaponAnimationType, AnimationList,
  AlwaysZero,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7BattleAnimationEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xC99058;
  const size = 4;
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
        message="FE7 Battle Animation Editor by Fire Blazer"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={id}
        onSelect={(value) => setSearchParams({ id: value })}
        options={FE7BattleAnimationEditorEntries}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={AnimationTypes}
        view={view}
        name="+00 Weapon Type"
        offset={0}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponAnimationType}
        view={view}
        name="+01 All weapons or a certain one?"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={AnimationList}
        view={view}
        name="+02 Animation Played"
        offset={2}
      />
      <InputDropbox
        type={DataType.U8}
        options={AlwaysZero}
        view={view}
        name="+03 Separator (always zero)"
        offset={3}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
