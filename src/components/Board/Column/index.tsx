import React, { useState } from 'react';
import { Task } from '../Task';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { deleteColumn } from '../../../store/reducers/actionCreators';

type ColumnProps = {
  column: ColumnItem;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { item } = useAppSelector((state) => state.board);
  const handleOpenModal = async () => {
    setShowModal(true);
  };
  const handleConfirm = async (boardId: string, columnId: string) => {
    await dispatch(deleteColumn({ boardId, columnId }));
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={cl.column}>
      <div className={cl.column__header}>
        <h2 className={cl.column__title}>{column.title}</h2>
        <div className="button-mini fa fa-plus-square-o" title="Add task" />
        <div
          className="button-mini fa fa-trash-o"
          title={t('column.delete')}
          onClick={handleOpenModal}
        />
      </div>
      {column.tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
      <Confirmation
        header={t('column.delete')}
        text={`${t('column.delete_text')} ${column.title}?`}
        show={showModal}
        onConfirm={() => handleConfirm(item.id, column.id)}
        onClose={handleClose}
      />
    </div>
  );
};
