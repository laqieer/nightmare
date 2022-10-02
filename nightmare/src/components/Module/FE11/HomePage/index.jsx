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
      <Link to={{ pathname: 'FEDSCharacterEditorU', state: { buffer } }}>FEDS Character Editor (U)</Link>
      <Link to={{ pathname: 'FEDSClassEditorU', state: { buffer } }}>FEDS Class Editor (U)</Link>
      <Link to={{ pathname: 'FEDSItemEditorU', state: { buffer } }}>FEDS Item Editor (U)</Link>
    </Space>
  );
}
