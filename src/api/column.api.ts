import request from './request';
import { Column } from '../types/Entities/Column';

export const removeColumn = async (columnData: { boardId: string; columnId: string }) => {
  await request.delete(`/boards/${columnData.boardId}/columns/${columnData.columnId}`);
  const response = await request.get<Column[]>(`/boards/${columnData.boardId}`);
  return response.data;
};

export const putColumn = async (columnData: {
  boardId: string;
  columnId: string;
  putColumn: { order: number; title: string };
}) => {
  await request.put(
    `/boards/${columnData.boardId}/columns/${columnData.columnId}`,
    columnData.putColumn
  );
  const response = await request.get<Column[]>(`/boards/${columnData.boardId}`);
  return response.data;
};
