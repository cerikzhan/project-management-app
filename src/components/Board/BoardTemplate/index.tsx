import React from 'react';
import { ColumnBoard } from '../Column';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import cl from './board.module.scss';
import { Task } from '../Task';
import { TaskItem } from '../../../types/Entities/Task';
import { updateTask } from '../../../store/reducers/actionCreators';

export const BoardTemplate: React.FC = () => {
  const { board } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { item: boardItem, error } = board;
  if (!boardItem.columns || !boardItem.columns.length) {
    return <div>No columns</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const boardColumns = [...boardItem.columns].sort((a, b) => a.order - b.order);

  const handleOnTaskDrop = (task: TaskItem, columnId: string) => {
    dispatch(updateTask({ task, newColumnId: columnId }));
  };

  return (
    <div className={cl.board}>
      {boardColumns.map((column) => (
        <ColumnBoard column={column} key={column.id} onDropTask={handleOnTaskDrop}>
          {column.tasks.map((item) => (
            <Task task={{ ...item, boardId: boardItem.id, columnId: column.id }} key={item.id} />
          ))}
        </ColumnBoard>
      ))}
    </div>
  );
};
