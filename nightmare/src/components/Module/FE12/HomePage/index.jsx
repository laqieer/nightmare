import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Space } from 'antd';

export default function FE12HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: 'Chapter0UnitEditor', state: { buffer } }}>Chapter 0 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter1UnitEditor', state: { buffer } }}>Chapter 1 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter10UnitEditor', state: { buffer } }}>Chapter 10 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter10xUnitEditor', state: { buffer } }}>Chapter 10x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter11UnitEditor', state: { buffer } }}>Chapter 11 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter12UnitEditor', state: { buffer } }}>Chapter 12 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter13UnitEditor', state: { buffer } }}>Chapter 13 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter13xUnitEditor', state: { buffer } }}>Chapter 13x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter14UnitEditor', state: { buffer } }}>Chapter 14 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter15UnitEditor', state: { buffer } }}>Chapter 15 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter16UnitEditor', state: { buffer } }}>Chapter 16 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter16xUnitEditor', state: { buffer } }}>Chapter 16x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter17UnitEditor', state: { buffer } }}>Chapter 17 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter18UnitEditor', state: { buffer } }}>Chapter 18 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter19UnitEditor', state: { buffer } }}>Chapter 19 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter2UnitEditor', state: { buffer } }}>Chapter 2 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter20UnitEditor', state: { buffer } }}>Chapter 20 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter20xUnitEditor', state: { buffer } }}>Chapter 20x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter21UnitEditor', state: { buffer } }}>Chapter 21 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter22UnitEditor', state: { buffer } }}>Chapter 22 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter23UnitEditor', state: { buffer } }}>Chapter 23 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter24UnitEditor', state: { buffer } }}>Chapter 24 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter3UnitEditor', state: { buffer } }}>Chapter 3 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter3xUnitEditor', state: { buffer } }}>Chapter 3x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter4UnitEditor', state: { buffer } }}>Chapter 4 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter5UnitEditor', state: { buffer } }}>Chapter 5 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter6UnitEditor', state: { buffer } }}>Chapter 6 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter6xUnitEditor', state: { buffer } }}>Chapter 6x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter7UnitEditor', state: { buffer } }}>Chapter 7 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter8UnitEditor', state: { buffer } }}>Chapter 8 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter9UnitEditor', state: { buffer } }}>Chapter 9 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterBSFE1UnitEditor', state: { buffer } }}>Chapter BSFE1 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterBSFE2UnitEditor', state: { buffer } }}>Chapter BSFE2 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterBSFE3UnitEditor', state: { buffer } }}>Chapter BSFE3 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterBSFE4UnitEditor', state: { buffer } }}>Chapter BSFE4 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterDL1UnitEditor', state: { buffer } }}>Chapter DL1 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterDL2UnitEditor', state: { buffer } }}>Chapter DL2 Unit Editor</Link>
      <Link to={{ pathname: 'ChapterDL3UnitEditor', state: { buffer } }}>Chapter DL3 Unit Editor</Link>
      <Link to={{ pathname: 'CharacterEditor', state: { buffer } }}>FE12 Character Editor</Link>
      <Link to={{ pathname: 'ClassEditorU', state: { buffer } }}>FE12 Class Editor (U)</Link>
      <Link to={{ pathname: 'ClassSlotEditor', state: { buffer } }}>FE12 Class Slot Editor</Link>
      <Link to={{ pathname: 'ItemEditorU', state: { buffer } }}>FE12 Item Editor (U)</Link>
      <Link to={{ pathname: 'TerrainCostDataEditor', state: { buffer } }}>FE12 Terrain Cost Data Editor</Link>
      <Link to={{ pathname: 'TerrainDataEditor', state: { buffer } }}>FE12 Terrain Data Editor</Link>
    </Space>
  );
}
