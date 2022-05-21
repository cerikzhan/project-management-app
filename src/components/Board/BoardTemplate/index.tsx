import React from 'react';
import { ColumnBoard } from '../Column';
import { useAppSelector } from '../../../hooks/redux';
import cl from './board.module.scss';
import { Task } from '../Task';

export const BoardTemplate: React.FC = () => {
  const { board } = useAppSelector((state) => state);

  const { item: boardItem, error } = board;
  if (!boardItem.columns || !boardItem.columns.length) {
    return <div>No columns</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const boardColumns = [...boardItem.columns].sort((a, b) => a.order - b.order);

  return (
    <div className={cl.board}>
      {boardColumns.map((column) => (
        <ColumnBoard column={column} key={column.id}>
          {column.tasks.map((item) => (
            <Task task={{ ...item, boardId: boardItem.id, columnId: column.id }} key={item.id} />
          ))}
        </ColumnBoard>
      ))}
    </div>
  );
};
