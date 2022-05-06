import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { fetchBoard } from '../store/reducers/actionCreators';
import { useParams } from 'react-router-dom';

const Board: React.FC = () => {
  const params = useParams();
  const { boards } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBoard(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      Project page
      {JSON.stringify(boards)}
    </div>
  );
};

export default Board;
