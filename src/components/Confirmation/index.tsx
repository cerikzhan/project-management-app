import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import cl from './confirmation.module.scss';

type ConfirmationProps = {
  header: string;
  text: string;
  onConfirm: () => void;
  onClose: () => void;
  show: boolean;
};

const Confirmation = (props: ConfirmationProps) => {
  const { t } = useTranslation();

  const closeModal = () => {
    props.onClose();
  };

  const clickConfirm = () => {
    props.onConfirm();
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
        className={cl.modal}
        contentLabel="Example Modal"
        overlayClassName={cl.modal__overlay}
      >
        <h2 className={cl.modal__header}>{props.header}</h2>
        <button onClick={closeModal} className={cl.modal__close}>
          x
        </button>
        <p>{props.text}</p>
        <div className={cl.modal__row}>
          <button className={cl.modal__button} onClick={clickConfirm}>
            {t('user.confirm')}
          </button>
          <button className={cl.modal__button} onClick={closeModal}>
            {t('user.abort')}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Confirmation;
