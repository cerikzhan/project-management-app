import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

type ErrorProps = {
  children: React.ReactNode;
};

const ErrorHandler = (props: ErrorProps) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>;
};

export default ErrorHandler;
