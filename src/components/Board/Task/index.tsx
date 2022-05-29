import React, { useState } from 'react';
import { TaskItem } from '../../../types/Entities/Task';
import cl from './task.module.scss';
import { useDrag, useDrop } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { deleteTask } from '../../../store/reducers/actionCreators';
import UpdateTaskForm from '../../UpdateTaskForm';

type TaskProps = {
  task: TaskItem;
  changeTaskColumn: (item: unknown) => void;
};

export const Task: React.FC<TaskProps> = ({ task, changeTaskColumn }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  const userName = users.find((user) => user.id === task.userId);

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
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleOpenModal = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleConfirm = async (task: TaskItem) => {
    await dispatch(deleteTask(task));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpenTask = () => {
    setShowTaskModal(true);
  };

  const handleCloseTask = () => {
    setShowTaskModal(false);
  };

  return (
    <div ref={dropTask} className={`${cl.task} ${isOverOnTask ? cl.task__over : ''}`}>
      <div
        onClick={handleOpenTask}
        ref={drag}
        className={`${cl.task__inner}
        ${isDragging ? cl.task__dragging : ''}`}
      >
        <h3 className={cl.task__title}>
          {task.title}
          <span className={cl.task__owner}>{userName?.name[0]}</span>
        </h3>
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

      <UpdateTaskForm task={task} onClose={handleCloseTask} show={showTaskModal} />
    </div>
  );
};
