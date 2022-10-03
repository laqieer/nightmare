import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Space } from 'antd';

export default function FE11HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: 'Chapter1UnitEditor', state: { buffer } }}>Chapter 1 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter10UnitEditor', state: { buffer } }}>Chapter 10 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter11UnitEditor', state: { buffer } }}>Chapter 11 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter12UnitEditor', state: { buffer } }}>Chapter 12 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter12xUnitEditor', state: { buffer } }}>Chapter 12x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter13UnitEditor', state: { buffer } }}>Chapter 13 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter14UnitEditor', state: { buffer } }}>Chapter 14 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter15UnitEditor', state: { buffer } }}>Chapter 15 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter16UnitEditor', state: { buffer } }}>Chapter 16 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter17UnitEditor', state: { buffer } }}>Chapter 17 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter17xUnitEditor', state: { buffer } }}>Chapter 17x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter18UnitEditor', state: { buffer } }}>Chapter 18 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter19UnitEditor', state: { buffer } }}>Chapter 19 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter2UnitEditor', state: { buffer } }}>Chapter 2 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter20UnitEditor', state: { buffer } }}>Chapter 20 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter20xUnitEditor', state: { buffer } }}>Chapter 20x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter21UnitEditor', state: { buffer } }}>Chapter 21 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter22UnitEditor', state: { buffer } }}>Chapter 22 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter23UnitEditor', state: { buffer } }}>Chapter 23 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter24UnitEditor', state: { buffer } }}>Chapter 24 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter24xUnitEditor', state: { buffer } }}>Chapter 24x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter25UnitEditor', state: { buffer } }}>Chapter 25 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter3UnitEditor', state: { buffer } }}>Chapter 3 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter4UnitEditor', state: { buffer } }}>Chapter 4 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter5UnitEditor', state: { buffer } }}>Chapter 5 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter6UnitEditor', state: { buffer } }}>Chapter 6 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter6xUnitEditor', state: { buffer } }}>Chapter 6x Unit Editor</Link>
      <Link to={{ pathname: 'Chapter7UnitEditor', state: { buffer } }}>Chapter 7 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter8UnitEditor', state: { buffer } }}>Chapter 8 Unit Editor</Link>
      <Link to={{ pathname: 'Chapter9UnitEditor', state: { buffer } }}>Chapter 9 Unit Editor</Link>
      <Link to={{ pathname: 'FEDSCharacterEditorU', state: { buffer } }}>FEDS Character Editor (U)</Link>
      <Link to={{ pathname: 'FEDSClassEditorU', state: { buffer } }}>FEDS Class Editor (U)</Link>
      <Link to={{ pathname: 'FEDSClassEditorUpdate', state: { buffer } }}>FEDS Class Editor (Update)</Link>
      <Link to={{ pathname: 'FEDSItemEditorU', state: { buffer } }}>FEDS Item Editor (U)</Link>
      <Link to={{ pathname: 'FEDSItemEditorUpdate', state: { buffer } }}>FEDS Item Editor (Update)</Link>
      <Link to={{ pathname: 'Prologue1UnitEditor', state: { buffer } }}>Prologue 1 Unit Editor</Link>
      <Link to={{ pathname: 'Prologue2UnitEditor', state: { buffer } }}>Prologue 2 Unit Editor</Link>
      <Link to={{ pathname: 'Prologue3UnitEditor', state: { buffer } }}>Prologue 3 Unit Editor</Link>
      <Link to={{ pathname: 'Prologue4UnitEditor', state: { buffer } }}>Prologue 4 Unit Editor</Link>
    </Space>
  );
}
