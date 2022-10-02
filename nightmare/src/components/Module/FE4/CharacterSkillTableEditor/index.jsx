import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4CharacterSkillTableEditorEntries, SkillBinaryDefinition,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE4CharacterSkillTableEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x7A3ED;
  const size = 87;
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
        message="FE4 Character Skill Table Editor by Lorena"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4CharacterSkillTableEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4CharacterSkillTableEditorEntries}
        />
      </div>
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Canto"
        offset={0}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Great Shield"
        offset={3}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Wrath"
        offset={6}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Pursuit"
        offset={9}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Adept"
        offset={12}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Steal"
        offset={15}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Unused 1"
        offset={18}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Dance"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Unused 2"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Valkyrie Music"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Dismount (Celice only)"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Charisma"
        offset={33}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Unused 4"
        offset={36}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Nihil"
        offset={39}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Miracle"
        offset={42}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Critical"
        offset={45}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Vantage"
        offset={48}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Charge"
        offset={51}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Astra"
        offset={54}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Luna"
        offset={57}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Sol"
        offset={60}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Light Sword"
        offset={63}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Dark Sword"
        offset={66}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Renewal"
        offset={69}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Paragon"
        offset={72}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Cuan/Ethlin/Finn Immunity"
        offset={75}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Recover"
        offset={78}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Bargain"
        offset={81}
      />
      <InputDropbox
        isHex
        type={DataType.U32}
        options={SkillBinaryDefinition}
        view={view}
        name="Return"
        offset={84}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
