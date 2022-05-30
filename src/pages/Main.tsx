import React from 'react';
import { useTranslation } from 'react-i18next';
import Boards from '../components/Boards';
import { SearchBar } from '../components/Search';

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="boards__header">
        <h1>{t('board.boards_page')}</h1>
        <SearchBar />
      </div>

      <div className="paper">
        <Boards />
      </div>
    </>
  );
};

export default Main;
