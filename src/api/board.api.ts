import request from './request';
import { Board, BoardItem } from '../types/Entities/Board';

//возвращает массив досок
export const getAllBoards = async () => {
  const response = await request.get<Board[]>('/boards');
  const boardsList = await response.data;
  const boards = Promise.all(
    boardsList.map(async (item) => await Promise.resolve(getSingleBoard(item.id)))
  );
  return boards;
};

//возвращает доску по ее id
export const getSingleBoard = async (boardId: string) => {
  const response = await request.get<BoardItem>(`/boards/${boardId}`);
  return response.data;
};

//удаляет доску по ее id
export const removeBoard = async (boardId: string) => {
  await request.delete(`/boards/${boardId}`);
  const boards = await getAllBoards();
  return boards;
};

//create new board
export const createNewBoard = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const response = await request.post<BoardItem>('/boards', { title, description });

  return response.data;
};

// create new column
export const createNewColumn = async ({ title, boardId }: { title: string; boardId: string }) => {
  const response = await request.post<BoardItem>(`/boards/${boardId}/columns`, { title });

  return response.data;
};
