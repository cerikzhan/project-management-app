import React, { useState } from 'react';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';
import { useDrop } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';

type ColumnProps = {
  column: ColumnItem;
  children: React.ReactNode[];
};

export const Column: React.FC<ColumnProps> = ({ column, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: TASK_DRAG,
    drop: (item) => changeColumnOrder(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const changeColumnOrder = (item: unknown) => {
    console.log(item);
    console.log(column.title);
  };

  if (!column.tasks.length) return <div>No tasks</div>;

  return (
    <div ref={drop} className={cl.column}>
      <div className={`${cl.column__inner} ${isOver ? cl.column__over : ''}`}>
        <div className={cl.column__header}>
          <h2 className={cl.column__title}>{column.title}</h2>
          <button className={cl.column__add_task} title="Add task">
            +
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
