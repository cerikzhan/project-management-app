import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './../Confirmation/confirmation.module.scss';
import fm from './../Form/form.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addNewTask, fetchSingleBoard } from '../../store/reducers/actionCreators';

type FormProps = {
  onClose: () => void;
  show: boolean;
  boardId: string | undefined;
  columnId: string;
};

const AddTaskForm: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { users, user } = useAppSelector((state) => state.user);
  const [contributor, setContributor] = useState<string>(user.id);

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!props.boardId) {
      return;
    }
    await dispatch(
      addNewTask({
        boardId: props.boardId,
        columnId: props.columnId,
        title,
        description,
        userId: contributor,
      })
    );
    await dispatch(fetchSingleBoard(props.boardId));
    setTitle('');
    props.onClose();
  };

  useEffect(() => {
    Modal.setAppElement('.container');
  });

  return (
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
        <h2 className="modal-header">{t('task.new_task')}</h2>
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
        <label className={fm.form__label}>
          {t('user.contributor')}
          <select
            className={fm.form__input}
            required
            onChange={(e) => setContributor(e.target.value)}
            value={contributor}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id} className={fm.form__option}>
                {user.name}
              </option>
            ))}
          </select>
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

export default AddTaskForm;
