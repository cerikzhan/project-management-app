import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from '../AddBoardForm/addBoardForm.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { addNewColumns, fetchSingleBoard } from '../../store/reducers/actionCreators';

type FormProps = {
  onClose: () => void;
  show: boolean;
  boardId: string | undefined;
};

const AddColumnForm: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (props.boardId) {
      await dispatch(addNewColumns({ title, boardId: props.boardId }));
      await dispatch(fetchSingleBoard(props.boardId));
    }
    setTitle('');
    props.onClose();
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  useEffect(() => {
    Modal.setAppElement('.container');
  });

  return (
    <Modal
      isOpen={props.show}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={cl.boardForm}
      contentLabel="Example Modal"
      overlayClassName={cl.boardForm__overlay}
    >
      <button onClick={closeModal} className={cl.boardForm__close}>
        x
      </button>
      <form onSubmit={handleSubmit} className={cl.boardForm__container}>
        <legend className={cl.boardForm__legend}>{t('column.new_column')}</legend>
        <label className={cl.boardForm__label}>
          {t('board.board_title')}
          <input
            required
            className={cl.boardForm__input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <fieldset className={cl.boardForm__buttons}>
          <input className={cl.boardForm__button} type="submit" value={t('board.create')} />
          <button className={cl.boardForm__button} onClick={closeModal}>
            {t('user.abort')}
          </button>
        </fieldset>
      </form>
    </Modal>
  );
};

export default AddColumnForm;
