import React, { useEffect } from 'react';
import cl from './boards.module.scss';
import './../../assets/library/toggle.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { fetchAllBoards } from '../../api/board.api';

const Boards: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);
  const { boards } = useAppSelector((state: RootState) => state);
  return (
    <div className={cl.boards}>
      <div className={cl.boards__item}>{JSON.stringify(boards)}</div>
    </div>
  );
};

export default Boards;
