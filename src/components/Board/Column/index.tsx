import React, { useState } from 'react';
import { Task } from '../Task';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { deleteColumn, updateColumn } from '../../../store/reducers/actionCreators';
import { ColumnHeader } from './Header';
import { Column } from '../../../types/Entities/Column';

type ColumnProps = {
  column: ColumnItem;
};

export const ColumnBoard: React.FC<ColumnProps> = ({ column }) => {
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
  const confirmHeader = async (val: string) => {
    //Обновить заголовок колонки
    const { order } = column;
    await dispatch(
      updateColumn({
        boardId: item.id,
        columnId: column.id,
        putColumn: { order, title: val },
      })
    );
    console.log('new header ', val);
  };

  return (
    <div className={cl.column}>
      <div className={cl.column__header}>
        <ColumnHeader header={column.title} onConfirm={confirmHeader} />
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
