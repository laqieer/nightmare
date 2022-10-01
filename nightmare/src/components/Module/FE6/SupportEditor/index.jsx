import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  CharList, CharacterList,
} from './options';
import { DataType } from '../../../util';
import InputSelect from '../../../Input/InputSelect';
import InputDec from '../../../Input/InputDec';
import InputDropbox from '../../../Input/InputDropbox';

export default function FE6SupportEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0x662098;
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
        message="FE6 Support Editor, by Reikken"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={CharList.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={CharList}
        />
      </div>
      <InputDec
        type={DataType.U8}
        view={view}
        name="Number of supporters"
        offset={30}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="1: Supporter"
        offset={0}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="1: Starting points"
        offset={10}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="1: Support growth"
        offset={20}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="2: Supporter"
        offset={1}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="2: Starting points"
        offset={11}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="2: Support growth"
        offset={21}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="3: Supporter"
        offset={2}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="3: Starting points"
        offset={12}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="3: Support growth"
        offset={22}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="4: Supporter"
        offset={3}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="4: Starting points"
        offset={13}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="4: Support growth"
        offset={23}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="5: Supporter"
        offset={4}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="5: Starting points"
        offset={14}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="5: Support growth"
        offset={24}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="6: Supporter"
        offset={5}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="6: Starting points"
        offset={15}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="6: Support growth"
        offset={25}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="7: Supporter"
        offset={6}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="7: Starting points"
        offset={16}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="7: Support growth"
        offset={26}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="8: Supporter"
        offset={7}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="8: Starting points"
        offset={17}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="8: Support growth"
        offset={27}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="9: Supporter"
        offset={8}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="9: Starting points"
        offset={18}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="9: Support growth"
        offset={28}
      />
      <InputDropbox
        isHex
        type={DataType.U8}
        reference="CharacterEditor"
        options={CharacterList}
        view={view}
        name="10: Supporter"
        offset={9}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="10: Starting points"
        offset={19}
      />
      <InputDec
        type={DataType.U8}
        view={view}
        name="10: Support growth"
        offset={29}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
