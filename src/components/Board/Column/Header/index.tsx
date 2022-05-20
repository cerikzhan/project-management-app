import React, { useState } from 'react';
import cl from './header.module.scss';
import { useTranslation } from 'react-i18next';

type ColumnHeaderProps = {
  edit: boolean;
  header: string;
  onConfirm: (val: string) => void;
};

export const ColumnHeader: React.FC<ColumnHeaderProps> = (props: ColumnHeaderProps) => {
  const [columnHeader, setcolumnHeader] = useState(props.header);
  const handleConfirm = () => {
    props.onConfirm(columnHeader);
  };
  const handleAbort = () => {
    //props.onConfirm(props.header);
  };
  const handleChange = (changedHeader: string) => {
    setcolumnHeader(changedHeader);
  };

  return (
    <>
      {props.edit ? (
        <>
          <div className="button-mini fa fa-times" title="Cancel" onClick={handleAbort} />
          <div className="button-mini fa fa-check" title="Apply" onClick={handleConfirm} />
          <input
            className="column__header"
            value={columnHeader}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          />
        </>
      ) : (
        <h2 className={cl.column__title}>{props.header}</h2>
      )}
    </>
  );
};
