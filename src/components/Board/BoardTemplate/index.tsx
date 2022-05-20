import React from 'react';
import { Column } from '../Column';
import { useAppSelector } from '../../../hooks/redux';
import cl from './board.module.scss';
import Spinner from './../../Spinner';

export const BoardTemplate: React.FC = () => {
  const { board } = useAppSelector((state) => state);

  const { item, error } = board;

  if (error) {
    return <div>{error}</div>;
  }

  if (!item?.columns.length) {
    return <div>No columns</div>;
  }

  return (
    <Spinner>
      <div className={cl.board}>
        {item.columns.map((column) => (
          <Column column={column} key={column.id} />
        ))}
      </div>
    </Spinner>
  );
};
