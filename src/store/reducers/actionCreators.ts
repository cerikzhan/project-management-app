//import axios from '../../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { boardsData } from './../../mockdata/boards';
//возвращает массив досок
export const fetchAllBoards = createAsyncThunk('boards/fetchAllBoards', async () => {
  //Тут нужно вызвать axios get запрос для получения всех досок
  //return response.data;
  return boardsData;
});

//возвращает доску по ее id
export const fetchBoard = createAsyncThunk(
  'boards/fetchBoard',
  async (boardId: string | undefined) => {
    //Тут нужно вызвать axios get запрос для получения всех досок
    //return response.data;
    return boardsData.find((board) => board.id === Number(boardId));
  }
);
