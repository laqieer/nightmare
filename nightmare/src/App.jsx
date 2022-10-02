import React, { useState } from 'react';
import './App.css';
import {
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { items } from './items';
import ErrorBoundary from './components/ErrorBoundary';
import Toolbar from './components/Toolbar';

const {
  Header, Content, Footer, Sider,
} = Layout;

export default function App() {
  const [buffer, setBuffer] = useState(null);
  const [filename, setFilename] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState('0');
  const navigate = useNavigate();
  const theme = 'dark';

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
            <ErrorBoundary>
              <Outlet context={[buffer]} />
            </ErrorBoundary>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Nightmare 3 ©2022 Created by
          {' '}
          <a href="https://laqieer.github.io/">laqieer</a>
        </Footer>
      </Layout>
    </Layout>
  );
}
