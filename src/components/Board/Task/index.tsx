import React, { useState } from 'react';
import { TaskItem } from '../../../types/Entities/Task';
import cl from './task.module.scss';
import { useDrag } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch } from '../../../hooks/redux';

type TaskProps = {
  task: TaskItem;
};

export const Task: React.FC<TaskProps> = ({ task }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_DRAG,
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = async () => {
    setShowModal(true);
  };

  const handleConfirm = async (task: TaskItem) => {
    //await dispatch(deleteTask({ boardId, columnId, taskId }));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div ref={drag} className={`${cl.task} ${isDragging ? cl.task__dragging : ''}`}>
      <h3 className={cl.task__title}>{task.title}</h3>
      <p className={cl.task__description}>{task.description}</p>
      <div
        className="button-mini fa fa-trash-o"
        title={t('column.delete')}
        onClick={handleOpenModal}
      />
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
