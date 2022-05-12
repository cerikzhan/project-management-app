import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcome.head')}</h1>
      <div dangerouslySetInnerHTML={{ __html: t('welcome.text') }} />
    </div>
  );
};

export default Home;
