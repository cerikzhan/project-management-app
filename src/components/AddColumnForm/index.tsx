import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './../Confirmation/confirmation.module.scss';
import fm from './../Form/form.module.scss';
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
      className="modal"
      overlayClassName={cl.modal__overlay}
    >
      <button onClick={closeModal} className={cl.modal__close}>
        x
      </button>
      <form onSubmit={handleSubmit} className={`${fm.form} ${fm['form-little']}`}>
        <h2 className="modal-header">{t('column.new_column')}</h2>
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
        <div className="modal-row">
          <input className="btn green-button stretched" type="submit" value={t('board.create')} />
          <button className="btn color-button stretched" onClick={closeModal}>
            {t('user.abort')}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddColumnForm;
