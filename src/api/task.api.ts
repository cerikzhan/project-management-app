import request from './request';
import { TaskItem } from '../types/Entities/Task';
import { getSingleBoard } from './board.api';

export const changeTaskColumn = async ({
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
    userId: task.userId,
    boardId: task.boardId,
    columnId: newColumnId,
  };
  await request.put(`/boards/${task.boardId}/columns/${task.columnId}/tasks/${task.id}`, data);

  return await getSingleBoard(task.boardId || '');
};

export const removeTask = async (taskData: TaskItem) => {
  await request.delete(
    `/boards/${taskData.boardId}/columns/${taskData.columnId}/tasks/${taskData.id}`
  );
  const response = await request.get(`/boards/${taskData.boardId}`);
  return response.data;
};

// create new task
export const createNewTask = async ({
  boardId,
  columnId,
  title,
  description,
  userId,
}: {
  boardId: string;
  columnId: string;
  title: string;
  description: string;
  userId: string;
}) => {
  const url = `/boards/${boardId}/columns/${columnId}/tasks`;
  const response = await request.post(url, { title, description, userId });

  return response.data;
};
