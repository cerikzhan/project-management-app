import React, { useState } from 'react';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { deleteColumn, updateColumn, updateTask } from '../../../store/reducers/actionCreators';
import { ColumnHeader } from './Header';
import { useDrop } from 'react-dnd';
import { TASK_DRAG } from '../../../types/Constants/drag-types';
import { TaskItem } from '../../../types/Entities/Task';

type ColumnProps = {
  column: ColumnItem;
  children: React.ReactNode[];
};

export const ColumnBoard: React.FC<ColumnProps> = ({ column, children }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { item: boardItem } = useAppSelector((state) => state.board);

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
    const { order } = column;
    await dispatch(
      updateColumn({
        boardId: boardItem.id,
        columnId: column.id,
        putColumn: { order, title: val },
      })
    );
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: TASK_DRAG,
    drop: (item) => changeTaskColumn(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const changeTaskColumn = (item: unknown) => {
    const { task } = item as { task: TaskItem };
    dispatch(updateTask({ task, newColumnId: column.id }));
  };

  return (
    <div className={cl.column} ref={drop}>
      <div className={`${cl.column__inner} ${isOver ? cl.column__over : ''}`}>
        <div className={cl.column__header}>
          <ColumnHeader header={column.title} onConfirm={confirmHeader} />
          <div className="button-mini fa fa-plus-square-o" title="Add task" />
          <div
            className="button-mini fa fa-trash-o"
            title={t('column.delete')}
            onClick={handleOpenModal}
          />
        </div>

        {!column.tasks.length && <div>No tasks</div>}

        {children}
      </div>

      <Confirmation
        header={t('column.delete')}
        text={`${t('column.delete_text')} ${column.title}?`}
        show={showModal}
        onConfirm={() => handleConfirm(boardItem.id, column.id)}
        onClose={handleClose}
      />
    </div>
  );
};
