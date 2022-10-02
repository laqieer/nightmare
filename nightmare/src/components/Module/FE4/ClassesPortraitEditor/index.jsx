import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Space, Alert, BackTop } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import {
  FE4ClassesPortraitEditorEntries,
} from './options';
import InputSelect from '../../../Input/InputSelect';
import InputHexArray from '../../../Input/InputHexArray';

export default function FE4ClassesPortraitEditor() {
  const [buffer] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const address = 0xBA1F8;
  const size = 144;
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
        message="FE4 Classes Portrait Editor"
        type="info"
      />
      <div key={id}>
        <InputSelect
          disabled={view == null}
          defaultValue={FE4ClassesPortraitEditorEntries.find(
            (entry) => entry.value.toString() === id,
          ) ?? id}
          onSelect={(value) => setSearchParams({ id: value })}
          options={FE4ClassesPortraitEditorEntries}
        />
      </div>
      <InputHexArray
        length={2}
        view={view}
        name="Social Knight"
        offset={0}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Lance Knight"
        offset={2}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Arch Knight"
        offset={4}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Axe Knight"
        offset={6}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Free Knight"
        offset={8}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Troubador"
        offset={10}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Lord Knight"
        offset={12}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Duke Knight"
        offset={14}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Master Knight"
        offset={16}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Paladin (Male)"
        offset={18}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Paladin (Female)"
        offset={20}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Bow Knight"
        offset={22}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Forrest Knight"
        offset={24}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Mage Knight"
        offset={26}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Great Knight"
        offset={28}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Pegasus Rider"
        offset={30}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Pegasus Knight"
        offset={32}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Falco Knight"
        offset={34}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dragon Rider"
        offset={36}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dragon Knight"
        offset={38}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dragon Master"
        offset={40}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Bow Fighter"
        offset={42}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Sword Fighter"
        offset={44}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Sword Master"
        offset={46}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Sniper"
        offset={48}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Forrest"
        offset={50}
      />
      <InputHexArray
        length={2}
        view={view}
        name="General"
        offset={52}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Emperor"
        offset={54}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Baron"
        offset={56}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Soldier"
        offset={58}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Spear Soldier"
        offset={60}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Axe Soldier"
        offset={62}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Archer"
        offset={64}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Sword Soldier"
        offset={66}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Armor"
        offset={68}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Axe Armor"
        offset={70}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Bow Armor"
        offset={72}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Sword Armor"
        offset={74}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Barbarian"
        offset={76}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Axe Fighter"
        offset={78}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Mountain Thief"
        offset={80}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Warrior"
        offset={82}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Hunter"
        offset={84}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Pirate"
        offset={86}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Junior Lord"
        offset={88}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Mage Fighter (Male)"
        offset={90}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Prince"
        offset={92}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Princess"
        offset={94}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Mage Fighter (Female)"
        offset={96}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Queen"
        offset={98}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dancer"
        offset={100}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Priest"
        offset={102}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Mage"
        offset={104}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Fire Mage"
        offset={106}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Thunder Mage"
        offset={108}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Wind Mage"
        offset={110}
      />
      <InputHexArray
        length={2}
        view={view}
        name="High Priest"
        offset={112}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Bishop"
        offset={114}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Sage"
        offset={116}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Bard"
        offset={118}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Shaman"
        offset={120}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dark Mage"
        offset={122}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dark Bishop"
        offset={124}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Thief"
        offset={126}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Thief Fighter"
        offset={128}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Civilian"
        offset={130}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Child"
        offset={132}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Long Arch"
        offset={134}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Iron Arch"
        offset={136}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Killer Arch"
        offset={138}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Gold Arch"
        offset={140}
      />
      <InputHexArray
        length={2}
        view={view}
        name="Dark Prince"
        offset={142}
      />

      <BackTop>
        <ToTopOutlined />
      </BackTop>
    </Space>
  );
}
