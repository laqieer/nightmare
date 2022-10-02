import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE5DismountEditorEntries, ClassList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE5DismountEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x40200;
  const size = 60;
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
        message="FE5 Mount/Dismount Editor By Pukachi"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE5DismountEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE5DismountEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={1}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={29}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={31}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={5}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={33}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={7}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={35}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={37}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={11}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={13}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={41}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={43}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={17}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={45}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={19}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={47}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={48}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={49}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={51}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={53}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={54}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="\/ Mounts to..."
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="ClassEditor"
        options={ClassList}
        view={view}
        name="/\ Dismounts to..."
        offset={55}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
