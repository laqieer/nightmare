import React from 'react';
import { FolderOutlined } from '@ant-design/icons';
import { getItem } from '../../util';

export const FE11Items = getItem('FE11', 'FE11', <FolderOutlined />, [
  getItem('Chapter 1 Unit Editor', 'FE11/Chapter1UnitEditor'),
  getItem('FEDS Character Editor (U)', 'FE11/FEDSCharacterEditorU'),
  getItem('FEDS Class Editor (U)', 'FE11/FEDSClassEditorU'),
  getItem('FEDS Item Editor (U)', 'FE11/FEDSItemEditorU'),
]);

export default FE11Items;
