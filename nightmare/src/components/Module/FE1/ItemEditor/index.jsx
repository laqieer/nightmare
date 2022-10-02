import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Itemlist, weaponlevel, effectiveness, weaponeffects,
  range,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE1ItemEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x3d667;
  const size = 1;
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
        message="FE1 Item Editor by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Itemlist.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Itemlist}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Might"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={weaponlevel}
        view={view}
        name="Weapon Level"
        offset={92}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Weight"
        offset={184}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Accuracy"
        offset={276}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Critical"
        offset={368}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Price (add a zero.)"
        offset={460}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="Durability"
        offset={552}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={effectiveness}
        view={view}
        name="Weapon Effective Damage"
        offset={644}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={weaponeffects}
        view={view}
        name="Weapon Effect"
        offset={784}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        options={range}
        view={view}
        name="Range, Item Usablity"
        offset={876}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
