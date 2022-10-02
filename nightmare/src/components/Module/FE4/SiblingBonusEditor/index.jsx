import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4SiblingBonusEditorEntries, FE4SiblingNumbers,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4SiblingBonusEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x7BF0A;
  const size = 104;
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
        message="FE4 Sibling Bonus Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4SiblingBonusEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4SiblingBonusEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 1"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 2"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 3"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 4"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 5"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 6"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 7"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 8"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 9"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 10"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 11"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 12"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 13"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 14"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 15"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 16"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 17"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 18"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 19"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 20"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 21"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 22"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 23"
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 24"
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 25"
        offset={48}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 26"
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 27"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 28"
        offset={54}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 29"
        offset={56}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 30"
        offset={58}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 31"
        offset={60}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 32"
        offset={62}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 33"
        offset={64}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 34"
        offset={66}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 35"
        offset={68}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 36"
        offset={70}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 37"
        offset={72}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 38"
        offset={74}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 39"
        offset={76}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 40"
        offset={78}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 41"
        offset={80}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 42"
        offset={82}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 43"
        offset={84}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 44"
        offset={86}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 45"
        offset={88}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 46"
        offset={90}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 47"
        offset={92}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 48"
        offset={94}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 49"
        offset={96}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 50"
        offset={98}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 51"
        offset={100}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={FE4SiblingNumbers}
        view={view}
        name="Character 52"
        offset={102}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
