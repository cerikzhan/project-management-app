import React, { useEffect } from 'react';
import { fetchAllBoards } from '../api/board.api';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { RootState } from '../store/store';
import { useTranslation } from 'react-i18next';

const Main: React.FC = () => {
  const { boards } = useAppSelector((state: RootState) => state.boards);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);
  const { t } = useTranslation();
  return (
    <div>
      {t('board.boards_page')}
      {boards.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Main;
