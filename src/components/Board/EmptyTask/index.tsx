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

      let lastOrder = taskOrders[0];
      const taskCount = column.tasks.length;

      if (task.columnId === column.id) {
        lastOrder = taskCount;
      } else {
        lastOrder += 1;
      }

      const sameTaskOrder = task.columnId === column.id && task.order === lastOrder;

      const data = { task, columnId: column.id, order: lastOrder || 1 };

      changeTaskColumn(sameTaskOrder ? null : data);
    },
    collect: (monitor) => ({
      isOverOnTask: monitor.isOver(),
    }),
  }));

  return <div ref={dropTask} style={isOverOnTask ? overStyle : style} />;
};
