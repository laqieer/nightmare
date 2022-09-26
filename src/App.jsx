import React, { useState } from 'react';
import './App.css';
import {
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { FolderOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Toolbar from './components/Toolbar';

const {
  Header, Content, Footer, Sider,
} = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '/', <HomeOutlined />),
  getItem('FE6', 'FE6', <FolderOutlined />, [
    getItem('Character', 'FE6/Character'),
  ]),
  getItem('FE7', 'FE7', <FolderOutlined />, [
    getItem('Animation Pointer Table', 'FE7/AnimationPointerTable'),
  ]),
];

export default function App() {
  const [buffer, setBuffer] = useState(null);
  const [filename, setFilename] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('0');
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        theme={theme}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme={theme}
          mode="inline"
          items={items}
          selectedKeys={[current]}
          onClick={({ key }) => {
            navigate(key, { state: { buffer } });
            setCurrent(key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Toolbar
            buffer={buffer}
            onBufferChange={(buf) => setBuffer(buf)}
            filename={filename}
            onFilenameChange={(fn) => setFilename(fn)}
            theme={theme}
            changeTheme={(value) => setTheme(value ? 'dark' : 'light')}
          />
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet context={[buffer]} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Nightmare 3 ©2022 Created by laqieer
        </Footer>
      </Layout>
    </Layout>
  );
}
