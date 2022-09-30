import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { getItem } from '../util';

export const HomeItems = getItem('Home', '/', <HomeOutlined />);

export default HomeItems;
