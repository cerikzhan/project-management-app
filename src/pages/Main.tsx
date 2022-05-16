import React from 'react';
import { useTranslation } from 'react-i18next';
import Boards from '../components/Boards';

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {t('board.boards_page')}
      <Boards />
    </>
  );
};

export default Main;
