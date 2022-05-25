import React from 'react';
import { ColumnBoard } from '../Column';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import cl from './board.module.scss';
import { Task } from '../Task';
import { TaskItem } from '../../../types/Entities/Task';
import { updateTaskColumn } from '../../../store/reducers/actionCreators';
import { EmptyTask } from '../EmptyTask';

export const BoardTemplate: React.FC = () => {
  const { item: boardItem } = useAppSelector((state) => state.board);

  const dispatch = useAppDispatch();

  const changeTaskColumn = (payload?: unknown) => {
    if (!payload) return;
    const { task, columnId, order } = payload as {
      task: TaskItem;
      columnId: string;
      order: number;
    };
    dispatch(updateTaskColumn({ task: { ...task, order }, newColumnId: columnId }));
  };

  if (!boardItem || !boardItem.columns || !boardItem.columns.length) {
    return <div>No columns</div>;
  }

  const boardColumns = [...boardItem.columns].sort((a, b) => a.order - b.order);

  return (
    <div className={cl.board}>
      {boardColumns.map((column, index) => (
        <ColumnBoard column={column} key={column.id}>
          {[...column.tasks]
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <Task
                task={{ ...item, boardId: boardItem.id, columnId: column.id }}
                key={item.id}
                changeTaskColumn={changeTaskColumn}
              />
            ))}

          <EmptyTask column={column} key={index} changeTaskColumn={changeTaskColumn} />
        </ColumnBoard>
      ))}
    </div>
  );
};
