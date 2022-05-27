import React, { useState } from 'react';
import { ColumnItem } from '../../../types/Entities/Column';
import cl from './column.module.scss';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../Confirmation';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  deleteColumn,
  updateColumn,
  updateTaskColumn,
} from '../../../store/reducers/actionCreators';
import { ColumnHeader } from './Header';
import { useDrag, useDrop } from 'react-dnd';
import { COLUMN_DRAG, TASK_DRAG } from '../../../types/Constants/drag-types';
import { TaskItem } from '../../../types/Entities/Task';
import AddTaskForm from '../../AddTaskForm/index';

type ColumnProps = {
  column: ColumnItem;
  children: React.ReactNode[];
};

export const ColumnBoard: React.FC<ColumnProps> = ({ column, children }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { item: boardItem } = useAppSelector((state) => state.board);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleOpenDeleteColumnModal = async () => {
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

  const [{ isDragging }, dragColumn] = useDrag(() => ({
    type: COLUMN_DRAG,
    item: { column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOverOnColumn }, dropColumn] = useDrop(() => ({
    accept: COLUMN_DRAG,
    drop: (item) => changeColumnOrder(item),
    collect: (monitor) => ({
      isOverOnColumn: monitor.isOver(),
    }),
  }));

  const changeColumnOrder = async (col: unknown) => {
    const { column: columnItem } = col as { column: ColumnItem };
    if (columnItem.id === column.id) return;

    await dispatch(
      updateColumn({
        boardId: boardItem.id,
        columnId: columnItem.id,
        putColumn: {
          order: column.order,
          title: columnItem.title,
        },
      })
    );
  };

  const handleOpenTaskModal = async () => {
    setShowTaskModal(true);
  };

  const handleTaskClose = () => {
    setShowTaskModal(false);
  };

  return (
    <div ref={dropColumn} className={`${cl.column} ${isOverOnColumn ? cl.column_over : ''}`}>
      <div
        ref={dragColumn}
        className={`${cl.column__inner} ${isDragging ? cl.column__dragging : ''}`}
      >
        <div className={cl.column__header}>
          <ColumnHeader
            header={column.title}
            onConfirm={confirmHeader}
            addTask={handleOpenTaskModal}
            deleteColumn={handleOpenDeleteColumnModal}
          />
        </div>

        {!column.tasks.length && <div>No tasks</div>}

        <div className={cl.column__body}>{children}</div>
      </div>

      <Confirmation
        header={t('column.delete')}
        text={`${t('column.delete_text')} ${column.title}?`}
        show={showModal}
        onConfirm={() => handleConfirm(boardItem.id, column.id)}
        onClose={handleClose}
      />
      <AddTaskForm
        onClose={handleTaskClose}
        show={showTaskModal}
        boardId={boardItem.id}
        columnId={column.id}
      />
    </div>
  );
};
