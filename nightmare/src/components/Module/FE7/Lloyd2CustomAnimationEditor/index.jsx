import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  CustomAnimationEditor, AnimationTypes, WeaponAnimationType, AnimationList,
  AlwaysZero,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7Lloyd2CustomAnimationEditor() {
  const [buffer] = useOutletContext();

  const [index, setIndex] = useState(0);

  const address = 0xC995F4;
  const size = 12;
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
        message="Lloyd (2) Custom Animation Editor by Arch"
        type="info"
      />
      <InputSelect
        disabled={view == null}
        defaultValue={index}
        onSelect={(value) => setIndex(value)}
        options={CustomAnimationEditor}
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
      <InputDropbox
        isHex
        type={DataType.U8}
        options={AnimationTypes}
        view={view}
        name="+04 Weapon Type"
        offset={4}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponAnimationType}
        view={view}
        name="+05 All weapons or a certain one?"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={AnimationList}
        view={view}
        name="+06 Animation Played"
        offset={6}
      />
      <InputDropbox
        type={DataType.U8}
        options={AlwaysZero}
        view={view}
        name="+07 Separator (always zero)"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={AnimationTypes}
        view={view}
        name="+08 Weapon Type"
        offset={8}
      />
      <InputDropbox
        type={DataType.U8}
        options={WeaponAnimationType}
        view={view}
        name="+09 All weapons or a certain one?"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={AnimationList}
        view={view}
        name="+0A Animation Played"
        offset={10}
      />
      <InputDropbox
        type={DataType.U8}
        options={AlwaysZero}
        view={view}
        name="+0B Separator (always zero)"
        offset={11}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
