import React, { useEffect, useState } from 'react';
import cl from './boards.module.scss';
import './../../assets/library/toggle.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import loader from './../../assets/images/loader.gif';
import { RootState } from '../../store/store';
import { deleteBoard, getAllBoards } from '../../store/reducers/actionCreators';
import { useTranslation } from 'react-i18next';
import Confirmation from '../Confirmation';
import { Board } from '../../types/Entities/Board';

const Boards: React.FC = () => {
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [idBoard, setIdBoard] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);
  const { boards, loading } = useAppSelector((state: RootState) => state.boards);

  const handleOpenModal = async (item: Board) => {
    setHeader(t('board.delete'));
    setText(`${t('board.delete_text')} ${item.title}?`);
    setIdBoard(item.id);
    setShowModal(true);
  };

  const handleConfirm = () => {
    dispatch(deleteBoard(idBoard));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={cl.boards}>
      {loading ? (
        <img className="loader" src={loader} alt="Load results" />
      ) : boards.length > 0 ? (
        boards.map((item, i) => (
          <div className={cl.boards__item} key={item.id}>
            <h3>
              {i + 1}. {item.title}
            </h3>
            <button onClick={() => handleOpenModal(item)}>{t('user.delete')}</button>
          </div>
        ))
      ) : (
        <div className="message-box">{t('board.no_results')}</div>
      )}
      <Confirmation
        header={header}
        text={text}
        show={showModal}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </div>
  );
};

export default Boards;
