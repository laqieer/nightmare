import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ClassSkillTableEditorEntries, SkillBinaryDefinition,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4ClassSkillTableEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x7A446;
  const size = 58;
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
        message="FE4 Class Skill Table Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ClassSkillTableEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ClassSkillTableEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Canto"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Great Shield"
        offset={2}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Wrath"
        offset={4}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Pursuit"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Adept"
        offset={8}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Steal"
        offset={10}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Unused 1"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Dance"
        offset={14}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Unused 2"
        offset={16}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Valkyrie Music"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Dismount (Celice only)"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Charisma"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Unused 4"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Nihil"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Miracle"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Critical"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Vantage"
        offset={32}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Charge"
        offset={34}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Astra"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Luna"
        offset={38}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Sol"
        offset={40}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Light Sword"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Dark Sword"
        offset={44}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Renewal"
        offset={46}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Paragon"
        offset={48}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Cuan/Ethlin/Finn Immunity"
        offset={50}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Recover"
        offset={52}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Bargain"
        offset={54}
      />
      <InputDropbox
        isHex
        type={DataType.U16}
        options={SkillBinaryDefinition}
        view={view}
        name="Return"
        offset={56}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
