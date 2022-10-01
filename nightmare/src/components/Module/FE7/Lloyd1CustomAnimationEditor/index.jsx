import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  CustomAnimationEditor, AnimationTypes, WeaponAnimationType, AnimationList,
  AlwaysZero,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE7Lloyd1CustomAnimationEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xC995E8;
  const size = 12;
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
        message="Lloyd (1) Custom Animation Editor by Arch"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={CustomAnimationEditor.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={CustomAnimationEditor}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ItemEditor"
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
        reference="AnimationPointerTableEditor"
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
        reference="ItemEditor"
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
        reference="AnimationPointerTableEditor"
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
        reference="ItemEditor"
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
        reference="AnimationPointerTableEditor"
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
