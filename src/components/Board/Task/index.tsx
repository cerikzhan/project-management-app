import React, { useState } from 'react';
import { TaskItem } from '../../../types/Entities/Task';
import cl from './task.module.scss';
import { useDrag, useDrop } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch } from '../../../hooks/redux';
import { deleteTask } from '../../../store/reducers/actionCreators';

type TaskProps = {
  task: TaskItem;
  changeTaskColumn: (item: unknown) => void;
};

export const Task: React.FC<TaskProps> = ({ task, changeTaskColumn }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_DRAG,
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOverOnTask }, dropTask] = useDrop(() => ({
    accept: TASK_DRAG,
    drop: (item) => {
      const { task: droppedTask } = item as { task: TaskItem };
      const data = { task: droppedTask, columnId: task.columnId, order: task.order };
      changeTaskColumn(droppedTask.id === task.id ? null : data);
    },
    collect: (monitor) => ({
      isOverOnTask: monitor.isOver(),
    }),
  }));

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = async () => {
    setShowModal(true);
  };

  const handleConfirm = async (task: TaskItem) => {
    await dispatch(deleteTask(task));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div ref={drag} className={`${cl.task} ${isDragging ? cl.task__dragging : ''}`}>
      <div ref={dropTask} className={`${cl.task__inner} ${isOverOnTask ? cl.task__over : ''}`}>
        <h3 className={cl.task__title}>{task.title}</h3>
        <p className={cl.task__description}>{task.description}</p>
        <div
          className={`${cl.task__emerging} button-mini emerging fa fa-trash-o`}
          title={t('task.delete')}
          onClick={handleOpenModal}
        />
      </div>

      <Confirmation
        header={t('task.delete')}
        text={`${t('task.delete_text')} ${task.title}?`}
        show={showModal}
        onConfirm={() => handleConfirm(task)}
        onClose={handleClose}
      />
    </div>
  );
};
