import React from 'react';
import { useNavigate } from 'react-router';
import {
  FolderOpenOutlined, SaveOutlined, CloseOutlined, GithubOutlined,
  HomeOutlined, ArrowLeftOutlined, ArrowRightOutlined,
} from '@ant-design/icons';
import {
  Button, Space, Upload, Row, Col,
} from 'antd';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const {
    filename, onFilenameChange, buffer, onBufferChange,
  } = props;
  const navigate = useNavigate();

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
          <Button
            shape="circle"
            title="home"
            icon={<HomeOutlined />}
            onClick={() => {
              navigate('..', { state: { buffer } });
            }}
          />
          <Button
            shape="circle"
            title="back"
            icon={<ArrowLeftOutlined />}
            onClick={() => {
              navigate(-1, { state: { buffer } });
            }}
          />
          <Button
            shape="circle"
            title="forward"
            icon={<ArrowRightOutlined />}
            onClick={() => {
              navigate(1, { state: { buffer } });
            }}
          />
        </Space>
      </Col>
      <Col flex="none">
        <div style={{ padding: '0 16px' }}>
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
};

Toolbar.defaultProps = {
  buffer: null,
};
