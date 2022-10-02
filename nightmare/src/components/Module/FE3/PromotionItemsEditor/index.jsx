import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE3PromotionItemsEditorEntries, FE3Classes,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE3PromotionItemsEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x0427F0;
  const size = 18;
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
        message="FE3 Promotion Items Editor by Robert"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE3PromotionItemsEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE3PromotionItemsEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Knight Crest"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Knight Crest"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Knight Crest"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Knight Crest"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Seperater"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Hero Crest"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Seperater"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Bishop Ring"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Bishop Ring"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Bishop Ring"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Seperater"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Dragon Whip"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Dragon Whip"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Dragon Whip"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Seperater"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Orion Bolt"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Orion Bolt"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassBasesEditor"
        options={FE3Classes}
        view={view}
        name="Orion Bolt"
        offset={17}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
