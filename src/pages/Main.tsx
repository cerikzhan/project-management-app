import React from 'react';
import { useTranslation } from 'react-i18next';
import Boards from '../components/Boards';

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('board.boards_page')}</h1>
      <div className="paper">
        <Boards />
      </div>
    </>
  );
};

export default Main;
