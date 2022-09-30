/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Button, Result, Space,
} from 'antd';
import emailjs from '@emailjs/browser';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    // You can also log the error to an error reporting service
    try {
      emailjs.send('error_report_service', 'error_report_template', {
        error: error.stack,
        errorInfo: errorInfo.componentStack,
        appName: 'Nightmare 3',
        appLink: 'https://laqieer.github.io/nightmare',
      }).then((result) => {
        console.log(result.text);
      }, (err) => {
        console.warn(err.text);
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error != null) {
      // You can render any custom fallback UI
      return (
        <Result
          status="error"
          title="Error"
          subTitle="Sorry, an unexpected error has occurred:"
          extra={(
            <Space
              direction="vertical"
            >
              <Alert
                description={error.stack}
                message={error.toString()}
                type="error"
              />
              <Button
                type="primary"
                onClick={() => this.setState({ error: null })}
              >
                Refresh
              </Button>
            </Space>
          )}
        />
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
