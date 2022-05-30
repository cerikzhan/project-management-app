import { useAppDispatch, useAppSelector } from './redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchAllBoards } from '../store/reducers/actionCreators';
import { BoardItem } from '../types/Entities/Board';

export const useBoards = (): [BoardItem[]] => {
  const dispatch = useAppDispatch();
  const { boards, searchText } = useAppSelector((state: RootState) => state.boards);

  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);

  const filterBoards = () =>
    boards.filter((board) => {
      return (
        board.title.toLowerCase().includes(searchText.toLowerCase()) ||
        board.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });

  const filteredBoards = filterBoards();

  return [filteredBoards];
};
