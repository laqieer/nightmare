import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1WeaponEffectivenessEditorEntries, Classnames,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE1WeaponEffectivenessEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3D95D;
  const size = 26;
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
        message="Weapon Effectiveness Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1WeaponEffectivenessEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1WeaponEffectivenessEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Rapier 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Rapier 2"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Rapier 3"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Rapier 4"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Bow 1"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Bow 2"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Type 3; unused"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Armourslayer 1"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Armourslayer 2"
        offset={11}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Horseslayer"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Divinestone"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Wyrmslayer 1"
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Wyrmslayer 2"
        offset={18}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Falchion"
        offset={20}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Type 9; unused"
        offset={22}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Thunderbolt"
        offset={24}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Seperator"
        offset={25}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
