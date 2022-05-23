import request from './request';

export const changeColumn = async (columnData: {
  boardId: string;
  columnId: string;
  putColumn: { order: number; title: string };
}) => {
  await request.put(`/boards/${columnData.boardId}/columns/12`, columnData.putColumn);
  const response = await request.get(`/boards/${columnData.boardId}`);
  return response.data;
};

export const removeColumn = async (columnData: { boardId: string; columnId: string }) => {
  await request.delete(`/boards/${columnData.boardId}/columns/${columnData.columnId}`);
  const response = await request.get(`/boards/${columnData.boardId}`);
  return response.data;
};
