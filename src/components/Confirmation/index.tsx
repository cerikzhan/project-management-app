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

  useEffect(() => {
    Modal.setAppElement('.container');
  });

  return (
    <>
      <Modal
        isOpen={props.show}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
        overlayClassName={cl.modal__overlay}
      >
        <h2 className="modal-header">{props.header}</h2>
        <button onClick={closeModal} className={cl.modal__close}>
          x
        </button>
        <p>{props.text}</p>
        <div className="modal-row">
          <button className="btn green-button stretched" onClick={clickConfirm}>
            {t('user.confirm')}
          </button>
          <button className="btn color-button stretched" onClick={closeModal}>
            {t('user.abort')}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Confirmation;
