import React from 'react';
import { Task } from '../Task';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';

type ColumnProps = {
  column: ColumnItem;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
  if (!column.tasks.length) return <div>No tasks</div>;

  return (
    <div className={cl.column}>
      <div className={cl.column__header}>
        <h2 className={cl.column__title}>{column.title}</h2>
        <button className={cl.column__add_task} title="Add task">
          +
        </button>
      </div>
      {column.tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};
