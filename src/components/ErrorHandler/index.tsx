import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import cl from './errorhandler.module.scss';

type ErrorProps = {
  children: React.ReactNode;
};

const ErrorHandler = (props: ErrorProps) => {
  const ErrorFallback: React.ComponentType<FallbackProps> = ({ error, resetErrorBoundary }) => {
    const { t } = useTranslation();
    return (
      <div className="container">
        <div className={cl.alert}>
          <h2>{t('errors.text')}</h2>
          <p>
            {t('errors.head')}: {error.message}
          </p>
          <button className="button" onClick={resetErrorBoundary}>
            {t('errors.again')}
          </button>
        </div>
      </div>
    );
  };

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>;
};

export default ErrorHandler;
