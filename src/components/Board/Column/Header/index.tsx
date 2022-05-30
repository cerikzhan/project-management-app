import React, { useState } from 'react';
import cl from './header.module.scss';
import { useTranslation } from 'react-i18next';

type ColumnHeaderProps = {
  header: string;
  onConfirm: (val: string) => void;
  addTask: () => void;
  deleteColumn: () => void;
};

export const ColumnHeader: React.FC<ColumnHeaderProps> = (props: ColumnHeaderProps) => {
  const { t } = useTranslation();
  const [columnHeader, setColumnHeader] = useState(props.header);
  const [edit, setEdit] = useState(false);
  const handleConfirm = () => {
    props.onConfirm(columnHeader);
    setEdit(false);
  };
  const handleAbort = () => {
    setEdit(false);
  };
  const handleChange = (changedHeader: string) => {
    setColumnHeader(changedHeader);
  };

  return (
    <>
      {edit ? (
        <>
          <input
            className={cl.column__header__input}
            value={columnHeader}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          />
          <div className={cl.column__header__buttons}>
            <div
              className={`${cl['column__header__buttons-mini']} fa fa-floppy-o`}
              title={t('user.apply')}
              onClick={handleConfirm}
            />
            <div
              className={`${cl['column__header__buttons-mini']} fa fa-undo`}
              title={t('user.abort')}
              onClick={handleAbort}
            />
          </div>
        </>
      ) : (
        <>
          <h2 className={cl.column__header__title} onClick={() => setEdit(true)}>
            {props.header}
          </h2>
          <div
            onClick={props.addTask}
            className="button-mini fa fa-plus-square-o"
            title={t('task.task_add')}
          />
          <div
            className="button-mini fa fa-trash-o"
            title={t('column.delete')}
            onClick={props.deleteColumn}
          />
        </>
      )}
    </>
  );
};
