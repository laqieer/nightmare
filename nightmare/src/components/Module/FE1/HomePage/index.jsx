import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Space } from 'antd';

export default function FE1HomePage() {
  const [buffer] = useOutletContext();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%' }}
    >
      <Link to={{ pathname: 'BossMusicEditor', state: { buffer } }}>Boss Music Editor</Link>
      <Link to={{ pathname: 'Chapter10UnitDeploymentEditor', state: { buffer } }}>Chapter 10 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter11UnitDeploymentEditor', state: { buffer } }}>Chapter 11 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter12UnitDeploymentEditor', state: { buffer } }}>Chapter 12 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter13UnitDeploymentEditor', state: { buffer } }}>Chapter 13 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter14UnitDeploymentEditor', state: { buffer } }}>Chapter 14 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter15UnitDeploymentEditor', state: { buffer } }}>Chapter 15 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter16UnitDeploymentEditor', state: { buffer } }}>Chapter 16 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter17UnitDeploymentEditor', state: { buffer } }}>Chapter 17 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter18UnitDeploymentEditor', state: { buffer } }}>Chapter 18 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter19UnitDeploymentEditor', state: { buffer } }}>Chapter 19 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter2UnitDeploymentEditor', state: { buffer } }}>Chapter 2 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter20UnitDeploymentEditor', state: { buffer } }}>Chapter 20 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter21UnitDeploymentEditor', state: { buffer } }}>Chapter 21 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter22UnitDeploymentEditor', state: { buffer } }}>Chapter 22 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter23UnitDeploymentEditor', state: { buffer } }}>Chapter 23 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter24UnitDeploymentEditor', state: { buffer } }}>Chapter 24 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter25UnitDeploymentEditor', state: { buffer } }}>Chapter 25 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter3UnitDeploymentEditor', state: { buffer } }}>Chapter 3 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter4UnitDeploymentEditor', state: { buffer } }}>Chapter 4 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter5UnitDeploymentEditor', state: { buffer } }}>Chapter 5 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter6UnitDeploymentEditor', state: { buffer } }}>Chapter 6 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter7UnitDeploymentEditor', state: { buffer } }}>Chapter 7 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter8UnitDeploymentEditor', state: { buffer } }}>Chapter 8 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'Chapter9UnitDeploymentEditor', state: { buffer } }}>Chapter 9 Unit Deployment Editor</Link>
      <Link to={{ pathname: 'ChapterUnitEditor', state: { buffer } }}>Chapter Unit Editor</Link>
      <Link to={{ pathname: 'Charactereditor1FE1', state: { buffer } }}>Character editor 1 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor2FE1', state: { buffer } }}>Character editor 2 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor3FE1', state: { buffer } }}>Character editor 3 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor4FE1', state: { buffer } }}>Character editor 4 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor5FE1', state: { buffer } }}>Character editor 5 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor6FE1', state: { buffer } }}>Character editor 6 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor7FE1', state: { buffer } }}>Character editor 7 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor8FE1', state: { buffer } }}>Character editor 8 (FE1) -</Link>
      <Link to={{ pathname: 'Charactereditor9FE1', state: { buffer } }}>Character editor 9 (FE1) -</Link>
      <Link to={{ pathname: 'ClassWeaponUsablityPointerEditor', state: { buffer } }}>Class Weapon Usablity Pointer Editor</Link>
      <Link to={{ pathname: 'Mappointerseditor', state: { buffer } }}>FE 1 Map pointers editor</Link>
      <Link to={{ pathname: 'Chapter17SecretShopEditor', state: { buffer } }}>FE1 Chapter 17 Secret Shop Editor</Link>
      <Link to={{ pathname: 'Chapter21SecretShopEditor', state: { buffer } }}>FE1 Chapter 21 Secret Shop Editor</Link>
      <Link to={{ pathname: 'Chapter23SecretShopEditor', state: { buffer } }}>FE1 Chapter 23 Secret Shop Editor</Link>
      <Link to={{ pathname: 'Chapter24SecretShopEditor', state: { buffer } }}>FE1 Chapter 24 Secret Shop Editor</Link>
      <Link to={{ pathname: 'ClassEditor', state: { buffer } }}>FE1 Class Editor</Link>
      <Link to={{ pathname: 'GrowthRatesEditor', state: { buffer } }}>FE1 Growth Rates Editor</Link>
      <Link to={{ pathname: 'ItemEditor', state: { buffer } }}>FE1 Item Editor</Link>
      <Link to={{ pathname: 'ItemNameEditor', state: { buffer } }}>FE1 Item Name Editor</Link>
      <Link to={{ pathname: 'ItemTypeEditor', state: { buffer } }}>FE1 Item Type Editor</Link>
      <Link to={{ pathname: 'ShopEditor1', state: { buffer } }}>FE1 Shop Editor 1</Link>
      <Link to={{ pathname: 'ShopEditor2', state: { buffer } }}>FE1 Shop Editor 2</Link>
      <Link to={{ pathname: 'ShopEditor3', state: { buffer } }}>FE1 Shop Editor 3</Link>
      <Link to={{ pathname: 'ShopEditor4', state: { buffer } }}>FE1 Shop Editor 4</Link>
      <Link to={{ pathname: 'ShopEditor5', state: { buffer } }}>FE1 Shop Editor 5</Link>
      <Link to={{ pathname: 'ShopEditor6', state: { buffer } }}>FE1 Shop Editor 6</Link>
      <Link to={{ pathname: 'ShopEditor7', state: { buffer } }}>FE1 Shop Editor 7</Link>
      <Link to={{ pathname: 'ShopEditor8', state: { buffer } }}>FE1 Shop Editor 8</Link>
      <Link to={{ pathname: 'ShopEditor9', state: { buffer } }}>FE1 Shop Editor 9</Link>
      <Link to={{ pathname: 'VendorEditor1', state: { buffer } }}>FE1 Vendor Editor 1</Link>
      <Link to={{ pathname: 'VendorEditor2', state: { buffer } }}>FE1 Vendor Editor 2</Link>
      <Link to={{ pathname: 'VendorEditor3', state: { buffer } }}>FE1 Vendor Editor 3</Link>
      <Link to={{ pathname: 'VendorEditor4', state: { buffer } }}>FE1 Vendor Editor 4</Link>
      <Link to={{ pathname: 'VendorEditor5', state: { buffer } }}>FE1 Vendor Editor 5</Link>
      <Link to={{ pathname: 'VendorEditor6', state: { buffer } }}>FE1 Vendor Editor 6</Link>
      <Link to={{ pathname: 'VendorEditor7', state: { buffer } }}>FE1 Vendor Editor 7</Link>
      <Link to={{ pathname: 'PromotionDataTable', state: { buffer } }}>Promotion Data Table</Link>
      <Link to={{ pathname: 'RecruitmentEditor', state: { buffer } }}>Recruitment Editor</Link>
      <Link to={{ pathname: 'WeaponEffectivenessEditor', state: { buffer } }}>Weapon Effectiveness Editor</Link>
    </Space>
  );
}
