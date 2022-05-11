import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { fetchBoard } from '../api/board.api';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Board: React.FC = () => {
  const { t } = useTranslation();
  const params = useParams();
  const { boards } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const boardId = params.id;
    if (boardId) {
      dispatch(fetchBoard(boardId));
    }
  }, [dispatch, params.id]);

  return (
    <div>
      {t('board.board_page')}
      {JSON.stringify(boards)}
    </div>
  );
};

export default Board;
