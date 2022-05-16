import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import cl from './confirmation.module.scss';

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

const Confirmation: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Delete?</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <button>Yes</button>
          <button>No</button>
        </form>
      </Modal>
    </>
  );
};

export default Confirmation;
