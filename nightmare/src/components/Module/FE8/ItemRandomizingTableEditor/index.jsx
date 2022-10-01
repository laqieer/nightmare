import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  Classes, ClassList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';
import InputHex from '../../../Input/InputHex';

export default function FE8ItemRandomizingTableEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x8D2440;
  const size = 32;
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
        message="FE8 Item Randomizing Table Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={Classes.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={Classes}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="Class"
        offset={0}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Item Group 1"
        offset={1}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Item Group 2"
        offset={2}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Item Group 3"
        offset={3}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Item Group 4"
        offset={4}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Item Group 5"
        offset={5}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Item Group 1"
        offset={6}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Item Group 2"
        offset={7}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Item Group 3"
        offset={8}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Item Group 4"
        offset={9}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Item Group 5"
        offset={10}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability 1"
        offset={11}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability 2"
        offset={12}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability 3"
        offset={13}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability 4"
        offset={14}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability 5"
        offset={15}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability 1"
        offset={16}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability 2"
        offset={17}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability 3"
        offset={18}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability 4"
        offset={19}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability 5"
        offset={20}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability Group 1"
        offset={21}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability Group 2"
        offset={22}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability Group 3"
        offset={23}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability Group 4"
        offset={24}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="First Slot Probability Group 5"
        offset={25}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability Group 1"
        offset={26}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability Group 2"
        offset={27}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability Group 3"
        offset={28}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability Group 4"
        offset={29}
      />
      <InputHex
        type={DataType.U8}
        view={view}
        name="Second Slot Probability Group 5"
        offset={30}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
