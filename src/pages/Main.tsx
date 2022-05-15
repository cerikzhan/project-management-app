import React, { useEffect } from 'react';
import { fetchAllBoards } from '../store/reducers/actionCreators';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { RootState } from '../store/store';
import { useTranslation } from 'react-i18next';

const Main: React.FC = () => {
  const { boards } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);
  const { t } = useTranslation();
  return (
    <div>
      {t('board.boards_page')}
      {JSON.stringify(boards)}
    </div>
  );
};

export default Main;
