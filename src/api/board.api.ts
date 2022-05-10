import { createAsyncThunk } from '@reduxjs/toolkit';
import request from './request';
import { Board, BoardItem } from '../types/Entities/Board';

//возвращает массив досок
export const fetchAllBoards = createAsyncThunk('boards/fetchAllBoards', async () => {
  return request.get<Board[]>('/boards');
});

//возвращает доску по ее id
export const fetchBoard = createAsyncThunk('boards/fetchBoard', async (boardId: string) => {
  return request.get<BoardItem>(`/boards/${boardId}`);
});
