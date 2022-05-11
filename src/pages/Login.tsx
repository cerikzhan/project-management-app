import React from 'react';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('user.login_page')}</div>;
};

export default Login;
