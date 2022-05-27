import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('welcome.head')}</h1>
      <div className="paper">
        <div dangerouslySetInnerHTML={{ __html: t('welcome.text') }} />
      </div>
    </>
  );
};

export default Home;
