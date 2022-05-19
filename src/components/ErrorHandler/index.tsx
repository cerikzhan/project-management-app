import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

type BoxProps = {
  children: React.ReactNode;
};

const ErrorFallback: React.ComponentType<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h2>{t('errors.text')}</h2>
      <pre>
        {t('errors.head')}: {error.message}
      </pre>
      <button onClick={resetErrorBoundary}>{t('errors.again')}</button>
    </div>
  );
};

const ErrorHandler = (props: BoxProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>
);

export default ErrorHandler;
