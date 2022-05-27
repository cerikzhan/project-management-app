import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './../Confirmation/confirmation.module.scss';
import fm from './../Form/form.module.scss';
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

  useEffect(() => {
    Modal.setAppElement('.container');
  });

  useEffect(() => {
    if (currentId) {
      navigate(`/boards/${currentId}`);
    }
  }, [currentId]);

  return (
    <>
      <Modal
        isOpen={props.show}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName={cl.modal__overlay}
      >
        <button onClick={closeModal} className={cl.modal__close}>
          x
        </button>
        <form onSubmit={handleSubmit} className={`${fm.form} ${fm['form-little']}`}>
          <h2 className="modal-header">{t('menu.new_board')}</h2>
          <label className={fm.form__label}>
            {t('board.board_title')}
            <input
              required
              className={fm.form__input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className={fm.form__label}>
            {t('board.board_description')}
            <textarea
              required
              rows={5}
              maxLength={300}
              className={fm.form__input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="modal-row">
            <input className="btn green-button stretched" type="submit" value={t('board.create')} />
            <button className="btn color-button stretched" onClick={closeModal}>
              {t('user.abort')}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddBoardForm;
