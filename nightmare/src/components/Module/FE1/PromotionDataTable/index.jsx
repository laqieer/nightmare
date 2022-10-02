import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE1PromotionDataTableEntries, Classnames,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE1PromotionDataTable() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x198ad;
  const size = 15;
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
        message="Promotion Data Table by Darrman"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE1PromotionDataTableEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE1PromotionDataTableEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Knight Crest 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Hero Crest 1"
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Guiding Ring 1"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Orion's Bolt 1"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Elysian Whip 1"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Knight Crest 2"
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Hero Crest 2"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Guiding Ring 2"
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Orion's Bolt 2"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Promotes with Elysian Whip 2"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Result of Knight Crest"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Result of Hero Crest"
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Result of Guiding Ring"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Result of Orion's Bolt"
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={Classnames}
        view={view}
        name="Result of Elysian Whip"
        offset={14}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
