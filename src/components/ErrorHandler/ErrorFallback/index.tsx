import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import cl from './../../ErrorHandler/errorhandler.module.scss';

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

export default ErrorFallback;
