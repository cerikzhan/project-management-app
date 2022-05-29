import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './../Confirmation/confirmation.module.scss';
import fm from './../Form/form.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateTaskColumn } from '../../store/reducers/actionCreators';
import { TaskItem } from '../../types/Entities/Task';

type FormProps = {
  task: TaskItem;
  onClose: () => void;
  show: boolean;
};

const UpdateTaskForm: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>(props.task.title);
  const [description, setDescription] = useState<string>(props.task.description);
  const [contributor, setContributor] = useState<string>(props.task.userId || '');
  const { users } = useAppSelector((state) => state.user);
  const [isChange, setIsChange] = useState(true);

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!props.task.boardId || !props.task.columnId) {
      return;
    }
    await dispatch(
      updateTaskColumn({
        task: {
          ...props.task,
          title: title,
          description,
          userId: contributor || props.task.userId,
        },
        newColumnId: props.task.columnId,
      })
    );
    props.onClose();
  };

  useEffect(() => {
    setIsChange(
      title === props.task.title &&
        description === props.task.description &&
        contributor === props.task.userId
    );
  }, [title, description, contributor]);

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
        <h2 className="modal-header">{t('task.task_change')}</h2>
        <label className={fm.form__label}>
          {t('board.board_title')}
          <input
            required
            className={fm.form__input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={13}
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
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id} className={fm.form__option}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </label>
        <div className="modal-row">
          <input
            disabled={isChange}
            className="btn green-button stretched"
            type="submit"
            value={t('task.change_button')}
          />
          <button className="btn color-button stretched" onClick={closeModal}>
            {t('user.abort')}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateTaskForm;
