import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './addBoardForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addNewBoard, fetchAllBoards } from '../../store/reducers/actionCreators';

type FormProps = {
  onClose: () => void;
  show: boolean;
};

const AddBoardForm: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentId } = useAppSelector((state) => state.board);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(addNewBoard({ title, description }));
    await dispatch(fetchAllBoards());
    setTitle('');
    setDescription('');
    props.onClose();
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  useEffect(() => {
    Modal.setAppElement('.container');
  });

  useEffect(() => {
    navigate(`/boards/${currentId}`);
  }, [currentId]);

  return (
    <>
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
          <legend className={cl.boardForm__legend}>{t('menu.new_board')}</legend>
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
          <label className={cl.boardForm__label}>
            {t('board.board_description')}
            <textarea
              required
              rows={5}
              maxLength={300}
              className={cl.boardForm__textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
    </>
  );
};

export default AddBoardForm;
