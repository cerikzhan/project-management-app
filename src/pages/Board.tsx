import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSingleBoard } from '../store/reducers/actionCreators';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Board: React.FC = () => {
  const { t } = useTranslation();

  const params = useParams();
  const { board } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const boardId = params.id;
    if (boardId) {
      dispatch(fetchSingleBoard(boardId));
    }
  }, [dispatch, params.id]);

  return (
    <div>
      {t('board.board_page')}
      {JSON.stringify(board)}
    </div>
  );
};

export default Board;
