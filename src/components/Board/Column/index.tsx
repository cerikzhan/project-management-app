import React from 'react';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';
import { useDrop } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';
import { TaskItem } from '../../../types/Entities/Task';

type ColumnProps = {
  column: ColumnItem;
  onDropTask: (task: TaskItem, columnId: string) => void;
  children: React.ReactNode[];
};

export const Column: React.FC<ColumnProps> = ({ column, onDropTask, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: TASK_DRAG,
    drop: (item) => changeColumnOrder(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const changeColumnOrder = (item: unknown) => {
    const { task } = item as { task: TaskItem };
    onDropTask(task, column.id);
  };

  return (
    <div ref={drop} className={cl.column}>
      <div className={`${cl.column__inner} ${isOver ? cl.column__over : ''}`}>
        <div className={cl.column__header}>
          <h2 className={cl.column__title}>{column.title}</h2>
          <button className={cl.column__add_task} title="Add task">
            +
          </button>
        </div>
        {!column.tasks.length && <div>No tasks</div>}
        {children}
      </div>
    </div>
  );
};
