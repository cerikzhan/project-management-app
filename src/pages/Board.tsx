import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSingleBoard } from '../store/reducers/actionCreators';
import { useParams } from 'react-router-dom';
import { BoardTemplate } from '../components/Board/BoardTemplate';

const Board: React.FC = () => {
  const params = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const boardId = params.id;
    if (boardId) {
      dispatch(fetchSingleBoard(boardId));
    }
  }, [dispatch, params.id]);

  const { board } = useAppSelector((state) => state);

  const { item } = board;

  if (!item) return <div>Some thing wrong</div>; // redirect to boards list page

  return (
    <div className="board-page">
      <div className={'board-page__header'}>
        <h1 className={'board-page__title'}>{item.title}</h1>
        <button className={'board-page__add-column'}>Add column</button>
      </div>
      <BoardTemplate />
    </div>
  );
};

export default Board;
