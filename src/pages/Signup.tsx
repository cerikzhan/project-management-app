import React from 'react';
import { useTranslation } from 'react-i18next';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('user.signup_page')}</div>;
};

export default Signup;
