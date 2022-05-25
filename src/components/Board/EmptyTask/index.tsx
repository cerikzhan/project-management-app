import React from 'react';
import { ColumnItem } from '../../../types/Entities/Column';
import { useDrop } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';
import { TaskItem } from '../../../types/Entities/Task';

type EmptyTaskProps = {
  column: ColumnItem;
  changeTaskColumn: (item: unknown) => void;
};

const style = {
  width: '100%',
  height: '100%',
};

const overStyle = {
  ...style,
  background: 'blue',
};

export const EmptyTask: React.FC<EmptyTaskProps> = ({ column, changeTaskColumn }) => {
  const [{ isOverOnTask }, dropTask] = useDrop(() => ({
    accept: TASK_DRAG,
    drop: (item) => {
      const { task } = item as { task: TaskItem };
      const taskOrders = column.tasks
        .map((t) => t.order)
        .sort((a, b) => a - b)
        .reverse();

      const sameTaskOrder = task.columnId === column.id && task.order === taskOrders[0];

      const data = { task, columnId: column.id, order: taskOrders[0] + 1 };

      changeTaskColumn(sameTaskOrder ? null : data);
    },
    collect: (monitor) => ({
      isOverOnTask: monitor.isOver(),
    }),
  }));

  return <div ref={dropTask} style={isOverOnTask ? overStyle : style} />;
};
