import request from './request';
import { Board, BoardItem } from '../types/Entities/Board';

//возвращает массив досок
export const getAllBoards = async () => {
  const response = await request.get<Board[]>('/boards');
  return response.data;
};

//возвращает доску по ее id
export const getSingleBoard = async (boardId: string) => {
  const response = await request.get<BoardItem>(`/boards/${boardId}`);
  return response.data;
};

//удаляет доску по ее id
export const removeBoard = async (boardId: string) => {
  await request.delete(`/boards/${boardId}`);
  const response = await request.get<Board[]>('/boards');
  return response.data;
};
