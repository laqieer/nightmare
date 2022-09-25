import {
  FolderOpenOutlined, SaveOutlined, CloseOutlined, GithubOutlined,
} from '@ant-design/icons';
import {
  Button, Space, Upload, Row, Col, Switch,
} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const {
    filename, onFilenameChange, buffer, onBufferChange, theme, changeTheme,
  } = props;

  return (
    <Row wrap={false}>
      <Col flex="none">
        <div style={{ padding: '0 8px' }} />
      </Col>
      <Col flex="auto">
        <Space>
          <Upload
            showUploadList={false}
            maxCount={1}
            beforeUpload={(file) => {
              onFilenameChange(file.name);

              const reader = new FileReader();

              reader.onload = (e) => onBufferChange(e.target.result);
              reader.readAsArrayBuffer(file);

              // Prevent upload
              return false;
            }}
          >
            <Button
              shape="circle"
              title="open ROM"
              icon={<FolderOpenOutlined />}
              type={filename === '' || buffer === null ? 'primary' : 'default'}
            />
          </Upload>
          <Button
            shape="circle"
            title="save ROM"
            icon={<SaveOutlined />}
            disabled={filename === '' || buffer === null}
            type={filename === '' || buffer === null ? 'default' : 'primary'}
            onClick={() => {
              const a = document.createElement('a');
              a.href = URL.createObjectURL(new Blob(
                [buffer],
                { type: 'application/octet-stream' },
              ));
              a.download = filename;
              a.click();
            }}
          />
          <Button
            shape="circle"
            title="close ROM"
            icon={<CloseOutlined />}
            disabled={filename === '' || buffer === null}
            type={filename === '' || buffer === null ? 'default' : 'danger'}
            onClick={() => {
              onFilenameChange('');
              onBufferChange(null);
            }}
          />
        </Space>
      </Col>
      <Col flex="none">
        <div style={{ padding: '0 16px' }}>
          <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <Button
            type="text"
            href="https://github.com/laqieer/nightmare"
            icon={<GithubOutlined />}
          />
        </div>
      </Col>
    </Row>
  );
}

Toolbar.propTypes = {
  filename: PropTypes.string.isRequired,
  onFilenameChange: PropTypes.func.isRequired,
  buffer: PropTypes.instanceOf(ArrayBuffer),
  onBufferChange: PropTypes.func.isRequired,
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

Toolbar.defaultProps = {
  buffer: null,
  theme: 'dark',
  changeTheme: () => {},
};
