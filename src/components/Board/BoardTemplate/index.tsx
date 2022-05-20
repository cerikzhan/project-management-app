import React from 'react';
import { Column } from '../Column';
import { useAppSelector } from '../../../hooks/redux';
import cl from './board.module.scss';

export const BoardTemplate: React.FC = () => {
  const { board } = useAppSelector((state) => state);

  const { item, error } = board;
  if (!item.columns || !item.columns.length) {
    return <div>No columns</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={cl.board}>
      {item.columns.map((column) => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  );
};
