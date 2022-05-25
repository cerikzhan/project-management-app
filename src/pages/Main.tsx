import React from 'react';
import { useTranslation } from 'react-i18next';
import Boards from '../components/Boards';

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="paper">
      <h1>{t('board.boards_page')}</h1>
      <Boards />
    </div>
  );
};

export default Main;
