import React from 'react';
import { TaskItem } from '../../../types/Entities/Task';
import cl from './task.module.scss';
import { useDrag } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';

type TaskProps = {
  task: TaskItem;
};

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_DRAG,
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`${cl.task} ${isDragging ? cl.task__dragging : ''}`}>
      <h3 className={cl.task__title}>{task.title}</h3>
      <p className={cl.task__description}>{task.description}</p>
    </div>
  );
};
