import React, { useEffect } from 'react';
import { fetchAllBoards } from '../api/board.api';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { RootState } from '../store/store';

const Main: React.FC = () => {
  const { boards } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);

  return (
    <div>
      Projects page
      {JSON.stringify(boards)}
    </div>
  );
};

export default Main;
