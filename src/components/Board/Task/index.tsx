import React from 'react';
import { Task as TaskItem } from '../../../types/Entities/Task';
import cl from './task.module.scss';

type TaskProps = {
  task: TaskItem;
};

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className={cl.task}>
      <h3 className={cl.task__title}>{task.title}</h3>
      <p className={cl.task__description}>{task.description}</p>
    </div>
  );
};
