import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

type ConfirmationProps = {
  header: string;
  text: string;
  onChange: (val: boolean) => void;
  onClose: (val: boolean) => void;
  show: boolean;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Confirmation = (props: ConfirmationProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  /*const openModal = () => {
    setIsOpen(true);
  }; */

  useEffect(() => {
    if (props.show) {
      setIsOpen(true);
    }
  }, [props.show]);

  const closeModal = () => {
    setIsOpen(false);
    props.onClose(false);
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
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{props.header}</h2>
        <button onClick={closeModal}>close</button>
        <p>{props.text}</p>
        <form>
          <button onClick={() => props.onChange(true)}>Yes</button>
          <button onClick={closeModal}>No</button>
        </form>
      </Modal>
    </>
  );
};

export default Confirmation;
