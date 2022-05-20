import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSingleBoard } from '../store/reducers/actionCreators';
import { useParams } from 'react-router-dom';
import { BoardTemplate } from '../components/Board/BoardTemplate';
import Spinner from '../components/Spinner';

const Board: React.FC = () => {
  const params = useParams();

  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state);
  const { item } = board;

  useEffect(() => {
    const boardId = params.id;
    if (boardId) {
      dispatch(fetchSingleBoard(boardId));
    }
  }, [dispatch, params.id]);

  if (!item) {
    return <div>Some thing wrong</div>; // redirect to boards list page
  }

  return (
    <Spinner>
      <div className="board-page">
        <div className={'board-page__header'}>
          <h1 className={'board-page__title'}>{item.title}</h1>
          <button className={'board-page__add-column'}>Add column</button>
        </div>
        <BoardTemplate />
      </div>
    </Spinner>
  );
};

export default Board;
