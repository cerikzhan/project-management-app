import request from './request';
import { TaskItem } from '../types/Entities/Task';
import { getSingleBoard } from './board.api';

//обнавить column у Task
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
