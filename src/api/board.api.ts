import request from './request';
import { Board, BoardItem } from '../types/Entities/Board';
import { TaskItem } from '../types/Entities/Task';

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

//обнавить column у Task
export const changeTask = async ({
  task,
  newColumnId,
}: {
  task: TaskItem;
  newColumnId: string;
}) => {
  const data = {
    title: task.title,
    order: task.order,
    description: task.description,
    done: task.done,
    userId: task.userId,
    boardId: task.boardId,
    columnId: newColumnId,
  };
  await request.put(`/boards/${task.boardId}/columns/${task.columnId}/tasks/${task.id}`, data);

  return await getSingleBoard(task.boardId || '');
};

//удаляет доску по ее id
export const removeBoard = async (boardId: string) => {
  await request.delete(`/boards/${boardId}`);
  const response = await request.get<Board[]>('/boards');
  return response.data;
};
