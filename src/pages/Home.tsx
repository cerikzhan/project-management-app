import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('components.welcome_page')}</div>;
};

export default Home;
