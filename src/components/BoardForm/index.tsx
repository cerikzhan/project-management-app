import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './boardForm.module.scss';

type FormProps = {
  header: string;
  title: string;
  description?: string;
  setTitle: (title: string) => void;
  setDescription?: (description: string) => void;
  onForm: () => void;
  onClose: () => void;
  show: boolean;
};

const BoardForm: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onForm();
    props.setTitle('');
    props.setDescription ? props.setDescription('') : null;
    props.onClose();
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  useEffect(() => {
    Modal.setAppElement('.container');
  });

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
          <legend className={cl.boardForm__legend}>{props.header}</legend>
          <label className={cl.boardForm__label}>
            {t('board.board_title')}
            <input
              required
              className={cl.boardForm__input}
              type="text"
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </label>
          {typeof props.description !== 'undefined' ? (
            <label className={cl.boardForm__label}>
              {t('board.board_description')}
              <textarea
                required
                rows={5}
                maxLength={300}
                className={cl.boardForm__textarea}
                value={props.description}
                onChange={(e) =>
                  props.setDescription ? props.setDescription(e.target.value) : null
                }
              />
            </label>
          ) : null}
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

export default BoardForm;
